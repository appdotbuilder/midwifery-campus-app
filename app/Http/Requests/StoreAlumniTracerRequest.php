<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreAlumniTracerRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'full_name' => 'required|string|max:255',
            'email' => 'required|email|max:255',
            'phone' => 'nullable|string|max:20',
            'student_id' => 'nullable|string|max:50',
            'program_graduated' => 'required|string|max:255',
            'graduation_year' => 'required|integer|min:1980|max:' . (date('Y') + 1),
            'current_job_title' => 'nullable|string|max:255',
            'current_employer' => 'nullable|string|max:255',
            'employment_status' => 'required|in:employed,self-employed,unemployed,studying',
            'current_address' => 'nullable|string|max:500',
            'monthly_income' => 'nullable|numeric|min:0',
            'skills_acquired' => 'nullable|string|max:1000',
            'program_feedback' => 'nullable|string|max:1000',
            'career_goals' => 'nullable|string|max:1000',
            'willing_to_mentor' => 'boolean',
            'additional_qualifications' => 'nullable|array',
            'additional_qualifications.*' => 'string|max:255',
        ];
    }

    /**
     * Get custom error messages for validator errors.
     *
     * @return array<string, string>
     */
    public function messages(): array
    {
        return [
            'full_name.required' => 'Full name is required.',
            'email.required' => 'Email address is required.',
            'email.email' => 'Please provide a valid email address.',
            'program_graduated.required' => 'Please specify the program you graduated from.',
            'graduation_year.required' => 'Graduation year is required.',
            'graduation_year.integer' => 'Graduation year must be a valid year.',
            'graduation_year.min' => 'Graduation year must be 1980 or later.',
            'graduation_year.max' => 'Graduation year cannot be in the future.',
            'employment_status.required' => 'Please select your employment status.',
            'employment_status.in' => 'Please select a valid employment status.',
            'monthly_income.numeric' => 'Monthly income must be a valid number.',
            'monthly_income.min' => 'Monthly income cannot be negative.',
        ];
    }
}