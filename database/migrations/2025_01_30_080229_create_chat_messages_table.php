<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up(): void
    {
        Schema::create('chat_messages', function (Blueprint $table) {
            $table->id();
            $table->string('from_user_id')->nullable();
            $table->string('to_user_id')->nullable();
            $table->longText('message')->nullable();
            $table->string('message_type')->nullable();
            $table->json('meta')->nullable();
            $table->string('room_id')->nullable();
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('chat_messages');
    }
};
