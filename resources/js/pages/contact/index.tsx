import React from 'react';
import { useForm } from '@inertiajs/react';
import { AppShell } from '@/components/app-shell';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';

interface Props {
    success?: string;
    [key: string]: unknown;
}



export default function Contact({ success }: Props) {
    const { data, setData, post, processing, errors } = useForm({
        name: '',
        email: '',
        phone: '',
        inquiry_type: '',
        subject: '',
        message: '',
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        post(route('contact.store'), {
            preserveScroll: true,
        });
    };

    return (
        <AppShell>
            <div className="min-h-screen bg-gradient-to-br from-blue-50 to-pink-50 py-12 px-4">
                <div className="max-w-6xl mx-auto">
                    {/* Header */}
                    <div className="text-center mb-12">
                        <h1 className="text-4xl font-bold text-gray-800 mb-4">
                            📞 Contact Us
                        </h1>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                            Have questions about our midwifery programs? Need information about admission requirements? 
                            We're here to help you start your journey in maternal and infant healthcare.
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-3 gap-12">
                        {/* Contact Information */}
                        <div className="lg:col-span-1">
                            <Card className="h-fit">
                                <CardHeader>
                                    <CardTitle>Get in Touch</CardTitle>
                                    <CardDescription>
                                        Reach out to us through any of these channels
                                    </CardDescription>
                                </CardHeader>
                                <CardContent className="space-y-6">
                                    <div className="flex items-start space-x-4">
                                        <div className="text-2xl">📍</div>
                                        <div>
                                            <h3 className="font-semibold">Campus Address</h3>
                                            <p className="text-gray-600 text-sm">
                                                123 Healthcare Avenue<br/>
                                                Medical District<br/>
                                                City, State 12345
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-start space-x-4">
                                        <div className="text-2xl">📞</div>
                                        <div>
                                            <h3 className="font-semibold">Phone Numbers</h3>
                                            <p className="text-gray-600 text-sm">
                                                Admissions: (555) 123-4567<br/>
                                                General Info: (555) 123-4568<br/>
                                                Student Services: (555) 123-4569
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-start space-x-4">
                                        <div className="text-2xl">📧</div>
                                        <div>
                                            <h3 className="font-semibold">Email Addresses</h3>
                                            <p className="text-gray-600 text-sm">
                                                admissions@midwifery-campus.edu<br/>
                                                info@midwifery-campus.edu<br/>
                                                support@midwifery-campus.edu
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-start space-x-4">
                                        <div className="text-2xl">🕒</div>
                                        <div>
                                            <h3 className="font-semibold">Office Hours</h3>
                                            <p className="text-gray-600 text-sm">
                                                Monday - Friday: 8:00 AM - 6:00 PM<br/>
                                                Saturday: 9:00 AM - 3:00 PM<br/>
                                                Sunday: Closed
                                            </p>
                                        </div>
                                    </div>

                                    <div className="pt-4 border-t">
                                        <h3 className="font-semibold mb-2">🚗 Parking Information</h3>
                                        <p className="text-gray-600 text-sm">
                                            Visitor parking available in Lot A. 
                                            Free parking for prospective students and campus visitors.
                                        </p>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>

                        {/* Contact Form */}
                        <div className="lg:col-span-2">
                            <Card>
                                <CardHeader>
                                    <CardTitle>Send us a Message</CardTitle>
                                    <CardDescription>
                                        Fill out the form below and we'll get back to you within 24 hours
                                    </CardDescription>
                                </CardHeader>
                                <CardContent>
                                    {success && (
                                        <Alert className="mb-6 border-green-200 bg-green-50">
                                            <AlertDescription className="text-green-800">
                                                ✅ {success}
                                            </AlertDescription>
                                        </Alert>
                                    )}

                                    <form onSubmit={handleSubmit} className="space-y-6">
                                        <div className="grid md:grid-cols-2 gap-4">
                                            <div>
                                                <Label htmlFor="name">Full Name *</Label>
                                                <Input
                                                    id="name"
                                                    type="text"
                                                    value={data.name}
                                                    onChange={(e) => setData('name', e.target.value)}
                                                    placeholder="Your full name"
                                                    className={errors.name ? 'border-red-300' : ''}
                                                />
                                                {errors.name && (
                                                    <p className="text-red-600 text-sm mt-1">{errors.name}</p>
                                                )}
                                            </div>

                                            <div>
                                                <Label htmlFor="email">Email Address *</Label>
                                                <Input
                                                    id="email"
                                                    type="email"
                                                    value={data.email}
                                                    onChange={(e) => setData('email', e.target.value)}
                                                    placeholder="your.email@example.com"
                                                    className={errors.email ? 'border-red-300' : ''}
                                                />
                                                {errors.email && (
                                                    <p className="text-red-600 text-sm mt-1">{errors.email}</p>
                                                )}
                                            </div>
                                        </div>

                                        <div className="grid md:grid-cols-2 gap-4">
                                            <div>
                                                <Label htmlFor="phone">Phone Number</Label>
                                                <Input
                                                    id="phone"
                                                    type="tel"
                                                    value={data.phone}
                                                    onChange={(e) => setData('phone', e.target.value)}
                                                    placeholder="(555) 123-4567"
                                                    className={errors.phone ? 'border-red-300' : ''}
                                                />
                                                {errors.phone && (
                                                    <p className="text-red-600 text-sm mt-1">{errors.phone}</p>
                                                )}
                                            </div>

                                            <div>
                                                <Label htmlFor="inquiry_type">Inquiry Type *</Label>
                                                <Select onValueChange={(value) => setData('inquiry_type', value)}>
                                                    <SelectTrigger className={errors.inquiry_type ? 'border-red-300' : ''}>
                                                        <SelectValue placeholder="Select inquiry type" />
                                                    </SelectTrigger>
                                                    <SelectContent>
                                                        <SelectItem value="admission">🎓 Admission Information</SelectItem>
                                                        <SelectItem value="general">ℹ️ General Information</SelectItem>
                                                        <SelectItem value="faculty">👩‍⚕️ Faculty Information</SelectItem>
                                                        <SelectItem value="facilities">🏢 Campus Facilities</SelectItem>
                                                        <SelectItem value="alumni">🌟 Alumni Services</SelectItem>
                                                    </SelectContent>
                                                </Select>
                                                {errors.inquiry_type && (
                                                    <p className="text-red-600 text-sm mt-1">{errors.inquiry_type}</p>
                                                )}
                                            </div>
                                        </div>

                                        <div>
                                            <Label htmlFor="subject">Subject *</Label>
                                            <Input
                                                id="subject"
                                                type="text"
                                                value={data.subject}
                                                onChange={(e) => setData('subject', e.target.value)}
                                                placeholder="Brief subject line"
                                                className={errors.subject ? 'border-red-300' : ''}
                                            />
                                            {errors.subject && (
                                                <p className="text-red-600 text-sm mt-1">{errors.subject}</p>
                                            )}
                                        </div>

                                        <div>
                                            <Label htmlFor="message">Message *</Label>
                                            <Textarea
                                                id="message"
                                                value={data.message}
                                                onChange={(e) => setData('message', e.target.value)}
                                                placeholder="Please provide details about your inquiry..."
                                                rows={5}
                                                className={errors.message ? 'border-red-300' : ''}
                                            />
                                            {errors.message && (
                                                <p className="text-red-600 text-sm mt-1">{errors.message}</p>
                                            )}
                                            <p className="text-gray-500 text-sm mt-1">
                                                {data.message.length}/2000 characters
                                            </p>
                                        </div>

                                        <Button 
                                            type="submit" 
                                            size="lg" 
                                            disabled={processing}
                                            className="w-full"
                                        >
                                            {processing ? '📤 Sending...' : '📤 Send Message'}
                                        </Button>
                                    </form>
                                </CardContent>
                            </Card>
                        </div>
                    </div>

                    {/* Additional Information */}
                    <div className="mt-12 grid md:grid-cols-3 gap-6">
                        <Card className="text-center">
                            <CardHeader>
                                <div className="text-4xl mb-2">🏥</div>
                                <CardTitle>Campus Tours</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-gray-600 text-sm">
                                    Schedule a personalized campus tour to see our facilities, 
                                    meet faculty, and learn about student life.
                                </p>
                            </CardContent>
                        </Card>

                        <Card className="text-center">
                            <CardHeader>
                                <div className="text-4xl mb-2">💬</div>
                                <CardTitle>Virtual Information Sessions</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-gray-600 text-sm">
                                    Join our weekly virtual information sessions every 
                                    Wednesday at 6:00 PM EST to learn about our programs.
                                </p>
                            </CardContent>
                        </Card>

                        <Card className="text-center">
                            <CardHeader>
                                <div className="text-4xl mb-2">📱</div>
                                <CardTitle>Live Chat Support</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-gray-600 text-sm">
                                    Use our live chat feature during business hours 
                                    for immediate answers to your questions.
                                </p>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </AppShell>
    );
}