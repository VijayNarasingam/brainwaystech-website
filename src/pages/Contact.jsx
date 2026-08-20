import { Link } from 'react-router-dom'
import ContactForm from '../components/ContactForm.jsx'
import Reveal from '../components/Reveal.jsx'

export default function Contact() {
  return (
    <>
      <section className="section-light page-head">
        <div className="wrap">
          <div className="crumb"><Link to="/">Home</Link> / Contact</div>
          <div className="eyebrow">Get in touch</div>
          <h1>Let's talk about what you're building.</h1>
          <p>Fill in the form, email us directly, or start a conversation on WhatsApp using the button in the corner.</p>
        </div>
      </section>

      <section className="section-light section-glow" style={{ paddingTop: 0 }}>
        <div className="wrap contact-grid">
          <div>
            <Reveal from="left"><div className="contact-info-card"><div className="ci-icon"><svg viewBox="0 0 24 24"><path d="M3 7l9 6 9-6M4 5h16a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1z" /></svg></div><div><h4>Email</h4><p><a href="mailto:vasanthsenthilkumar@brainwaystech.com">vasanthsenthilkumar@brainwaystech.com</a></p></div></div></Reveal>
            <Reveal from="left" delay={100}><div className="contact-info-card"><div className="ci-icon"><svg viewBox="0 0 24 24"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3-8.7A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .3 2 .7 3a2 2 0 0 1-.4 2.1L8 10.2a16 16 0 0 0 6 6l1.4-1.4a2 2 0 0 1 2.1-.4c1 .4 2 .6 3 .7a2 2 0 0 1 1.7 2z" /></svg></div><div><h4>Phone</h4><p><a href="tel:+919361061592">+91 93610 61592</a></p></div></div></Reveal>
            <Reveal from="left" delay={200}><div className="contact-info-card"><div className="ci-icon"><svg viewBox="0 0 24 24"><path d="M21 10c0 6-9 12-9 12s-9-6-9-12a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg></div><div><h4>Office</h4><p>216-B, Krishnagiri Salem Main Road, Krishnagiri, Tamil Nadu, India 635001</p></div></div></Reveal>
            <Reveal from="left" delay={300}><div className="contact-info-card"><div className="ci-icon"><svg viewBox="0 0 24 24"><path d="M12 8v4l3 3M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0z" /></svg></div><div><h4>Hours</h4><p>Mon – Sat, 9:30 AM – 6:30 PM IST</p></div></div></Reveal>
          </div>

          <Reveal from="right">
            <div>
              <ContactForm />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
