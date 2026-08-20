import { Link } from 'react-router-dom'
import HeroCanvas from '../components/HeroCanvas.jsx'
import HeroPanel from '../components/HeroPanel.jsx'
import SynapseDivider from '../components/SynapseDivider.jsx'
import TechGrid from '../components/TechGrid.jsx'
import CountUp from '../components/CountUp.jsx'
import Reveal from '../components/Reveal.jsx'
import { useParallax } from '../hooks/useParallax.js'
import { HOME_TECH } from '../data/techStack.js'

const homeStyles = `
  html[data-theme="light"] .home-tech-grid .tech-card h5 {
    color: #1F2937;
  }
  html[data-theme="light"] .home-tech-grid .tech-card .cat {
    color: #6B7280;
  }
`

export default function Home() {
  const gridRef = useParallax(0.06)

  return (
    <>
      <style>{homeStyles}</style>
      <section className="section-light hero" id="home">
        <div className="hero-grid" ref={gridRef}></div>
        <HeroCanvas />
        <div className="wrap hero-columns">
          <div className="hero-inner">
            <div className="eyebrow">AI · Web &amp; App · Digital Marketing</div>
            <h1>
              Empowering your <span>digital presence</span>, one intelligent build at a time.
            </h1>
            <p className="lead">
              BrainwaysTech LLP designs and ships web platforms, mobile apps, and growth systems for
              brands that want technology to feel considered, not templated.
            </p>
            <div className="btn-row">
              <Link to="/services" className="btn-primary">Explore Services →</Link>
              <Link to="/contact" className="btn-ghost">Start a project</Link>
            </div>
            <div className="hero-stats">
              <div><div className="stat-num"><CountUp value="100" suffix="+" /></div><div className="stat-label">Clients served</div></div>
              <div><div className="stat-num"><CountUp value="95" suffix="%" /></div><div className="stat-label">Web &amp; app delivery</div></div>
              <div><div className="stat-num"><CountUp value="4" /></div><div className="stat-label">Step build process</div></div>
            </div>
          </div>

          <HeroPanel />
        </div>
      </section>

      <section className="section-dark">
        <div className="wrap">
          <SynapseDivider />
          <div className="split">
            <Reveal>
              <div>
                <div className="eyebrow">Who we are</div>
                <h2>Intelligent solutions, built on an ethical foundation.</h2>
                <p>
                  We're a small, forward-thinking IT partner — helping businesses turn ambitious ideas
                  into dependable products, without losing sight of who they're built for.
                </p>
                <Link
                  to="/about"
                  className="btn-ghost btn-ghost-dark"
                  style={{ display: 'inline-block', marginTop: '24px' }}
                >
                  Meet the team →
                </Link>
              </div>
            </Reveal>
            <div className="mv-card-wrap">
              <Reveal from="left"><div className="mv-card"><h4>Our mission</h4><p>Equip businesses with intelligent technology that drives real growth, efficiency, and innovation.</p></div></Reveal>
              <Reveal from="left" delay={120}><div className="mv-card"><h4>Our vision</h4><p>Become a trusted name in AI-driven IT solutions, shaping the digital landscape responsibly.</p></div></Reveal>
            </div>
          </div>
        </div>
      </section>

      <section className="section-light section-glow">
        <div className="wrap">
          <Reveal from="blur">
            <div className="section-head">
              <div className="eyebrow">Core services</div>
              <h2>What we build</h2>
              <p>Tailored IT solutions for businesses of every size — from first prototype to full-scale platform.</p>
            </div>
          </Reveal>
          <div className="cards-3">
            <Reveal from="zoom"><div className="service-card" data-num="01"><div className="service-num">01</div><h3>Web &amp; App Development</h3><p>Responsive websites and mobile apps, built clean and modern for performance that holds up under real traffic.</p></div></Reveal>
            <Reveal from="zoom" delay={120}><div className="service-card" data-num="02"><div className="service-num">02</div><h3>Digital Marketing</h3><p>SEO, paid campaigns, social, and content strategy — engineered to boost visibility and turn attention into leads.</p></div></Reveal>
            <Reveal from="zoom" delay={240}><div className="service-card" data-num="03"><div className="service-num">03</div><h3>Video Editing</h3><p>Professional social edits that turn raw footage into Reels, Shorts, and Stories worth stopping for.</p></div></Reveal>
          </div>
          <Link to="/services" className="btn-primary" style={{ marginTop: '44px', display: 'inline-flex' }}>
            See all services →
          </Link>
        </div>
      </section>

      <section className="section-dark">
        <div className="wrap">
          <Reveal from="blur">
            <div className="section-head">
              <div className="eyebrow">Why BrainwaysTech</div>
              <h2 style={{ color: 'var(--text-inverse)' }}>Built small on purpose, so nothing gets lost in translation</h2>
            </div>
          </Reveal>
          <div className="pillars">
            <Reveal><div className="pillar"><div className="pillar-mark">01</div><h4>You talk to the builders</h4><p>No account-manager layers — the person you brief is the person writing the code and reviewing the pixels.</p></div></Reveal>
            <Reveal><div className="pillar"><div className="pillar-mark">02</div><h4>Transparent, fixed-scope quotes</h4><p>You know what you're paying for before we start. No surprise line items, no scope creep.</p></div></Reveal>
            <Reveal><div className="pillar"><div className="pillar-mark">03</div><h4>Built to grow with you</h4><p>Clean architecture and documented handover, so the platform we ship today still serves you two years from now.</p></div></Reveal>
          </div>
        </div>
      </section>

      <section className="section-light section-glow">
        <div className="wrap">
          <Reveal from="blur">
            <div className="section-head">
              <div className="eyebrow">Our process</div>
              <h2>From first call to launch in four clear steps</h2>
              <p>One clear path, so you always know what happens next — and why.</p>
            </div>
          </Reveal>
          <div className="process-list">
            <Reveal delay={0}><div className="process-step"><span className="step-idx">01</span><h4>Discover</h4><p>We map your goals, audience, and constraints — and turn them into a clear, scoped brief you approve.</p></div></Reveal>
            <Reveal delay={100}><div className="process-step"><span className="step-idx">02</span><h4>Design</h4><p>Wireframes and visual direction first — you see the look before a line of code is written.</p></div></Reveal>
            <Reveal delay={200}><div className="process-step"><span className="step-idx">03</span><h4>Build</h4><p>Clean, responsive development with weekly progress updates, so you're never in the dark.</p></div></Reveal>
            <Reveal delay={300}><div className="process-step"><span className="step-idx">04</span><h4>Grow</h4><p>Launch, measure, and iterate — SEO, analytics, and support that keep improving results after go-live.</p></div></Reveal>
          </div>
        </div>
      </section>

      <section className="section-dark">
        <div className="wrap">
          <Reveal from="blur">
            <div className="section-head">
              <div className="eyebrow">Tech stack</div>
              <h2 style={{ color: 'var(--text-inverse)' }}>Built with tools that scale</h2>
              <p className="muted">A snapshot of what we reach for most. Hover or tap a card to see it react.</p>
            </div>
          </Reveal>
          <div className="home-tech-grid"><TechGrid items={HOME_TECH} /></div>
          <Link
            to="/services#stack"
            className="btn-ghost btn-ghost-dark"
            style={{ display: 'inline-block', marginTop: '36px' }}
          >
            See the full stack →
          </Link>
        </div>
      </section>

      <section className="section-light">
        <div className="wrap">
          <Reveal from="blur">
            <div className="section-head">
              <div className="eyebrow">FAQ</div>
              <h2>Questions we hear a lot</h2>
            </div>
          </Reveal>
          <div className="faq-list">
            <details className="faq-item">
              <summary>How much does a project cost?</summary>
              <div className="faq-a">Every project gets a fixed, itemised quote after a free discovery call. Most engagements range from small landing pages to full-scale platforms — we'll scope exactly what fits your budget.</div>
            </details>
            <details className="faq-item">
              <summary>How long does a typical build take?</summary>
              <div className="faq-a">A landing page usually ships in 1–3 weeks; web and mobile apps in 6–12 weeks depending on scope. You get a timeline with milestones before we start.</div>
            </details>
            <details className="faq-item">
              <summary>Do you offer support after launch?</summary>
              <div className="faq-a">Yes — every project includes a post-launch support window, plus optional care plans for hosting, updates, and ongoing improvements.</div>
            </details>
            <details className="faq-item">
              <summary>Do you work with small businesses?</summary>
              <div className="faq-a">Absolutely. We were built to serve businesses big agencies overlook — no minimum project size, and you work directly with the team.</div>
            </details>
          </div>
        </div>
      </section>

      <section className="section-dark" id="contact-cta">
        <Reveal from="zoom">
          <div className="wrap cta-box">
            <div className="eyebrow" style={{ justifyContent: 'center' }}>Ready when you are</div>
            <h2>Ready to elevate your business?</h2>
            <p style={{ color: 'var(--color-text-secondary)' }}>
              Tell us what you're building — we'll map out how smart technology gets you there faster.
            </p>
            <Link to="/contact" className="btn-primary">Contact Us →</Link>
          </div>
        </Reveal>
      </section>
    </>
  )
}
