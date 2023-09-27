import React from 'react'

function WhatsappButton({text, styles}) {
  return (
    <div className={`btn btn-success d-flex justify-center items-center ${styles}`} style={{marginRight:"4rem", borderRadius:"0.8rem"}}>
    <i style={{fontSize: "3rem"}}  class="fa-brands fa-square-whatsapp fa-beat-fade"></i> 
    <span style={{
         textAlign: "center",
         paddingTop: "0.8rem",
         paddingLeft: "0.5rem"
     }}>{text}</span>
    </div>
  )
}

export default WhatsappButton
