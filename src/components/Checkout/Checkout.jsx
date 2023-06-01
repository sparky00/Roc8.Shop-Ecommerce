import React from 'react'
import { CheckCheck, X } from 'lucide-react'
import { commerce } from '../../lib/commerce'
import { useEffect,useState } from 'react';
import Address from './Address';
import { Loading } from '../Loading/Loading';

const steps = ['Shipping address', 'Payment details'];

export function Checkout({cart, onRemoveFromCart}) {

const [checkoutToken, setCheckoutToken] = useState(null);

useEffect(()=>{
  const generateToken = async()=>{
    try {
      const token = await commerce.checkout.generateToken(cart.id, {type: 'cart'});
      console.log(token); 
      setCheckoutToken(token);
    } catch (error) {
      
    }
  }
   generateToken();
},[cart])
//  console.log("checkoutToken", checkoutToken)
   if(!cart.line_items) return <Loading/> ;
   if(!checkoutToken) return <Loading/> ;
   
  return (
    <div className="mx-auto my-0 max-w-4xl  py-12 sm:py-12 lg:py-12 ">
      <div className="my-12 overflow-hidden  rounded-xl shadow">
        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Product List */}
          <div className="bg-gray-100 px-5 py-6 md:px-8">
            <div className="flow-root">
              <ul className="-my-7 divide-y divide-gray-200">
                {cart.line_items.map((item) => (
                  <li
                    key={item.id}
                    className="flex items-stretch justify-between space-x-5 py-7"
                  >
                    <div className="flex flex-1 items-stretch">
                      <div className="flex-shrink-0">
                        <img
                          className="h-20 w-20 rounded-lg border border-gray-200 bg-gray-50 dark:bg-gray-900 object-contain"
                          src={item.image.url}
                          alt={item.name}
                        />
                      </div>
                      <div className="ml-5 flex flex-col justify-between">
                        <div className="flex-1">
                          <p className="text-sm font-bold">{item.name}</p>
                          {/* <p className="mt-1.5 text-sm font-medium text-gray-500">
                            {product.color}
                          </p> */}
                        </div>
                        <p className="mt-4 text-xs font-medium ">x {item.quantity}</p>
                      </div>
                    </div>
                    <div className="ml-auto flex flex-col items-end justify-between">
                      <p className="text-right text-sm font-bold text-gray-900">{item.price.formatted_with_symbol}</p>
                      <button
                       onClick={()=>onRemoveFromCart(item.id)}
                        type="button"
                        className="-m-2 inline-flex rounded p-2 text-gray-400 transition-all duration-200 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2"
                      >
                        <span className="sr-only">Remove</span>
                        <X className="h-5 w-5" />
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <hr className="mt-6 border-gray-200" />
            <form action="#" className="mt-6">
              <div className="sm:flex sm:space-x-2.5 md:flex-col md:space-x-0 lg:flex-row lg:space-x-2.5">
                <div className="flex-grow">
                  <input
                    className="flex w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                    type="text"
                    placeholder="Enter coupon code"
                  />
                </div>
                <div className="mt-4 sm:mt-0 md:mt-4 lg:mt-0">
                  <button
                    type="button"
                    className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                  >
                    Apply Coupon
                  </button>
                </div>
              </div>
            </form>
            <ul className="mt-6 space-y-3">
              <li className="flex items-center justify-between text-gray-600">
                <p className="text-sm font-medium">Sub total</p>
                <p className="text-sm font-medium">{cart.subtotal.formatted_with_symbol}</p>
              </li>
              <li className="flex items-center justify-between text-gray-900">
                <p className="text-sm font-medium ">Total</p>
                <p className="text-sm font-bold ">{cart.subtotal.formatted_with_symbol}</p>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <Address checkoutToken={checkoutToken} />
        </div>
      </div>
    </div>
  )
}
