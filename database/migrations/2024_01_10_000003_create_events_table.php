<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('events', function (Blueprint $table) {
            $table->id();
            $table->string('title');
            $table->string('slug')->unique();
            $table->text('description');
            $table->string('location');
            $table->datetime('event_date');
            $table->datetime('end_date')->nullable();
            $table->string('event_type')->comment('workshop, seminar, conference, etc.');
            $table->integer('max_participants')->nullable();
            $table->decimal('registration_fee', 10, 2)->nullable();
            $table->string('contact_email')->nullable();
            $table->string('featured_image')->nullable();
            $table->boolean('is_published')->default(false);
            $table->timestamps();
            
            $table->index('slug');
            $table->index('event_date');
            $table->index('event_type');
            $table->index('is_published');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('events');
    }
};