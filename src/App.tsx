import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
      <div className="bg-white rounded-2xl shadow-xl p-8 max-w-md w-full">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">
          Aico Generated App
        </h1>
        <p className="text-gray-600 mb-6">
          Your React + Tailwind app is ready! Edit src/App.tsx to customize.
        </p>
        <div className="flex items-center justify-center gap-4">
          <button
            onClick={() => setCount(c => c - 1)}
            className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
          >
            -
          </button>
          <span className="text-2xl font-bold text-gray-700">{count}</span>
          <button
            onClick={() => setCount(c => c + 1)}
            className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition"
          >
            +
          </button>
        </div>
      </div>
    </div>
  )
}

export default App
