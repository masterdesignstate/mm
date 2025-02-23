<?php

namespace App\Helpers;

use Illuminate\Support\Facades\Http;

class DistanceHelper
{

    public static function getDistanceData($originPostalCode, $destinationPostalCode)
    {
        $result = self::getDistanceGoogle($originPostalCode, $destinationPostalCode);
            $result = $result->json();
        ray($result);
        if ($result["status"] === "OK") {
            return $result['rows'][0]['elements'][0];
        }
        else return null;
    }

    public static function getDistanceDataBulk($originPostalCode, $destinationPostalCode)
    {
        $result = self::getDistanceGoogle($originPostalCode, $destinationPostalCode);
            $result = $result->json();
        ray($result);
        if ($result["status"] === "OK") {
            return $result['rows'][0]['elements'];
        }
        else return null;
    }

    public static function getDistanceGoogle($originPostalCode, $destinationPostalCode)
    {
        $apiKey = config('services.distance_matrix_google.api_key');

//        dd($apiKey);

        $response = Http::get("https://maps.googleapis.com/maps/api/distancematrix/json", [
            'origins' => $originPostalCode,
            'destinations' => $destinationPostalCode,
            'key' => $apiKey
        ]);


        return $response;
    }

    public static function getDistance($originZip, $destinationZip, $country = 'US')
    {
        $apiKey = config('services.distance_matrix_ai.api_key');
        $url = "https://api.distancematrix.ai/maps/api/distancematrix/json";

        $response = Http::get($url, [
            'origins' => "{$originZip}, {$country}",
            'destinations' => "{$destinationZip}, {$country}",
            'units' => 'imperial', // Use 'imperial' for miles
            'key' => $apiKey
        ]);

        if ($response->successful()) {
            $data = $response->json();
            return $data['rows'][0]['elements'][0]['distance']['text'] ?? 'N/A';
        }

        return 'Error retrieving distance';
    }

    public static function getBulkDistances(array $origins, array $destinations, $country = 'US')
    {
        $apiKey = config('services.distance_matrix_ai.api_key');
        $url = "https://api.distancematrix.ai/maps/api/distancematrix/json";

        // Convert arrays into comma-separated strings
        $originsStr = implode('|', array_map(fn($zip) => "{$zip}, {$country}", $origins));
        $destinationsStr = implode('|', array_map(fn($zip) => "{$zip}, {$country}", $destinations));

        $response = Http::get($url, [
            'origins' => $originsStr,
            'destinations' => $destinationsStr,
            'units' => 'imperial', // Get distance in miles
            'key' => $apiKey
        ]);

        if ($response->successful()) {
            $data = $response->json();
            $distances = [];

            foreach ($data['rows'] as $rowIndex => $row) {
                foreach ($row['elements'] as $colIndex => $element) {
                    $distances[] = [
                        'from' => $origins[$rowIndex],
                        'to' => $destinations[$colIndex],
                        'distance' => $element['distance']['text'] ?? null,
                    ];
                }
            }

            return $distances;
        }

        return 'Error retrieving distances';
    }


}
