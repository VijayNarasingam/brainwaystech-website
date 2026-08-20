export default function SynapseDivider() {
  return (
    <svg className="synapse" viewBox="0 0 1180 34" style={{ marginBottom: '56px' }}>
      <line x1="20" y1="17" x2="1160" y2="17" stroke="var(--line-dark)" strokeWidth="1" />
      <circle cx="90" cy="17" r="3.5" fill="var(--primary)" />
      <circle cx="310" cy="17" r="3.5" fill="var(--secondary)" />
      <circle cx="530" cy="17" r="3.5" fill="var(--primary)" />
      <circle cx="750" cy="17" r="3.5" fill="var(--secondary)" />
      <circle cx="970" cy="17" r="3.5" fill="var(--primary)" />
      <circle cx="1120" cy="17" r="3.5" fill="var(--secondary)" />
    </svg>
  )
}
