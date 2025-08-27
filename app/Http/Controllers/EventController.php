<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Event;
use Inertia\Inertia;

class EventController extends Controller
{
    /**
     * Display a listing of events.
     */
    public function index()
    {
        $upcomingEvents = Event::published()
            ->upcoming()
            ->orderBy('event_date')
            ->paginate(12);

        $pastEvents = Event::published()
            ->where('event_date', '<', now())
            ->latest('event_date')
            ->limit(6)
            ->get();

        return Inertia::render('events/index', [
            'upcomingEvents' => $upcomingEvents,
            'pastEvents' => $pastEvents,
        ]);
    }

    /**
     * Display the specified event.
     */
    public function show(Event $event)
    {
        if (!$event->is_published) {
            abort(404);
        }

        $relatedEvents = Event::published()
            ->where('id', '!=', $event->id)
            ->where('event_type', $event->event_type)
            ->upcoming()
            ->orderBy('event_date')
            ->limit(3)
            ->get();

        return Inertia::render('events/show', [
            'event' => $event,
            'relatedEvents' => $relatedEvents,
        ]);
    }
}