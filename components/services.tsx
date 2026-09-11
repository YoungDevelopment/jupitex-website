import Image from "next/image";
import { SectionLayout } from "@/components/section-layout";

interface ServiceCardProps {
  cardName: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  subServices: string[];
}

function ServiceCard({
  cardName,
  title,
  description,
  image,
  imageAlt,
  subServices,
}: ServiceCardProps) {
  return (
    <div className="group h-[480px] xs:h-[520px] sm:h-[540px] md:h-[560px] lg:h-[620px] perspective-[1000px]">
      <div className="relative h-full w-full transition-transform duration-700 transform-style-3d group-hover:rotate-y-180">
        {/* Front face */}
        <div className="absolute inset-0 flex flex-col rounded-3xl overflow-hidden bg-white backface-hidden shadow-sm border border-neutral-100">
          <div className="px-5 sm:px-6 md:px-8 pt-7 sm:pt-8 md:pt-10 pb-0 shrink-0">
            <h3 className="mt-2 text-2xl font-semibold text-neutral-900">
              {title}
            </h3>
            <p className="mt-4 text-sm text-neutral-500">
              {description}
            </p>
          </div>
          
          <div className="relative flex-1 min-h-0 flex items-end justify-center h-32 sm:h-40 md:h-48 lg:h-56 mt-8">
            <Image
              src={image}
              alt={imageAlt}
              fill
              className="object-contain object-bottom w-full h-full"
            />
          </div>
        </div>

        {/* Back face */}
        <div className="absolute inset-0 flex flex-col items-center justify-center rounded-3xl bg-white px-5 sm:px-6 md:px-8 py-8 sm:py-10 backface-hidden shadow-sm border border-neutral-100 rotate-y-180">
          <p className="text-xs font-semibold uppercase tracking-widest text-neutral-400 mb-2">
            {cardName}
          </p>
          <h3 className="text-2xl font-semibold text-neutral-900 text-center mb-6 sm:mb-8">
            {title}
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {subServices.map((sub) => (
              <span
                key={sub}
                className="rounded-full px-3 py-2 sm:px-4 sm:py-2.5 md:px-5 bg-neutral-100 text-neutral-900 font-medium text-xs cursor-default transition-colors duration-200 hover:bg-neutral-900 hover:text-white"
              >
                {sub}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

const services: ServiceCardProps[] = [
  {
    cardName: "PUT AI TO WORK IN YOUR BUSINESS",
    title: "AI Transformation Services",
    description:
    "We find the tasks eating up your team's time and automate them. Less manual work, lower costs, and your team focuses on work that actually matters.",
    image: "/images/ai and automation.png",
    imageAlt: "AI & Automation",
    subServices: [
     "AI Readiness audit", "Data and Reporting with AI", "AI compliance and Governance","Custom AI Solutions and Integrations"
    ],
  },
  {
    cardName: "BUILD EXACTLY WHAT YOUR BUSINESS NEEDS",
    title: "Full-Stack Development",
    description:
    "When off-the-shelf tools fall short, we build what your business actually needs. Custom software designed around your team — built for growth and simple enough to use daily.", 
    image: "/images/Development.png",
    imageAlt: "Development",
    subServices: [
      "AI integration","Model Training","Business Tools & Automation","Web and Mobile Development"
    ],
  },
  {
    cardName: "ADD THE RIGHT PEOPLE, FAST",
    title: "Staff Augmentation",
    description:
    "Hiring takes months. You don't have months. We place vetted AI engineers and developers on your team who deliver from day one. Wrong fit? We replace them in 48 hours.",  
    image: "/images/staff augumentation.png",
    imageAlt: "Staff Augmentation",
    subServices: [
    "AI Engineers","Software Engineers","Virtual Assistants","IT Support Specialists"
    ],
  },
];

export default function Services() {
  return (
    <SectionLayout
      sectionId="services"
      bg="bg-neutral-50"
      title="Our Services"
      description="We deliver end-to-end technology solutions that transform how businesses operate, innovate, and scale."
    >
      <>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {services.map((service) => (
            <ServiceCard key={service.cardName} {...service} />
          ))}
        </div>
      </>
    </SectionLayout>
  );
}
