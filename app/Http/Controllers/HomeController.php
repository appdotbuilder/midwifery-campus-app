<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Announcement;
use App\Models\Event;
use App\Models\News;
use App\Models\PhotoGallery;
use App\Models\StudyProgram;
use Inertia\Inertia;

class HomeController extends Controller
{
    /**
     * Display the home page with all relevant information.
     */
    public function index()
    {
        $studyPrograms = StudyProgram::active()
            ->orderBy('name')
            ->limit(6)
            ->get();

        $featuredNews = News::published()
            ->featured()
            ->latest('published_at')
            ->limit(3)
            ->get();

        $upcomingEvents = Event::published()
            ->upcoming()
            ->orderBy('event_date')
            ->limit(4)
            ->get();

        $urgentAnnouncements = Announcement::published()
            ->active()
            ->where('priority', 'urgent')
            ->orWhere('is_pinned', true)
            ->orderByDesc('is_pinned')
            ->orderByDesc('published_at')
            ->limit(3)
            ->get();

        $featuredPhotos = PhotoGallery::featured()
            ->orderBy('sort_order')
            ->limit(6)
            ->get();

        return Inertia::render('welcome', [
            'studyPrograms' => $studyPrograms,
            'featuredNews' => $featuredNews,
            'upcomingEvents' => $upcomingEvents,
            'urgentAnnouncements' => $urgentAnnouncements,
            'featuredPhotos' => $featuredPhotos,
        ]);
    }
}