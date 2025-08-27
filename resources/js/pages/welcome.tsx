import React from 'react';
import { Link, router } from '@inertiajs/react';
import { AppShell } from '@/components/app-shell';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

interface StudyProgram {
    id: number;
    name: string;
    degree_level: string;
    description: string;
    duration_months: number;
    tuition_fee?: number;
    image?: string;
}

interface News {
    id: number;
    title: string;
    slug: string;
    excerpt: string;
    featured_image?: string;
    published_at: string;
}

interface Event {
    id: number;
    title: string;
    slug: string;
    description: string;
    location: string;
    event_date: string;
    event_type: string;
    featured_image?: string;
}

interface Announcement {
    id: number;
    title: string;
    content: string;
    type: string;
    priority: string;
    is_pinned: boolean;
    published_at: string;
}

interface PhotoGallery {
    id: number;
    title: string;
    category: string;
    image_url: string;
    thumbnail_url?: string;
}

interface Props {
    studyPrograms: StudyProgram[];
    featuredNews: News[];
    upcomingEvents: Event[];
    urgentAnnouncements: Announcement[];
    featuredPhotos: PhotoGallery[];
    [key: string]: unknown;
}

export default function Welcome({ 
    studyPrograms, 
    featuredNews, 
    upcomingEvents, 
    urgentAnnouncements, 
    featuredPhotos 
}: Props) {
    const handleContactClick = () => {
        router.visit(route('contact.index'));
    };

    const handleRegistrationClick = () => {
        router.visit(route('registration.index'));
    };

    return (
        <AppShell>
            <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-pink-50">
                {/* Hero Section */}
                <section className="relative py-20 px-4 text-center bg-gradient-to-r from-blue-600 to-pink-600 text-white">
                    <div className="max-w-6xl mx-auto">
                        <h1 className="text-5xl font-bold mb-6">
                            🏥 Midwifery Campus Excellence
                        </h1>
                        <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
                            Empowering future midwives with world-class education, hands-on training, 
                            and compassionate care. Join our community of healthcare professionals 
                            dedicated to maternal and infant health.
                        </p>
                        <div className="flex flex-wrap gap-4 justify-center">
                            <Button 
                                onClick={handleRegistrationClick}
                                size="lg" 
                                className="bg-white text-blue-600 hover:bg-gray-100"
                            >
                                📋 Apply Now
                            </Button>
                            <Button 
                                onClick={handleContactClick}
                                variant="outline" 
                                size="lg" 
                                className="border-white text-white hover:bg-white hover:text-blue-600"
                            >
                                💬 Get Information
                            </Button>
                        </div>
                    </div>
                </section>

                {/* Key Features */}
                <section className="py-16 px-4">
                    <div className="max-w-6xl mx-auto">
                        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
                            🌟 Why Choose Our Midwifery Programs?
                        </h2>
                        <div className="grid md:grid-cols-4 gap-6">
                            <Card className="text-center border-blue-200 hover:shadow-lg transition-shadow">
                                <CardHeader>
                                    <div className="text-4xl mb-4">🎓</div>
                                    <CardTitle className="text-lg">Expert Faculty</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-gray-600">Learn from experienced midwives and healthcare professionals with decades of clinical expertise.</p>
                                </CardContent>
                            </Card>
                            
                            <Card className="text-center border-pink-200 hover:shadow-lg transition-shadow">
                                <CardHeader>
                                    <div className="text-4xl mb-4">🏥</div>
                                    <CardTitle className="text-lg">Modern Facilities</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-gray-600">State-of-the-art simulation labs, birthing suites, and clinical training facilities.</p>
                                </CardContent>
                            </Card>
                            
                            <Card className="text-center border-green-200 hover:shadow-lg transition-shadow">
                                <CardHeader>
                                    <div className="text-4xl mb-4">👥</div>
                                    <CardTitle className="text-lg">Clinical Experience</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-gray-600">Extensive hands-on training in hospitals and birth centers with real-world experience.</p>
                                </CardContent>
                            </Card>
                            
                            <Card className="text-center border-purple-200 hover:shadow-lg transition-shadow">
                                <CardHeader>
                                    <div className="text-4xl mb-4">🏆</div>
                                    <CardTitle className="text-lg">High Success Rate</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-gray-600">95% job placement rate within 6 months of graduation with excellent career support.</p>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </section>

                {/* Urgent Announcements */}
                {urgentAnnouncements.length > 0 && (
                    <section className="py-12 px-4 bg-yellow-50">
                        <div className="max-w-6xl mx-auto">
                            <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
                                📢 Important Announcements
                            </h2>
                            <div className="grid md:grid-cols-3 gap-4">
                                {urgentAnnouncements.map((announcement) => (
                                    <Card key={announcement.id} className="border-yellow-300">
                                        <CardHeader className="pb-2">
                                            <div className="flex items-center gap-2 mb-2">
                                                {announcement.is_pinned && (
                                                    <Badge className="bg-red-100 text-red-800">📌 Pinned</Badge>
                                                )}
                                                <Badge variant="outline">{announcement.type}</Badge>
                                            </div>
                                            <CardTitle className="text-lg">{announcement.title}</CardTitle>
                                        </CardHeader>
                                        <CardContent>
                                            <p className="text-gray-600 text-sm line-clamp-3">{announcement.content}</p>
                                            <Link 
                                                href={route('announcements.show', announcement.id)}
                                                className="text-blue-600 hover:underline text-sm mt-2 inline-block"
                                            >
                                                Read more →
                                            </Link>
                                        </CardContent>
                                    </Card>
                                ))}
                            </div>
                        </div>
                    </section>
                )}

                {/* Study Programs */}
                <section className="py-16 px-4">
                    <div className="max-w-6xl mx-auto">
                        <div className="flex justify-between items-center mb-12">
                            <h2 className="text-3xl font-bold text-gray-800">📚 Our Study Programs</h2>
                            <Link 
                                href={route('study-programs.index')}
                                className="text-blue-600 hover:underline font-medium"
                            >
                                View All Programs →
                            </Link>
                        </div>
                        <div className="grid md:grid-cols-3 gap-6">
                            {studyPrograms.slice(0, 6).map((program) => (
                                <Card key={program.id} className="hover:shadow-lg transition-shadow">
                                    <CardHeader>
                                        <Badge className="w-fit mb-2">{program.degree_level}</Badge>
                                        <CardTitle className="text-xl">{program.name}</CardTitle>
                                        <CardDescription>
                                            Duration: {Math.floor(program.duration_months / 12)} years {program.duration_months % 12 ? `${program.duration_months % 12} months` : ''}
                                        </CardDescription>
                                    </CardHeader>
                                    <CardContent>
                                        <p className="text-gray-600 mb-4 line-clamp-3">{program.description}</p>
                                        {program.tuition_fee && (
                                            <p className="font-semibold text-green-600 mb-4">
                                                💰 ${program.tuition_fee.toLocaleString()} per year
                                            </p>
                                        )}
                                        <Link 
                                            href={route('study-programs.show', program.id)}
                                            className="text-blue-600 hover:underline font-medium"
                                        >
                                            Learn More →
                                        </Link>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>
                </section>

                {/* News & Events */}
                <section className="py-16 px-4 bg-gray-50">
                    <div className="max-w-6xl mx-auto">
                        <div className="grid lg:grid-cols-2 gap-12">
                            {/* Latest News */}
                            <div>
                                <div className="flex justify-between items-center mb-8">
                                    <h2 className="text-2xl font-bold text-gray-800">📰 Latest News</h2>
                                    <Link 
                                        href={route('news.index')}
                                        className="text-blue-600 hover:underline font-medium"
                                    >
                                        View All →
                                    </Link>
                                </div>
                                <div className="space-y-4">
                                    {featuredNews.map((news) => (
                                        <Card key={news.id} className="hover:shadow-md transition-shadow">
                                            <CardContent className="p-4">
                                                <h3 className="font-semibold text-lg mb-2">{news.title}</h3>
                                                <p className="text-gray-600 text-sm mb-2 line-clamp-2">{news.excerpt}</p>
                                                <div className="flex justify-between items-center">
                                                    <span className="text-xs text-gray-500">
                                                        {new Date(news.published_at).toLocaleDateString()}
                                                    </span>
                                                    <Link 
                                                        href={route('news.show', news.slug)}
                                                        className="text-blue-600 hover:underline text-sm"
                                                    >
                                                        Read More →
                                                    </Link>
                                                </div>
                                            </CardContent>
                                        </Card>
                                    ))}
                                </div>
                            </div>

                            {/* Upcoming Events */}
                            <div>
                                <div className="flex justify-between items-center mb-8">
                                    <h2 className="text-2xl font-bold text-gray-800">📅 Upcoming Events</h2>
                                    <Link 
                                        href={route('events.index')}
                                        className="text-blue-600 hover:underline font-medium"
                                    >
                                        View All →
                                    </Link>
                                </div>
                                <div className="space-y-4">
                                    {upcomingEvents.map((event) => (
                                        <Card key={event.id} className="hover:shadow-md transition-shadow">
                                            <CardContent className="p-4">
                                                <div className="flex justify-between items-start mb-2">
                                                    <h3 className="font-semibold text-lg">{event.title}</h3>
                                                    <Badge variant="outline">{event.event_type}</Badge>
                                                </div>
                                                <p className="text-gray-600 text-sm mb-2 line-clamp-2">{event.description}</p>
                                                <div className="flex justify-between items-center text-sm">
                                                    <span className="text-gray-500">
                                                        📍 {event.location}
                                                    </span>
                                                    <span className="text-gray-500">
                                                        {new Date(event.event_date).toLocaleDateString()}
                                                    </span>
                                                </div>
                                                <Link 
                                                    href={route('events.show', event.slug)}
                                                    className="text-blue-600 hover:underline text-sm mt-2 inline-block"
                                                >
                                                    View Details →
                                                </Link>
                                            </CardContent>
                                        </Card>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Campus Gallery Preview */}
                {featuredPhotos.length > 0 && (
                    <section className="py-16 px-4">
                        <div className="max-w-6xl mx-auto">
                            <div className="flex justify-between items-center mb-12">
                                <h2 className="text-3xl font-bold text-gray-800">📸 Campus Life</h2>
                                <Link 
                                    href={route('gallery.index')}
                                    className="text-blue-600 hover:underline font-medium"
                                >
                                    View Gallery →
                                </Link>
                            </div>
                            <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-4">
                                {featuredPhotos.map((photo) => (
                                    <div key={photo.id} className="aspect-square overflow-hidden rounded-lg hover:shadow-lg transition-shadow">
                                        <img 
                                            src={photo.thumbnail_url || photo.image_url} 
                                            alt={photo.title}
                                            className="w-full h-full object-cover hover:scale-105 transition-transform"
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>
                )}

                {/* Quick Links */}
                <section className="py-16 px-4 bg-blue-600 text-white">
                    <div className="max-w-6xl mx-auto text-center">
                        <h2 className="text-3xl font-bold mb-12">🔗 Quick Access</h2>
                        <div className="grid md:grid-cols-4 gap-6">
                            <Link 
                                href={route('faculty.index')}
                                className="block p-6 bg-white/10 rounded-lg hover:bg-white/20 transition-colors"
                            >
                                <div className="text-4xl mb-4">👩‍⚕️</div>
                                <h3 className="font-semibold text-lg mb-2">Meet Our Faculty</h3>
                                <p className="text-blue-100 text-sm">Experienced healthcare professionals and educators</p>
                            </Link>
                            
                            <Link 
                                href={route('facilities.index')}
                                className="block p-6 bg-white/10 rounded-lg hover:bg-white/20 transition-colors"
                            >
                                <div className="text-4xl mb-4">🏢</div>
                                <h3 className="font-semibold text-lg mb-2">Campus Facilities</h3>
                                <p className="text-blue-100 text-sm">Modern labs, libraries, and clinical training areas</p>
                            </Link>
                            
                            <Link 
                                href={route('alumni.index')}
                                className="block p-6 bg-white/10 rounded-lg hover:bg-white/20 transition-colors"
                            >
                                <div className="text-4xl mb-4">🎓</div>
                                <h3 className="font-semibold text-lg mb-2">Alumni Network</h3>
                                <p className="text-blue-100 text-sm">Connect with our successful graduates</p>
                            </Link>
                            
                            <Link 
                                href={route('contact.index')}
                                className="block p-6 bg-white/10 rounded-lg hover:bg-white/20 transition-colors"
                            >
                                <div className="text-4xl mb-4">📞</div>
                                <h3 className="font-semibold text-lg mb-2">Contact Us</h3>
                                <p className="text-blue-100 text-sm">Get in touch for more information</p>
                            </Link>
                        </div>
                    </div>
                </section>

                {/* Call to Action */}
                <section className="py-16 px-4 bg-gradient-to-r from-pink-600 to-purple-600 text-white">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-4xl font-bold mb-6">
                            🌟 Start Your Midwifery Journey Today
                        </h2>
                        <p className="text-xl mb-8 opacity-90">
                            Join thousands of successful graduates who are making a difference in maternal and infant healthcare worldwide.
                        </p>
                        <div className="flex flex-wrap gap-4 justify-center">
                            <Button 
                                onClick={handleRegistrationClick}
                                size="lg" 
                                className="bg-white text-pink-600 hover:bg-gray-100"
                            >
                                📋 Apply for Admission
                            </Button>
                            <Button 
                                onClick={handleContactClick}
                                variant="outline" 
                                size="lg" 
                                className="border-white text-white hover:bg-white hover:text-pink-600"
                            >
                                📞 Schedule Campus Tour
                            </Button>
                        </div>
                    </div>
                </section>
            </div>
        </AppShell>
    );
}