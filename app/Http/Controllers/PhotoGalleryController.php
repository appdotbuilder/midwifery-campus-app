<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\PhotoGallery;
use Inertia\Inertia;

class PhotoGalleryController extends Controller
{
    /**
     * Display the photo gallery.
     */
    public function index()
    {
        $categories = PhotoGallery::select('category')
            ->distinct()
            ->orderBy('category')
            ->pluck('category');

        $featuredPhotos = PhotoGallery::featured()
            ->orderBy('sort_order')
            ->limit(8)
            ->get();

        $allPhotos = PhotoGallery::orderBy('sort_order')
            ->orderBy('photo_date', 'desc')
            ->paginate(24);

        return Inertia::render('gallery/index', [
            'categories' => $categories,
            'featuredPhotos' => $featuredPhotos,
            'allPhotos' => $allPhotos,
        ]);
    }
}