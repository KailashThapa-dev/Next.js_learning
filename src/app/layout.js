

import Header from "@/components/Header";
import "./globals.css";
import React, { Children } from 'react'

 export const metadata ={
  title: "E-fashion",
  description: "Online e-commerce platform for cloth and shoes",
}

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