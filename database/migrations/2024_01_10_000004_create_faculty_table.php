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
        Schema::create('faculty', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('title')->comment('Professor, Dr., etc.');
            $table->string('position');
            $table->string('department');
            $table->text('bio');
            $table->json('specializations');
            $table->json('qualifications');
            $table->string('email');
            $table->string('phone')->nullable();
            $table->string('office_location')->nullable();
            $table->string('photo')->nullable();
            $table->text('research_interests')->nullable();
            $table->json('office_hours')->nullable();
            $table->boolean('is_active')->default(true);
            $table->timestamps();
            
            $table->index('department');
            $table->index('is_active');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('faculty');
    }
};