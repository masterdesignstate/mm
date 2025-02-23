<?php

namespace App\Events;

use AllowDynamicProperties;
use App\Models\ChatMessage;
use Illuminate\Broadcasting\Channel;
use Illuminate\Broadcasting\InteractsWithSockets;
use Illuminate\Contracts\Broadcasting\ShouldBroadcastNow;
use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Queue\SerializesModels;

class MessageSentEvent implements ShouldBroadcastNow
{
    use Dispatchable, InteractsWithSockets, SerializesModels;

    public $msg;
    public function __construct( ChatMessage $chatMessage )
    {
        $this->msg = $chatMessage;
    }

    public function broadcastOn(): array
    {
        return [
            new Channel('chat')
        ];
    }

    public function broadcastWith(): array
    {
        return ['message' => $this->msg];
    }

}
