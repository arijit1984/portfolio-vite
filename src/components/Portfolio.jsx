import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import DarkToggle from './DarkToggle';

const skills = ['Java (8–21)','Spring Boot','AWS (ECS, Lambda, S3)','Kubernetes','Terraform','Kafka','Docker','Microservices','PostgreSQL','Redis','Python (ML)'];

const experiences = [ /* kept concise; detailed in MDs */ 
  { role:'Technical Architect', company:'HCLTech (Deutsche Securities Inc.)', period:'Jan 2023 — Mar 2025', bullets:['Transitioned 12+ banking apps to AWS ECS microservices.','Implemented CI/CD and compliance automation.']},
  { role:'Advisory System Analyst', company:'IBM India Pvt Ltd (DBS)', period:'Jul 2022 — Sep 2022', bullets:['Architected microservices for API marketplace.']},
  { role:'Senior Software Engineer', company:'LnT Infotech (CITI)', period:'Mar 2021 — Jul 2022', bullets:['Delivered 40+ Java modules and built risk engine.']},
  { role:'Senior Software Engineer', company:'Senrysa Technologies', period:'May 2019 — Nov 2020', bullets:['Re-architected monolith into microservices.']}
];

const projects = [
  { title:'AI/ML Fraud Detection Pipeline', desc:'Event-driven pipeline with Kafka, Spring Boot and Python ML for sub-200ms scoring.', img:'/images/fraud.svg', route:'/case-study/fraud' },
  { title:'Cloud Modernization & Migration', desc:'Migration of 15+ apps to AWS/GCP with Terraform, Kubernetes.', img:'/images/migration.svg', route:'/case-study/migration' },
  { title:'Risk Engine (CITI)', desc:'PostgreSQL + Redis risk engine integrated with Python ML.', img:'/images/risk.svg', route:'/case-study/riskengine' },
  { title:'API Plugin Marketplace (DBS)', desc:'Microservices platform to accelerate partner onboarding.', img:'/images/apimarket.svg', route:'/case-study/apimarket' },
  { title:'Monolith → Microservices', desc:'Re-architecture of legacy systems into modular Spring Boot services.', img:'/images/monolith.svg', route:'/case-study/monolith' }
];

export default function Portfolio(){ 
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <header className="header-sticky glass py-3">
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link to="/" className="text-xl font-bold">Arijit Debnath</Link>
            <nav className="hidden md:flex gap-3 text-sm">
              <Link to="/" className="hover:underline">Home</Link>
              <a href="#projects" className="hover:underline">Projects</a>
              <a href="#experience" className="hover:underline">Experience</a>
              <Link to="/case-study/fraud" className="hover:underline">Case Studies</Link>
            </nav>
          </div>
          <div className="flex items-center gap-3">
            <Link to="/resume" className="px-3 py-1 border rounded-lg text-sm hidden sm:inline">Resume</Link>
            <DarkToggle />
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto p-6 grid md:grid-cols-4 gap-6">
        <section className="md:col-span-3 space-y-6">
          <motion.section initial={{opacity:0,y:10}} whileInView={{opacity:1,y:0}} viewport={{once:true}} className="bg-white dark:bg-gray-800 p-6 rounded-2xl glass">
            <div className="grid md:grid-cols-3 gap-6 items-center">
              <div className="md:col-span-2">
                <h2 className="text-3xl font-extrabold">Technical Architect — Java & Cloud Modernization</h2>
                <p className="mt-4 text-gray-600 dark:text-gray-300">Technical & Solution Architect with 14+ years of hands-on Java, Spring Boot and cloud-native experience. I modernize legacy platforms into scalable AWS/GCP microservices and design ML-enabled fraud detection pipelines.</p>
                <div className="mt-4 flex gap-3">
                  <a href="#contact" className="px-4 py-2 bg-slate-900 text-white rounded-lg">Hire me</a>
                  <Link to="/case-study/fraud" className="px-4 py-2 border rounded-lg">View Case Studies</Link>
                  <Link to="/resume" className="px-4 py-2 border rounded-lg">Resume</Link>
                </div>
              </div>
              <div className="flex justify-center">
                <div className="w-44 h-44 rounded-2xl overflow-hidden">
                  <img src="/images/profile.png" alt="profile" className="w-full h-full object-cover"/>
                </div>
              </div>
            </div>
          </motion.section>

          <motion.section id="skills" initial={{opacity:0,y:10}} whileInView={{opacity:1,y:0}} viewport={{once:true}} className="bg-white dark:bg-gray-800 p-6 rounded-2xl glass">
            <h3 className="text-2xl font-semibold">Skills & Tools</h3>
            <div className="mt-4 flex flex-wrap gap-3">{skills.map(s=> <span key={s} className="px-3 py-1 border rounded-full text-sm">{s}</span>)}</div>
          </motion.section>

          <motion.section id="experience" initial={{opacity:0,y:10}} whileInView={{opacity:1,y:0}} viewport={{once:true}} className="bg-white dark:bg-gray-800 p-6 rounded-2xl glass">
            <h3 className="text-2xl font-semibold">Professional Experience</h3>
            <div className="mt-6 space-y-4">{experiences.map((e, i)=> (
              <motion.article key={i} initial={{opacity:0, x:-10}} whileInView={{opacity:1, x:0}} viewport={{once:true}} transition={{duration:0.4}} className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg border">
                <div className="flex justify-between">
                  <div><h4 className="font-semibold">{e.role} — <span className="text-sm text-gray-600 dark:text-gray-300">{e.company}</span></h4><div className="text-sm text-gray-500 dark:text-gray-400">{e.period}</div></div>
                </div>
                <ul className="mt-2 ml-5 list-disc text-sm text-gray-700 dark:text-gray-200">{e.bullets.map((b,idx)=><li key={idx}>{b}</li>)}</ul>
              </motion.article>
            ))}</div>
          </motion.section>

          <motion.section id="projects" initial={{opacity:0,y:10}} whileInView={{opacity:1,y:0}} viewport={{once:true}} className="bg-white dark:bg-gray-800 p-6 rounded-2xl glass">
            <h3 className="text-2xl font-semibold">Selected Projects</h3>
            <div className="mt-6 grid md:grid-cols-2 gap-6">{projects.map((p,i)=> (
              <motion.div key={i} whileHover={{scale:1.03}} className="block rounded-lg overflow-hidden border bg-white dark:bg-gray-700">
                <Link to={p.route} className="block">
                  <div className="p-4">
                    <img src={p.img} alt={p.title} className="w-full h-40 object-cover rounded-md"/>
                    <h4 className="mt-3 font-semibold">{p.title}</h4>
                    <p className="text-sm mt-1 text-gray-600 dark:text-gray-300">{p.desc}</p>
                  </div>
                </Link>
              </motion.div>
            ))}</div>
          </motion.section>

          <motion.section id="case-studies" initial={{opacity:0,y:10}} whileInView={{opacity:1,y:0}} viewport={{once:true}} className="p-6 rounded-2xl">
            <h3 className="text-2xl font-semibold">Case Studies</h3>
            <div className="mt-4 flex gap-3 flex-wrap">
              <Link to="/case-study/fraud" className="px-4 py-2 border rounded-lg">AI/ML Fraud Pipeline</Link>
              <Link to="/case-study/migration" className="px-4 py-2 border rounded-lg">Cloud Modernization</Link>
              <Link to="/case-study/riskengine" className="px-4 py-2 border rounded-lg">Risk Engine</Link>
              <Link to="/case-study/apimarket" className="px-4 py-2 border rounded-lg">API Plugin Marketplace</Link>
              <Link to="/case-study/monolith" className="px-4 py-2 border rounded-lg">Monolith Re-architecture</Link>
            </div>
          </motion.section>

          <motion.section id="contact" initial={{opacity:0,y:10}} whileInView={{opacity:1,y:0}} viewport={{once:true}} className="bg-white dark:bg-gray-800 p-6 rounded-2xl glass">
            <h3 className="text-2xl font-semibold">Contact</h3>
            <p className="mt-2 text-gray-600 dark:text-gray-300">Interested in working together? Email me at <strong>arijit.debnath@zohomail.in</strong></p>
            <form className="mt-4 grid md:grid-cols-2 gap-4" onSubmit={(e)=>{e.preventDefault(); alert('Form submit placeholder — replace with Formspree or your backend.')}}>
              <input required placeholder="Name" className="p-3 border rounded-lg" />
              <input required placeholder="Email" className="p-3 border rounded-lg" />
              <input placeholder="Subject" className="p-3 border rounded-lg md:col-span-2" />
              <textarea placeholder="Message" required className="p-3 border rounded-lg md:col-span-2 h-28" />
              <div className="md:col-span-2"><button className="px-4 py-2 bg-slate-900 text-white rounded-lg">Send Message</button></div>
            </form>
          </motion.section>
        </section>

        <aside className="hidden md:block sticky top-24 self-start space-y-4">
          <div className="glass p-4 rounded-lg">
            <h4 className="font-semibold">Quick Links</h4>
            <ul className="mt-2 text-sm space-y-2">
              <li><a href="#projects" className="hover:underline">Projects</a></li>
              <li><a href="#experience" className="hover:underline">Experience</a></li>
              <li><a href="#case-studies" className="hover:underline">Case Studies</a></li>
              <li><a href="#contact" className="hover:underline">Contact</a></li>
            </ul>
          </div>
          <div className="glass p-4 rounded-lg">
            <h4 className="font-semibold">Certifications</h4>
            <ul className="mt-2 text-sm">
              <li>GCP Essential Training — Jul 2025</li>
              <li>IBM Cloud Essentials — Jul 2022</li>
              <li>AWS Solutions Architect (expected Feb 2026)</li>
            </ul>
          </div>
        </aside>
      </main>

      <footer className="max-w-6xl mx-auto p-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Arijit Debnath — Built with React + Tailwind • Phone: +91 9831989627
      </footer>
    </div>
  );
}
