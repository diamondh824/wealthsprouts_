"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import {
  GraduationCap,
  Building,
  Users,
  Calendar,
  CheckCircle,
  Mail,
  Leaf,
  BookOpen,
  Video,
  Target,
  Award,
} from "lucide-react"
import Link from "next/link"

export default function Institutional() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organization: "",
    role: "",
    participants: "",
    program: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const subject = encodeURIComponent("Institutional Program Inquiry")
    const body = encodeURIComponent(`
Name: ${formData.name}
Email: ${formData.email}
Organization: ${formData.organization}
Role: ${formData.role}
Expected Participants: ${formData.participants}
Program Interest: ${formData.program}
Message: ${formData.message}
  `)
    window.location.href = `mailto:info@wealthynotebook.com?subject=${subject}&body=${body}`
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <div className="min-h-screen bg-[#F7F5EF]">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-[#A8C686]/20">
        <div className="px-4 lg:px-6 h-16 flex items-center">
          <Link href="/" className="flex items-center space-x-2">
            <Leaf className="h-8 w-8 text-[#1F4E45]" />
            <span className="text-2xl font-bold">
              <span className="font-sans text-[#1F4E45]">Wealth</span>
              <span className="font-serif text-[#A8C686] ml-1">Sprouts</span>
            </span>
          </Link>
          <nav className="ml-auto flex gap-6 items-center">
            <Link href="/" className="text-sm font-medium text-[#1F4E45] hover:text-[#A8C686] transition-colors">
              Home
            </Link>
            <Link
              href="/directory"
              className="text-sm font-medium text-[#1F4E45] hover:text-[#A8C686] transition-colors"
            >
              Directory
            </Link>
            <Button
              onClick={() => window.open("https://oncehub.com/wealthsprouts", "_blank")}
              className="bg-gradient-to-r from-[#1F4E45] to-[#A8C686] hover:from-[#A8C686] hover:to-[#1F4E45] text-white"
            >
              Book a Workshop
            </Button>
          </nav>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-[#1F4E45] to-[#A8C686] text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 left-10 w-40 h-40 border border-white rounded-full animate-pulse"></div>
            <div className="absolute bottom-10 right-10 w-32 h-32 border border-white rounded-full animate-pulse delay-1000"></div>
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center space-y-8">
              <Badge className="bg-white/20 text-white text-lg px-6 py-2">🏫 Institutional Programs</Badge>

              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                Financial Wellness Programs for Schools & Organizations
              </h1>

              <p className="text-xl opacity-90 max-w-3xl mx-auto">
                Empower your students, employees, and community members with practical financial education that creates
                lasting change.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button
                  onClick={() => window.open("https://oncehub.com/wealthsprouts", "_blank")}
                  size="lg"
                  className="bg-white text-[#1F4E45] hover:bg-gray-100 px-8 py-4 text-lg font-bold transform hover:scale-105 transition-all duration-200"
                >
                  <Calendar className="mr-2 h-5 w-5" />
                  Book a Workshop
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Program Types */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-[#1F4E45] mb-4">
                Tailored Programs for Every Organization
              </h2>
              <p className="text-lg text-[#1F4E45]/70 max-w-2xl mx-auto">
                From high schools to corporations, we create customized financial wellness programs that meet your
                specific needs and goals.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {[
                {
                  icon: GraduationCap,
                  title: "Educational Institutions",
                  description:
                    "High schools, colleges, and universities seeking to prepare students for financial success.",
                  features: [
                    "Student loan guidance",
                    "Budgeting basics",
                    "Career financial planning",
                    "Credit education",
                  ],
                  color: "from-[#A8C686] to-[#C9B17E]",
                },
                {
                  icon: Building,
                  title: "Corporate Programs",
                  description: "Employee financial wellness programs that reduce stress and increase productivity.",
                  features: ["401(k) optimization", "Benefits education", "Debt management", "Retirement planning"],
                  color: "from-[#EB8A7E] to-[#A8C686]",
                },
                {
                  icon: Users,
                  title: "Community Organizations",
                  description: "Nonprofits, community centers, and groups focused on financial empowerment.",
                  features: [
                    "First-time homebuyer prep",
                    "Small business basics",
                    "Family budgeting",
                    "Emergency planning",
                  ],
                  color: "from-[#C9B17E] to-[#EB8A7E]",
                },
              ].map((program, index) => (
                <Card
                  key={index}
                  className="border-none shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group"
                >
                  <CardContent className="p-8 text-center relative overflow-hidden">
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${program.color} opacity-5 group-hover:opacity-10 transition-opacity`}
                    ></div>

                    <div
                      className={`w-20 h-20 bg-gradient-to-br ${program.color} rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform`}
                    >
                      <program.icon className="h-10 w-10 text-white" />
                    </div>

                    <h3 className="text-xl font-bold text-[#1F4E45] mb-4">{program.title}</h3>
                    <p className="text-[#1F4E45]/70 mb-6">{program.description}</p>

                    <div className="space-y-2 mb-6">
                      {program.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center justify-center text-sm text-[#1F4E45]/60">
                          <CheckCircle className="h-4 w-4 text-[#A8C686] mr-2" />
                          {feature}
                        </div>
                      ))}
                    </div>

                    <Button
                      onClick={() => window.open("https://oncehub.com/wealthsprouts", "_blank")}
                      className="bg-[#1F4E45] hover:bg-[#1F4E45]/90 text-white"
                    >
                      Learn More
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Workshop & Webinar Offerings */}
        <section className="py-20 bg-[#F7F5EF]">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <Badge className="bg-[#EB8A7E] text-white mb-4">📚 Workshop Catalog</Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-[#1F4E45] mb-4">Workshops & Webinars</h2>
              <p className="text-lg text-[#1F4E45]/70 max-w-2xl mx-auto">
                Interactive sessions designed to build practical financial skills and confidence
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {[
                {
                  type: "In-Person Workshop",
                  title: "Financial Foundations",
                  duration: "2 hours",
                  participants: "15-30 people",
                  price: "$500",
                  description: "Comprehensive introduction to budgeting, saving, and financial goal setting.",
                  icon: BookOpen,
                },
                {
                  type: "Virtual Webinar",
                  title: "Debt Freedom Strategy",
                  duration: "90 minutes",
                  participants: "Up to 100 people",
                  price: "$300",
                  description: "Proven strategies for eliminating debt and building financial stability.",
                  icon: Video,
                },
                {
                  type: "In-Person Workshop",
                  title: "Investment Basics",
                  duration: "3 hours",
                  participants: "10-25 people",
                  price: "$750",
                  description: "Introduction to investing, risk management, and building wealth over time.",
                  icon: Target,
                },
                {
                  type: "Virtual Webinar",
                  title: "First-Time Homebuyer",
                  duration: "2 hours",
                  participants: "Up to 50 people",
                  price: "$400",
                  description: "Complete guide to preparing for and purchasing your first home.",
                  icon: Award,
                },
              ].map((workshop, index) => (
                <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4 mb-4">
                      <div className="w-12 h-12 bg-[#A8C686]/20 rounded-lg flex items-center justify-center flex-shrink-0">
                        <workshop.icon className="h-6 w-6 text-[#1F4E45]" />
                      </div>
                      <div className="flex-1">
                        <Badge className="bg-[#C9B17E] text-white text-xs mb-2">{workshop.type}</Badge>
                        <h3 className="text-xl font-bold text-[#1F4E45] mb-2">{workshop.title}</h3>
                        <p className="text-[#1F4E45]/70 text-sm mb-3">{workshop.description}</p>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                      <div>
                        <span className="text-[#1F4E45]/60">Duration:</span>
                        <div className="font-medium text-[#1F4E45]">{workshop.duration}</div>
                      </div>
                      <div>
                        <span className="text-[#1F4E45]/60">Participants:</span>
                        <div className="font-medium text-[#1F4E45]">{workshop.participants}</div>
                      </div>
                    </div>

                    <div className="flex justify-between items-center">
                      <div className="text-2xl font-bold text-[#1F4E45]">{workshop.price}</div>
                      <Button
                        onClick={() => window.open("https://oncehub.com/wealthsprouts", "_blank")}
                        className="bg-[#A8C686] hover:bg-[#A8C686]/90 text-white"
                      >
                        Book Workshop
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing & Packages */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-[#1F4E45] mb-4">Flexible Pricing Options</h2>
              <p className="text-lg text-[#1F4E45]/70 max-w-2xl mx-auto">
                Choose the package that best fits your organization's needs and budget
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {[
                {
                  name: "Starter Package",
                  price: "$1,500",
                  description: "Perfect for small organizations getting started",
                  features: [
                    "2 workshop sessions",
                    "Up to 50 participants total",
                    "Digital resource packet",
                    "Follow-up Q&A session",
                    "Basic progress tracking",
                  ],
                  color: "border-[#A8C686]",
                  buttonColor: "bg-[#A8C686]",
                },
                {
                  name: "Professional Package",
                  price: "$3,500",
                  description: "Comprehensive program for medium organizations",
                  features: [
                    "5 workshop sessions",
                    "Up to 150 participants total",
                    "Customized content",
                    "Monthly follow-up sessions",
                    "Detailed progress reports",
                    "Access to professional directory",
                  ],
                  color: "border-[#EB8A7E]",
                  buttonColor: "bg-[#EB8A7E]",
                  popular: true,
                },
                {
                  name: "Enterprise Package",
                  price: "Custom",
                  description: "Tailored solution for large organizations",
                  features: [
                    "Unlimited workshop sessions",
                    "Unlimited participants",
                    "Fully customized curriculum",
                    "Dedicated program manager",
                    "Quarterly progress reviews",
                    "Priority professional matching",
                    "Train-the-trainer options",
                  ],
                  color: "border-[#C9B17E]",
                  buttonColor: "bg-[#C9B17E]",
                },
              ].map((package_, index) => (
                <Card
                  key={index}
                  className={`border-2 ${package_.color} shadow-lg hover:shadow-xl transition-all duration-300 relative`}
                >
                  {package_.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <Badge className="bg-[#EB8A7E] text-white">Most Popular</Badge>
                    </div>
                  )}
                  <CardContent className="p-8">
                    <div className="text-center mb-6">
                      <h3 className="text-2xl font-bold text-[#1F4E45] mb-2">{package_.name}</h3>
                      <div className="text-3xl font-bold text-[#1F4E45] mb-2">{package_.price}</div>
                      <p className="text-[#1F4E45]/70 text-sm">{package_.description}</p>
                    </div>

                    <ul className="space-y-3 mb-8">
                      {package_.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-[#1F4E45]/80">
                          <CheckCircle className="h-4 w-4 text-[#A8C686] mr-3 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>

                    <Button
                      onClick={() => window.open("https://oncehub.com/wealthsprouts", "_blank")}
                      className={`w-full ${package_.buttonColor} hover:opacity-90 text-white`}
                    >
                      Get Started
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section className="py-20 bg-gradient-to-br from-[#A8C686]/10 to-[#C9B17E]/10">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-[#1F4E45] mb-4">Ready to Get Started?</h2>
                <p className="text-lg text-[#1F4E45]/70 max-w-2xl mx-auto">
                  Contact us to discuss your organization's needs and create a customized financial wellness program.
                </p>
              </div>

              <Card className="border-2 border-[#A8C686] shadow-xl">
                <CardContent className="p-8">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-[#1F4E45] mb-2">Full Name *</label>
                        <Input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="border-[#A8C686]/30 focus:border-[#A8C686]"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-[#1F4E45] mb-2">Email Address *</label>
                        <Input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="border-[#A8C686]/30 focus:border-[#A8C686]"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-[#1F4E45] mb-2">Organization Name *</label>
                        <Input
                          type="text"
                          name="organization"
                          value={formData.organization}
                          onChange={handleChange}
                          required
                          className="border-[#A8C686]/30 focus:border-[#A8C686]"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-[#1F4E45] mb-2">Your Role *</label>
                        <Input
                          type="text"
                          name="role"
                          value={formData.role}
                          onChange={handleChange}
                          required
                          className="border-[#A8C686]/30 focus:border-[#A8C686]"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-[#1F4E45] mb-2">Expected Participants</label>
                        <select
                          name="participants"
                          value={formData.participants}
                          onChange={handleChange}
                          className="w-full px-3 py-2 border border-[#A8C686]/30 rounded-md focus:border-[#A8C686] focus:outline-none bg-white"
                        >
                          <option value="">Select range</option>
                          <option value="1-25">1-25 people</option>
                          <option value="26-50">26-50 people</option>
                          <option value="51-100">51-100 people</option>
                          <option value="101-250">101-250 people</option>
                          <option value="250+">250+ people</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-[#1F4E45] mb-2">Program Interest</label>
                        <select
                          name="program"
                          value={formData.program}
                          onChange={handleChange}
                          className="w-full px-3 py-2 border border-[#A8C686]/30 rounded-md focus:border-[#A8C686] focus:outline-none bg-white"
                        >
                          <option value="">Select program type</option>
                          <option value="workshops">Workshop Series</option>
                          <option value="webinars">Webinar Program</option>
                          <option value="custom">Custom Program</option>
                          <option value="consultation">Initial Consultation</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-[#1F4E45] mb-2">Tell us about your needs</label>
                      <Textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={4}
                        className="border-[#A8C686]/30 focus:border-[#A8C686]"
                        placeholder="Describe your organization's goals, timeline, and any specific topics you'd like to cover..."
                      />
                    </div>

                    <div className="text-center">
                      <Button
                        type="submit"
                        size="lg"
                        className="bg-gradient-to-r from-[#1F4E45] to-[#A8C686] hover:from-[#A8C686] hover:to-[#1F4E45] text-white px-8 py-4 text-lg"
                      >
                        <Mail className="mr-2 h-5 w-5" />
                        Send Inquiry
                      </Button>
                      <p className="text-sm text-[#1F4E45]/60 mt-3">
                        We'll respond within 24 hours with a customized proposal
                      </p>
                    </div>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-12 bg-[#1F4E45] text-white">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="mb-4 md:mb-0">
                <Link href="/" className="flex items-center space-x-2">
                  <Leaf className="h-8 w-8 text-[#A8C686]" />
                  <span className="text-2xl font-bold">
                    <span className="font-sans">Wealth</span>
                    <span className="font-serif text-[#A8C686] ml-1">Sprouts</span>
                  </span>
                </Link>
              </div>

              <div className="flex space-x-6 text-sm">
                <Link href="/about" className="hover:text-[#A8C686] transition-colors">
                  About
                </Link>
                <Link href="/directory" className="hover:text-[#A8C686] transition-colors">
                  Directory
                </Link>
                <Link href="/contact" className="hover:text-[#A8C686] transition-colors">
                  Contact
                </Link>
              </div>

              <div className="flex space-x-4">
                <a href="#" className="hover:text-[#A8C686] transition-colors">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 448 512"
                    className="h-5 w-5"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M400 32H48A48 48 0 0 0 0 80v352a48 48 0 0 0 48 48h137.25V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 93.67 4.84v77.16h-62.14c-30.91 0-37.37 19.12-37.37 38.49V256h74.73l-11.72 71.69h-63v154.31H400a48 48 0 0 0 48-48V80a48 48 0 0 0-48-48z"></path>
                  </svg>
                </a>
                <a href="#" className="hover:text-[#A8C686] transition-colors">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 512 512"
                    className="h-5 w-5"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.732-105.583 298.584-298.583 298.584-59.772 0-114.172-16.021-159.44-44.844 5.139.33 10.278.66 15.417.66 30.708 0 58.673-10.492 81.924-28.373-57.268-1.129-105.312-31.759-123.426-72.865 9.662 1.809 19.333 2.829 29.041 2.829 14.434 0 28.521-2.069 41.169-5.843-59.311-11.742-102.149-63.438-102.149-122.472v-1.532c17.79 9.703 40.089 16.317 63.957 17.299-35.222-23.656-57.383-63.82-57.383-105.229 0-2.173.021-4.341.08-6.504 32.667 40.078 85.585 62.831 139.585 65.281-27.219-17.586-45.155-47.167-45.155-78.734 0-8.476.949-16.624 2.564-24.717 52.655 66.048 137.099 103.102 239.399 109.024-16.02 6.294-31.826 9.575-47.692 9.575-3.005 0-5.984-.262-8.961-.759 3.165 19.517 12.536 37.315 29.192 50.513z"></path>
                  </svg>
                </a>
                <a href="#" className="hover:text-[#A8C686] transition-colors">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 320 512"
                    className="h-5 w-5"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M279.14 288l14.22-92.66h-88.91v-62.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26C260.43 6.26 240.34 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"></path>
                  </svg>
                </a>
              </div>
            </div>
            <div className="text-center mt-4">
              <p className="text-xs">© {new Date().getFullYear()} Wealth Sprouts. All rights reserved.</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
