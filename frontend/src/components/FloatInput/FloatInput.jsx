import React from 'react'
import './FloatInput.css'
const FloatInput = ({placeholder}) => {
  return (
    <div className="container">
        <div className="entryarea">
            <input type="text" name="" id="" />
            <div className="labelline">{placeholder}</div>
        </div>
    </div>
  )
}

export default FloatInput