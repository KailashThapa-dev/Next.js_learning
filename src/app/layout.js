

import Header from "@/components/Header";
import "./globals.css";
import React, { Children } from 'react'



const MainLayout = ({children}) => {

  return (
    <html lang="en">
     
      <body>
        <Header/>
        {children}</body>
    </html>
  )
}

export default MainLayout