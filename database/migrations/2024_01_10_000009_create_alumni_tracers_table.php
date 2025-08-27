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
        Schema::create('alumni_tracers', function (Blueprint $table) {
            $table->id();
            $table->string('full_name');
            $table->string('email');
            $table->string('phone')->nullable();
            $table->string('student_id')->nullable();
            $table->string('program_graduated');
            $table->year('graduation_year');
            $table->string('current_job_title')->nullable();
            $table->string('current_employer')->nullable();
            $table->string('employment_status'); // employed, self-employed, unemployed, studying
            $table->text('current_address')->nullable();
            $table->decimal('monthly_income', 12, 2)->nullable();
            $table->text('skills_acquired')->nullable();
            $table->text('program_feedback')->nullable();
            $table->text('career_goals')->nullable();
            $table->boolean('willing_to_mentor')->default(false);
            $table->json('additional_qualifications')->nullable();
            $table->timestamps();
            
            $table->index('graduation_year');
            $table->index('program_graduated');
            $table->index('employment_status');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('alumni_tracers');
    }
};