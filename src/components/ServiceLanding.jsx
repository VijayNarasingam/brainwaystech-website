import Reveal from './Reveal.jsx'
import TrustedMarquee from './TrustedMarquee.jsx'
import Testimonials from './Testimonials.jsx'
import ContactForm from './ContactForm.jsx'
import { TRUSTED_CLIENTS, TESTIMONIALS } from '../data/testimonials.js'

const CHECK = (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M20 6L9 17l-5-5" />
  </svg>
)
const CROSS = (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M18 6L6 18M6 6l12 12" />
  </svg>
)
const ARROW = (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
)

function Skeleton({ w }) {
  return <div className={`skel-line ${w}`}></div>
}

function BrowserMock() {
  return (
    <div className="lp-browser">
      <div className="browser-bar"><span></span><span></span><span></span></div>
      <div className="lp-browser-body">
        <div className="lp-browser-hero">
          <div>
            <Skeleton w="w-80" />
            <Skeleton w="w-60" />
            <div className="lp-browser-btn"></div>
          </div>
          <div className="lp-browser-card">
            <Skeleton w="w-95" />
            <Skeleton w="w-80" />
          </div>
        </div>
        <div className="lp-browser-row">
          <div className="lp-mini-card"><Skeleton w="w-60" /></div>
          <div className="lp-mini-card"><Skeleton w="w-70" /></div>
          <div className="lp-mini-card"><Skeleton w="w-50" /></div>
        </div>
      </div>
    </div>
  )
}

function PhoneMock() {
  return (
    <div className="lp-phone">
      <div className="lp-phone-notch"></div>
      <div className="lp-phone-screen">
        <div className="lp-phone-head">
          <Skeleton w="w-60" />
          <div className="lp-phone-ava"></div>
        </div>
        <div className="lp-phone-card"><Skeleton w="w-80" /><Skeleton w="w-45" /></div>
        <div className="lp-phone-card"><Skeleton w="w-70" /><Skeleton w="w-55" /></div>
        <div className="lp-phone-card"><Skeleton w="w-85" /><Skeleton w="w-40" /></div>
        <div className="lp-phone-btn"></div>
      </div>
    </div>
  )
}

function VideoMock() {
  return (
    <div className="lp-video">
      <div className="video-mock">
        <div className="play-btn">
          <svg viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
        </div>
        <span className="lp-video-tag">Reel · 4K</span>
      </div>
      <div className="scrub"><div className="scrub-fill"></div></div>
      <div className="lp-caption-row">
        <span className="lp-caption">Captions on</span>
        <span className="lp-caption">Motion graphics</span>
        <span className="lp-caption">48h turnaround</span>
      </div>
    </div>
  )
}

function ChartMock() {
  return (
    <div className="lp-chart">
      <div className="chart-mock">
        <div className="bar" style={{ '--h': '34%' }}></div>
        <div className="bar" style={{ '--h': '48%' }}></div>
        <div className="bar" style={{ '--h': '58%' }}></div>
        <div className="bar" style={{ '--h': '44%' }}></div>
        <div className="bar" style={{ '--h': '72%' }}></div>
        <div className="bar" style={{ '--h': '64%' }}></div>
        <div className="bar" style={{ '--h': '92%' }}></div>
      </div>
      <div className="lp-kpi-row">
        <div className="lp-kpi"><span className="lp-kpi-num">+212%</span><Skeleton w="w-80" /></div>
        <div className="lp-kpi"><span className="lp-kpi-num">4.6×</span><Skeleton w="w-60" /></div>
        <div className="lp-kpi"><span className="lp-kpi-num">3×</span><Skeleton w="w-70" /></div>
      </div>
    </div>
  )
}

function DashboardMock() {
  return (
    <div className="lp-browser">
      <div className="browser-bar"><span></span><span></span><span></span></div>
      <div className="lp-dash">
        <div className="lp-dash-side">
          <Skeleton w="w-80" />
          <Skeleton w="w-60" />
          <Skeleton w="w-70" />
          <Skeleton w="w-45" />
        </div>
        <div className="lp-dash-main">
          <div className="chart-mock" style={{ height: '90px' }}>
            <div className="bar" style={{ '--h': '40%' }}></div>
            <div className="bar" style={{ '--h': '65%' }}></div>
            <div className="bar" style={{ '--h': '50%' }}></div>
            <div className="bar" style={{ '--h': '80%' }}></div>
            <div className="bar" style={{ '--h': '70%' }}></div>
          </div>
          <div className="lp-table">
            <Skeleton w="w-95" />
            <Skeleton w="w-90" />
            <Skeleton w="w-85" />
            <Skeleton w="w-75" />
          </div>
        </div>
      </div>
    </div>
  )
}

function HeroMock({ mock }) {
  if (mock === 'phone') return <PhoneMock />
  if (mock === 'video') return <VideoMock />
  if (mock === 'chart') return <ChartMock />
  if (mock === 'dashboard') return <DashboardMock />
  return <BrowserMock />
}

function HeroVisual({ service }) {
  const { mock, floats } = service.hero
  return (
    <div className={`lp-visual lp-visual-${mock}`}>
      <div className="lp-mock-stage">
        <HeroMock mock={mock} />
        {mock === 'browser' && <PhoneMock />}
      </div>
      {floats.map((label, i) => (
        <div className={`lp-float lp-float-${i + 1}`} key={label}>
          <span className="lp-float-dot"></span>
          {label}
        </div>
      ))}
    </div>
  )
}

function ProblemSection({ problem }) {
  return (
    <section className="section-light section-glow">
      <div className="wrap">
        <Reveal from="blur">
          <div className="section-head">
            <div className="eyebrow">{problem.eyebrow}</div>
            <h2>{problem.headline}</h2>
            <p>{problem.sub}</p>
          </div>
        </Reveal>
        <div className="problem-grid">
          {problem.points.map((point, i) => (
            <Reveal key={i} from="zoom" delay={i * 80}>
              <div className="problem-card">
                <span className="problem-icon">{CROSS}</span>
                <p>{point}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

function TransformationSection({ transformation }) {
  return (
    <section className="section-dark" id="transformation">
      <div className="wrap">
        <Reveal from="blur">
          <div className="section-head">
            <div className="eyebrow">{transformation.eyebrow}</div>
            <h2 style={{ color: 'var(--text-inverse)' }}>{transformation.headline}</h2>
            <p className="muted">{transformation.sub}</p>
          </div>
        </Reveal>
        <div className="ba-grid">
          <Reveal from="left">
            <div className="ba-card ba-before">
              <div className="ba-label">Before</div>
              <ul>
                {transformation.before.map((item, i) => (
                  <li key={i}><span className="ba-x">{CROSS}</span>{item}</li>
                ))}
              </ul>
            </div>
          </Reveal>
          <div className="ba-arrow">{ARROW}</div>
          <Reveal from="right">
            <div className="ba-card ba-after">
              <div className="ba-label">After</div>
              <ul>
                {transformation.after.map((item, i) => (
                  <li key={i}><span className="ba-check">{CHECK}</span>{item}</li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

function CardsSection({ section, dark }) {
  const cls = dark ? 'section-dark' : 'section-light section-glow'
  const grid = section.items.length > 4 ? 'cards-3' : 'cards-2'
  return (
    <section className={cls}>
      <div className="wrap">
        <Reveal from="blur">
          <div className="section-head">
            <div className="eyebrow">{section.eyebrow}</div>
            <h2 style={dark ? { color: 'var(--text-inverse)' } : undefined}>{section.headline}</h2>
            {section.sub && <p className={dark ? 'muted' : ''}>{section.sub}</p>}
          </div>
        </Reveal>
        <div className={grid}>
          {section.items.map((item, i) => (
            <Reveal key={i} from="zoom" delay={i * 80}>
              <div className="service-card" data-num={String(i + 1).padStart(2, '0')}>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

function CaseStudiesSection({ studies }) {
  return (
    <section className="section-light section-glow" id="case-studies">
      <div className="wrap">
        <Reveal from="blur">
          <div className="section-head">
            <div className="eyebrow">Case studies</div>
            <h2>Recent work that moved the numbers</h2>
            <p>Real engagements with measurable outcomes — no vanity screenshots.</p>
          </div>
        </Reveal>
        <div className="case-grid">
          {studies.map((cs, i) => (
            <Reveal key={i} from="zoom" delay={i * 90}>
              <div className="case-card">
                <div className="case-metric">{cs.metric}</div>
                <div className="case-metric-label">{cs.metricLabel}</div>
                <h4>{cs.client}</h4>
                <span className="case-industry">{cs.industry}</span>
                <p>{cs.result}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

function WhySection({ items }) {
  return (
    <section className="section-dark">
      <div className="wrap">
        <Reveal from="blur">
          <div className="section-head">
            <div className="eyebrow">Why BrainwaysTech</div>
            <h2 style={{ color: 'var(--text-inverse)' }}>Built small on purpose, so nothing gets lost in translation</h2>
          </div>
        </Reveal>
        <div className="lp-why">
          <div className="pillars">
            {items.map((item, i) => (
              <Reveal key={i}>
                <div className="pillar">
                  <div className="pillar-mark">{String(i + 1).padStart(2, '0')}</div>
                  <h4 style={{ color: 'var(--text-inverse)' }}>{item.title}</h4>
                  <p>{item.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function ProcessSection({ process }) {
  return (
    <section className="section-light section-glow">
      <div className="wrap">
        <Reveal from="blur">
          <div className="section-head">
            <div className="eyebrow">How we work</div>
            <h2>The process, step by step</h2>
            <p>One clear path, so you always know what happens next — and why.</p>
          </div>
        </Reveal>
        <div className="process-list">
          {process.map((step, i) => (
            <Reveal key={i} delay={i * 100}>
              <div className="process-step">
                <span className="step-idx">{String(i + 1).padStart(2, '0')}</span>
                <h4>{step.title}</h4>
                <p>{step.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

function FaqSection({ faqs }) {
  return (
    <section className="section-light">
      <div className="wrap">
        <Reveal from="blur">
          <div className="section-head">
            <div className="eyebrow">FAQ</div>
            <h2>Questions we hear a lot</h2>
          </div>
        </Reveal>
        <div className="faq-list">
          {faqs.map((faq, i) => (
            <details className="faq-item" key={i}>
              <summary>{faq.q}</summary>
              <div className="faq-a">{faq.a}</div>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}

function ConsultationSection({ cta }) {
  return (
    <section className="section-dark" id="consultation">
      <div className="wrap">
        <div className="contact-grid">
          <Reveal from="left">
            <div>
              <div className="eyebrow">{cta.eyebrow}</div>
              <h2 style={{ color: 'var(--text-inverse)' }}>{cta.headline}</h2>
              <p style={{ color: 'var(--color-text-inverse-secondary)', marginBottom: '28px' }}>{cta.sub}</p>
              <div className="lp-cta-steps">
                <div className="lp-cta-step"><span className="lp-cta-num">1</span><div><strong>We reply within 24 hours</strong><p>Tell us about your business — no pitch, just listening.</p></div></div>
                <div className="lp-cta-step"><span className="lp-cta-num">2</span><div><strong>Free discovery call</strong><p>We map your goals and constraints together.</p></div></div>
                <div className="lp-cta-step"><span className="lp-cta-num">3</span><div><strong>Clear, fixed quote</strong><p>Scope, timeline, and price — before any commitment.</p></div></div>
              </div>
            </div>
          </Reveal>
          <Reveal from="right">
            <div>
              <ContactForm />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

export default function ServiceLanding({ service }) {
  const s = service
  return (
    <>
      <section className="section-light lp-hero">
        <div className="wrap">
          <div className="lp-hero-grid">
            <div className="lp-hero-copy">
              <div className="eyebrow">{s.hero.eyebrow}</div>
              <h1>
                {s.hero.headline[0]}
                <span>{s.hero.headline[1]}</span>
              </h1>
              <p className="lead">{s.hero.sub}</p>
              <div className="btn-row">
                <a href="#consultation" className="btn-primary">{s.hero.cta} →</a>
                <a href={s.hero.secondaryHref} className="btn-ghost">{s.hero.ctaSecondary}</a>
              </div>
              <ul className="lp-benefits">
                {s.hero.benefits.map((b, i) => (
                  <li key={i}>
                    <span className="lp-benefit-icon">{CHECK}</span>
                    <div><strong>{b.title}</strong><p>{b.desc}</p></div>
                  </li>
                ))}
              </ul>
            </div>
            <HeroVisual service={s} />
          </div>
        </div>
      </section>

      <section className="section-dark">
        <div className="wrap">
          <Reveal from="blur">
            <div className="section-head">
              <div className="eyebrow">Trusted by businesses</div>
              <h2 style={{ color: 'var(--text-inverse)' }}>Teams who've worked with us</h2>
            </div>
          </Reveal>
          <TrustedMarquee clients={TRUSTED_CLIENTS} />
        </div>
      </section>

      <ProblemSection problem={s.problem} />
      <TransformationSection transformation={s.transformation} />
      <CardsSection section={s.types} />
      <CardsSection section={s.builds} dark />
      <CaseStudiesSection studies={s.caseStudies} />
      <WhySection items={s.why} />
      <ProcessSection process={s.process} />

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

      <FaqSection faqs={s.faqs} />
      <ConsultationSection cta={s.cta} />
    </>
  )
}