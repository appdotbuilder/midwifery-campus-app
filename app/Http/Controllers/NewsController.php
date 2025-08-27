<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\News;
use Inertia\Inertia;

class NewsController extends Controller
{
    /**
     * Display a listing of news articles.
     */
    public function index()
    {
        $news = News::published()
            ->latest('published_at')
            ->paginate(12);

        $featuredNews = News::published()
            ->featured()
            ->latest('published_at')
            ->limit(3)
            ->get();

        return Inertia::render('news/index', [
            'news' => $news,
            'featuredNews' => $featuredNews,
        ]);
    }

    /**
     * Display the specified news article.
     */
    public function show(News $news)
    {
        if (!$news->is_published || $news->published_at > now()) {
            abort(404);
        }

        $relatedNews = News::published()
            ->where('id', '!=', $news->id)
            ->latest('published_at')
            ->limit(3)
            ->get();

        return Inertia::render('news/show', [
            'news' => $news,
            'relatedNews' => $relatedNews,
        ]);
    }
}