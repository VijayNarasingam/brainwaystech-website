import { useState } from 'react'

const WHATSAPP_NUMBER = '917667924881'
const WA_ICON_PATH =
  'M16 2C8.3 2 2 8.3 2 16c0 2.6.7 5 1.9 7.1L2 30l7.1-1.9C11.1 29.3 13.5 30 16 30c7.7 0 14-6.3 14-14S23.7 2 16 2zm7.6 19.9c-.3.9-1.8 1.7-2.5 1.8-.6.1-1.4.1-2.3-.1-.5-.2-1.2-.4-2.1-.8-3.7-1.6-6.1-5.3-6.3-5.6-.2-.3-1.5-2-1.5-3.8s1-2.7 1.3-3c.3-.3.7-.4 1-.4h.7c.2 0 .5 0 .8.6.3.7 1 2.4 1.1 2.6.1.2.2.4 0 .7-.1.3-.2.4-.4.6-.2.2-.4.5-.6.7-.2.2-.4.4-.2.8.2.4 1 1.6 2.1 2.6 1.4 1.3 2.6 1.7 3 1.9.4.2.6.2.8-.1.2-.3.9-1.1 1.2-1.4.3-.3.5-.3.9-.2.4.2 2.3 1.1 2.7 1.3.4.2.6.3.7.5.1.2.1 1-.2 1.9z'

export default function WhatsAppWidget() {
  const [open, setOpen] = useState(false)

  return (
    <div id="wa-widget" className={open ? 'open' : ''}>
      <div id="wa-card">
        <div className="wa-head">
          <div className="wa-avatar">
            <svg viewBox="0 0 32 32"><path d={WA_ICON_PATH} /></svg>
          </div>
          <div>
            <strong>BrainwaysTech</strong>
            <span>Typically replies within minutes</span>
          </div>
        </div>
        <div className="wa-body">
          <p>Hi 👋 Have a project in mind? Message us on WhatsApp and let's talk it through.</p>
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hi%20BrainwaysTech%2C%20I%27d%20like%20to%20know%20more%20about%20your%20services.`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg viewBox="0 0 32 32" width="16" height="16" fill="#fff"><path d={WA_ICON_PATH} /></svg>
            Chat on WhatsApp
          </a>
        </div>
      </div>
      <button id="wa-fab" onClick={() => setOpen((o) => !o)} aria-label="Chat on WhatsApp" type="button">
        <span className="wa-ping"></span>
        <svg viewBox="0 0 32 32"><path d={WA_ICON_PATH} /></svg>
      </button>
    </div>
  )
}
