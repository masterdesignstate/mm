<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up(): void
    {
        Schema::create('profiles', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('uname')->nullable();
            $table->date('date_of_birth')->nullable();
            $table->string('zip')->nullable();
            $table->string('gender')->nullable();
            $table->string('commitment')->nullable();
            $table->text('bio')->nullable();
            $table->string('tag_line')->nullable();
            $table->bigInteger('user_id')->unsigned()->nullable();
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('profiles');
    }
};
