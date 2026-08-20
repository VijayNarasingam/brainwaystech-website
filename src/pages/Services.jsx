import { Link } from 'react-router-dom'
import TechGrid from '../components/TechGrid.jsx'
import CountUp from '../components/CountUp.jsx'
import Reveal from '../components/Reveal.jsx'
import { TECH_STACK } from '../data/techStack.js'

export default function Services() {
  return (
    <>
      <section className="section-light page-head">
        <div className="wrap">
          <div className="crumb"><Link to="/">Home</Link> / Services</div>
          <div className="eyebrow">What we do</div>
          <h1>Services built around outcomes, not just deliverables.</h1>
          <p>Three focused service lines — each one run by people who actually do the work.</p>
        </div>
      </section>

      <section className="section-light section-glow" style={{ paddingTop: 0 }}>
        <div className="wrap cards-3">
          <Reveal from="zoom"><div className="service-card" data-num="01"><div className="service-num">01</div><h3>Web &amp; App Development</h3><p>Responsive websites and mobile apps, engineered clean and modern for performance that holds up under real traffic.</p><ul><li>Custom websites &amp; web apps</li><li>iOS &amp; Android app builds</li><li>E-commerce &amp; booking platforms</li><li>API integration &amp; maintenance</li></ul></div></Reveal>
          <Reveal from="zoom" delay={120}><div className="service-card" data-num="02"><div className="service-num">02</div><h3>Digital Marketing</h3><p>SEO, paid campaigns, social, and content strategy — engineered to boost visibility and turn attention into leads.</p><ul><li>Search engine optimization</li><li>Paid social &amp; search campaigns</li><li>Content &amp; social strategy</li><li>Analytics &amp; reporting</li></ul></div></Reveal>
          <Reveal from="zoom" delay={240}><div className="service-card" data-num="03"><div className="service-num">03</div><h3>Video Editing</h3><p>Professional social edits that turn raw footage into Reels, Shorts, and Stories worth stopping for.</p><ul><li>Reels &amp; Shorts editing</li><li>Brand &amp; promo videos</li><li>Motion graphics &amp; captions</li><li>Fast turnaround delivery</li></ul></div></Reveal>
        </div>
      </section>

      <section className="section-dark">
        <div className="wrap">
          <Reveal from="blur">
            <div className="section-head">
              <div className="eyebrow">Why BrainwaysTech</div>
              <h2 style={{ color: 'var(--text-inverse)' }}>Delivery you can measure</h2>
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
              <p>Fast, scalable, modern — the stack we reach for depends on the job, not habit. Click a card, hover to explore.</p>
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
              <h2 style={{ color: 'var(--text-inverse)' }}>4 steps to project development</h2>
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

      <section className="section-light section-glow">
        <Reveal from="zoom">
          <div className="wrap cta-box">
            <div className="eyebrow" style={{ justifyContent: 'center' }}>Next step</div>
            <h2>Have a project brief ready?</h2>
            <p style={{ color: 'var(--muted)' }}>Send it over — we'll come back with scope, timeline, and next steps.</p>
            <Link to="/contact" className="btn-primary">Get a quote →</Link>
          </div>
        </Reveal>
      </section>
    </>
  )
}
