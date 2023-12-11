import React from 'react'
import { useRouter } from 'next/navigation';
// import { useNavigate } from "react-router-dom"; 

function WhatsappButton({ text, styles }) {
  const router = useRouter()
  return (
    <a href="https://api.whatsapp.com/send?phone=971557308265&text=Hi, i would like to buy from here!." target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none" }}>
      <div className={`btn btn-success d-flex justify-center items-center ${styles}`} style={{ marginRight: "4rem", borderRadius: "0.8rem" }}
      >
        <i style={{ fontSize: "3rem" }} class="fa-brands fa-square-whatsapp fa-beat-fade"></i>
        <span style={{
          textAlign: "center",
          paddingTop: "0.8rem",
          paddingLeft: "0.5rem"
        }}>{text}</span>
      </div>
    </a>

  )
}

export default WhatsappButton
