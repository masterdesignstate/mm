<?php

use App\Models\User;
use Illuminate\Support\Facades\Broadcast;

Broadcast::channel('App.Models.User.{id}', function ($user, $id) {
    return (int) $user->id === (int) $id;
});


Broadcast::channel('chat', function (User $user, $for_id) {
    return true;
//    return (int) $user->id === (int) $for_id;
});


Broadcast::channel('notifications.${to_user_id}', function (User $user, $to_user_id) {
    return $user->profile->id === $to_user_id;
});


