import React, { useEffect } from 'react'
import Link from 'next/link'
import { BsBagCheckFill } from 'react-icons/bs'
import { useStateContext } from '../context/StateContext'
import runFirework from '../lib/utils'

function Success() {

    const { setCartItems, setTotalPrice, setTotalQuantities } = useStateContext()
    
    useEffect(() => {
        localStorage.clear()
        setCartItems([])
        setTotalPrice(0)
        setTotalQuantities(0)
        runFirework()
    }, [])

  return (
    <div className='success-wrapper'>
        <div className='success'>
            <p className='icon'><BsBagCheckFill /></p>
            <h2>Thank You For Your Order!</h2>
            <p className='email-msg'>Check Your Email Inbox For The Receipt</p>
            <p className='description'>
                if you have any questions, please email
                <a className='email' href='mailto:bprayoga1927@gmail.com'>
                    bprayoga1927@gmail.com
                </a>
            </p>
            <Link href='/'>
                <button type='button' width="300px" className='btn'>
                    Continue Shopping
                </button>
            </Link>
        </div>
    </div>
  )
}

export default Success