

import React from 'react'


const Cmn_Btn = ({
    text,
    icon,
    onclick,
    children,
}) => {
  return (
    <button 
    onClick={onclick}

    className="cmn_btn">
       <p className='btn_txt'> <span>{icon}</span> {text} </p> 

       
    </button>
  )
}

export default Cmn_Btn;
