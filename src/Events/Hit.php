<?php

namespace DaydreamLab\Cms\Events;

use DaydreamLab\JJAJ\Models\BaseModel;
use Illuminate\Broadcasting\InteractsWithSockets;
use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Queue\SerializesModels;

class Hit
{
    use Dispatchable, InteractsWithSockets, SerializesModels;

    public $item;

    /**
     * Create a new event instance.
     *
     * @return void
     */
    public function __construct(BaseModel $item)
    {
        $this->item = $item;
    }
}
