import { Check } from "lucide-react"
import { cn } from "@/lib/utils"

interface StepProps {
  steps: string[]
  currentStep: number
}

export function CourseStepper({ steps, currentStep }: StepProps) {
  return (
    <div className="relative">
      <div className="absolute top-5 left-1 right-1 h-0.5 bg-gray-200">
        <div
          className="absolute h-full bg-primary transition-all duration-500"
          style={{ width: `${(currentStep / (steps.length - 1)) * 100}%` }}
        />
      </div>
      <div className="relative flex justify-between">
        {steps.map((step, index) => (
          <div key={step} className="flex flex-col items-center">
            <div
              className={cn(
                "w-10 h-10 rounded-full border-2 flex items-center justify-center font-semibold",
                index < currentStep
                  ? "border-primary bg-primary text-white"
                  : index === currentStep
                    ? "border-primary text-primary"
                    : "border-gray-300 text-gray-300",
              )}
            >
              {index < currentStep ? <Check className="h-5 w-5" /> : index + 1}
            </div>
            <span className={cn("mt-2 text-sm font-medium", index <= currentStep ? "text-primary" : "text-gray-300")}>
              {step}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

