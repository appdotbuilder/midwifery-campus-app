<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Facility;
use Inertia\Inertia;

class FacilityController extends Controller
{
    /**
     * Display a listing of facilities.
     */
    public function index()
    {
        $facilities = Facility::available()
            ->orderBy('category')
            ->orderBy('name')
            ->get()
            ->groupBy('category');

        return Inertia::render('facilities/index', [
            'facilities' => $facilities,
        ]);
    }

    /**
     * Display the specified facility.
     */
    public function show(Facility $facility)
    {
        if (!$facility->is_available) {
            abort(404);
        }

        $relatedFacilities = Facility::available()
            ->where('id', '!=', $facility->id)
            ->where('category', $facility->category)
            ->orderBy('name')
            ->limit(3)
            ->get();

        return Inertia::render('facilities/show', [
            'facility' => $facility,
            'relatedFacilities' => $relatedFacilities,
        ]);
    }
}