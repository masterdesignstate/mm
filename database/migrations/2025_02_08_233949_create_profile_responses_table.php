<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up(): void
    {
        Schema::create('profile_responses', function (Blueprint $table) {
            $table->id();
            $table->json('meta')->nullable();
            $table->json('tags')->nullable();
            $table->unsignedBigInteger('profile_id');
            $table->unsignedBigInteger('from_id');
            $table->string('response')->nullable();
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('profile_responses');
    }
};
