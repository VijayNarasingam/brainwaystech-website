import { useRef, useState } from 'react'

const GOOGLE_FORM_ACTION = 'https://docs.google.com/forms/d/e/1FAIpQLSfY_otQNLbboBFVYjZ840CJN53Zjo5ocif6Lq-ZLet1kmUJYw/formResponse'
const ENTRY_MAP = {
  name: 'entry.1729865377',
  email: 'entry.582996473',
  phone: 'entry.70755464',
  service: 'entry.1563208974',
  message: 'entry.892084020',
}

const COUNTRY_CODES = [
  { code: '+61', label: 'AU +61' },
  { code: '+55', label: 'BR +55' },
  { code: '+41', label: 'CH +41' },
  { code: '+86', label: 'CN +86' },
  { code: '+49', label: 'DE +49' },
  { code: '+34', label: 'ES +34' },
  { code: '+33', label: 'FR +33' },
  { code: '+91', label: 'IN +91' },
  { code: '+39', label: 'IT +39' },
  { code: '+81', label: 'JP +81' },
  { code: '+82', label: 'KR +82' },
  { code: '+52', label: 'MX +52' },
  { code: '+31', label: 'NL +31' },
  { code: '+7', label: 'RU +7' },
  { code: '+966', label: 'SA +966' },
  { code: '+46', label: 'SE +46' },
  { code: '+65', label: 'SG +65' },
  { code: '+971', label: 'UAE +971' },
  { code: '+44', label: 'UK +44' },
  { code: '+1', label: 'US/CA +1' },
]

const INITIAL_VALUES = { name: '', email: '', countryCode: '+91', phone: '', service: 'Web & App Development', message: '' }

export default function ContactForm() {
  const formRef = useRef(null)
  const iframeRef = useRef(null)
  const [values, setValues] = useState(INITIAL_VALUES)
  const [sending, setSending] = useState(false)
  const [status, setStatus] = useState(null)

  function update(e) {
    const { name, value } = e.target
    setValues((v) => ({ ...v, [name]: value }))
  }

  function handleSubmit(e) {
    e.preventDefault()

    if (GOOGLE_FORM_ACTION.includes('REPLACE_WITH_YOUR_FORM_ID')) {
      const msg = "This form isn't connected to a Google Form yet. See ContactForm.jsx to configure it."
      setStatus({ type: 'error', text: msg })
      return
    }

    if (!formRef.current.checkValidity()) {
      const msg = 'Please fill in all required fields before sending.'
      setStatus({ type: 'error', text: msg })
      formRef.current.reportValidity()
      return
    }

    setSending(true)
    setStatus(null)

    const iframe = iframeRef.current
    const timeout = setTimeout(() => {
      onError()
    }, 15000)

    iframe.onload = () => {
      clearTimeout(timeout)
      onSuccess()
    }

    const fd = new FormData(formRef.current)
    fd.set(ENTRY_MAP.phone, `${values.countryCode} ${values.phone}`)
    fd.set(ENTRY_MAP.name, values.name)
    fd.set(ENTRY_MAP.email, values.email)
    fd.set(ENTRY_MAP.service, values.service)
    fd.set(ENTRY_MAP.message, values.message)

    const tempForm = document.createElement('form')
    tempForm.style.display = 'none'
    tempForm.method = 'POST'
    tempForm.action = GOOGLE_FORM_ACTION
    tempForm.target = 'gform-iframe'
    for (const [key, val] of fd.entries()) {
      const input = document.createElement('input')
      input.name = key
      input.value = val
      tempForm.appendChild(input)
    }
    document.body.appendChild(tempForm)
    tempForm.submit()
    document.body.removeChild(tempForm)
  }

  function onSuccess() {
    setSending(false)
    setStatus({ type: 'success', text: "Thanks — your message is in. We'll be in touch shortly." })
    setValues(INITIAL_VALUES)
  }

  function onError() {
    setSending(false)
    const msg = 'Something went wrong sending your message. Please try again or email us directly.'
    setStatus({ type: 'error', text: msg })
  }

  return (
    <form className="form" ref={formRef} onSubmit={handleSubmit}>
      <iframe ref={iframeRef} name="gform-iframe" style={{ display: 'none' }} title="Form submission" />
      <div>
        <label htmlFor="name">Full name</label>
        <input id="name" name={ENTRY_MAP.name} type="text" placeholder="Your name" value={values.name} onChange={update} required />
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input id="email" name={ENTRY_MAP.email} type="email" placeholder="you@company.com" value={values.email} onChange={update} required />
      </div>
      <div>
        <label htmlFor="phone">Phone number</label>
        <div className="phone-row">
          <select id="countryCode" name="countryCode" value={values.countryCode} onChange={update} className="country-select">
            {COUNTRY_CODES.map((c) => (
              <option key={c.code} value={c.code}>{c.label}</option>
            ))}
          </select>
          <input id="phone" name={ENTRY_MAP.phone} type="tel" placeholder="98765 43210" value={values.phone} onChange={update} className="phone-input" />
        </div>
      </div>
      <div>
        <label htmlFor="service">Service interested in</label>
        <select id="service" name={ENTRY_MAP.service} value={values.service} onChange={update}>
          <option>Web &amp; App Development</option>
          <option>Digital Marketing</option>
          <option>Video Editing</option>
          <option>Something else</option>
        </select>
      </div>
      <div>
        <label htmlFor="message">Project details</label>
        <textarea
          id="message"
          name={ENTRY_MAP.message}
          placeholder="Tell us a bit about what you're building..."
          value={values.message}
          onChange={update}
          required
        ></textarea>
      </div>
      <button type="submit" className="btn-primary" style={{ justifyContent: 'center' }} disabled={sending}>
        {sending ? 'Sending...' : 'Send message →'}
      </button>
      {status && (
        <p role="alert" style={{ fontSize: '13.5px', marginTop: '4px', color: status.type === 'success' ? '#2ecc71' : 'var(--primary)' }}>
          {status.text}
        </p>
      )}
    </form>
  )
}
