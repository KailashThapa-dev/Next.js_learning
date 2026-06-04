
import "./globals.css";
import React, { Children } from 'react'

const MainLayout = ({children}) => {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  )
}

export default MainLayout