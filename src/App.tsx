import React from 'react';
import { motion } from 'motion/react';
import { Github, Linkedin, Mail, ExternalLink, ChevronRight, Terminal, Cpu, Database, Cloud, Code2 } from 'lucide-react';
import { cn } from './lib/utils';
// import profileImage from './lib/1772477602369.png';
import profileImage from './lib/image (3).png';

// --- Components ---

const Section = ({ children, className, id }: { children: React.ReactNode; className?: string; id?: string }) => (
  <section id={id} className={cn("py-24 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto", className)}>
    {children}
  </section>
);

const Badge = ({ children }: { children: React.ReactNode }) => (
  <span className="px-3 py-1 text-xs font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 rounded-full">
    {children}
  </span>
);

const ExperienceCard = ({ 
  company, 
  role, 
  period, 
  description 
}: { 
  company: string; 
  role: string; 
  period: string; 
  description: string[] 
}) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="group relative pl-8 pb-12 border-l border-zinc-800 last:pb-0"
  >
    <div className="absolute left-[-5px] top-0 w-[9px] h-[9px] rounded-full bg-emerald-500 group-hover:scale-150 transition-transform" />
    <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
      <div>
        <h3 className="text-xl font-bold text-zinc-100">{role}</h3>
        <p className="text-emerald-400 font-medium italic serif">{company}</p>
      </div>
      <span className="text-sm font-mono text-zinc-500 mt-1 md:mt-0">{period}</span>
    </div>
    <ul className="space-y-3">
      {description.map((item, i) => (
        <li key={i} className="flex gap-3 text-zinc-400 leading-relaxed">
          <ChevronRight className="w-4 h-4 mt-1 shrink-0 text-emerald-500/50" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  </motion.div>
);

const SkillGroup = ({ title, skills, icon: Icon }: { title: string; skills: string[]; icon: any }) => (
  <div className="p-6 rounded-2xl bg-zinc-900/50 border border-zinc-800 hover:border-emerald-500/30 transition-colors group">
    <div className="flex items-center gap-3 mb-4">
      <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400 group-hover:bg-emerald-500 group-hover:text-black transition-colors">
        <Icon size={20} />
      </div>
      <h3 className="font-mono text-sm uppercase tracking-widest text-zinc-300">{title}</h3>
    </div>
    <div className="flex flex-wrap gap-2">
      {skills.map(skill => (
        <span key={skill} className="px-2 py-1 text-xs bg-zinc-800 text-zinc-400 rounded border border-zinc-700/50">
          {skill}
        </span>
      ))}
    </div>
  </div>
);

export default function App() {
  return (
    <div className="min-h-screen bg-bg selection:bg-emerald-500/30 selection:text-emerald-200">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 glass border-b border-zinc-800/50">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="font-mono font-bold text-zinc-100 tracking-tighter text-xl">
            SH<span className="text-emerald-500">.</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-mono uppercase tracking-widest">
            <a href="#about" className="hover:text-emerald-400 transition-colors">About</a>
            <a href="#experience" className="hover:text-emerald-400 transition-colors">Experience</a>
            <a href="#skills" className="hover:text-emerald-400 transition-colors">Skills</a>
            {/* <a href="#contact" className="px-4 py-2 bg-emerald-500 text-black font-bold rounded hover:bg-emerald-400 transition-colors">Hire Me</a> */}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <Section id="about" className="pt-40 pb-32 relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-20" />
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Badge>Available for new opportunities</Badge>
            <h1 className="text-5xl md:text-8xl font-sans font-bold mt-6 mb-8 tracking-tighter leading-tight cursor-default">
              <div className="overflow-hidden">
                <motion.span 
                  initial={{ y: "100%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  className="block"
                >
                  SHAHZAIB
                </motion.span>
              </div>
              <div className="overflow-hidden">
                <motion.span 
                  initial={{ y: "100%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                  className="block text-emerald-500"
                >
                  HAIDER
                </motion.span>
              </div>
            </h1>
            <p className="text-xl md:text-2xl text-zinc-400 max-w-2xl leading-relaxed mb-10">
              Backend-focused <span className="text-zinc-100 font-medium">Full-Stack Engineer</span> building distributed systems, event-driven architecture, and AI-powered platforms.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="mailto:shahzaib01.h@gmail.com" className="flex items-center gap-2 px-6 py-3 bg-zinc-100 text-black font-bold rounded-lg hover:bg-emerald-500 transition-all">
                <Mail size={18} /> Get in touch
              </a>
              <div className="flex items-center gap-2">
                <a href="https://www.linkedin.com/in/shahzaib-haider1/" className="p-3 rounded-lg border border-zinc-800 hover:border-emerald-500/50 hover:text-emerald-400 transition-all">
                  <Linkedin size={20} />
                </a>
                <a href="https://github.com/sshzaib" className="p-3 rounded-lg border border-zinc-800 hover:border-emerald-500/50 hover:text-emerald-400 transition-all">
                  <Github size={20} />
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative aspect-square max-w-[280px] mx-auto lg:ml-auto w-full"
          >
            <img 
              src={profileImage} 
              alt="Shahzaib Haider"
              className="absolute inset-0 w-full h-full object-cover rounded-2xl border border-zinc-800/50"
            />
          </motion.div>
        </div>
      </Section>

      {/* Skills Section */}
      <Section id="skills" className="bg-zinc-950/50 border-y border-zinc-900">
        <div className="mb-10">
          <h2 className="text-3xl font-bold">Technical Skills</h2>
          {/* <p className="text-zinc-500 font-mono text-sm uppercase tracking-widest">Tools & Technologies I master</p> */}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <SkillGroup 
            title="Languages" 
            icon={Terminal}
            skills={["TypeScript", "Python", "JavaScript"]} 
          />
          <SkillGroup 
            title="Backend" 
            icon={Cpu}
            skills={["NestJS", "FastAPI", "ExpressJS", "Microservices", "Event-Driven Architecture"]} 
          />
          <SkillGroup 
            title="AI & Data" 
            icon={Database}
            skills={["PostgreSQL", "MongoDB", "LangChain", "LangGraph", "Pinecone", "RAG Systems"]} 
          />
          <SkillGroup 
            title="Infrastructure" 
            icon={Cloud}
            skills={["AWS (EC2, S3, Lambda, Neptune)", "Docker", "CI/CD", "Redis", "RabbitMQ"]} 
          />
        </div>
      </Section>

      {/* Experience Section */}
      <Section id="experience">
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-4">Professional Experience</h2>
          <p className="text-zinc-500 font-mono text-sm uppercase tracking-widest">Building scalable solutions across industries</p>
        </div>
        <div className="max-w-4xl">
          <ExperienceCard 
            company="Chainfore"
            role="Software Engineer"
            period="Sep 2025 – Present"
            description={[
              "Built event-driven microservices architecture using NestJS and FastAPI",
              "Developed Agentic RAG system with LangGraph and Azure AI Search",
              "Implemented retry mechanisms and DLQ strategies for messaging",
              "Built real-time ingestion tracking via SSE and event-driven processing",
              "Implemented CQRS and Hexagonal Architecture for business logic"
            ]}
          />
          <ExperienceCard 
            company="Ilsa Interactive"
            role="Software Engineer"
            period="Dec 2024 – Sep 2025"
            description={[
              "Built high-performance applications using NextJS and React Query",
              "Migrated SQL architecture to AWS Neptune graph database",
              "Developed GraphQL server with Redis caching for performance",
              "Maintained NestJS applications with PostgreSQL and TypeORM"
            ]}
          />
          <ExperienceCard 
            company="HexaLabs"
            role="Full-Stack Developer + DevOps"
            period="Jul 2023 – Dec 2024"
            description={[
              "Built scalable real-time chat app via WebSockets and Redis",
              "Implemented JWT authentication and RBAC/SSO security",
              "Containerized microservices using Docker and GitHub Actions"
            ]}
          />
        </div>
      </Section>

      {/* Education */}
      <Section className="bg-zinc-950/50 border-t border-zinc-900">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">Education</h2>
            <div className="p-8 rounded-2xl glass border-emerald-500/10">
              <h3 className="text-xl font-bold text-zinc-100">BSc in Engineering</h3>
              <p className="text-emerald-400 font-medium mb-4">GIK Institute of Engineering Sciences & Technology</p>
              <div className="flex items-center justify-between text-sm font-mono text-zinc-500">
                <span>2018 - 2022</span>
                {/* <span className="px-2 py-1 bg-zinc-800 rounded">CGPA: 3.23</span> */}
              </div>
            </div>
          </div>
          <div className="space-y-6">
            <h2 className="text-3xl font-bold">Let's Build Something</h2>
            <p className="text-zinc-400 leading-relaxed">
              I'm always interested in hearing about new projects and opportunities. Whether you have a question or just want to say hi, my inbox is always open.
            </p>
            <div className="flex gap-4">
              <a href="mailto:shahzaib01.h@gmail.com" className="px-8 py-4 bg-emerald-500 text-black font-bold rounded-xl hover:bg-emerald-400 transition-all shadow-lg shadow-emerald-500/20">
                Send a Message
              </a>
            </div>
          </div>
        </div>
      </Section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-zinc-900 text-center">
        <p className="text-zinc-500 text-sm font-mono">
          © {new Date().getFullYear()} SHAHZAIB HAIDER. BUILT WITH PRECISION.
        </p>
      </footer>
    </div>
  );
}
