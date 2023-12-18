import { ToastContainer } from 'react-toastify'
import Navbar from '../components/navbar/page'
import './globals.css'
import { Rubik } from 'next/font/google'

import 'react-toastify/dist/ReactToastify.css';
import Footer from '@/components/Footer';

const inter = Rubik({ subsets: ['latin'] })

export const metadata = {
  title: 'ecommerce website',
  description: 'created by Raheel',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css" />
      </head>
      <body className={inter.className}>
      <div className='max-h-screen'>

        <ToastContainer />
        <Navbar />
        {children}
        

        <Footer />
      </div>

        </body>
    </html>
  )
}
