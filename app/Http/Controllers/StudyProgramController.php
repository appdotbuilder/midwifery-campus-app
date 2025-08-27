<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\StudyProgram;
use Inertia\Inertia;

class StudyProgramController extends Controller
{
    /**
     * Display a listing of study programs.
     */
    public function index()
    {
        $programs = StudyProgram::active()
            ->orderBy('degree_level')
            ->orderBy('name')
            ->get()
            ->groupBy('degree_level');

        return Inertia::render('study-programs/index', [
            'programs' => $programs,
        ]);
    }

    /**
     * Display the specified study program.
     */
    public function show(StudyProgram $studyProgram)
    {
        return Inertia::render('study-programs/show', [
            'program' => $studyProgram,
        ]);
    }
}