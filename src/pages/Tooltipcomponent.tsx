import React, { useState } from 'react'

const Tooltipcomponent = ({children , text} : Tooltipcomponent) => {

      const [show, setShow] = useState(false)

    interface Tooltipcomponent{
        children ?: React.ReactNode
        text : string
    }

  return (

    <div className='bg-gray-400 h-20 relative ' onMouseEnter={() => setShow(true)}
         onMouseLeave= {()=>setShow(false)}
         > {children}  
         {show && <div  className='bg-black text-white w-25 absolute top-0'>{text}</div>}
    </div>
  )
}

export default Tooltipcomponent