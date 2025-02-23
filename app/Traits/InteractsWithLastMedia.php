<?php

namespace App\Traits;

use Spatie\MediaLibrary\MediaCollections\Models\Media;

trait InteractsWithLastMedia{
    public function getLastMedia(string $collectionName = 'default', $filters = []): ?Media
    {
        $media = $this->getMedia($collectionName, $filters);

        return $media->last();
    }
    public function getLatestMedia(string $collectionName = 'default', $filters = []): ?Media
    {
        $media = $this->getMedia($collectionName, $filters);

        return $media->sortBy('created_at')->values()->last();
    }

    public function getLastMediaUrl(string $collectionName = 'default', string $conversionName = ''): string
    {
        $media = $this->getLastMedia($collectionName);

        if (! $media) {
            return $this->getFallbackMediaUrl($collectionName, $conversionName) ?: '';
        }

        if ($conversionName !== '' && ! $media->hasGeneratedConversion($conversionName)) {
            return $media->getUrl();
        }

        return $media->getUrl($conversionName);
    }
}
