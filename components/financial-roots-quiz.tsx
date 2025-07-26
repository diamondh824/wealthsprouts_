"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { ArrowRight, Calendar, CheckCircle, AlertTriangle, XCircle } from "lucide-react"

interface QuizQuestion {
  id: string
  section: string
  question: string
  type: "yes-no" | "yes-no-unsure" | "scale" | "business-check"
  options?: string[]
  tag?: string
}

interface SectionResult {
  section: string
  score: number
  percentage: number
  status: "stable" | "needs-attention" | "at-risk"
  color: string
  message: string
}

interface FinalResult {
  overallScore: number
  sectionResults: SectionResult[]
  tags: string[]
  recommendations: string[]
}

export function FinancialRootsQuiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<Array<{ questionId: string; answer: any; score: number; tags: string[] }>>([])
  const [showResult, setShowResult] = useState(false)
  const [hasBusiness, setHasBusiness] = useState<boolean | null>(null)

  const allQuestions: QuizQuestion[] = [
    // Section 1: Budgeting & Spending
    {
      id: "budget-1",
      section: "Budgeting & Spending",
      question: "Do you follow a monthly budget?",
      type: "yes-no",
      tag: "budget-help",
    },
    {
      id: "budget-2",
      section: "Budgeting & Spending",
      question: "On a scale of 1 to 5, how confident are you in managing your day-to-day spending?",
      type: "scale",
      tag: "budget-help",
    },

    // Section 2: Credit Health
    {
      id: "credit-1",
      section: "Credit Health",
      question: "Have you checked your credit report in the last 12 months?",
      type: "yes-no",
      tag: "credit-help",
    },
    {
      id: "credit-2",
      section: "Credit Health",
      question: "Is your credit score above 700?",
      type: "yes-no-unsure",
      tag: "credit-help",
    },

    // Section 3: Savings & Emergency Fund
    {
      id: "savings-1",
      section: "Savings & Emergency Fund",
      question: "Do you have an emergency fund that covers at least 3 months of expenses?",
      type: "yes-no",
      tag: "savings-help",
    },
    {
      id: "savings-2",
      section: "Savings & Emergency Fund",
      question: "How consistent are you with saving money each month? (1 = Not consistent, 5 = Very consistent)",
      type: "scale",
      tag: "savings-help",
    },

    // Section 4: Debt Management
    {
      id: "debt-1",
      section: "Debt Management",
      question: "Do you have a clear plan to pay off all your debts?",
      type: "yes-no",
      tag: "debt-help",
    },
    {
      id: "debt-2",
      section: "Debt Management",
      question: "Are your monthly debt payments manageable within your budget?",
      type: "yes-no",
      tag: "debt-help",
    },

    // Section 5: Taxes & Withholding
    {
      id: "tax-1",
      section: "Taxes & Withholding",
      question: "Do you understand your current tax situation and potential deductions?",
      type: "yes-no",
      tag: "tax-help",
    },
    {
      id: "tax-2",
      section: "Taxes & Withholding",
      question: "Have you adjusted your tax withholding to avoid large tax surprises?",
      type: "yes-no-unsure",
      tag: "tax-help",
    },

    // Section 6: Insurance Coverage
    {
      id: "insurance-1",
      section: "Insurance Coverage",
      question: "Do you have health insurance that meets your needs?",
      type: "yes-no-unsure",
      tag: "insurance-help",
    },
    {
      id: "insurance-2",
      section: "Insurance Coverage",
      question: "Do you have life or disability insurance coverage?",
      type: "yes-no",
      tag: "insurance-help",
    },

    // Section 7: Retirement Planning
    {
      id: "retirement-1",
      section: "Retirement Planning",
      question: "Do you contribute to any retirement accounts (e.g., 401k, IRA)?",
      type: "yes-no",
      tag: "retirement-help",
    },
    {
      id: "retirement-2",
      section: "Retirement Planning",
      question: "On a scale of 1 to 5, how confident are you in your retirement plan?",
      type: "scale",
      tag: "retirement-help",
    },

    // Section 8: Estate Planning
    {
      id: "estate-1",
      section: "Estate Planning",
      question: "Do you have a will or estate plan?",
      type: "yes-no",
      tag: "estate-help",
    },
    {
      id: "estate-2",
      section: "Estate Planning",
      question: "Have you named powers of attorney or healthcare proxies?",
      type: "yes-no",
      tag: "estate-help",
    },

    // Section 9: Investing & Wealth Building
    {
      id: "investing-1",
      section: "Investing & Wealth Building",
      question: "Do you currently have any investments (e.g., stocks, real estate)?",
      type: "yes-no",
      tag: "investing-help",
    },
    {
      id: "investing-2",
      section: "Investing & Wealth Building",
      question: "Do you review your investments at least once a year?",
      type: "yes-no",
      tag: "investing-help",
    },

    // Business check question
    {
      id: "business-check",
      section: "Business Finances",
      question: "Do you own a business?",
      type: "business-check",
    },

    // Business questions (conditional)
    {
      id: "business-1",
      section: "Business Finances",
      question: "Do you keep your business and personal finances separate?",
      type: "yes-no",
      tag: "biz-finance-help",
    },
    {
      id: "business-2",
      section: "Business Finances",
      question: "Do you have a budget or financial plan for your business?",
      type: "yes-no",
      tag: "biz-finance-help",
    },
  ]

  // Get the questions to show based on current state
  const getQuestionsToShow = (): QuizQuestion[] => {
    const baseQuestions = allQuestions.slice(0, 18) // All core questions
    const businessCheckQuestion = allQuestions[18] // Business check question
    const businessQuestions = allQuestions.slice(19, 21) // Business-specific questions

    if (hasBusiness === null) {
      // Show all base questions + business check
      return [...baseQuestions, businessCheckQuestion]
    } else if (hasBusiness === true) {
      // Show all base questions + business check + business questions
      return [...baseQuestions, businessCheckQuestion, ...businessQuestions]
    } else {
      // Show only base questions + business check (but skip business-specific ones)
      return [...baseQuestions, businessCheckQuestion]
    }
  }

  const questionsToShow = getQuestionsToShow()

  // Safety check to prevent undefined access
  if (currentQuestion >= questionsToShow.length) {
    setShowResult(true)
    return null
  }

  const currentQuestionData = questionsToShow[currentQuestion]

  // Safety check for currentQuestionData
  if (!currentQuestionData) {
    setShowResult(true)
    return null
  }

  const handleAnswer = (answerValue: any) => {
    let score = 0
    const tags: string[] = []

    if (currentQuestionData.id === "business-check") {
      setHasBusiness(answerValue === "yes")
      setCurrentQuestion(currentQuestion + 1)
      return
    }

    // Calculate score based on question type
    if (currentQuestionData.type === "yes-no") {
      score = answerValue === "yes" ? 2 : 0
      if (answerValue === "no" && currentQuestionData.tag) {
        tags.push(currentQuestionData.tag)
      }
    } else if (currentQuestionData.type === "yes-no-unsure") {
      if (answerValue === "yes") score = 2
      else if (answerValue === "not-sure") score = 1
      else score = 0

      if ((answerValue === "no" || answerValue === "not-sure") && currentQuestionData.tag) {
        tags.push(currentQuestionData.tag)
      }
    } else if (currentQuestionData.type === "scale") {
      score = answerValue
      if (answerValue <= 2 && currentQuestionData.tag) {
        tags.push(currentQuestionData.tag)
      }
    }

    const newAnswer = {
      questionId: currentQuestionData.id,
      answer: answerValue,
      score,
      tags,
    }

    const newAnswers = [...answers, newAnswer]
    setAnswers(newAnswers)

    if (currentQuestion < questionsToShow.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
    } else {
      setShowResult(true)
    }
  }

  const calculateResults = (): FinalResult => {
    const sections = [
      "Budgeting & Spending",
      "Credit Health",
      "Savings & Emergency Fund",
      "Debt Management",
      "Taxes & Withholding",
      "Insurance Coverage",
      "Retirement Planning",
      "Estate Planning",
      "Investing & Wealth Building",
    ]

    if (hasBusiness) {
      sections.push("Business Finances")
    }

    const sectionResults: SectionResult[] = sections.map((section) => {
      const sectionAnswers = answers.filter((a) => {
        const question = allQuestions.find((q) => q.id === a.questionId)
        return question?.section === section
      })

      const totalScore = sectionAnswers.reduce((sum, a) => sum + a.score, 0)
      const maxScore = sectionAnswers.length * 2 // Max 2 points per question
      const percentage = maxScore > 0 ? (totalScore / maxScore) * 100 : 0

      let status: "stable" | "needs-attention" | "at-risk"
      let color: string
      let message: string

      if (percentage >= 75) {
        status = "stable"
        color = "#1F4E45"
        message = `Great job! Your ${section} is on solid ground.`
      } else if (percentage >= 50) {
        status = "needs-attention"
        color = "#A8C66C"
        message = `There's room to improve your ${section}. Let's review key steps.`
      } else {
        status = "at-risk"
        color = "#F56A6A"
        message = `Your ${section} needs urgent attention. Let's address it together.`
      }

      return {
        section,
        score: totalScore,
        percentage,
        status,
        color,
        message,
      }
    })

    const allTags = answers.flatMap((a) => a.tags)
    const uniqueTags = [...new Set(allTags)]

    const recommendations: string[] = []
    if (uniqueTags.includes("credit-help")) {
      recommendations.push("We recommend working with a Credit Counselor or Specialist.")
    }
    if (uniqueTags.includes("tax-help")) {
      recommendations.push("We suggest meeting with a Tax Professional (EA or CPA).")
    }
    if (uniqueTags.includes("insurance-help")) {
      recommendations.push("Review your coverage with a licensed Insurance Agent.")
    }
    if (uniqueTags.includes("retirement-help")) {
      recommendations.push("Consider speaking with a Financial Planner to secure your retirement.")
    }
    if (uniqueTags.includes("estate-help")) {
      recommendations.push("An Estate Planning Attorney can help protect your legacy.")
    }
    if (uniqueTags.includes("investing-help")) {
      recommendations.push("A Financial Advisor can help fine-tune your investment plan.")
    }
    if (uniqueTags.includes("biz-finance-help")) {
      recommendations.push("We suggest working with a Bookkeeper, Tax Pro, or Legal Advisor for your business.")
    }

    const overallScore = sectionResults.reduce((sum, s) => sum + s.percentage, 0) / sectionResults.length

    return {
      overallScore,
      sectionResults,
      tags: uniqueTags,
      recommendations,
    }
  }

  const renderAnswerOptions = () => {
    if (currentQuestionData.type === "yes-no" || currentQuestionData.type === "business-check") {
      return (
        <div className="space-y-3">
          <button
            onClick={() => handleAnswer("yes")}
            className="w-full p-4 text-left border-2 border-gray-200 rounded-lg hover:border-[#A8C686] hover:bg-[#A8C686]/5 transition-all duration-200"
          >
            Yes
          </button>
          <button
            onClick={() => handleAnswer("no")}
            className="w-full p-4 text-left border-2 border-gray-200 rounded-lg hover:border-[#A8C686] hover:bg-[#A8C686]/5 transition-all duration-200"
          >
            No
          </button>
        </div>
      )
    }

    if (currentQuestionData.type === "yes-no-unsure") {
      return (
        <div className="space-y-3">
          <button
            onClick={() => handleAnswer("yes")}
            className="w-full p-4 text-left border-2 border-gray-200 rounded-lg hover:border-[#A8C686] hover:bg-[#A8C686]/5 transition-all duration-200"
          >
            Yes
          </button>
          <button
            onClick={() => handleAnswer("no")}
            className="w-full p-4 text-left border-2 border-gray-200 rounded-lg hover:border-[#A8C686] hover:bg-[#A8C686]/5 transition-all duration-200"
          >
            No
          </button>
          <button
            onClick={() => handleAnswer("not-sure")}
            className="w-full p-4 text-left border-2 border-gray-200 rounded-lg hover:border-[#A8C686] hover:bg-[#A8C686]/5 transition-all duration-200"
          >
            Not sure
          </button>
        </div>
      )
    }

    if (currentQuestionData.type === "scale") {
      return (
        <div className="space-y-3">
          {[1, 2, 3, 4, 5].map((num) => (
            <button
              key={num}
              onClick={() => handleAnswer(num)}
              className="w-full p-4 text-left border-2 border-gray-200 rounded-lg hover:border-[#A8C686] hover:bg-[#A8C686]/5 transition-all duration-200"
            >
              {num} {num === 1 ? "(Lowest)" : num === 5 ? "(Highest)" : ""}
            </button>
          ))}
        </div>
      )
    }

    return null
  }

  if (showResult) {
    const results = calculateResults()

    return (
      <div className="space-y-6">
        <Card className="border-2 border-[#A8C686] shadow-xl">
          <CardContent className="p-8 text-center">
            <h3 className="text-2xl font-bold text-[#1F4E45] mb-6">Your Financial Roots Assessment Results</h3>

            {/* Section Results */}
            <div className="space-y-4 mb-8">
              {results.sectionResults.map((result, index) => (
                <div key={index} className="text-left p-4 rounded-lg border" style={{ borderColor: result.color }}>
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-semibold" style={{ color: result.color }}>
                      {result.section}
                    </h4>
                    <div className="flex items-center">
                      {result.status === "stable" && <CheckCircle className="h-5 w-5 text-[#1F4E45]" />}
                      {result.status === "needs-attention" && <AlertTriangle className="h-5 w-5 text-[#A8C66C]" />}
                      {result.status === "at-risk" && <XCircle className="h-5 w-5 text-[#F56A6A]" />}
                      <span className="ml-2 text-sm font-medium">{Math.round(result.percentage)}%</span>
                    </div>
                  </div>
                  <p className="text-sm text-[#1F4E45]/80">{result.message}</p>
                </div>
              ))}
            </div>

            {/* Recommendations */}
            {results.recommendations.length > 0 && (
              <div className="text-left mb-6">
                <h4 className="font-semibold text-[#1F4E45] mb-3">Recommended Next Steps:</h4>
                <ul className="space-y-2">
                  {results.recommendations.map((rec, index) => (
                    <li key={index} className="flex items-start text-sm text-[#1F4E45]/80">
                      <span className="text-[#A8C686] mr-2">•</span>
                      {rec}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className="bg-[#A8C686]/10 p-6 rounded-lg mb-6">
              <p className="text-[#1F4E45] font-medium">
                Want tailored tools or help connecting to the right pro? Schedule a free 15-minute Financial Roots Call.
              </p>
            </div>

            <Button
              className="bg-[#1F4E45] hover:bg-[#1F4E45]/90 text-white"
              onClick={() => window.open("https://www.oncehub.com/wealthsprouts", "_blank")}
            >
              <Calendar className="mr-2 h-4 w-4" />
              Schedule Your Call
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <Card className="border-2 border-[#A8C686] shadow-xl">
      <CardContent className="p-8">
        <div className="mb-6">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm text-[#1F4E45]/60">
              Question {currentQuestion + 1} of {questionsToShow.length}
            </span>
            <span className="text-sm text-[#1F4E45]/60">
              {Math.round(((currentQuestion + 1) / questionsToShow.length) * 100)}%
            </span>
          </div>
          <Progress value={((currentQuestion + 1) / questionsToShow.length) * 100} className="h-2" />
        </div>

        <div className="mb-4">
          <span className="text-sm font-medium text-[#A8C686]">{currentQuestionData.section}</span>
        </div>

        <h3 className="text-xl font-bold text-[#1F4E45] mb-6">{currentQuestionData.question}</h3>

        {renderAnswerOptions()}
      </CardContent>
    </Card>
  )
}
