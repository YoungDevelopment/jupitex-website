import { HeroSection } from "@/components/hero-section"
import { DummyHeroSection } from "@/components/dummy-hero-section"

export default function Page() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <HeroSection />
      {/* <DummyHeroSection /> */}
    </div>
  )
}
