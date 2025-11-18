import React from 'react'
import { motion } from 'framer-motion'

const skills = [
  'Java', 'Spring Boot', 'AWS (ECS, Lambda, S3)', 'Kubernetes', 'Terraform', 'Kafka', 'Docker', 'Microservices', 'SQL', 'NoSQL'
]

const experience = [
  { role: 'Technical Architect', company: 'HCLTech (Deutsche Securities Inc.)', period: 'Jan 2023 — Mar 2025', bullets: [
    'Transitioned 12+ banking applications to AWS ECS microservices, improving scalability and reducing costs.',
    'Implemented CI/CD and compliance automation, ensuring SOC2 and PCI DSS readiness.'
  ]},
  { role: 'Senior Software Engineer', company: 'LnT Infotech (CITI Bank)', period: 'Mar 2021 — Jul 2022', bullets: [
    'Delivered multiple Java/Spring Boot modules and risk engines with high reliability.',
    'Built predictive fraud detection components combining Java and Python ML models.'
  ]}
]

const projects = [
  { title: 'Project Alpha', desc: 'Cloud-native payment gateway with high throughput and low latency.', img: '/images/project-alpha.svg', link: '#' },
  { title: 'Project Beta', desc: 'Distributed event processing pipeline using Kafka and Lambda.', img: '/images/project-beta.svg', link: '#' }
]

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <header className="max-w-5xl mx-auto p-6 flex items-center justify-between">
        <h1 className="text-2xl font-bold">Arijit Debnath</h1>
        <nav className="space-x-4">
          <a href="#projects" className="hover:underline">Projects</a>
          <a href="#experience" className="hover:underline">Experience</a>
          <a href="#contact" className="hover:underline">Contact</a>
          <a href="/resume.pdf" className="ml-4 inline-block px-4 py-2 border rounded-lg">Resume</a>
        </nav>
      </header>

      <main className="max-w-5xl mx-auto p-6 space-y-12">

        <section className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <motion.h2 initial={{opacity:0, y:10}} animate={{opacity:1, y:0}} className="text-4xl font-extrabold">
              Technical Architect — Java & Cloud Modernization
            </motion.h2>
            <p className="mt-4 text-lg">
              Technical & Solution Architect with 14+ years of hands-on Java (8–21), Spring Boot and cloud-native experience.
              I modernize legacy platforms into scalable AWS/GCP microservices, design ML-enabled fraud detection pipelines,
              and implement secure, cost-optimized architectures that meet PCI DSS, SOC2 and ISO 27001 requirements.
            </p>

            <div className="mt-6 flex gap-3">
              <a href="#contact" className="px-4 py-2 bg-slate-900 text-white rounded-lg">Hire me</a>
              <a href="/case-studies/case-study-C.md" className="px-4 py-2 border rounded-lg">Case Study C</a>
              <a href="/case-studies/case-study-D.md" className="px-4 py-2 border rounded-lg">Case Study D</a>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="w-64 h-64 bg-gradient-to-br from-indigo-200 to-sky-100 rounded-2xl flex items-center justify-center">
              <img src="/images/profile.png" alt="Profile" className="w-40 h-40 rounded-full object-cover" />
            </div>
          </div>
        </section>

        <section id="skills" className="bg-white p-6 rounded-2xl shadow-sm">
          <h3 className="text-2xl font-semibold">Skills</h3>
          <div className="mt-4 flex flex-wrap gap-3">
            {skills.map(s => (<span key={s} className="px-3 py-1 border rounded-full text-sm">{s}</span>))}
          </div>
        </section>

        <section id="experience" className="p-6 rounded-2xl">
          <h3 className="text-2xl font-semibold">Experience</h3>
          <div className="mt-6 space-y-4">
            {experience.map((exp, idx) => (
              <article key={idx} className="bg-white p-4 rounded-lg shadow-sm">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="font-semibold">{exp.role} — <span className="text-sm text-gray-600">{exp.company}</span></h4>
                    <div className="text-sm text-gray-500">{exp.period}</div>
                  </div>
                </div>
                <ul className="mt-3 list-disc ml-5 text-sm text-gray-700">
                  {exp.bullets.map((b, i) => <li key={i}>{b}</li>)}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section id="projects" className="p-6 rounded-2xl bg-white shadow-sm">
          <h3 className="text-2xl font-semibold">Projects</h3>
          <div className="mt-6 grid md:grid-cols-2 gap-6">
            {projects.map((p, i) => (
              <motion.a key={i} href={p.link} className="block rounded-lg overflow-hidden border" whileHover={{ scale: 1.02 }}>
                <div className="p-4">
                  <img src={p.img} alt={p.title} className="w-full h-40 object-cover rounded-md" />
                  <h4 className="mt-3 font-semibold">{p.title}</h4>
                  <p className="text-sm mt-1 text-gray-600">{p.desc}</p>
                </div>
              </motion.a>
            ))}
          </div>
        </section>

        <section className="p-6 rounded-2xl">
          <h3 className="text-2xl font-semibold">Case Studies</h3>
          <div className="mt-4 flex gap-3">
            <a href="/case-studies/case-study-C.md" className="px-4 py-2 border rounded-lg">Case Study C (MD)</a>
            <a href="/case-studies/case-study-D.md" className="px-4 py-2 border rounded-lg">Case Study D (MD)</a>
          </div>
        </section>

        <section id="contact" className="p-6 rounded-2xl bg-white shadow-sm">
          <h3 className="text-2xl font-semibold">Contact</h3>
          <p className="mt-2 text-sm text-gray-600">Interested in working together? Send a message or email me at <strong>arijit.debnath@zohomail.in</strong></p>

          <form className="mt-4 grid md:grid-cols-2 gap-4" onSubmit={(e)=>{e.preventDefault(); alert('Form submit placeholder — replace with Formspree or your backend.')}}>
            <input required placeholder="Name" className="p-3 border rounded-lg" />
            <input required placeholder="Email" className="p-3 border rounded-lg" />
            <input placeholder="Subject" className="p-3 border rounded-lg md:col-span-2" />
            <textarea placeholder="Message" required className="p-3 border rounded-lg md:col-span-2 h-28" />
            <div className="md:col-span-2">
              <button className="px-4 py-2 bg-slate-900 text-white rounded-lg">Send Message</button>
            </div>
          </form>
        </section>

      </main>

      <footer className="max-w-5xl mx-auto p-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Arijit Debnath — Built with React + Tailwind
      </footer>
    </div>
  )
}
