<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Faculty;
use Inertia\Inertia;

class FacultyController extends Controller
{
    /**
     * Display a listing of faculty members.
     */
    public function index()
    {
        $faculty = Faculty::active()
            ->orderBy('department')
            ->orderBy('name')
            ->get()
            ->groupBy('department');

        return Inertia::render('faculty/index', [
            'faculty' => $faculty,
        ]);
    }

    /**
     * Display the specified faculty member.
     */
    public function show(Faculty $faculty)
    {
        if (!$faculty->is_active) {
            abort(404);
        }

        $colleagues = Faculty::active()
            ->where('id', '!=', $faculty->id)
            ->where('department', $faculty->department)
            ->orderBy('name')
            ->limit(3)
            ->get();

        return Inertia::render('faculty/show', [
            'faculty' => $faculty,
            'colleagues' => $colleagues,
        ]);
    }
}