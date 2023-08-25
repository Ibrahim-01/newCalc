import React from 'react'
import Calculator from './components/Calculator'

const App = () => {
  return (
    <div className=' w-screen h-screen justify-center items-center flex  bg-yellow-200'>
      <div className=' w-1/4 h-3/4 bg-green-300 rounded-xl grid grid-rows-[1fr,7fr]'>
      <h3 className=' text-[#000000] flex justify-center text-3xl bg-orange-700 text-center items-center'>MY REACT CAL</h3>
      <Calculator/>

      </div>
    </div>
  )
}

export default App