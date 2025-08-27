import React from 'react';
import { AppShell } from '@/components/app-shell';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { router } from '@inertiajs/react';

interface StudyProgram {
    id: number;
    name: string;
    degree_level: string;
    description: string;
    duration_months: number;
    tuition_fee?: number;
    admission_requirements?: string;
}

interface Props {
    programs: StudyProgram[];
    [key: string]: unknown;
}

export default function Registration({ programs }: Props) {
    const handleContactClick = () => {
        router.visit(route('contact.index'));
    };

    return (
        <AppShell>
            <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 py-12 px-4">
                <div className="max-w-6xl mx-auto">
                    {/* Header */}
                    <div className="text-center mb-12">
                        <h1 className="text-4xl font-bold text-gray-800 mb-4">
                            📋 Registration Information
                        </h1>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                            Begin your journey to becoming a professional midwife. Explore our programs, 
                            understand the admission requirements, and take the first step toward a rewarding 
                            career in maternal and infant healthcare.
                        </p>
                    </div>

                    {/* Quick Stats */}
                    <div className="grid md:grid-cols-4 gap-6 mb-12">
                        <Card className="text-center border-green-200">
                            <CardHeader className="pb-2">
                                <div className="text-3xl mb-2">🎯</div>
                                <CardTitle className="text-2xl text-green-600">95%</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-gray-600 text-sm">Job Placement Rate</p>
                            </CardContent>
                        </Card>

                        <Card className="text-center border-blue-200">
                            <CardHeader className="pb-2">
                                <div className="text-3xl mb-2">👥</div>
                                <CardTitle className="text-2xl text-blue-600">12:1</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-gray-600 text-sm">Student-to-Faculty Ratio</p>
                            </CardContent>
                        </Card>

                        <Card className="text-center border-purple-200">
                            <CardHeader className="pb-2">
                                <div className="text-3xl mb-2">🏥</div>
                                <CardTitle className="text-2xl text-purple-600">15+</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-gray-600 text-sm">Clinical Partners</p>
                            </CardContent>
                        </Card>

                        <Card className="text-center border-orange-200">
                            <CardHeader className="pb-2">
                                <div className="text-3xl mb-2">💰</div>
                                <CardTitle className="text-2xl text-orange-600">85%</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-gray-600 text-sm">Receive Financial Aid</p>
                            </CardContent>
                        </Card>
                    </div>

                    {/* Application Process */}
                    <Card className="mb-12">
                        <CardHeader>
                            <CardTitle className="text-2xl">📝 Application Process</CardTitle>
                            <CardDescription>
                                Follow these simple steps to apply for our midwifery programs
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="grid md:grid-cols-4 gap-6">
                                <div className="text-center">
                                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                        <span className="text-blue-600 font-bold">1</span>
                                    </div>
                                    <h3 className="font-semibold mb-2">📋 Submit Application</h3>
                                    <p className="text-gray-600 text-sm">
                                        Complete our online application form with personal information and academic history.
                                    </p>
                                </div>
                                
                                <div className="text-center">
                                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                        <span className="text-green-600 font-bold">2</span>
                                    </div>
                                    <h3 className="font-semibold mb-2">📄 Submit Documents</h3>
                                    <p className="text-gray-600 text-sm">
                                        Provide transcripts, letters of recommendation, and personal statement.
                                    </p>
                                </div>
                                
                                <div className="text-center">
                                    <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                        <span className="text-purple-600 font-bold">3</span>
                                    </div>
                                    <h3 className="font-semibold mb-2">🎤 Interview</h3>
                                    <p className="text-gray-600 text-sm">
                                        Participate in a personal interview to discuss your motivation and goals.
                                    </p>
                                </div>
                                
                                <div className="text-center">
                                    <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                        <span className="text-orange-600 font-bold">4</span>
                                    </div>
                                    <h3 className="font-semibold mb-2">✅ Enrollment</h3>
                                    <p className="text-gray-600 text-sm">
                                        Upon acceptance, complete enrollment and begin your midwifery journey!
                                    </p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Available Programs */}
                    <div className="mb-12">
                        <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">
                            🎓 Available Programs
                        </h2>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {programs.map((program) => (
                                <Card key={program.id} className="hover:shadow-lg transition-shadow">
                                    <CardHeader>
                                        <Badge className="w-fit mb-2" variant="outline">
                                            {program.degree_level}
                                        </Badge>
                                        <CardTitle className="text-xl">{program.name}</CardTitle>
                                        <CardDescription>
                                            Duration: {Math.floor(program.duration_months / 12)} years 
                                            {program.duration_months % 12 ? ` ${program.duration_months % 12} months` : ''}
                                        </CardDescription>
                                    </CardHeader>
                                    <CardContent>
                                        <p className="text-gray-600 mb-4 line-clamp-3">
                                            {program.description}
                                        </p>
                                        
                                        {program.tuition_fee && (
                                            <p className="font-semibold text-green-600 mb-4">
                                                💰 ${program.tuition_fee.toLocaleString()} per year
                                            </p>
                                        )}
                                        
                                        {program.admission_requirements && (
                                            <div className="mb-4">
                                                <h4 className="font-semibold text-sm mb-2 text-gray-800">
                                                    📋 Admission Requirements:
                                                </h4>
                                                <p className="text-gray-600 text-sm">
                                                    {program.admission_requirements}
                                                </p>
                                            </div>
                                        )}
                                        
                                        <Button className="w-full" onClick={handleContactClick}>
                                            Apply Now
                                        </Button>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>

                    {/* Important Dates */}
                    <div className="grid md:grid-cols-2 gap-12 mb-12">
                        <Card>
                            <CardHeader>
                                <CardTitle>📅 Important Dates</CardTitle>
                                <CardDescription>Key deadlines and dates to remember</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-4">
                                    <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg">
                                        <div>
                                            <h4 className="font-semibold">Fall 2024 Application Deadline</h4>
                                            <p className="text-sm text-gray-600">Regular admission</p>
                                        </div>
                                        <Badge variant="outline">July 15</Badge>
                                    </div>
                                    
                                    <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg">
                                        <div>
                                            <h4 className="font-semibold">Early Decision Deadline</h4>
                                            <p className="text-sm text-gray-600">$100 tuition discount</p>
                                        </div>
                                        <Badge variant="outline">June 30</Badge>
                                    </div>
                                    
                                    <div className="flex justify-between items-center p-3 bg-purple-50 rounded-lg">
                                        <div>
                                            <h4 className="font-semibold">Financial Aid Application</h4>
                                            <p className="text-sm text-gray-600">Priority consideration</p>
                                        </div>
                                        <Badge variant="outline">May 1</Badge>
                                    </div>
                                    
                                    <div className="flex justify-between items-center p-3 bg-orange-50 rounded-lg">
                                        <div>
                                            <h4 className="font-semibold">Classes Begin</h4>
                                            <p className="text-sm text-gray-600">Fall 2024 semester</p>
                                        </div>
                                        <Badge variant="outline">August 26</Badge>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader>
                                <CardTitle>💰 Financial Information</CardTitle>
                                <CardDescription>Making your education affordable</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-4">
                                    <div>
                                        <h4 className="font-semibold mb-2">🎓 Financial Aid Options</h4>
                                        <ul className="text-sm text-gray-600 space-y-1">
                                            <li>• Federal Pell Grants</li>
                                            <li>• Federal Student Loans</li>
                                            <li>• Merit-based Scholarships</li>
                                            <li>• Work-Study Programs</li>
                                            <li>• Healthcare Workforce Scholarships</li>
                                        </ul>
                                    </div>
                                    
                                    <div>
                                        <h4 className="font-semibold mb-2">📊 Payment Plans</h4>
                                        <ul className="text-sm text-gray-600 space-y-1">
                                            <li>• Monthly payment plans available</li>
                                            <li>• Interest-free options</li>
                                            <li>• Employer tuition assistance programs</li>
                                            <li>• Veterans education benefits accepted</li>
                                        </ul>
                                    </div>
                                    
                                    <div className="p-3 bg-yellow-50 rounded-lg">
                                        <p className="text-sm text-yellow-800">
                                            <strong>💡 Tip:</strong> Complete your FAFSA early for maximum financial aid consideration!
                                        </p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>

                    {/* Contact Information */}
                    <Card className="text-center">
                        <CardHeader>
                            <CardTitle className="text-2xl">🤝 Ready to Start Your Journey?</CardTitle>
                            <CardDescription>
                                We're here to help you every step of the way
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="grid md:grid-cols-3 gap-6 mb-6">
                                <div>
                                    <div className="text-2xl mb-2">📞</div>
                                    <h3 className="font-semibold mb-1">Call Admissions</h3>
                                    <p className="text-gray-600 text-sm">(555) 123-4567</p>
                                </div>
                                
                                <div>
                                    <div className="text-2xl mb-2">📧</div>
                                    <h3 className="font-semibold mb-1">Email Us</h3>
                                    <p className="text-gray-600 text-sm">admissions@midwifery-campus.edu</p>
                                </div>
                                
                                <div>
                                    <div className="text-2xl mb-2">🏢</div>
                                    <h3 className="font-semibold mb-1">Visit Campus</h3>
                                    <p className="text-gray-600 text-sm">Schedule a personal tour</p>
                                </div>
                            </div>
                            
                            <div className="flex flex-wrap gap-4 justify-center">
                                <Button size="lg" onClick={handleContactClick}>
                                    📋 Start Application
                                </Button>
                                <Button variant="outline" size="lg" onClick={handleContactClick}>
                                    📞 Schedule Consultation
                                </Button>
                                <Button variant="outline" size="lg" onClick={handleContactClick}>
                                    🏫 Book Campus Tour
                                </Button>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </AppShell>
    );
}