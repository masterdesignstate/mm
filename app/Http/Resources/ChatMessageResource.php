<?php

namespace App\Http\Resources;

use App\Models\ChatMessage;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

/** @mixin ChatMessage */
class ChatMessageResource extends JsonResource
{
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'from_user_id' => $this->from_user_id,
            'to_user_id' => $this->to_user_id,
            'message' => $this->message,
            'meta' => $this->meta,
            'room_id' => $this->room_id,
            'created_at' => $this->created_at,
            'updated_at' => $this->updated_at,
        ];
    }
}
