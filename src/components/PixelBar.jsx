export default function PixelBar({ segments = 10, value = 0 }) {
  const filled = Math.round(segments * Math.max(0, Math.min(1, value)))
  return (
    <div className="pixelbar" aria-hidden="true">
      {Array.from({ length: segments }).map((_, i) => (
        <span key={i} className={i < filled ? 'on' : ''} />
      ))}
    </div>
  )
}