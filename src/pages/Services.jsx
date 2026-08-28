import { Link } from 'react-router-dom'
import TechGrid from '../components/TechGrid.jsx'
import CountUp from '../components/CountUp.jsx'
import Reveal from '../components/Reveal.jsx'
import { TECH_STACK } from '../data/techStack.js'

const services = [
  {
    num: '01',
    title: 'Web & App Development',
    desc: 'We design responsive websites and mobile apps with clean and modern technology for optimum performance.',
    items: ['Custom websites & web apps', 'iOS & Android app builds', 'E-commerce & booking platforms', 'API integration & maintenance'],
    icon: <><path d="M16 18l6-6-6-6"/><path d="M8 6l-6 6 6 6"/></>,
  },
  {
    num: '02',
    title: 'Digital Marketing',
    desc: 'Boost your brand visibility and generate leads through SEO, PPC, social media, and content marketing.',
    items: ['Search engine optimization', 'Paid social & search campaigns', 'Content & social strategy', 'Analytics & reporting'],
    icon: <><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></>,
  },
  {
    num: '03',
    title: 'Video Editing',
    desc: 'Professional social media video editing to turn your clips into engaging Reels, Shorts, and Stories.',
    items: ['Reels & Shorts editing', 'Brand & promo videos', 'Motion graphics & captions', 'Fast turnaround delivery'],
    icon: <><polygon points="23 7 16 12 23 17 23 7"/><rect x="1" y="5" width="15" height="14" rx="2" ry="2"/></>,
  },
  {
    num: '04',
    title: 'ERP Solutions',
    desc: 'Powerful, custom-built ERP systems to streamline operations, improve workflows, and centralize business management.',
    items: ['Custom ERP development', 'Workflow automation', 'Inventory & HR modules', 'Real-time dashboards'],
    icon: <><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/></>,
  },
  {
    num: '05',
    title: 'Cloud Solutions',
    desc: 'Secure, scalable cloud infrastructure setup and management to optimize the performance and reduce your IT costs.',
    items: ['Cloud migration & setup', 'AWS & Azure services', 'Server management', 'Cost optimization'],
    icon: <><path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"/></>,
  },
  {
    num: '06',
    title: 'Custom Software Development',
    desc: 'Tailored software solutions designed to fit your business needs with precision, scalability & reliability.',
    items: ['Desktop & web applications', 'CRM & business tools', 'Third-party integrations', 'Scalable architecture'],
    icon: <><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></>,
  },
  {
    num: '07',
    title: 'Game Development',
    desc: 'End-to-end game creation with stunning graphics, smooth gameplay, and immersive experiences for mobile, PC, and web.',
    items: ['2D & 3D game development', 'Unity & Unreal Engine', 'Multiplayer integration', 'Cross-platform deployment'],
    icon: <><line x1="6" y1="12" x2="10" y2="12"/><line x1="8" y1="10" x2="8" y2="14"/><line x1="15" y1="13" x2="15.01" y2="13"/><line x1="18" y1="11" x2="18.01" y2="11"/><rect x="2" y="6" width="20" height="12" rx="2"/></>,
  },
  {
    num: '08',
    title: 'Data Analytics',
    desc: 'Transform raw data into actionable insights with advanced dashboards, reporting, and predictive analytics.',
    items: ['Business intelligence dashboards', 'Data visualization', 'Predictive analytics', 'Power BI & Tableau'],
    icon: <><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></>,
  },
  {
    num: '09',
    title: 'AI Agents',
    desc: 'Smart autonomous agents that automate tasks, boost productivity, and deliver intelligent decision-making for your business.',
    items: ['Custom AI agent development', 'Task automation', 'Natural language processing', 'Integration with existing tools'],
    icon: <><path d="M12 2a4 4 0 0 1 4 4c0 1.95-1.4 3.58-3.25 3.93"/><path d="M8.24 9.93C6.4 9.58 5 7.95 5 6a4 4 0 0 1 4-4"/><circle cx="12" cy="14" r="4"/><path d="M12 18v4"/><path d="M8 22h8"/></>,
  },
]

export default function Services() {
  return (
    <>
      <section className="section-light page-head">
        <div className="wrap">
          <div className="crumb"><Link to="/">Home</Link> / Services</div>
          <div className="eyebrow">What we do</div>
          <h1>Our Core Services.</h1>
          <p>Delivering high-quality IT solutions tailored to meet the needs of businesses of all sizes.</p>
        </div>
      </section>

      <section className="section-light section-glow" style={{ paddingTop: 0 }}>
        <div className="wrap cards-3">
          {services.map((s) => (
            <Reveal key={s.num} from="zoom" delay={parseInt(s.num) * 60}>
              <div className="service-card" data-num={s.num}>
                <div className="service-num">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">{s.icon}</svg>
                  {s.num}
                </div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
                <ul>{s.items.map((item, i) => <li key={i}>{item}</li>)}</ul>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section-dark">
        <div className="wrap">
          <Reveal from="blur">
            <div className="section-head">
              <div className="eyebrow">Why BrainwaysTech</div>
              <h2>Delivery you can measure</h2>
            </div>
          </Reveal>
          <Reveal from="zoom">
            <div className="stat-strip">
              <div className="stat"><div className="stat-num"><CountUp value="95" suffix="%" /></div><div className="stat-label">Web &amp; App Development</div></div>
              <div className="stat"><div className="stat-num"><CountUp value="98" suffix="%" /></div><div className="stat-label">Digital Marketing</div></div>
              <div className="stat"><div className="stat-num"><CountUp value="92" suffix="%" /></div><div className="stat-label">Social Video Editing</div></div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-light section-glow" id="stack">
        <div className="wrap">
          <Reveal from="blur">
            <div className="section-head">
              <div className="eyebrow">Tech stack</div>
              <h2>The tools behind the build</h2>
              <p>Fast, scalable, modern - the stack we reach for depends on the job, not habit. Click a card, hover to explore.</p>
            </div>
          </Reveal>
          <TechGrid items={TECH_STACK} />
        </div>
      </section>

      <section className="section-dark">
        <div className="wrap">
          <Reveal from="blur">
            <div className="section-head">
              <div className="eyebrow">How we work</div>
              <h2>4 steps to project development</h2>
            </div>
          </Reveal>
          <div className="process-list">
            <Reveal delay={0}><div className="process-step"><span className="step-idx">01</span><h4>Planning &amp; requirement analysis</h4><p>We define scope, run feasibility checks, and align every stakeholder around one clear vision.</p></div></Reveal>
            <Reveal delay={100}><div className="process-step"><span className="step-idx">02</span><h4>Design &amp; prototyping</h4><p>Architectures and interactive prototypes get built and refined against real feedback.</p></div></Reveal>
            <Reveal delay={200}><div className="process-step"><span className="step-idx">03</span><h4>Development &amp; testing</h4><p>Iterative coding paired with full-cycle testing keeps functionality tight from day one.</p></div></Reveal>
            <Reveal delay={300}><div className="process-step"><span className="step-idx">04</span><h4>Deployment &amp; support</h4><p>Post-launch, we stay on for updates, monitoring, and continuous improvement.</p></div></Reveal>
          </div>
        </div>
      </section>

      <section className="section-dark" id="contact-cta">
        <Reveal from="zoom">
          <div className="wrap cta-box">
            <div className="eyebrow" style={{ justifyContent: 'center' }}>Next step</div>
            <h2>Have a project brief ready?</h2>
            <p>Send it over - we'll come back with scope, timeline, and next steps.</p>
            <Link to="/contact" className="btn-primary">Get a quote →</Link>
          </div>
        </Reveal>
      </section>
    </>
  )
}
