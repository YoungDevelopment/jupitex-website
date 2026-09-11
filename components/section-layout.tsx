import React from "react";
import { SectionWrapper } from "@/components/section-wrapper";
import ScrollReveal from "./ScrollReveal";
import { TextAnimate } from "@/components/ui/text-animate";

interface SectionLayoutProps {
  title: string;
  description: string;
  bg?: string;
  /** Sets the section `id` for in-page anchors (footer, nav). */
  sectionId?: string;
  /** Use light text for dark-background sections. */
  dark?: boolean;
  children: React.ReactNode;
}

export function SectionLayout({
  title,
  description,
  bg = "bg-apple-light-gray",
  sectionId,
  dark = false,
  children,
}: SectionLayoutProps) {
  const titleColor = dark ? "text-white" : "text-neutral-900";

  return (
    <SectionWrapper>
      <div id={sectionId} className={`w-full min-h-screen flex flex-col justify-center ${bg} py-24 px-4 sm:px-6 lg:px-8`}>
        <div className="max-w-7xl mx-auto w-full">
          <ScrollReveal>
            <div className="flex items-center">
              <div className="flex items-baseline">
                <TextAnimate
                  animation="blurInUp"
                  by="character"
                  once
                  className="text-display-hero font-title text-orange-500 text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold"
                >
                  _
                </TextAnimate>
                <TextAnimate
                  animation="blurInUp"
                  by="character"
                  once
                  className={`text-display-hero font-title ${titleColor} text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold ml-2`}
                >
                  {title}
                </TextAnimate>
              </div>
            </div>
          </ScrollReveal>

          <div className="h-12 sm:h-16 md:h-20 lg:h-24" />
          <ScrollReveal delay={0.15}>
            {children}
          </ScrollReveal>
          <div className="h-12 sm:h-16 md:h-20 lg:h-24" />
        </div>
      </div>
    </SectionWrapper>
  );
}
