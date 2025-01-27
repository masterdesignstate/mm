<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up(): void
    {
        Schema::table('questions', function (Blueprint $table) {
            $table->dateTime('is_approved')->nullable();
            $table->boolean('is_mandatory')->default(false);
            $table->bigInteger('profile_id')->unsigned()->nullable();
            $table->integer('question_number')->unsigned()->nullable()->unique();
        });
    }

    public function down(): void
    {
        Schema::table('questions', function (Blueprint $table) {
            $table->dropColumn('is_approved')->nullable();
            $table->dropColumn('profile_id')->unsigned()->nullable();
            $table->dropColumn('is_mandatory')->default(false);
            $table->dropColumn('question_number')->unsigned()->nullable()->unique();
        });
    }
};
