<?php

namespace DaydreamLab\Cms\Services\Newsletter\Admin;

use Carbon\Carbon;
use DaydreamLab\Cms\Repositories\Newsletter\Admin\NewsletterAdminRepository;
use DaydreamLab\Cms\Services\Newsletter\NewsletterService;
use DaydreamLab\Dsth\Resources\Event\Admin\Collections\EventAdminSearchResourceCollection;
use DaydreamLab\JJAJ\Exceptions\ForbiddenException;
use Illuminate\Support\Collection;
use Illuminate\Support\Facades\Storage;
use TijsVerkoyen\CssToInlineStyles\CssToInlineStyles;

class NewsletterAdminService extends NewsletterService
{
    public function __construct(NewsletterAdminRepository $repo)
    {
        parent::__construct($repo);
        $this->repo = $repo;
    }


    public function addMapping($item, $input)
    {
        $item_ids = [];

        $promotions = $input->get('promotion') ? $input->get('promotion') : [];
        $promotion_ids = array_map(function($promotion) {
            return $promotion['id'];
        }, $promotions);
        $item_ids = array_merge($item_ids, $promotion_ids);

        $bulletins = $input->get('bulletin') ? $input->get('bulletin') : [];
        $bulletin_ids = array_map(function($bulletin) {
            return $bulletin['id'];
        }, $bulletins);
        $item_ids = array_merge($item_ids, $bulletin_ids);

        if (count($item_ids)) {
            $item->items()->attach($item_ids);
        }

        $events = $input->get('event') ? $input->get('event') : [];
        $event_ids = array_map(function($event) {
            return $event['id'];
        }, $events);
        $item->events()->attach($event_ids);
    }


    public function checkNumberExist(Collection $input)
    {
        $n = $this->repo->findByNumberAndCategory($input->get('number'), $input->get('newsletter_category_id'));
        if ( $n && ($n->id != $input->get('id')) ) {
            throw new ForbiddenException('StoreWithExistNumber', ['number' => $input->get('number')]);
        }
    }


    protected function generateInlineCssHtml($html)
    {
        $cssResources = [];
        $dom = new \DOMDocument();
        $dom->loadHTML($html);
        $link_tags = $dom->getElementsByTagName('link');
        /** @var \DOMElement $link */
        foreach ($link_tags as $link) {
            if ($link->getAttribute('rel') === 'stylesheet') {
                array_push($cssResources, $link->getAttribute('href'));
            }
        }
        $link_tags = $dom->getElementsByTagName('link');
        for ($i = $link_tags->length; --$i >= 0;) {
            $link = $link_tags->item($i);
            if ($link->getAttribute('rel') === 'stylesheet') {
                $link->parentNode->removeChild($link);
            }
        }
        $html = $dom->saveHTML();

        $css = '';
        foreach ($cssResources as $cssResource) {
            $css.= file_get_contents($cssResource);
        }

        $converter = new CssToInlineStyles();
        return $converter->convert($html, $css);
    }


    public function modifyMapping($item, $input)
    {
        $item_ids = [];
        if ( $input->get('promotion') !== null ) {
            $promotion_ids = array_map(function($promotion) {
                return $promotion['id'];
            }, $input->get('promotion'));
            $item_ids = array_merge($item_ids, $promotion_ids);
        }

        if ( $input->get('bulletin') !== null ) {
            $bulletin_ids = array_map(function($bulletin) {
                return $bulletin['id'];
            }, $input->get('bulletin'));
            $item_ids = array_merge($item_ids, $bulletin_ids);
        }

        $item->items()->sync($item_ids);

        if ( $input->get('event') !== null ) {
            $event_ids = array_map(function($event) {
                return $event['id'];
            }, $input->get('event'));
            $item->events()->sync($event_ids);
        }
    }


    public function publish(Collection $input)
    {
        $newsletter = $this->find($input->get('id'));
        # 製作電子報html
        $filePath = 'newsletter/';
        $category = ($newsletter->newsletterCategory->alias == '01_newsletter') ? 'z' : 'p';
        $filePath = $filePath . $category . '/' . $category . $newsletter->number . '.html';
        $viewFile = ($newsletter->newsletterCategory->alias == '01_newsletter') ? 'newsletter.01Newsletter' : 'newsletter.01DealNewsletter';

        $html = view($viewFile, [
            'title' => $newsletter->title,
            'number' => $newsletter->number,
            'publishDate' => Carbon::parse($newsletter->publish_up, config('app.timezone'))->tz('Asia/Taipei')->format('Y/m/d'),
            'image' => $newsletter->image,
            'description' => $newsletter->description,
            'params' => $newsletter->params,
            'url' => $newsletter->url,
            'information' => $newsletter->information,
            'bulletin' => $newsletter->bulletin,
            'promotion' => $newsletter->promotion,
            'event' => (new EventAdminSearchResourceCollection($newsletter->events, false))->toArray(null)
        ])->render();

        $inlineCssHtml = $this->generateInlineCssHtml($html);

        Storage::disk('media-public')->put($filePath, $inlineCssHtml);
        $this->status = 'GetItemSuccess';
        $this->response = ['url' => url('storage/media/'.$filePath)];
        return $this->response;
    }


    public function store(Collection $input)
    {
        $this->checkNumberExist($input);
        $result = parent::store($input);
        if ($input->has('id')) {
            $result = $this->find($input->get('id'));
        }
        $this->response = $result;

        return $this->response;
    }
}
