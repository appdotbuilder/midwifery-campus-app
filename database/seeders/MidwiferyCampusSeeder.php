<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\StudyProgram;
use App\Models\News;
use App\Models\Event;
use App\Models\Faculty;
use App\Models\Facility;
use App\Models\Announcement;
use App\Models\PhotoGallery;

class MidwiferyCampusSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Study Programs
        StudyProgram::create([
            'name' => 'Bachelor of Midwifery',
            'degree_level' => 'Bachelor',
            'description' => 'A comprehensive 4-year program preparing students for professional midwifery practice with emphasis on evidence-based care, cultural competency, and holistic health approaches.',
            'curriculum' => 'Anatomy & Physiology, Reproductive Health, Prenatal Care, Labor & Delivery, Postpartum Care, Newborn Care, Emergency Procedures, Ethics in Healthcare',
            'duration_months' => 48,
            'tuition_fee' => 25000.00,
            'admission_requirements' => 'High school diploma, Biology and Chemistry prerequisites, minimum GPA 3.0, healthcare experience preferred',
            'is_active' => true,
        ]);

        StudyProgram::create([
            'name' => 'Master of Midwifery',
            'degree_level' => 'Master',
            'description' => 'Advanced graduate program for practicing midwives seeking leadership roles, research opportunities, and specialized clinical skills in maternal-fetal medicine.',
            'curriculum' => 'Advanced Clinical Practice, Research Methods, Healthcare Leadership, Quality Improvement, Advanced Pharmacology, High-Risk Obstetrics',
            'duration_months' => 24,
            'tuition_fee' => 35000.00,
            'admission_requirements' => 'Bachelor\'s degree in Midwifery or related field, active midwifery license, 2 years clinical experience, GRE scores',
            'is_active' => true,
        ]);

        StudyProgram::create([
            'name' => 'Diploma in Midwifery',
            'degree_level' => 'Diploma',
            'description' => 'Intensive 18-month program for career changers and international students, focusing on essential midwifery skills and clinical competencies.',
            'curriculum' => 'Fundamentals of Midwifery, Women\'s Health, Prenatal Assessment, Birth Assistance, Postpartum Care, Professional Development',
            'duration_months' => 18,
            'tuition_fee' => 18000.00,
            'admission_requirements' => 'College-level coursework in sciences, healthcare background preferred, English proficiency for international students',
            'is_active' => true,
        ]);

        // News Articles
        News::create([
            'title' => 'New Birthing Center Opens on Campus',
            'slug' => 'new-birthing-center-opens-campus',
            'excerpt' => 'Our state-of-the-art birthing center featuring 6 private suites is now open for student training and community births.',
            'content' => 'We are excited to announce the opening of our new birthing center, featuring six private birthing suites equipped with the latest technology and comfort amenities. This facility will serve both as a training ground for our students and a welcoming space for families in our community to experience natural, safe births under the care of our experienced midwives and student practitioners.',
            'featured_image' => '/images/birthing-center.jpg',
            'is_featured' => true,
            'is_published' => true,
            'published_at' => now()->subDays(3),
        ]);

        News::create([
            'title' => 'Student Research Published in International Journal',
            'slug' => 'student-research-published-international-journal',
            'excerpt' => 'Third-year student Maria Rodriguez\'s research on postpartum depression screening has been accepted by the International Journal of Midwifery.',
            'content' => 'We are proud to announce that Maria Rodriguez, a third-year Bachelor of Midwifery student, has had her research paper "Cultural Factors in Postpartum Depression Screening" accepted for publication in the prestigious International Journal of Midwifery. This achievement highlights the quality of research being conducted by our students and faculty.',
            'is_featured' => true,
            'is_published' => true,
            'published_at' => now()->subDays(7),
        ]);

        News::create([
            'title' => 'World Midwifery Day Celebrated at Campus',
            'slug' => 'world-midwifery-day-celebrated-campus',
            'excerpt' => 'Students, faculty, and community members gathered to celebrate World Midwifery Day with educational workshops and free health screenings.',
            'content' => 'Our campus came alive with celebration as we honored World Midwifery Day on May 5th. The day featured educational workshops on maternal health, free health screenings for community members, and recognition ceremonies for our outstanding students and faculty. Over 200 community members participated in the festivities.',
            'is_featured' => false,
            'is_published' => true,
            'published_at' => now()->subDays(14),
        ]);

        // Events
        Event::create([
            'title' => 'Annual Midwifery Conference 2024',
            'slug' => 'annual-midwifery-conference-2024',
            'description' => 'Join us for our annual conference featuring renowned speakers, workshops on emerging practices, and networking opportunities for midwives at all career stages.',
            'location' => 'Main Auditorium, Midwifery Campus',
            'event_date' => now()->addDays(45),
            'end_date' => now()->addDays(47),
            'event_type' => 'conference',
            'max_participants' => 300,
            'registration_fee' => 150.00,
            'contact_email' => 'conference@midwifery-campus.edu',
            'is_published' => true,
        ]);

        Event::create([
            'title' => 'Breastfeeding Support Workshop',
            'slug' => 'breastfeeding-support-workshop',
            'description' => 'Free community workshop on breastfeeding techniques, troubleshooting common challenges, and supporting new mothers in their feeding journey.',
            'location' => 'Community Health Center',
            'event_date' => now()->addDays(10),
            'event_type' => 'workshop',
            'max_participants' => 25,
            'registration_fee' => 0.00,
            'contact_email' => 'community@midwifery-campus.edu',
            'is_published' => true,
        ]);

        Event::create([
            'title' => 'Student Clinical Skills Assessment',
            'slug' => 'student-clinical-skills-assessment',
            'description' => 'Comprehensive practical examination for second-year students covering essential midwifery skills and emergency procedures.',
            'location' => 'Skills Laboratory',
            'event_date' => now()->addDays(20),
            'event_type' => 'assessment',
            'contact_email' => 'academics@midwifery-campus.edu',
            'is_published' => true,
        ]);

        // Faculty Members
        Faculty::create([
            'name' => 'Dr. Sarah Johnson',
            'title' => 'Dr.',
            'position' => 'Professor and Program Director',
            'department' => 'Midwifery',
            'bio' => 'Dr. Johnson has over 20 years of experience in midwifery practice and education. She holds a PhD in Maternal Health and has published extensively on evidence-based midwifery care.',
            'specializations' => ['Maternal Health', 'Evidence-Based Practice', 'High-Risk Pregnancies'],
            'qualifications' => ['PhD Maternal Health', 'CNM Certified Nurse-Midwife', 'MSN Nurse-Midwifery'],
            'email' => 'sarah.johnson@midwifery-campus.edu',
            'phone' => '(555) 123-4501',
            'office_location' => 'Faculty Building, Room 201',
            'research_interests' => 'Maternal mortality reduction, culturally competent care, midwifery education outcomes',
            'office_hours' => ['Monday: 2:00-4:00 PM', 'Wednesday: 10:00 AM-12:00 PM', 'Friday: 1:00-3:00 PM'],
            'is_active' => true,
        ]);

        Faculty::create([
            'name' => 'Prof. Michael Chen',
            'title' => 'Prof.',
            'position' => 'Associate Professor',
            'department' => 'Clinical Sciences',
            'bio' => 'Professor Chen specializes in obstetrics and has been training midwives for 15 years. His clinical expertise includes high-risk pregnancies and emergency obstetric care.',
            'specializations' => ['Obstetrics', 'Emergency Care', 'Fetal Monitoring'],
            'qualifications' => ['MD Obstetrics & Gynecology', 'MEd Medical Education'],
            'email' => 'michael.chen@midwifery-campus.edu',
            'phone' => '(555) 123-4502',
            'office_location' => 'Medical Building, Room 305',
            'research_interests' => 'Fetal heart rate monitoring, emergency obstetric procedures, simulation-based learning',
            'office_hours' => ['Tuesday: 9:00-11:00 AM', 'Thursday: 2:00-4:00 PM'],
            'is_active' => true,
        ]);

        Faculty::create([
            'name' => 'Dr. Lisa Martinez',
            'title' => 'Dr.',
            'position' => 'Assistant Professor',
            'department' => 'Community Health',
            'bio' => 'Dr. Martinez focuses on community-based midwifery care and has extensive experience working with underserved populations. She advocates for accessible maternal healthcare.',
            'specializations' => ['Community Health', 'Health Equity', 'Prenatal Care'],
            'qualifications' => ['PhD Public Health', 'CNM Certified Nurse-Midwife', 'MPH Public Health'],
            'email' => 'lisa.martinez@midwifery-campus.edu',
            'phone' => '(555) 123-4503',
            'office_location' => 'Community Health Building, Room 102',
            'research_interests' => 'Health disparities, community-based care models, maternal health equity',
            'office_hours' => ['Monday: 1:00-3:00 PM', 'Wednesday: 9:00-11:00 AM'],
            'is_active' => true,
        ]);

        // Facilities
        Facility::create([
            'name' => 'Birthing Suite Simulation Lab',
            'category' => 'laboratory',
            'description' => 'State-of-the-art birthing simulation laboratory with 4 fully equipped birthing suites for hands-on training.',
            'features' => 'High-fidelity birth simulators, adjustable birthing beds, emergency equipment, audio-visual recording systems',
            'location' => 'Skills Building, 2nd Floor',
            'capacity' => 16,
            'availability' => 'Monday-Friday 8:00 AM - 8:00 PM',
            'equipment' => ['Birth simulators', 'Fetal monitors', 'Birthing balls', 'Emergency crash cart', 'Delivery instruments'],
            'is_available' => true,
        ]);

        Facility::create([
            'name' => 'Medical Library',
            'category' => 'library',
            'description' => 'Comprehensive medical library with extensive collection of midwifery, obstetrics, and maternal health resources.',
            'features' => '10,000+ books, 200+ journal subscriptions, digital databases, quiet study areas, group study rooms',
            'location' => 'Library Building',
            'capacity' => 150,
            'availability' => '24/7 with student ID access',
            'equipment' => ['Computer stations', 'Printing services', 'Scanning equipment', 'Study rooms', 'Presentation equipment'],
            'is_available' => true,
        ]);

        Facility::create([
            'name' => 'Student Lounge',
            'category' => 'common area',
            'description' => 'Comfortable lounge area for students to relax, study, and socialize between classes.',
            'features' => 'Comfortable seating, kitchen facilities, vending machines, study tables, recreational area',
            'location' => 'Student Center, 1st Floor',
            'capacity' => 80,
            'availability' => '24/7',
            'equipment' => ['Microwave', 'Refrigerator', 'Coffee machines', 'TV', 'Gaming area'],
            'is_available' => true,
        ]);

        // Announcements
        Announcement::create([
            'title' => 'Fall 2024 Registration Now Open',
            'content' => 'Registration for Fall 2024 semester is now open for all programs. Early registration deadline is June 30th with a $100 discount on tuition. Limited spots available for all programs. Contact admissions office for more information.',
            'type' => 'admission',
            'priority' => 'high',
            'is_pinned' => true,
            'is_published' => true,
            'published_at' => now()->subDays(2),
            'expires_at' => now()->addDays(60),
            'target_audience' => 'all',
        ]);

        Announcement::create([
            'title' => 'COVID-19 Safety Protocols Updated',
            'content' => 'Please review the updated COVID-19 safety protocols for campus activities and clinical placements. All students and faculty must follow these guidelines to ensure everyone\'s safety.',
            'type' => 'general',
            'priority' => 'urgent',
            'is_pinned' => true,
            'is_published' => true,
            'published_at' => now()->subHours(6),
            'target_audience' => 'all',
        ]);

        Announcement::create([
            'title' => 'Library Extended Hours During Finals',
            'content' => 'The medical library will have extended hours during finals week (May 15-22). Open 24/7 with additional study spaces and quiet zones available.',
            'type' => 'academic',
            'priority' => 'medium',
            'is_pinned' => false,
            'is_published' => true,
            'published_at' => now()->subDays(1),
            'expires_at' => now()->addDays(30),
            'target_audience' => 'students',
        ]);

        // Photo Gallery
        PhotoGallery::create([
            'title' => 'New Birthing Center Opening',
            'category' => 'facilities',
            'description' => 'Grand opening of our state-of-the-art birthing center',
            'image_url' => '/images/gallery/birthing-center-1.jpg',
            'thumbnail_url' => '/images/gallery/thumbs/birthing-center-1.jpg',
            'photo_date' => now()->subDays(5),
            'is_featured' => true,
            'sort_order' => 1,
        ]);

        PhotoGallery::create([
            'title' => 'Student Clinical Training',
            'category' => 'education',
            'description' => 'Students practicing clinical skills in our simulation lab',
            'image_url' => '/images/gallery/clinical-training-1.jpg',
            'thumbnail_url' => '/images/gallery/thumbs/clinical-training-1.jpg',
            'photo_date' => now()->subDays(10),
            'is_featured' => true,
            'sort_order' => 2,
        ]);

        PhotoGallery::create([
            'title' => 'Graduation Ceremony 2024',
            'category' => 'graduation',
            'description' => 'Celebrating our graduates and their achievements',
            'image_url' => '/images/gallery/graduation-2024.jpg',
            'thumbnail_url' => '/images/gallery/thumbs/graduation-2024.jpg',
            'photo_date' => now()->subDays(30),
            'is_featured' => true,
            'sort_order' => 3,
        ]);

        PhotoGallery::create([
            'title' => 'Campus Garden',
            'category' => 'campus',
            'description' => 'Beautiful healing garden for students and patients',
            'image_url' => '/images/gallery/campus-garden.jpg',
            'thumbnail_url' => '/images/gallery/thumbs/campus-garden.jpg',
            'photo_date' => now()->subDays(20),
            'is_featured' => true,
            'sort_order' => 4,
        ]);

        PhotoGallery::create([
            'title' => 'World Midwifery Day Celebration',
            'category' => 'events',
            'description' => 'Community celebration of World Midwifery Day',
            'image_url' => '/images/gallery/midwifery-day-2024.jpg',
            'thumbnail_url' => '/images/gallery/thumbs/midwifery-day-2024.jpg',
            'photo_date' => now()->subDays(15),
            'is_featured' => true,
            'sort_order' => 5,
        ]);

        PhotoGallery::create([
            'title' => 'Modern Library Facilities',
            'category' => 'facilities',
            'description' => 'Students studying in our well-equipped library',
            'image_url' => '/images/gallery/library-interior.jpg',
            'thumbnail_url' => '/images/gallery/thumbs/library-interior.jpg',
            'photo_date' => now()->subDays(25),
            'is_featured' => true,
            'sort_order' => 6,
        ]);
    }
}