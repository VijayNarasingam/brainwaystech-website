export default function TrustedMarquee({ clients }) {
  const doubled = [...clients, ...clients]
  return (
    <div className="marquee">
      <div className="marquee-track">
        {doubled.map((c, i) => (
          <div className="client-badge" key={`${c.name}-${i}`}>
            <span className="avatar">{c.initials}</span>
            {c.name}
          </div>
        ))}
      </div>
    </div>
  )
}
