<?php

namespace DaydreamLab\Cms\Controllers\Rma;

use DaydreamLab\Cms\Requests\Rma\RmaSearchPost;
use DaydreamLab\JJAJ\Traits\ApiJsonResponse;
use Illuminate\Routing\Controller;
use SoapClient;
use Throwable;

class RmaController extends Controller
{
    use ApiJsonResponse;

    public function search(RmaSearchPost $request)
    {
        $input = $request->validated();
        $client = new SoapClient("http://webservice.zerone.com.tw/RMA/rmaWebservice.asmx?WSDL");

        $params = array(
            'srmano' => $input->get('id') ? : '',
            'semail' => $input->get('email') ? : '',
            'scode' => $input->get('phoneCode') ? : '',
            'stel' => $input->get('phoneNumber') ? : '',
            'sext' => $input->get('phoneExtension') ? : ''
        );

        $res = $client->__soapCall('checkProcess', ['parameters' => $params]);
        if ($res->checkProcessResult == '查無資料') {

        } else {
            $repairList = explode(',', $res->checkProcessResult);
            unset($repairList[0]); # test;test
            $response = [];
            foreach ($repairList as $repair) {
                $p = explode(';', $repair);
                print_r('編號：'.$p[0].'日期：'.$p[1]."\n");
                $detail = $client->__soapCall('checkDetail', ['parameters' => ['srmano' => $p[0]]]);
                print_r($detail->checkDetailResult."\n");
                if (strpos($detail->checkDetailResult, '@#') !== false) {
                    $detailList = explode('@#', $detail->checkDetailResult);
                    $formedData = [];
                    foreach ($detailList as $key => $item) {
                        switch ($key) {
                            case 0:
                                $formedData['date'] = $item;
                                break;
                            default:
                                break;
                        }
                    }
                    $response[] = $formedData;
                }
            }
        }

        return $this->response('GetListSuccess', $response);
    }

}
