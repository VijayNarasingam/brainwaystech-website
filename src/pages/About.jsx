import { Link } from 'react-router-dom'
import TrustedMarquee from '../components/TrustedMarquee.jsx'
import Testimonials from '../components/Testimonials.jsx'
import CountUp from '../components/CountUp.jsx'
import Reveal from '../components/Reveal.jsx'
import { TESTIMONIALS, TRUSTED_CLIENTS } from '../data/testimonials.js'

export default function About() {
  return (
    <>
      <section className="section-light page-head">
        <div className="wrap">
          <div className="crumb"><Link to="/">Home</Link> / About</div>
          <div className="eyebrow">About BrainwaysTech</div>
          <h1>An LLP built on intelligent, ethical technology work.</h1>
          <p>
            Registered in Krishnagiri, Tamil Nadu, BrainwaysTech LLP was founded to bring considered,
            well-engineered digital work to businesses that are usually underserved by big agencies.
          </p>
        </div>
      </section>

      <section className="section-light section-glow" style={{ paddingTop: 0 }}>
        <div className="wrap split">
          <div className="mv-card-wrap">
            <Reveal from="left"><div className="mv-card"><h4 style={{ color: 'var(--primary)' }}>Our mission</h4><p style={{ color: 'var(--muted)' }}>Equip businesses with intelligent technology that drives real growth, efficiency, and innovation.</p></div></Reveal>
            <Reveal from="left" delay={120}><div className="mv-card"><h4 style={{ color: 'var(--primary)' }}>Our vision</h4><p style={{ color: 'var(--muted)' }}>Become a trusted name in AI-driven IT solutions, shaping the digital landscape responsibly.</p></div></Reveal>
          </div>
          <Reveal from="right">
            <div>
              <div className="eyebrow">The company</div>
              <h2>Registered, active, and hands-on</h2>
              <p style={{ color: 'var(--muted)' }}>
                BrainwaysTech LLP was incorporated on 10 March 2024 and operates as a Limited Liability
                Partnership out of Krishnagiri, Tamil Nadu — working across computer programming,
                consultancy, and related digital services for clients across India.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-dark">
        <div className="wrap">
          <Reveal from="blur">
            <div className="section-head">
              <div className="eyebrow">Leadership</div>
              <h2 style={{ color: 'var(--text-inverse)' }}>The partners</h2>
            </div>
          </Reveal>
          <div className="pillars">
            <Reveal><div className="pillar"><div className="pillar-mark">VS</div><h4>Vasanth Senthilkumar</h4><p>Designated Partner, leading technology delivery and client engagements.</p></div></Reveal>
            <Reveal><div className="pillar"><div className="pillar-mark">RM</div><h4>Rajendran Mugilesh</h4><p>Designated Partner, overseeing operations and business development.</p></div></Reveal>
            <Reveal><div className="pillar"><div className="pillar-mark">★</div><h4>Small team, direct access</h4><p>No account-manager layers — you work directly with the people building your product.</p></div></Reveal>
          </div>
          <Reveal from="zoom">
            <div className="stat-strip">
              <div className="stat"><div className="stat-num"><CountUp value="2024" /></div><div className="stat-label">Founded</div></div>
              <div className="stat"><div className="stat-num"><CountUp value="100" suffix="+" /></div><div className="stat-label">Clients served</div></div>
              <div className="stat"><div className="stat-num"><CountUp value="3" /></div><div className="stat-label">Core service lines</div></div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-light section-glow">
        <div className="wrap">
          <Reveal from="blur">
            <div className="section-head" style={{ marginBottom: '36px' }}>
              <div className="eyebrow">Trusted by</div>
              <h2>Teams who've worked with us</h2>
            </div>
          </Reveal>
          <TrustedMarquee clients={TRUSTED_CLIENTS} />
        </div>
      </section>

      <section className="section-dark">
        <div className="wrap">
          <Reveal from="blur">
            <div className="section-head">
              <div className="eyebrow">Client voices</div>
              <h2 style={{ color: 'var(--text-inverse)' }}>What our clients say</h2>
            </div>
          </Reveal>
          <Testimonials items={TESTIMONIALS} />
        </div>
      </section>

      <section className="section-light section-glow">
        <Reveal from="zoom">
          <div className="wrap cta-box">
            <div className="eyebrow" style={{ justifyContent: 'center' }}>Let's build together</div>
            <h2>Curious how we'd approach your project?</h2>
            <p style={{ color: 'var(--muted)' }}>Get in touch and we'll walk you through it — no obligation, just a clear next step.</p>
            <Link to="/contact" className="btn-primary">Talk to us →</Link>
          </div>
        </Reveal>
      </section>
    </>
  )
}
