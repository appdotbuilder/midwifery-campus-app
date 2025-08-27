<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\StudyProgram;
use Inertia\Inertia;

class RegistrationController extends Controller
{
    /**
     * Display registration information.
     */
    public function index()
    {
        $activePrograms = StudyProgram::active()
            ->orderBy('degree_level')
            ->orderBy('name')
            ->get();

        return Inertia::render('registration/index', [
            'programs' => $activePrograms,
        ]);
    }
}