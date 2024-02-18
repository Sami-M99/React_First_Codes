import React from 'react'

const ButtonList = ({text, children}) => {
  return (
    <div>
      <button style={{
        backgroundColor: "#7525c0",
        fontSize: "15px",
        color: "white",
        padding: "10px",
        borderRadius: "10px",
        margin: "5px",
      }}>{text} { children }</button>
    </div>
  )
}

export default ButtonList;