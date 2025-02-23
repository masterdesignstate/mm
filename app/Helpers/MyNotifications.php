<?php

namespace App\Helpers;

class MyNotifications
{
    public static function getAllNotifications()
    {
        if (auth()->user()?->profile) {

            $notifications = auth()->user()->profile->unreadNotifications;
            return $notifications;
        } else return null;

    }
}
