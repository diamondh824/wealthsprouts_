"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import {
  Search,
  MapPin,
  Star,
  Mail,
  Phone,
  Globe,
  Filter,
  Leaf,
  Users,
  Calculator,
  CreditCard,
  Home,
  FileText,
  TrendingUp,
} from "lucide-react"
import Link from "next/link"

export default function Directory() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedService, setSelectedService] = useState("all")
  const [selectedLocation, setSelectedLocation] = useState("all")

  const services = [
    { id: "all", name: "All Services", icon: Users },
    { id: "financial-coach", name: "Financial Coach & Educator", icon: Users },
    { id: "tax-pro", name: "Enrolled Agent (EAs), CPAs, Tax Pros", icon: Calculator },
    { id: "insurance", name: "Insurance Agent (P&C, Life, Health)", icon: CreditCard },
    { id: "credit", name: "Credit Counselor & Specialists", icon: CreditCard },
    { id: "estate", name: "Estate Planning Attorney", icon: FileText },
    { id: "real-estate", name: "Real Estate Agent & Investor", icon: Home },
    { id: "mortgage", name: "Mortgage Loan Officers (Independent)", icon: Home },
    { id: "financial-planner", name: "Financial Planner (Independent RIA / Fee-Only Preferred)", icon: TrendingUp },
    { id: "bookkeeper", name: "Bookkeepers", icon: FileText },
  ]

  const locations = [
    { id: "all", name: "All Locations" },
    { id: "remote", name: "Remote" },
    { id: "international", name: "International" },
    { id: "alabama", name: "Alabama" },
    { id: "alaska", name: "Alaska" },
    { id: "arizona", name: "Arizona" },
    { id: "arkansas", name: "Arkansas" },
    { id: "california", name: "California" },
    { id: "colorado", name: "Colorado" },
    { id: "connecticut", name: "Connecticut" },
    { id: "delaware", name: "Delaware" },
    { id: "florida", name: "Florida" },
    { id: "georgia", name: "Georgia" },
    { id: "hawaii", name: "Hawaii" },
    { id: "idaho", name: "Idaho" },
    { id: "illinois", name: "Illinois" },
    { id: "indiana", name: "Indiana" },
    { id: "iowa", name: "Iowa" },
    { id: "kansas", name: "Kansas" },
    { id: "kentucky", name: "Kentucky" },
    { id: "louisiana", name: "Louisiana" },
    { id: "maine", name: "Maine" },
    { id: "maryland", name: "Maryland" },
    { id: "massachusetts", name: "Massachusetts" },
    { id: "michigan", name: "Michigan" },
    { id: "minnesota", name: "Minnesota" },
    { id: "mississippi", name: "Mississippi" },
    { id: "missouri", name: "Missouri" },
    { id: "montana", name: "Montana" },
    { id: "nebraska", name: "Nebraska" },
    { id: "nevada", name: "Nevada" },
    { id: "new-hampshire", name: "New Hampshire" },
    { id: "new-jersey", name: "New Jersey" },
    { id: "new-mexico", name: "New Mexico" },
    { id: "new-york", name: "New York" },
    { id: "north-carolina", name: "North Carolina" },
    { id: "north-dakota", name: "North Dakota" },
    { id: "ohio", name: "Ohio" },
    { id: "oklahoma", name: "Oklahoma" },
    { id: "oregon", name: "Oregon" },
    { id: "pennsylvania", name: "Pennsylvania" },
    { id: "rhode-island", name: "Rhode Island" },
    { id: "south-carolina", name: "South Carolina" },
    { id: "south-dakota", name: "South Dakota" },
    { id: "tennessee", name: "Tennessee" },
    { id: "texas", name: "Texas" },
    { id: "utah", name: "Utah" },
    { id: "vermont", name: "Vermont" },
    { id: "virginia", name: "Virginia" },
    { id: "washington", name: "Washington" },
    { id: "west-virginia", name: "West Virginia" },
    { id: "wisconsin", name: "Wisconsin" },
    { id: "wyoming", name: "Wyoming" },
  ]

  // Sample professionals data
  const professionals = [
    {
      id: 1,
      name: "Sarah Johnson, CPA",
      specialty: "Tax Professional",
      location: "San Francisco, CA",
      rating: 4.9,
      reviews: 127,
      image: "/placeholder.svg?height=150&width=150",
      bio: "Specializing in small business and freelancer tax planning with 8+ years experience.",
      services: ["Tax Preparation", "Business Planning", "Quarterly Reviews"],
      email: "sarah@example.com",
      phone: "(555) 123-4567",
      website: "www.sarahjohnsoncpa.com",
      verified: true,
    },
    {
      id: 2,
      name: "Marcus Rodriguez, CFP",
      specialty: "Financial Planner",
      location: "Austin, TX",
      rating: 4.8,
      reviews: 89,
      image: "/placeholder.svg?height=150&width=150",
      bio: "Helping young professionals and families build wealth through comprehensive financial planning.",
      services: ["Investment Planning", "Retirement Planning", "Insurance Review"],
      email: "marcus@example.com",
      phone: "(555) 234-5678",
      website: "www.marcusfinancial.com",
      verified: true,
    },
    {
      id: 3,
      name: "Priya Patel, EA",
      specialty: "Enrolled Agent",
      location: "Remote/Virtual",
      rating: 5.0,
      reviews: 156,
      image: "/placeholder.svg?height=150&width=150",
      bio: "Enrolled Agent specializing in tax resolution and representation before the IRS.",
      services: ["Tax Resolution", "IRS Representation", "Audit Support"],
      email: "priya@example.com",
      phone: "(555) 345-6789",
      website: "www.priyataxhelp.com",
      verified: true,
    },
    {
      id: 4,
      name: "David Chen, Insurance Agent",
      specialty: "Insurance Agent",
      location: "Seattle, WA",
      rating: 4.7,
      reviews: 92,
      image: "/placeholder.svg?height=150&width=150",
      bio: "Comprehensive insurance solutions for individuals and families with 10+ years experience.",
      services: ["Life Insurance", "Health Insurance", "Property & Casualty"],
      email: "david@example.com",
      phone: "(555) 456-7890",
      website: "www.davidcheninsurance.com",
      verified: true,
    },
    {
      id: 5,
      name: "Lisa Thompson, Credit Specialist",
      specialty: "Credit Counselor",
      location: "Denver, CO",
      rating: 4.9,
      reviews: 134,
      image: "/placeholder.svg?height=150&width=150",
      bio: "Helping clients improve credit scores and achieve financial freedom through strategic planning.",
      services: ["Credit Repair", "Debt Consolidation", "Financial Counseling"],
      email: "lisa@example.com",
      phone: "(555) 567-8901",
      website: "www.lisacredithelp.com",
      verified: true,
    },
    {
      id: 6,
      name: "Robert Kim, Estate Attorney",
      specialty: "Estate Planning Attorney",
      location: "Chicago, IL",
      rating: 4.8,
      reviews: 78,
      image: "/placeholder.svg?height=150&width=150",
      bio: "Estate planning and wealth preservation strategies for families and business owners.",
      services: ["Wills & Trusts", "Estate Planning", "Business Succession"],
      email: "robert@example.com",
      phone: "(555) 678-9012",
      website: "www.robertkimestate.com",
      verified: true,
    },
    {
      id: 7,
      name: "Amanda Foster, Realtor",
      specialty: "Real Estate Agent",
      location: "Miami, FL",
      rating: 4.9,
      reviews: 203,
      image: "/placeholder.svg?height=150&width=150",
      bio: "First-time homebuyer specialist and investment property expert in South Florida.",
      services: ["Home Buying", "Investment Properties", "Market Analysis"],
      email: "amanda@example.com",
      phone: "(555) 789-0123",
      website: "www.amandafosterrealty.com",
      verified: true,
    },
    {
      id: 8,
      name: "James Wilson, Loan Officer",
      specialty: "Mortgage Loan Officer",
      location: "Phoenix, AZ",
      rating: 4.7,
      reviews: 156,
      image: "/placeholder.svg?height=150&width=150",
      bio: "Independent mortgage professional helping clients secure the best financing options.",
      services: ["Home Loans", "Refinancing", "Investment Property Loans"],
      email: "james@example.com",
      phone: "(555) 890-1234",
      website: "www.jameswilsonloans.com",
      verified: true,
    },
    {
      id: 9,
      name: "Michelle Davis, Bookkeeper",
      specialty: "Bookkeeper",
      location: "Remote/Virtual",
      rating: 4.8,
      reviews: 87,
      image: "/placeholder.svg?height=150&width=150",
      bio: "QuickBooks certified bookkeeper specializing in small business financial management.",
      services: ["Monthly Bookkeeping", "Financial Reports", "Tax Preparation Support"],
      email: "michelle@example.com",
      phone: "(555) 901-2345",
      website: "www.michelledavisbookkeeping.com",
      verified: true,
    },
  ]

  const filteredProfessionals = professionals.filter((prof) => {
    const matchesSearch =
      prof.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      prof.specialty.toLowerCase().includes(searchTerm.toLowerCase()) ||
      prof.bio.toLowerCase().includes(searchTerm.toLowerCase())

    const matchesService =
      selectedService === "all" || prof.specialty.toLowerCase().includes(selectedService.replace("-", " "))

    const matchesLocation = selectedLocation === "all" || prof.location.toLowerCase().includes(selectedLocation)

    return matchesSearch && matchesService && matchesLocation
  })

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
              href="/institutional"
              className="text-sm font-medium text-[#1F4E45] hover:text-[#A8C686] transition-colors"
            >
              Institutional
            </Link>
            <Button
              className="bg-gradient-to-r from-[#1F4E45] to-[#A8C686] hover:from-[#A8C686] hover:to-[#1F4E45] text-white"
              onClick={() => window.open("https://oncehub.com/wealthsprouts", "_blank")}
            >
              Join Directory
            </Button>
          </nav>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-[#1F4E45] mb-2">Coming Soon</h1>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1F4E45] mb-4">Build Your Financial Team</h2>
          <p className="text-lg text-[#1F4E45]/70 max-w-2xl mx-auto mb-8">
            Use our professional directory to connect with experienced financial professionals who understand your
            journey and share your values.
          </p>
          <Badge className="bg-[#A8C686] text-white text-sm px-4 py-2">
            ✓ All professionals thoroughly vetted and verified
          </Badge>
        </div>

        {/* Search and Filter Section */}
        <div className="mb-8">
          <Card className="border-none shadow-lg">
            <CardContent className="p-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="relative">
                  <Search className="absolute left-3 top-3 h-4 w-4 text-[#1F4E45]/60" />
                  <Input
                    placeholder="Search professionals..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 border-[#A8C686]/30 focus:border-[#A8C686]"
                  />
                </div>

                <div className="relative">
                  <Filter className="absolute left-3 top-3 h-4 w-4 text-[#1F4E45]/60" />
                  <select
                    value={selectedService}
                    onChange={(e) => setSelectedService(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 border border-[#A8C686]/30 rounded-md focus:border-[#A8C686] focus:outline-none bg-white"
                  >
                    {services.map((service) => (
                      <option key={service.id} value={service.id}>
                        {service.name}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="relative">
                  <MapPin className="absolute left-3 top-3 h-4 w-4 text-[#1F4E45]/60" />
                  <select
                    value={selectedLocation}
                    onChange={(e) => setSelectedLocation(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 border border-[#A8C686]/30 rounded-md focus:border-[#A8C686] focus:outline-none bg-white"
                  >
                    {locations.map((location) => (
                      <option key={location.id} value={location.id}>
                        {location.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Professionals Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProfessionals.map((professional) => (
            <Card key={professional.id} className="border-none shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4 mb-4">
                  <img
                    src={professional.image || "/placeholder.svg"}
                    alt={professional.name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-1">
                      <h3 className="font-bold text-[#1F4E45]">{professional.name}</h3>
                      {professional.verified && <Badge className="bg-[#A8C686] text-white text-xs">✓ Verified</Badge>}
                    </div>
                    <p className="text-sm text-[#1F4E45]/70 mb-1">{professional.specialty}</p>
                    <div className="flex items-center text-xs text-[#1F4E45]/60">
                      <MapPin className="h-3 w-3 mr-1" />
                      {professional.location}
                    </div>
                  </div>
                </div>

                <div className="flex items-center mb-3">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${
                          i < Math.floor(professional.rating) ? "fill-[#C9B17E] text-[#C9B17E]" : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-[#1F4E45]/70 ml-2">
                    {professional.rating} ({professional.reviews} reviews)
                  </span>
                </div>

                <p className="text-sm text-[#1F4E45]/80 mb-4">{professional.bio}</p>

                <div className="mb-4">
                  <div className="flex flex-wrap gap-1">
                    {professional.services.map((service, index) => (
                      <Badge key={index} className="bg-[#A8C686]/20 text-[#1F4E45] text-xs">
                        {service}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="space-y-2 mb-4 text-sm">
                  <div className="flex items-center text-[#1F4E45]/70">
                    <Mail className="h-4 w-4 mr-2" />
                    {professional.email}
                  </div>
                  <div className="flex items-center text-[#1F4E45]/70">
                    <Phone className="h-4 w-4 mr-2" />
                    {professional.phone}
                  </div>
                  <div className="flex items-center text-[#1F4E45]/70">
                    <Globe className="h-4 w-4 mr-2" />
                    {professional.website}
                  </div>
                </div>

                <Button className="w-full bg-[#1F4E45] hover:bg-[#1F4E45]/90 text-white">Contact Professional</Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Disclaimer */}
        <div className="mt-12 p-6 bg-gray-50 rounded-lg border border-gray-200">
          <p className="text-sm text-[#1F4E45]/70 text-center">
            <strong>Disclaimer:</strong> These professionals are not employees or representatives of our company. We do
            not oversee their work or client experiences. Please perform your own due diligence before working with any
            professional.
          </p>
        </div>

        {filteredProfessionals.length === 0 && (
          <div className="text-center py-12">
            <p className="text-lg text-[#1F4E45]/70">
              No professionals found matching your criteria. Try adjusting your search or filters.
            </p>
          </div>
        )}

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <Card className="border-2 border-[#EB8A7E] shadow-lg bg-gradient-to-r from-[#EB8A7E]/5 to-[#A8C686]/5">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-[#1F4E45] mb-4">Are You a Financial Professional?</h2>
              <p className="text-[#1F4E45]/70 mb-6 max-w-2xl mx-auto">
                Join our vetted directory and connect with clients who value ethical, transparent financial guidance.
              </p>
              <Button
                className="bg-[#EB8A7E] hover:bg-[#EB8A7E]/90 text-white px-8 py-3"
                onClick={() => window.open("https://oncehub.com/wealthsprouts", "_blank")}
              >
                Join Directory
              </Button>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}
