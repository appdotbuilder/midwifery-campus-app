<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreAlumniTracerRequest;
use App\Models\AlumniTracer;
use Inertia\Inertia;

class AlumniController extends Controller
{
    /**
     * Show the alumni tracer form.
     */
    public function index()
    {
        return Inertia::render('alumni/index');
    }

    /**
     * Store alumni tracer information.
     */
    public function store(StoreAlumniTracerRequest $request)
    {
        AlumniTracer::create($request->validated());

        return Inertia::render('alumni/index', [
            'success' => 'Thank you for submitting your information! Your data helps us improve our programs.',
        ]);
    }
}