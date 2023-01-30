import React from 'react'

export default function index() {
  return (
    <div className="antialiased overflow-hidden">
    <><img className="h-screen w-screen object-cover relative top-0 filter contrast-125" src="https://images.unsplash.com/photo-1564951434112-64d74cc2a2d7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3387&q=80" alt="" /><div>
      <div className="h-screen w-screen bg-gradient-to-br from-slate-100 to-slate-300 py-32">
        <div className="bg-white/60 backdrop-blur-xl z-20 max-w-md absolute right-5 top-5 rounded-lg p-6 shadow">
          <h1 className="text-xl text-slate-700 font-medium">Welcome back, Eduard 👋</h1>
          <div className="flex justify-between items-center">
            <a href="#" className="text-slate-500 hover:text-slate-700 text-sm inline-flex space-x-1 items-center">
              <span>Go to Dashboard</span>
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
            </a>

          </div>
        </div>

        <div className="bg-white/60 hover:bg-white/80 hover:shadow-lg transition duration-150 ease-linear backdrop-blur-xl z-20 max-w-md absolute right-5 top-36 rounded-lg p-6 shadow">
          <h1 className="text-xl text-slate-700 font-medium">Welcome back, Eduard 👋</h1>
          <div className="flex justify-between items-center">
            <a href="#" className="text-slate-500 hover:text-indigo-600 text-sm inline-flex space-x-1 items-center">
              <span>Go to Dashboard</span>
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
            </a>

          </div>
        </div>
      </div>

    </div></>
    </div>
  )
}
