<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreContactInquiryRequest;
use App\Models\ContactInquiry;
use Inertia\Inertia;

class ContactController extends Controller
{
    /**
     * Show the contact form.
     */
    public function index()
    {
        return Inertia::render('contact/index');
    }

    /**
     * Store a contact inquiry.
     */
    public function store(StoreContactInquiryRequest $request)
    {
        ContactInquiry::create($request->validated());

        return Inertia::render('contact/index', [
            'success' => 'Thank you for your inquiry! We will get back to you soon.',
        ]);
    }
}