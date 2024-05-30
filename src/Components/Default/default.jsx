import React from 'react'
import { Header } from '../Header/header'

export const Default = ({children}) => {
  return (
    <div>
      <Header/>
      {children}
    </div>
  )
}
