import { FC } from 'react'

import Header from '../Header'
import Footer from '../Footer'

const Template: FC = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="max-w-6xl mx-auto flex-grow">{children}</main>
      <Footer />
    </div>
  )
}

export default Template
