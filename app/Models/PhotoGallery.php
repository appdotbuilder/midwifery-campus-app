<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

/**
 * App\Models\PhotoGallery
 *
 * @property int $id
 * @property string $title
 * @property string $category
 * @property string|null $description
 * @property string $image_url
 * @property string|null $thumbnail_url
 * @property \Illuminate\Support\Carbon|null $photo_date
 * @property bool $is_featured
 * @property int $sort_order
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * 
 * @method static \Illuminate\Database\Eloquent\Builder|PhotoGallery newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|PhotoGallery newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|PhotoGallery query()
 * @method static \Illuminate\Database\Eloquent\Builder|PhotoGallery featured()

 * 
 * @mixin \Eloquent
 */
class PhotoGallery extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var list<string>
     */
    protected $fillable = [
        'title',
        'category',
        'description',
        'image_url',
        'thumbnail_url',
        'photo_date',
        'is_featured',
        'sort_order',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'photo_date' => 'datetime',
        'is_featured' => 'boolean',
        'sort_order' => 'integer',
    ];

    /**
     * Scope a query to only include featured photos.
     *
     * @param  \Illuminate\Database\Eloquent\Builder  $query
     * @return \Illuminate\Database\Eloquent\Builder
     */
    public function scopeFeatured($query)
    {
        return $query->where('is_featured', true);
    }
}