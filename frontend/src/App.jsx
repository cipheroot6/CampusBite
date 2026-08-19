import { useEffect, useState } from 'react'

function App() {
  const [health, setHealth] = useState(null)

  useEffect(() => {
    fetch('/api/health/')
      .then(res => res.json())
      .then(data => setHealth(data))
      .catch(err => console.error("Error fetching health:", err))
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 to-purple-800 flex items-center justify-center p-4">
      <div className="bg-white/10 backdrop-blur-lg border border-white/20 p-8 rounded-2xl shadow-2xl max-w-md w-full text-center">
        <h1 className="text-4xl font-extrabold text-white mb-4 tracking-tight">CampusBite</h1>
        <p className="text-purple-200 mb-8">Modern full-stack setup with React & Django</p>
        
        <div className="bg-black/20 rounded-xl p-4 mb-6">
          <h2 className="text-sm font-semibold text-purple-300 uppercase tracking-wider mb-2">API Status</h2>
          {health ? (
            <div className="flex items-center justify-center gap-2">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
              </span>
              <span className="text-emerald-400 font-medium">{health.message}</span>
            </div>
          ) : (
            <div className="flex items-center justify-center gap-2">
              <div className="animate-spin h-4 w-4 border-2 border-purple-400 border-t-transparent rounded-full"></div>
              <span className="text-purple-300">Connecting...</span>
            </div>
          )}
        </div>
        
        <div className="flex gap-4 justify-center">
          <span className="px-3 py-1 rounded-full bg-indigo-500/20 text-indigo-300 text-sm border border-indigo-500/30">React</span>
          <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-sm border border-emerald-500/30">Django</span>
          <span className="px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-sm border border-blue-500/30">Tailwind</span>
        </div>
      </div>
    </div>
  )
}

export default App
