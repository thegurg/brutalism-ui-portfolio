export default function Frame({ className = '', children }) {
  return (
    <div className={`frame ${className}`.trim()}>
      <span className="frame-corner fc-tl" aria-hidden="true">
        +
      </span>
      <span className="frame-corner fc-tr" aria-hidden="true">
        +
      </span>
      <span className="frame-corner fc-bl" aria-hidden="true">
        +
      </span>
      <span className="frame-corner fc-br" aria-hidden="true">
        +
      </span>
      {children}
    </div>
  )
}