import React, { useState } from 'react'
import Header from "./components/Header"
import Hero from './components/Hero'
import Experience from './components/Experience'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'
import Footer from './components/Footer'

const App = () => {
  const[darkMode,setDarkMode] = useState(false)
  return (
    <div className={darkMode && "dark"}>
      <Header darkMode={darkMode} setDarkMode={setDarkMode}/>
      <main className='bg-white dark:bg-gray-900 text-gray-900 dark:text-white'>
        <Hero/>
        <Experience/>
        <Portfolio/>
        <Contact/>
        <Footer/>
      </main>
    </div>
  )
}

export default App
