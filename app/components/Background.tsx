export default function Background() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      <div className="absolute -top-1/2 -left-1/2 w-[200%] h-[200%] bg-[radial-gradient(circle_at_center,_#3b0764_0%,_#1e1b4b_25%,_#111827_50%)] animate-[spin_60s_linear_infinite]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(59,7,100,0.1)_0%,_rgba(59,7,100,0.1)_50%,_rgba(17,24,39,0.6)_100%)]"></div>
    </div>
  )
}

