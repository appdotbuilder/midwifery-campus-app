<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

/**
 * App\Models\Faculty
 *
 * @property int $id
 * @property string $name
 * @property string $title
 * @property string $position
 * @property string $department
 * @property string $bio
 * @property array $specializations
 * @property array $qualifications
 * @property string $email
 * @property string|null $phone
 * @property string|null $office_location
 * @property string|null $photo
 * @property string|null $research_interests
 * @property array|null $office_hours
 * @property bool $is_active
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * 
 * @method static \Illuminate\Database\Eloquent\Builder|Faculty newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Faculty newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Faculty query()
 * @method static \Illuminate\Database\Eloquent\Builder|Faculty active()

 * 
 * @mixin \Eloquent
 */
class Faculty extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var list<string>
     */
    protected $fillable = [
        'name',
        'title',
        'position',
        'department',
        'bio',
        'specializations',
        'qualifications',
        'email',
        'phone',
        'office_location',
        'photo',
        'research_interests',
        'office_hours',
        'is_active',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'specializations' => 'array',
        'qualifications' => 'array',
        'office_hours' => 'array',
        'is_active' => 'boolean',
    ];

    /**
     * Scope a query to only include active faculty.
     *
     * @param  \Illuminate\Database\Eloquent\Builder  $query
     * @return \Illuminate\Database\Eloquent\Builder
     */
    public function scopeActive($query)
    {
        return $query->where('is_active', true);
    }
}