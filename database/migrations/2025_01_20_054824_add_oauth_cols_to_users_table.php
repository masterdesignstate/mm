<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up(): void
    {
        Schema::table('users', function (Blueprint $table) {
            $table->char('oauth_id',30)->nullable();
            $table->text('oauth_avatar')->nullable();
            $table->text('oauth_token')->nullable();
            $table->text('oauth_platform')->nullable();
            $table->string('email')->nullable()->change();
            $table->string('password')->nullable()->change();

        });
    }

    public function down(): void
    {
        Schema::table('users', function (Blueprint $table) {
            $table->dropColumn('oauth_id');
            $table->dropColumn('oauth_avatar');
            $table->dropColumn('oauth_token');
            $table->dropColumn('oauth_platform');

        });
    }
};
