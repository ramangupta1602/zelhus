import React from 'react'

const HomeBanner = () => {
  return (
    <div>
        <img 
        style={{width:'100%',height:'100vh'}}
        src='/landing.jpg' alt='...' />
        <div style={{width:'53%',display:'flex',flexDirection:"column",justifyContent:'center',margin:'auto'}}>
        <h2 style={{marginTop:'15vh',fontWeight:450,letterSpacing:'1.5px',fontSize:'24px',color:'#000',textTransform:'none'}}>
        THINK PRODUCT VISUALIZATION ALONG WITH TECHNOLOGY TO ENABLE
        </h2>
        <h1 style={{fontFamily:'Raleway, sans-serif',letterSpacing:'1.3px',marginTop:'0',marginBottom:'28px',fontSize:'32px',fontWeight:300,lineHeight:1.45,color:'#000'}}>
        Zelhus Consultants does this and more to make you successful.
        </h1>
        <p style={{fontFamily:'Raleway, sans-serif',flexWrap:'wrap',fontSize:'16px',lineHeight:'28px',letterSpacing:'1.7px',fontWeight:'300'}}>The technology and product team with decades of combined experience come together in
         our new and reverent venture, who have created products for major companies, helped build
          product portfolios, and worked on numerous product design projects. We believe technology 
          is to empower businesses to create a delightful experience.</p>
        </div>
        <hr style={{marginTop:'15vh'}}></hr>
    </div>
  )
}

export default HomeBanner