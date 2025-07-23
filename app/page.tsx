"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import {
  BookOpen,
  Users,
  UserCheck,
  ArrowRight,
  Leaf,
  TrendingUp,
  CheckCircle,
  PlayCircle,
  Sparkles,
  Calculator,
  Download,
  Mail,
  Lock,
  Calendar,
} from "lucide-react"
import Link from "next/link"
import { FinancialRootsQuiz } from "@/components/financial-roots-quiz"
import { FinancialProsSection } from "@/components/financial-pros-section"

// Animated Counter Component
function AnimatedCounter({
  end,
  duration = 2000,
  prefix = "",
  suffix = "",
}: { end: number; duration?: number; prefix?: string; suffix?: string }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    let startTime: number
    let animationFrame: number

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime
      const progress = Math.min((currentTime - startTime) / duration, 1)

      setCount(Math.floor(progress * end))

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate)
      }
    }

    animationFrame = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(animationFrame)
  }, [end, duration])

  return (
    <span>
      {prefix}
      {count.toLocaleString()}
      {suffix}
    </span>
  )
}

// Email Signup Component
function EmailSignup({ className = "" }: { className?: string }) {
  const [email, setEmail] = useState("")
  const [name, setName] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    // ConvertKit integration would go here
    setTimeout(() => {
      setIsSubmitting(false)
      setEmail("")
      setName("")
      alert("Thank you for subscribing!")
    }, 1000)
  }

  return (
    <Card className={`border-2 border-[#A8C686] shadow-lg ${className}`}>
      <CardContent className="p-6">
        <div className="text-center mb-4">
          <Mail className="h-8 w-8 text-[#1F4E45] mx-auto mb-2" />
          <h3 className="text-lg font-bold text-[#1F4E45]">Get Financial Tips & Updates</h3>
          <p className="text-sm text-[#1F4E45]/70">Join our community for weekly insights</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-3">
          <Input
            type="text"
            placeholder="Your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="border-[#A8C686]/30 focus:border-[#A8C686]"
          />
          <Input
            type="email"
            placeholder="Your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="border-[#A8C686]/30 focus:border-[#A8C686]"
          />
          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-[#1F4E45] hover:bg-[#1F4E45]/90 text-white"
          >
            {isSubmitting ? "Subscribing..." : "Get Started Free"}
          </Button>
        </form>

        <div className="flex items-center justify-center mt-3 text-xs text-[#1F4E45]/60">
          <Lock className="h-3 w-3 mr-1" />
          We respect your privacy. Unsubscribe anytime.
        </div>
      </CardContent>
    </Card>
  )
}

// Savings Calculator Widget
function SavingsCalculator() {
  const [isOpen, setIsOpen] = useState(false)
  const [monthlyAmount, setMonthlyAmount] = useState(100)
  const [years, setYears] = useState(5)

  const calculateSavings = () => {
    const months = years * 12
    const total = monthlyAmount * months
    const withInterest = total * 1.05 // Simple 5% growth
    return { total, withInterest }
  }

  const { total, withInterest } = calculateSavings()

  return (
    <div className="fixed bottom-6 left-6 z-50">
      {isOpen && (
        <Card className="mb-4 w-80 border-2 border-[#A8C686] shadow-xl">
          <CardContent className="p-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-bold text-[#1F4E45]">Savings Calculator</h3>
              <button onClick={() => setIsOpen(false)} className="text-[#1F4E45]/60 hover:text-[#1F4E45]">
                ✕
              </button>
            </div>

            <div className="space-y-4">
              <div>
                <label className="text-sm text-[#1F4E45]/70">Monthly Amount</label>
                <Input
                  type="number"
                  value={monthlyAmount}
                  onChange={(e) => setMonthlyAmount(Number(e.target.value))}
                  className="border-[#A8C686]/30"
                />
              </div>

              <div>
                <label className="text-sm text-[#1F4E45]/70">Years</label>
                <Input
                  type="number"
                  value={years}
                  onChange={(e) => setYears(Number(e.target.value))}
                  className="border-[#A8C686]/30"
                />
              </div>

              <div className="bg-[#A8C686]/10 p-4 rounded-lg">
                <div className="text-sm text-[#1F4E45]/70">Total Saved</div>
                <div className="text-2xl font-bold text-[#1F4E45]">${total.toLocaleString()}</div>
                <div className="text-sm text-[#A8C686]">With growth: ${withInterest.toLocaleString()}</div>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      <Button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-[#A8C686] hover:bg-[#A8C686]/90 text-white rounded-full w-14 h-14 shadow-lg"
      >
        <Calculator className="h-6 w-6" />
      </Button>
    </div>
  )
}

export default function WealthSproutV4() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeTestimonial, setActiveTestimonial] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % 3)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  const testimonials = [
    {
      quote:
        "The monthly Q&A sessions with experts have been game-changing. Finally, financial advice that makes sense!",
      name: "Sarah M.",
      role: "Freelance Designer",
      achievement: "Built emergency fund",
      color: "from-[#A8C686] to-[#C9B17E]",
    },
    {
      quote: "Found my financial planner through their vetted directory. No sales pressure, just genuine help.",
      name: "Marcus T.",
      role: "Small Business Owner",
      achievement: "Streamlined business finances",
      color: "from-[#EB8A7E] to-[#A8C686]",
    },
    {
      quote:
        "The community support is incredible. People who actually understand the first-gen wealth building journey.",
      name: "Priya K.",
      role: "Marketing Professional",
      achievement: "Started investing confidently",
      color: "from-[#C9B17E] to-[#EB8A7E]",
    },
  ]

  return (
    <div className="min-h-screen bg-[#F7F5EF] overflow-x-hidden">
      {/* Savings Calculator Widget */}
      <SavingsCalculator />

      {/* Sticky Header */}
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? "bg-white/95 backdrop-blur-md shadow-lg" : "bg-transparent"}`}
      >
        <div className="px-4 lg:px-6 h-16 flex items-center">
          <Link href="/" className="flex items-center space-x-2">
            <div className="relative">
              <Leaf className="h-8 w-8 text-[#1F4E45] animate-pulse" />
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-[#EB8A7E] rounded-full animate-bounce"></div>
            </div>
            <span className="text-2xl font-bold">
              <span className="font-sans text-[#1F4E45]">Wealth</span>
              <span className="font-serif text-[#A8C686] ml-1">Sprouts</span>
            </span>
          </Link>
          <nav className="ml-auto flex gap-6 items-center">
            <Link
              href="/directory"
              className="text-sm font-medium text-[#1F4E45] hover:text-[#A8C686] transition-colors"
            >
              Directory
            </Link>
            <Link
              href="/institutional"
              className="text-sm font-medium text-[#1F4E45] hover:text-[#A8C686] transition-colors"
            >
              Institutional
            </Link>
            <Button
              className="bg-gradient-to-r from-[#1F4E45] to-[#A8C686] hover:from-[#A8C686] hover:to-[#1F4E45] text-white transform hover:scale-105 transition-all duration-200"
              onClick={() => window.open("https://buy.stripe.com/6oU14ockO5yU9tQ4vxgYU01", "_blank")}
            >
              Join Now
            </Button>
          </nav>
        </div>
      </header>

      <main className="pt-16">
        {/* Hero Section */}
        <section className="relative py-20 lg:py-32 overflow-hidden">
          {/* Animated Background */}
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-32 h-32 text-[#A8C686]/20 animate-float">
              <svg viewBox="0 0 100 100" className="w-full h-full">
                <path d="M20,50 Q30,20 50,30 Q70,40 80,20 Q90,50 70,60 Q50,70 30,60 Q10,50 20,50" fill="currentColor" />
              </svg>
            </div>
            <div className="absolute top-32 right-20 w-24 h-24 text-[#C9B17E]/20 animate-float-delayed">
              <svg viewBox="0 0 100 100" className="w-full h-full">
                <circle cx="50" cy="50" r="40" fill="currentColor" />
              </svg>
            </div>
            <div className="absolute bottom-20 left-1/4 w-28 h-28 text-[#EB8A7E]/20 animate-float">
              <svg viewBox="0 0 100 100" className="w-full h-full">
                <path d="M25,30 Q45,15 65,35 Q75,55 55,75 Q35,85 15,65 Q5,45 25,30" fill="currentColor" />
              </svg>
            </div>
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-5xl mx-auto text-center space-y-8">
              <Badge className="bg-gradient-to-r from-[#EB8A7E] to-[#A8C686] text-white hover:from-[#A8C686] hover:to-[#EB8A7E] text-sm px-6 py-2 animate-pulse">
                🌱 Financial Clarity for Everyday People
              </Badge>

              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-[#1F4E45] leading-tight">
                Ready to Grow Your Wealth?
                <Sparkles className="inline-block ml-4 h-8 w-8 text-[#C9B17E] animate-spin" />
              </h1>

              <p className="text-lg md:text-xl text-[#1F4E45]/80 max-w-3xl mx-auto leading-relaxed">
                Tired of feeling overwhelmed by financial burdens, repeating the same money mistakes, or getting advice
                that doesn't fit your life? Join a supportive community with tools, expert guidance, and real people who
                get it. No fluff—just clarity, confidence, and smart financial growth.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-[#1F4E45] to-[#A8C686] hover:from-[#A8C686] hover:to-[#1F4E45] text-white px-8 py-4 text-lg transform hover:scale-105 transition-all duration-200 shadow-xl"
                  onClick={() => window.open("https://buy.stripe.com/6oU14ockO5yU9tQ4vxgYU01", "_blank")}
                >
                  <PlayCircle className="mr-2 h-5 w-5" />
                  Join Now – $15/month
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-[#1F4E45] text-[#1F4E45] hover:bg-[#1F4E45] hover:text-white px-8 py-4 text-lg bg-white/80 backdrop-blur-sm transform hover:scale-105 transition-all duration-200"
                  onClick={() => (window.location.href = "/directory")}
                >
                  Browse Directory
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Booking Section */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-md mx-auto text-center">
              <Card className="border-2 border-[#A8C686] shadow-lg">
                <CardContent className="p-6">
                  <div className="text-center mb-4">
                    <Calendar className="h-8 w-8 text-[#1F4E45] mx-auto mb-2" />
                    <h3 className="text-lg font-bold text-[#1F4E45]">
                      Where Financial Growth Begins. Book a Free 15-Minute Call
                    </h3>
                    <p className="text-sm text-[#1F4E45]/70">
                      Whether you're an individual planting your first financial seed and ready to grow your wealth, a
                      financial professional looking to collaborate, or an organization exploring a financial wellness
                      partnership, you're in the right place. Book a call to explore how we can grow financial
                      confidence together.
                    </p>
                  </div>
                  <Button
                    className="w-full bg-[#1F4E45] hover:bg-[#1F4E45]/90 text-white"
                    onClick={() => window.open("https://www.oncehub.com/wealthsprout", "_blank")}
                  >
                    Schedule Your Call
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Financial Roots Checkup Quiz */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <Badge className="bg-[#C9B17E] text-white mb-4">🌱 Comprehensive Assessment</Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-[#1F4E45] mb-4">Financial Roots Checkup</h2>
              <p className="text-lg text-[#1F4E45]/70 max-w-2xl mx-auto mb-6">
                Evaluate your financial foundation across 9 core areas and get personalized recommendations for your
                journey
              </p>

              {/* Disclaimer */}
              <div className="max-w-4xl mx-auto mb-8">
                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-r-lg">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <span className="text-yellow-400 text-xl">⚠️</span>
                    </div>
                    <div className="ml-3">
                      <p className="text-sm text-yellow-800 leading-relaxed">
                        <strong>Please Note:</strong> Your results will not be emailed to you automatically. We
                        recommend taking a screenshot or saving your answers for your records. These results are for
                        educational purposes only and do not constitute personalized financial advice. For tailored
                        guidance, we encourage you to schedule a free 15-minute consultation. If you have any questions,
                        feel free to reach out directly at{" "}
                        <a href="mailto:diamond@wealthsprouts.org" className="underline hover:text-yellow-900">
                          diamond@wealthsprouts.org
                        </a>
                        .
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="max-w-2xl mx-auto">
              <FinancialRootsQuiz />
            </div>
          </div>
        </section>

        {/* What Makes Us Different */}
        <section className="py-20 bg-[#F7F5EF]">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-[#1F4E45] mb-4">
                What Makes Wealth Sprouts Different
              </h2>
              <p className="text-lg text-[#1F4E45]/70 max-w-2xl mx-auto">
                We're not just another financial platform. We're a community built on clarity, ethics, and real support.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
              {[
                {
                  icon: Users,
                  title: "Vetted Professionals",
                  description:
                    "Every financial professional in our directory is thoroughly screened for ethics and expertise.",
                  color: "from-[#A8C686] to-[#C9B17E]",
                },
                {
                  icon: PlayCircle,
                  title: "Monthly Expert Q&As",
                  description: "Live sessions with financial experts where you can ask questions and get real answers.",
                  color: "from-[#EB8A7E] to-[#A8C686]",
                },
                {
                  icon: BookOpen,
                  title: "Financial Clarity",
                  description: "No jargon, no confusion. Just clear, actionable guidance for everyday people.",
                  color: "from-[#C9B17E] to-[#EB8A7E]",
                },
                {
                  icon: CheckCircle,
                  title: "Community Support",
                  description: "Connect with others on similar journeys. Share wins, get encouragement, grow together.",
                  color: "from-[#A8C686] to-[#EB8A7E]",
                },
              ].map((feature, index) => (
                <Card
                  key={index}
                  className="border-none shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group"
                >
                  <CardContent className="p-8 text-center relative overflow-hidden">
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-5 group-hover:opacity-10 transition-opacity`}
                    ></div>

                    <div
                      className={`w-20 h-20 bg-gradient-to-br ${feature.color} rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform`}
                    >
                      <feature.icon className="h-10 w-10 text-white" />
                    </div>

                    <h3 className="text-xl font-bold text-[#1F4E45] mb-4">{feature.title}</h3>
                    <p className="text-[#1F4E45]/70">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Digital Planners & Workbooks */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <Badge className="bg-[#C9B17E] text-white mb-4">📚 Digital Resources</Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-[#1F4E45] mb-4">Digital Planners & Workbooks</h2>
              <p className="text-lg text-[#1F4E45]/70 max-w-2xl mx-auto">
                Practical tools to organize your finances and track your progress
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {[
                {
                  title: "Ultimate Finance Planner",
                  description:
                    "A comprehensive digital planner to track income, expenses, and savings goals with monthly and weekly layouts.",
                  price: "$25",
                  link: "https://wealthynotebook.com/b/CRrqT",
                  buttonText: "Buy Your Planner",
                  bgColor: "from-[#A8C686] to-[#C9B17E]",
                },
                {
                  title: "Secure Your Future Workbook",
                  description:
                    "Step-by-step workbook with strategies, trackers, and motivation to help you organize, prioritize, and grow your wealth.",
                  price: "$25",
                  link: "https://wealthynotebook.com/b/d4XLQ",
                  buttonText: "Buy Your Workbook",
                  bgColor: "from-[#EB8A7E] to-[#A8C686]",
                },
                {
                  title: "Small Biz & Solopreneurs Workbook",
                  description:
                    "Includes essential steps of building a strong financial foundation for both their business and personal life.",
                  price: "$25",
                  link: "https://wealthynotebook.com/b/6fFU9",
                  buttonText: "Buy Your Workbook",
                  bgColor: "from-[#C9B17E] to-[#EB8A7E]",
                },
              ].map((product, index) => (
                <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-all duration-300 group">
                  <CardContent className="p-0">
                    <div
                      className={`relative h-48 bg-gradient-to-br ${product.bgColor} rounded-t-lg flex items-center justify-center`}
                    >
                      <div className="absolute top-4 right-4">
                        <Badge className="bg-white/90 text-[#1F4E45] font-bold">{product.price}</Badge>
                      </div>
                      <BookOpen className="h-16 w-16 text-white/80" />
                    </div>

                    <div className="p-6">
                      <h3 className="text-xl font-bold text-[#1F4E45] mb-3">{product.title}</h3>
                      <p className="text-[#1F4E45]/70 mb-6">{product.description}</p>

                      <Button
                        className="w-full bg-[#A8C686] hover:bg-[#A8C686]/90 text-white"
                        onClick={() => window.open(product.link, "_blank")}
                      >
                        <Download className="mr-2 h-4 w-4" />
                        {product.buttonText}
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Success Stories */}
        <section className="py-20 bg-gradient-to-br from-[#1F4E45] to-[#A8C686] text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 left-10 w-40 h-40 border border-white rounded-full animate-pulse"></div>
            <div className="absolute bottom-10 right-10 w-32 h-32 border border-white rounded-full animate-pulse delay-1000"></div>
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-16">
              <Badge className="bg-white/20 text-white mb-4">🏆 Real Stories</Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Community Success Stories</h2>
              <p className="text-lg opacity-90 max-w-2xl mx-auto">
                Real people, real progress, real financial transformation
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <Card className="border-none shadow-2xl bg-white/95 backdrop-blur-sm">
                <CardContent className="p-8">
                  <div className="flex items-center justify-center mb-6">
                    {testimonials.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setActiveTestimonial(index)}
                        className={`w-3 h-3 rounded-full mx-1 transition-all duration-300 ${
                          index === activeTestimonial ? "bg-[#1F4E45] w-8" : "bg-gray-300"
                        }`}
                      />
                    ))}
                  </div>

                  <div className="text-center">
                    <div
                      className={`w-20 h-20 bg-gradient-to-r ${testimonials[activeTestimonial].color} rounded-full flex items-center justify-center mx-auto mb-6`}
                    >
                      <TrendingUp className="h-10 w-10 text-white" />
                    </div>

                    <blockquote className="text-xl md:text-2xl text-[#1F4E45] font-medium mb-6 italic">
                      "{testimonials[activeTestimonial].quote}"
                    </blockquote>

                    <div className="mb-4">
                      <p className="font-bold text-[#1F4E45] text-lg">{testimonials[activeTestimonial].name}</p>
                      <p className="text-[#1F4E45]/60">{testimonials[activeTestimonial].role}</p>
                    </div>

                    <Badge className="bg-[#A8C686] text-white">🎉 {testimonials[activeTestimonial].achievement}</Badge>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Who It's For */}
        <section className="py-20 bg-[#F7F5EF]">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-[#1F4E45] mb-4">Who It's For</h2>
              <Badge className="bg-[#EB8A7E] text-white hover:bg-[#EB8A7E]/90 text-sm px-4 py-2 animate-pulse">
                Built for inclusion. Open to all income levels.
              </Badge>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
              <Card className="border-none shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group">
                <CardContent className="p-8 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#A8C686]/5 to-[#C9B17E]/5 group-hover:from-[#A8C686]/10 group-hover:to-[#C9B17E]/10 transition-all"></div>

                  <div className="relative z-10">
                    <div className="w-20 h-20 bg-gradient-to-br from-[#A8C686] to-[#C9B17E] rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                      <Users className="h-10 w-10 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-[#1F4E45] mb-4">For Wealth Builders</h3>
                    <p className="text-[#1F4E45]/70 mb-6 text-lg">
                      Young professionals, creatives, entrepreneurs, and anyone ready to take control of their financial
                      future
                    </p>

                    <div className="text-center mb-6">
                      <div className="text-3xl font-bold text-[#1F4E45] mb-2">$15/month</div>
                      <div className="text-sm text-[#1F4E45]/60">First 6 months, then upgrade required</div>
                    </div>

                    <ul className="space-y-3 text-[#1F4E45]/70 text-sm">
                      <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-[#A8C686] mr-2" />
                        Monthly expert Q&A sessions
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-[#A8C686] mr-2" />
                        Access to vetted professional directory
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-[#A8C686] mr-2" />
                        Community support & resources
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-[#A8C686] mr-2" />
                        Financial planning tools & templates
                      </li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-none shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group">
                <CardContent className="p-8 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#EB8A7E]/5 to-[#A8C686]/5 group-hover:from-[#EB8A7E]/10 group-hover:to-[#A8C686]/10 transition-all"></div>

                  <div className="relative z-10">
                    <div className="w-20 h-20 bg-gradient-to-br from-[#EB8A7E] to-[#A8C686] rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                      <UserCheck className="h-10 w-10 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-[#1F4E45] mb-4">For Financial Pros</h3>
                    <p className="text-[#1F4E45]/70 mb-6 text-lg">
                      Coaches, planners, tax experts, and other professionals who lead with values and care
                    </p>

                    <div className="text-center mb-6">
                      <div className="text-3xl font-bold text-[#1F4E45] mb-2">$10/month</div>
                      <div className="text-sm text-[#1F4E45]/60">First 6 months, then upgrade required</div>
                    </div>

                    <ul className="space-y-3 text-[#1F4E45]/70 text-sm">
                      <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-[#EB8A7E] mr-2" />
                        Directory listing with profile
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-[#EB8A7E] mr-2" />
                        Direct client referrals
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-[#EB8A7E] mr-2" />
                        Professional networking opportunities
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-[#EB8A7E] mr-2" />
                        Marketing support & resources
                      </li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Financial Pros Section */}
        <FinancialProsSection />

        {/* Footer with Email Signup */}
        <footer className="bg-[#1F4E45] text-white py-12">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-4 gap-8">
              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <Leaf className="h-6 w-6" />
                  <span className="text-xl font-bold">
                    <span className="font-sans">Wealth</span>
                    <span className="font-serif text-[#A8C686] ml-1">Sprouts</span>
                  </span>
                </div>
                <p className="text-white/70 text-sm">
                  Financial clarity for everyday people. Ethical professionals. Real community support.
                </p>
              </div>

              <div>
                <h4 className="font-semibold mb-4">Get Started</h4>
                <ul className="space-y-2 text-sm text-white/70">
                  <li>
                    <Link href="/directory" className="hover:text-white transition-colors">
                      Browse Directory
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:text-white transition-colors">
                      Digital Planners
                    </Link>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold mb-4">Programs</h4>
                <ul className="space-y-2 text-sm text-white/70">
                  <li>
                    <Link href="/institutional" className="hover:text-white transition-colors">
                      Institutional Programs
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:text-white transition-colors">
                      Book a Workshop
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:text-white transition-colors">
                      Monthly Q&As
                    </Link>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold mb-4">Stay Connected</h4>
                <p className="text-white/70 text-sm mb-4">Get weekly financial tips & community updates</p>
                <Button
                  className="bg-[#A8C686] hover:bg-[#A8C686]/90 text-white mb-4"
                  onClick={() => window.open("https://mailchi.mp/8c364ed6aaeb/wealth-sprout", "_blank")}
                >
                  Join Newsletter
                </Button>
                <div className="flex items-center text-xs text-white/60">
                  <Lock className="h-3 w-3 mr-1" />
                  We respect your privacy. Unsubscribe anytime.
                </div>
              </div>
            </div>

            <div className="border-t border-white/20 mt-8 pt-8 text-center">
              <p className="text-white/70 text-sm">
                © {new Date().getFullYear()} Wealth Sprouts. All rights reserved. •
                <Link href="#" className="hover:text-white ml-1">
                  Privacy
                </Link>{" "}
                •
                <Link href="#" className="hover:text-white ml-1">
                  Terms
                </Link>
              </p>
            </div>
          </div>
        </footer>
      </main>

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
        
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(-3deg); }
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animate-float-delayed {
          animation: float-delayed 8s ease-in-out infinite;
          animation-delay: 2s;
        }
      `}</style>
    </div>
  )
}
