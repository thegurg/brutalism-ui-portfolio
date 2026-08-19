import icarus from '../assets/icarus.png'

export default function Icarus() {
  return (
    <div className="icarus" aria-hidden="true">
      <img src={icarus} alt="" className="icarus-layer icarus-layer--base" loading="lazy" />
      <img src={icarus} alt="" className="icarus-layer icarus-layer--ghost" loading="lazy" />
    </div>
  )
}