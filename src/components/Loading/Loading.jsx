import { ArrowLeft } from 'lucide-react'
import React from 'react'
import { Link, useLocation } from 'react-router-dom'

export function Loading({mark}) {
  const location = useLocation()
  return (
    <div className="py-10">
      <div className="text-center">
        <br/>
        {mark ? 
          <div>
            <br /> <br /><br /> <br />
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-black sm:text-5xl">
          Loading...
        </h1>
        <p className="mt-4 text-base leading-7 text-gray-600">
          Sorry, Please check your internet connection.
        </p>
        </div> :
        <div>
          <br /> <br /><br /> <br />
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-black sm:text-5xl">
        Cart is empty,
        <br />
        please add items to the cart

































        
        </h1>
        </div>
        }
        <div className="mt-4 flex items-center justify-center gap-x-3">
          {location.pathname === "/cart" && 
          <Link
            to="/"
            type="button"
            className="inline-flex items-center rounded-md border border-black px-3 py-2 text-sm font-semibold text-black shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
          >
            <ArrowLeft size={16} className="mr-2" />
            Go back
          </Link> }
        
          
        </div>
      </div>
      <br/><br/><br/><br/><br/><br/>
    </div>
  )
}
