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
import { Checkbox } from '@/components/ui/checkbox';

interface Props {
    success?: string;
    [key: string]: unknown;
}



export default function Alumni({ success }: Props) {
    const { data, setData, post, processing, errors } = useForm({
        full_name: '',
        email: '',
        phone: '',
        student_id: '',
        program_graduated: '',
        graduation_year: '',
        current_job_title: '',
        current_employer: '',
        employment_status: '',
        current_address: '',
        monthly_income: '',
        skills_acquired: '',
        program_feedback: '',
        career_goals: '',
        willing_to_mentor: false as boolean,
        additional_qualifications: [],
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        post(route('alumni.store'), {
            preserveScroll: true,
        });
    };

    const currentYear = new Date().getFullYear();
    const years = Array.from({ length: currentYear - 1980 + 2 }, (_, i) => currentYear - i + 1);

    return (
        <AppShell>
            <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50 py-12 px-4">
                <div className="max-w-4xl mx-auto">
                    {/* Header */}
                    <div className="text-center mb-12">
                        <h1 className="text-4xl font-bold text-gray-800 mb-4">
                            🎓 Alumni Tracer Study
                        </h1>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                            Help us improve our midwifery programs by sharing your career journey and experiences. 
                            Your feedback is invaluable in shaping future healthcare professionals.
                        </p>
                    </div>

                    {/* Why This Matters */}
                    <div className="grid md:grid-cols-3 gap-6 mb-12">
                        <Card className="text-center border-purple-200">
                            <CardHeader>
                                <div className="text-4xl mb-2">📊</div>
                                <CardTitle className="text-lg">Program Improvement</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-gray-600 text-sm">
                                    Your feedback helps us enhance our curriculum and better prepare future midwives.
                                </p>
                            </CardContent>
                        </Card>

                        <Card className="text-center border-blue-200">
                            <CardHeader>
                                <div className="text-4xl mb-2">🌐</div>
                                <CardTitle className="text-lg">Network Building</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-gray-600 text-sm">
                                    Connect with fellow alumni and create opportunities for professional collaboration.
                                </p>
                            </CardContent>
                        </Card>

                        <Card className="text-center border-green-200">
                            <CardHeader>
                                <div className="text-4xl mb-2">👥</div>
                                <CardTitle className="text-lg">Mentorship</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-gray-600 text-sm">
                                    Share your expertise with current students and recent graduates entering the field.
                                </p>
                            </CardContent>
                        </Card>
                    </div>

                    <Card>
                        <CardHeader>
                            <CardTitle>Alumni Information Form</CardTitle>
                            <CardDescription>
                                Please take a few minutes to update us on your career progress and share your valuable insights.
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
                                {/* Personal Information */}
                                <div>
                                    <h3 className="text-lg font-semibold mb-4 text-gray-800">👤 Personal Information</h3>
                                    <div className="grid md:grid-cols-2 gap-4">
                                        <div>
                                            <Label htmlFor="full_name">Full Name *</Label>
                                            <Input
                                                id="full_name"
                                                type="text"
                                                value={data.full_name}
                                                onChange={(e) => setData('full_name', e.target.value)}
                                                placeholder="Your full name"
                                                className={errors.full_name ? 'border-red-300' : ''}
                                            />
                                            {errors.full_name && (
                                                <p className="text-red-600 text-sm mt-1">{errors.full_name}</p>
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
                                            <Label htmlFor="student_id">Student ID (if remembered)</Label>
                                            <Input
                                                id="student_id"
                                                type="text"
                                                value={data.student_id}
                                                onChange={(e) => setData('student_id', e.target.value)}
                                                placeholder="Your former student ID"
                                                className={errors.student_id ? 'border-red-300' : ''}
                                            />
                                            {errors.student_id && (
                                                <p className="text-red-600 text-sm mt-1">{errors.student_id}</p>
                                            )}
                                        </div>
                                    </div>
                                </div>

                                {/* Academic Information */}
                                <div>
                                    <h3 className="text-lg font-semibold mb-4 text-gray-800">🎓 Academic Information</h3>
                                    <div className="grid md:grid-cols-2 gap-4">
                                        <div>
                                            <Label htmlFor="program_graduated">Program Graduated From *</Label>
                                            <Select onValueChange={(value) => setData('program_graduated', value)}>
                                                <SelectTrigger className={errors.program_graduated ? 'border-red-300' : ''}>
                                                    <SelectValue placeholder="Select your program" />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    <SelectItem value="Bachelor of Midwifery">Bachelor of Midwifery</SelectItem>
                                                    <SelectItem value="Master of Midwifery">Master of Midwifery</SelectItem>
                                                    <SelectItem value="Diploma in Midwifery">Diploma in Midwifery</SelectItem>
                                                    <SelectItem value="Certificate in Midwifery">Certificate in Midwifery</SelectItem>
                                                    <SelectItem value="Advanced Midwifery Practice">Advanced Midwifery Practice</SelectItem>
                                                </SelectContent>
                                            </Select>
                                            {errors.program_graduated && (
                                                <p className="text-red-600 text-sm mt-1">{errors.program_graduated}</p>
                                            )}
                                        </div>

                                        <div>
                                            <Label htmlFor="graduation_year">Graduation Year *</Label>
                                            <Select onValueChange={(value) => setData('graduation_year', value)}>
                                                <SelectTrigger className={errors.graduation_year ? 'border-red-300' : ''}>
                                                    <SelectValue placeholder="Select year" />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    {years.map((year) => (
                                                        <SelectItem key={year} value={year.toString()}>
                                                            {year}
                                                        </SelectItem>
                                                    ))}
                                                </SelectContent>
                                            </Select>
                                            {errors.graduation_year && (
                                                <p className="text-red-600 text-sm mt-1">{errors.graduation_year}</p>
                                            )}
                                        </div>
                                    </div>
                                </div>

                                {/* Employment Information */}
                                <div>
                                    <h3 className="text-lg font-semibold mb-4 text-gray-800">💼 Employment Information</h3>
                                    <div className="space-y-4">
                                        <div>
                                            <Label htmlFor="employment_status">Current Employment Status *</Label>
                                            <Select onValueChange={(value) => setData('employment_status', value)}>
                                                <SelectTrigger className={errors.employment_status ? 'border-red-300' : ''}>
                                                    <SelectValue placeholder="Select employment status" />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    <SelectItem value="employed">👩‍⚕️ Employed</SelectItem>
                                                    <SelectItem value="self-employed">🏃‍♀️ Self-employed</SelectItem>
                                                    <SelectItem value="unemployed">🔍 Unemployed</SelectItem>
                                                    <SelectItem value="studying">📚 Pursuing further studies</SelectItem>
                                                </SelectContent>
                                            </Select>
                                            {errors.employment_status && (
                                                <p className="text-red-600 text-sm mt-1">{errors.employment_status}</p>
                                            )}
                                        </div>

                                        <div className="grid md:grid-cols-2 gap-4">
                                            <div>
                                                <Label htmlFor="current_job_title">Current Job Title</Label>
                                                <Input
                                                    id="current_job_title"
                                                    type="text"
                                                    value={data.current_job_title}
                                                    onChange={(e) => setData('current_job_title', e.target.value)}
                                                    placeholder="e.g., Staff Midwife, Clinical Supervisor"
                                                    className={errors.current_job_title ? 'border-red-300' : ''}
                                                />
                                                {errors.current_job_title && (
                                                    <p className="text-red-600 text-sm mt-1">{errors.current_job_title}</p>
                                                )}
                                            </div>

                                            <div>
                                                <Label htmlFor="current_employer">Current Employer</Label>
                                                <Input
                                                    id="current_employer"
                                                    type="text"
                                                    value={data.current_employer}
                                                    onChange={(e) => setData('current_employer', e.target.value)}
                                                    placeholder="Hospital, clinic, or organization name"
                                                    className={errors.current_employer ? 'border-red-300' : ''}
                                                />
                                                {errors.current_employer && (
                                                    <p className="text-red-600 text-sm mt-1">{errors.current_employer}</p>
                                                )}
                                            </div>
                                        </div>

                                        <div className="grid md:grid-cols-2 gap-4">
                                            <div>
                                                <Label htmlFor="monthly_income">Monthly Income (Optional)</Label>
                                                <Input
                                                    id="monthly_income"
                                                    type="number"
                                                    value={data.monthly_income}
                                                    onChange={(e) => setData('monthly_income', e.target.value)}
                                                    placeholder="Enter amount in USD"
                                                    className={errors.monthly_income ? 'border-red-300' : ''}
                                                />
                                                {errors.monthly_income && (
                                                    <p className="text-red-600 text-sm mt-1">{errors.monthly_income}</p>
                                                )}
                                                <p className="text-gray-500 text-xs mt-1">This information helps us understand program outcomes</p>
                                            </div>

                                            <div>
                                                <Label htmlFor="current_address">Current Address</Label>
                                                <Input
                                                    id="current_address"
                                                    type="text"
                                                    value={data.current_address}
                                                    onChange={(e) => setData('current_address', e.target.value)}
                                                    placeholder="City, State/Province, Country"
                                                    className={errors.current_address ? 'border-red-300' : ''}
                                                />
                                                {errors.current_address && (
                                                    <p className="text-red-600 text-sm mt-1">{errors.current_address}</p>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Professional Development */}
                                <div>
                                    <h3 className="text-lg font-semibold mb-4 text-gray-800">🌟 Professional Development</h3>
                                    <div className="space-y-4">
                                        <div>
                                            <Label htmlFor="skills_acquired">Key Skills Acquired</Label>
                                            <Textarea
                                                id="skills_acquired"
                                                value={data.skills_acquired}
                                                onChange={(e) => setData('skills_acquired', e.target.value)}
                                                placeholder="Describe the most valuable skills you gained from the program..."
                                                rows={3}
                                                className={errors.skills_acquired ? 'border-red-300' : ''}
                                            />
                                            {errors.skills_acquired && (
                                                <p className="text-red-600 text-sm mt-1">{errors.skills_acquired}</p>
                                            )}
                                        </div>

                                        <div>
                                            <Label htmlFor="program_feedback">Program Feedback</Label>
                                            <Textarea
                                                id="program_feedback"
                                                value={data.program_feedback}
                                                onChange={(e) => setData('program_feedback', e.target.value)}
                                                placeholder="Share your thoughts on the program - what was excellent? What could be improved?"
                                                rows={3}
                                                className={errors.program_feedback ? 'border-red-300' : ''}
                                            />
                                            {errors.program_feedback && (
                                                <p className="text-red-600 text-sm mt-1">{errors.program_feedback}</p>
                                            )}
                                        </div>

                                        <div>
                                            <Label htmlFor="career_goals">Future Career Goals</Label>
                                            <Textarea
                                                id="career_goals"
                                                value={data.career_goals}
                                                onChange={(e) => setData('career_goals', e.target.value)}
                                                placeholder="What are your professional aspirations? How can the alumni network support you?"
                                                rows={3}
                                                className={errors.career_goals ? 'border-red-300' : ''}
                                            />
                                            {errors.career_goals && (
                                                <p className="text-red-600 text-sm mt-1">{errors.career_goals}</p>
                                            )}
                                        </div>
                                    </div>
                                </div>

                                {/* Mentorship */}
                                <div>
                                    <h3 className="text-lg font-semibold mb-4 text-gray-800">🤝 Mentorship Opportunity</h3>
                                    <div className="flex items-center space-x-2">
                                        <Checkbox
                                            id="willing_to_mentor"
                                            checked={data.willing_to_mentor}
                                            onCheckedChange={(checked) => setData('willing_to_mentor', Boolean(checked))}
                                        />
                                        <Label htmlFor="willing_to_mentor" className="text-sm">
                                            I am willing to mentor current students or recent graduates
                                        </Label>
                                    </div>
                                    <p className="text-gray-500 text-sm mt-2">
                                        Help shape the next generation of midwives by sharing your experience and guidance.
                                    </p>
                                </div>

                                <Button 
                                    type="submit" 
                                    size="lg" 
                                    disabled={processing}
                                    className="w-full"
                                >
                                    {processing ? '📤 Submitting...' : '📤 Submit Alumni Information'}
                                </Button>
                            </form>
                        </CardContent>
                    </Card>

                    {/* Privacy Note */}
                    <div className="mt-8 text-center">
                        <Card className="bg-blue-50 border-blue-200">
                            <CardContent className="pt-6">
                                <p className="text-blue-800 text-sm">
                                    🔒 <strong>Privacy Commitment:</strong> Your information is confidential and will only be used 
                                    for program improvement and alumni network purposes. We respect your privacy and will not 
                                    share your data with third parties without your explicit consent.
                                </p>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </AppShell>
    );
}