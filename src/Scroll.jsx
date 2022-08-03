import React from 'react'

const Scroll = ({children}) => {
  return (
    <div style={{
        height: "306px",
        overflowY: "auto",
        borderTop: "3px solid",
        marginTop: "34px"
    }}>
        {children}
    </div>
  )
}

export default Scroll