"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calculator, TrendingUp, CreditCard, FileText, Home, CheckCircle, Rocket } from "lucide-react"

export function FinancialProsSection() {
  const professionalTypes = [
    {
      title: "Tax Pros (CPAs, EAs)",
      icon: Calculator,
      color: "from-[#A8C686] to-[#C9B17E]",
    },
    {
      title: "Financial Planners & Coaches",
      icon: TrendingUp,
      color: "from-[#EB8A7E] to-[#A8C686]",
    },
    {
      title: "Credit & Insurance Experts",
      icon: CreditCard,
      color: "from-[#C9B17E] to-[#EB8A7E]",
    },
    {
      title: "Bookkeepers & Estate Attorneys",
      icon: FileText,
      color: "from-[#A8C686] to-[#EB8A7E]",
    },
    {
      title: "Real Estate & Mortgage Pros",
      icon: Home,
      color: "from-[#EB8A7E] to-[#C9B17E]",
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-[#1F4E45] to-[#A8C686] text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-40 h-40 border border-white rounded-full animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-32 h-32 border border-white rounded-full animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <Badge className="bg-white/20 text-white text-lg px-6 py-2 mb-4">
            <Rocket className="mr-2 h-5 w-5" />
            Early Access Program
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Are You a Financial Pro? Join Early. Grow with Us.</h2>
          <p className="text-xl opacity-90 max-w-3xl mx-auto mb-8">
            Serve with Purpose. Connect with Clients Who Value What You Do.
          </p>
          <p className="text-lg opacity-80 max-w-4xl mx-auto mb-8">
            We're building a vetted network of financial professionals who lead with clarity, care, and collaboration.
            If you're a CPA, EA, financial coach, credit expert, insurance advisor, planner, or real estate professional
            — we'd love to connect.
          </p>

          <Button
            size="lg"
            className="bg-white text-[#1F4E45] hover:bg-gray-100 px-8 py-4 text-lg font-bold transform hover:scale-105 transition-all duration-200 mb-12"
            onClick={() => window.open("https://oncehub.com/wealthsprouts", "_blank")}
          >
            Apply to Join the Pro Directory
          </Button>
        </div>

        <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-6xl mx-auto mb-12">
          {professionalTypes.map((type, index) => (
            <Card
              key={index}
              className="border-none shadow-lg bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-300"
            >
              <CardContent className="p-6 text-center">
                <div
                  className={`w-16 h-16 bg-gradient-to-br ${type.color} rounded-full flex items-center justify-center mx-auto mb-4`}
                >
                  <type.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-sm font-semibold text-white">{type.title}</h3>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mb-12">
          <p className="text-lg italic opacity-90 max-w-2xl mx-auto mb-8">
            "We're just getting started. Be among the first to shape a truly collaborative, human-first financial
            network."
          </p>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-xl font-bold mb-6">Founding Member Benefits</h3>
            <div className="grid md:grid-cols-2 gap-4 text-left">
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-[#C9B17E] mr-3 flex-shrink-0" />
                <span className="text-sm">Priority directory placement</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-[#C9B17E] mr-3 flex-shrink-0" />
                <span className="text-sm">Direct client referrals</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-[#C9B17E] mr-3 flex-shrink-0" />
                <span className="text-sm">Reduced membership fees</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-[#C9B17E] mr-3 flex-shrink-0" />
                <span className="text-sm">Network collaboration opportunities</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
