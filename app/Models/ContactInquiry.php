<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

/**
 * App\Models\ContactInquiry
 *
 * @property int $id
 * @property string $name
 * @property string $email
 * @property string|null $phone
 * @property string $inquiry_type
 * @property string $subject
 * @property string $message
 * @property string $status
 * @property string|null $response
 * @property \Illuminate\Support\Carbon|null $responded_at
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * 
 * @method static \Illuminate\Database\Eloquent\Builder|ContactInquiry newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|ContactInquiry newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|ContactInquiry query()
 * @method static \Illuminate\Database\Eloquent\Builder|ContactInquiry pending()

 * 
 * @mixin \Eloquent
 */
class ContactInquiry extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var list<string>
     */
    protected $fillable = [
        'name',
        'email',
        'phone',
        'inquiry_type',
        'subject',
        'message',
        'status',
        'response',
        'responded_at',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'responded_at' => 'datetime',
    ];

    /**
     * Scope a query to only include pending inquiries.
     *
     * @param  \Illuminate\Database\Eloquent\Builder  $query
     * @return \Illuminate\Database\Eloquent\Builder
     */
    public function scopePending($query)
    {
        return $query->where('status', 'pending');
    }
}