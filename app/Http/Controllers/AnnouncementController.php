<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Announcement;
use Inertia\Inertia;

class AnnouncementController extends Controller
{
    /**
     * Display a listing of announcements.
     */
    public function index()
    {
        $pinnedAnnouncements = Announcement::published()
            ->active()
            ->pinned()
            ->latest('published_at')
            ->get();

        $announcements = Announcement::published()
            ->active()
            ->where('is_pinned', false)
            ->latest('published_at')
            ->paginate(15);

        return Inertia::render('announcements/index', [
            'pinnedAnnouncements' => $pinnedAnnouncements,
            'announcements' => $announcements,
        ]);
    }

    /**
     * Display the specified announcement.
     */
    public function show(Announcement $announcement)
    {
        if (!$announcement->is_published || $announcement->published_at > now()) {
            abort(404);
        }

        if ($announcement->expires_at && $announcement->expires_at < now()) {
            abort(404);
        }

        $relatedAnnouncements = Announcement::published()
            ->active()
            ->where('id', '!=', $announcement->id)
            ->where('type', $announcement->type)
            ->latest('published_at')
            ->limit(3)
            ->get();

        return Inertia::render('announcements/show', [
            'announcement' => $announcement,
            'relatedAnnouncements' => $relatedAnnouncements,
        ]);
    }
}