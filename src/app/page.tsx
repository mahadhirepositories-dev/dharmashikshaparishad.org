import { BookOpen, Users, Award, Shield, CheckCircle2 } from "lucide-react";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      {/* Navigation */}
      <nav className="flex items-center justify-between px-6 py-4 bg-brand-bg/80 backdrop-blur-md sticky top-0 z-50 border-b border-brand-primary/10">
        <div className="text-xl font-heading font-bold text-brand-primary tracking-wide">
          DHARMA SHIKSHA PARISHAD
        </div>
        <div className="hidden md:flex gap-6 font-semibold">
          <a href="#vision" className="hover:text-brand-primary transition-colors duration-200 cursor-pointer">Vision</a>
          <a href="#objectives" className="hover:text-brand-primary transition-colors duration-200 cursor-pointer">Objectives</a>
          <a href="#structure" className="hover:text-brand-primary transition-colors duration-200 cursor-pointer">Structure</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center px-6 py-24 md:py-32 bg-gradient-to-b from-brand-bg to-brand-primary/5">
        <h1 className="text-5xl md:text-7xl font-heading font-bold text-brand-text mb-6 leading-tight">
          Dharma Shiksha <br className="md:hidden" />Parishad
        </h1>
        <p className="text-xl md:text-2xl text-brand-text/80 max-w-2xl mb-10">
          Preserving, Educating, and Upholding Sanatana Dharma. Commitment over popularity.
        </p>
        <a href="#vision" className="bg-brand-cta text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-yellow-600 transition-colors duration-200 shadow-lg cursor-pointer">
          Understand Our Vision
        </a>
      </section>

      {/* Vision & Introduction */}
      <section id="vision" className="px-6 py-20 max-w-4xl mx-auto text-center scroll-mt-20">
        <h2 className="text-3xl md:text-4xl font-heading font-bold mb-8 text-brand-primary">
          Our Vision
        </h2>
        <div className="space-y-6 text-lg md:text-xl text-brand-text/90 leading-relaxed">
          <p>
            The foundation of a strong and resilient society lies in its connection to its spiritual and cultural roots. <strong>Dharma Shiksha Parishad</strong> was established with the core objective of preserving, educating, and upholding Sanatana Dharma in its most authentic form.
          </p>
          <p>
            While many organizations exist within the Hindu ecosystem, there remains a critical need for structured learning, disciplined representation, and professional coordination. We aim to address this gap by establishing an institutional framework for dharmic education and volunteer management.
          </p>
        </div>
      </section>

      {/* Core Objectives */}
      <section id="objectives" className="px-6 py-20 bg-brand-primary/5 scroll-mt-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-12 text-center text-brand-primary">
            Core Objectives
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <ObjectiveCard 
              icon={<BookOpen className="w-8 h-8 text-brand-cta" />}
              title="Standardized Curriculum"
              description="Establishing a standardized, syllabus-based approach to teaching Sanatana Dharma."
            />
            <ObjectiveCard 
              icon={<Users className="w-8 h-8 text-brand-cta" />}
              title="Quality Over Quantity"
              description="Focusing on creating a dedicated group of highly trained individuals rather than mass recruitment."
            />
            <ObjectiveCard 
              icon={<Award className="w-8 h-8 text-brand-cta" />}
              title="Professional Certification"
              description="Providing rigorous training, evaluation, and certification to authentic speakers."
            />
            <ObjectiveCard 
              icon={<Shield className="w-8 h-8 text-brand-cta" />}
              title="Strictly Non-Political"
              description="Operating independently of political agendas to ensure the purity of our dharmic mission."
            />
          </div>
        </div>
      </section>

      {/* Structure & Conduct */}
      <section id="structure" className="px-6 py-20 max-w-5xl mx-auto scroll-mt-20">
        <h2 className="text-3xl md:text-4xl font-heading font-bold mb-12 text-center text-brand-primary">
          Organizational Structure & Code of Conduct
        </h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-brand-primary/10">
            <h3 className="text-2xl font-heading font-bold mb-6 text-brand-text">Leadership & Volunteering</h3>
            <ul className="space-y-4">
              <ListItem text="Central Committee issues work orders and monitors activities." />
              <ListItem text="Coordinators appointed across District, State, and National levels based on merit." />
              <ListItem text="Zero-Financial Policy: No membership fees, no fundraising, no donations solicited." />
              <ListItem text="Equal opportunity based on commitment and service, regardless of background." />
            </ul>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-brand-primary/10">
            <h3 className="text-2xl font-heading font-bold mb-6 text-brand-text">Code of Conduct</h3>
            <ul className="space-y-4">
              <ListItem text="Respect Sanatana Dharma and treat all individuals with dignity." />
              <ListItem text="Maintain complete honesty, integrity, and discipline." />
              <ListItem text="Strictly avoid caste-based discrimination." />
              <ListItem text="Do not misuse the organization for personal branding or politics." />
            </ul>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-brand-primary text-white py-12 px-6 text-center">
        <div className="text-2xl font-heading font-bold mb-4">DHARMA SHIKSHA PARISHAD</div>
        <p className="opacity-80 mb-8 max-w-xl mx-auto">
          "We believe that the future of Sanatana Dharma depends not merely upon numbers, but upon dedicated individuals who are willing to learn, serve, and stand for what is right."
        </p>
        <div className="opacity-60 text-sm">
          &copy; {new Date().getFullYear()} Dharma Shiksha Parishad. All rights reserved.
        </div>
      </footer>
    </main>
  );
}

function ObjectiveCard({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-sm border border-brand-primary/10 hover:shadow-md transition-shadow duration-200">
      <div className="mb-4 bg-brand-bg inline-block p-3 rounded-xl">{icon}</div>
      <h3 className="text-xl font-heading font-bold mb-3 text-brand-text">{title}</h3>
      <p className="text-brand-text/80">{description}</p>
    </div>
  );
}

function ListItem({ text }: { text: string }) {
  return (
    <li className="flex items-start gap-3">
      <CheckCircle2 className="w-6 h-6 text-brand-secondary shrink-0" />
      <span className="text-brand-text/90 pt-0.5">{text}</span>
    </li>
  );
}
