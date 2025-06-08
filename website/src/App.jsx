import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Features from './components/Features/Features'
import Demo from './components/Demo/Demo'
import Overview from './components/Overview/Overview'
import Postmortem from './components/Postmortem/Postmortem'
import Users from './components/Users/Users'

const App = () => {
  return (
    <div>
      <Navbar />
      <div className="pt-28"> {/* Avoid navbar overlap */}
        <Overview />
        <Users />
        <Features />
        <Demo />
        <Postmortem />
      </div>
    </div>
  )
}

export default App
