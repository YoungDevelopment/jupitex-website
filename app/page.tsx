import { HeroSection } from "@/components/hero-section"
import { ScrollTextSection } from "@/components/scroll-text-section"
import Services from "@/components/services"

export default function Page() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <HeroSection />
      <ScrollTextSection />
      <Services />
    </div>
  )
}
