<?php

namespace DaydreamLab\Cms\Services\IotResource\Front;

use DaydreamLab\Cms\Repositories\IotResource\Front\IotResourceFrontRepository;
use DaydreamLab\Cms\Services\IotResource\IotResourceService;
use DaydreamLab\JJAJ\Exceptions\InternalServerErrorException;
use DaydreamLab\JJAJ\Exceptions\NotFoundException;
use DaydreamLab\Media\Traits\Service\AzureBlob;
use Illuminate\Support\Collection;

class IotResourceFrontService extends IotResourceService
{
    use AzureBlob;

    protected $provider;


    public function __construct(IotResourceFrontRepository $repo)
    {
        parent::__construct($repo);
        $this->repo = $repo;
    }


    public function downloadFile(Collection $input)
    {
        $provider = config('daydreamlab.media.file.provider');
        if ($provider == 'azure') {
            $client = $this->getAzureClient();
            try {
                $blob = $client->getBlob($this->azureContainer, $input->get('blobName'));
            } catch (\Throwable $t) {
                if ($t->getCode() == 404) {
                    throw new NotFoundException('BlobNotFound', 404);
                } else {
                    throw new InternalServerErrorException('BlobError', 500);
                }
            }

            return $blob;
        }
    }

    public function getProvider()
    {
        if (!$this->provider) {
            $this->provider = config('daydreamlab.media.file.provider');
        }

        return $this->provider;
    }
}
