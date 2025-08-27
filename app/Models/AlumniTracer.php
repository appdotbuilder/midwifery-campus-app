<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

/**
 * App\Models\AlumniTracer
 *
 * @property int $id
 * @property string $full_name
 * @property string $email
 * @property string|null $phone
 * @property string|null $student_id
 * @property string $program_graduated
 * @property int $graduation_year
 * @property string|null $current_job_title
 * @property string|null $current_employer
 * @property string $employment_status
 * @property string|null $current_address
 * @property float|null $monthly_income
 * @property string|null $skills_acquired
 * @property string|null $program_feedback
 * @property string|null $career_goals
 * @property bool $willing_to_mentor
 * @property array|null $additional_qualifications
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * 
 * @method static \Illuminate\Database\Eloquent\Builder|AlumniTracer newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|AlumniTracer newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|AlumniTracer query()
 * @method static \Illuminate\Database\Eloquent\Builder|AlumniTracer employed()

 * 
 * @mixin \Eloquent
 */
class AlumniTracer extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var list<string>
     */
    protected $fillable = [
        'full_name',
        'email',
        'phone',
        'student_id',
        'program_graduated',
        'graduation_year',
        'current_job_title',
        'current_employer',
        'employment_status',
        'current_address',
        'monthly_income',
        'skills_acquired',
        'program_feedback',
        'career_goals',
        'willing_to_mentor',
        'additional_qualifications',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'graduation_year' => 'integer',
        'monthly_income' => 'decimal:2',
        'willing_to_mentor' => 'boolean',
        'additional_qualifications' => 'array',
    ];

    /**
     * Scope a query to only include employed alumni.
     *
     * @param  \Illuminate\Database\Eloquent\Builder  $query
     * @return \Illuminate\Database\Eloquent\Builder
     */
    public function scopeEmployed($query)
    {
        return $query->whereIn('employment_status', ['employed', 'self-employed']);
    }
}