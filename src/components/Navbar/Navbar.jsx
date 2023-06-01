import React from 'react'
import { IconButton, Badge } from '@material-ui/core'
import { ShoppingCart } from '@material-ui/icons'
import { Link, useLocation } from 'react-router-dom'

const Navbar = ({totalItems}) => {
  const location = useLocation();
  return (
    <div >
    <nav  style={{position: "fixed", width: "100%", zIndex:"9999", backgroundColor: "white", height: "80px"}} className="relative px-8 py-4 flex justify-between items-center border-y border-gray-400 dark:border-gray-700">
      <Link
        to="/"
        className="text-3xl font-bold leading-none flex items-center space-x-4"
         
      >
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="#4F46E5"
            className="w-8 h-8"
          >
            <path
              fillRule="evenodd"
              d="M9.315 7.584C12.195 3.883 16.695 1.5 21.75 1.5a.75.75 0 01.75.75c0 5.056-2.383 9.555-6.084 12.436A6.75 6.75 0 019.75 22.5a.75.75 0 01-.75-.75v-4.131A15.838 15.838 0 016.382 15H2.25a.75.75 0 01-.75-.75 6.75 6.75 0 017.815-6.666zM15 6.75a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5z"
              clipRule="evenodd"
            />
            <path d="M5.26 17.242a.75.75 0 10-.897-1.203 5.243 5.243 0 00-2.05 5.022.75.75 0 00.625.627 5.243 5.243 0 005.022-2.051.75.75 0 10-1.202-.897 3.744 3.744 0 01-3.008 1.51c0-1.23.592-2.323 1.51-3.008z" />
          </svg>
        </span>
        <span className="text-gray-600 dark:text-gray-300 text-xl">
          Roc8.SHOP
        </span>
      </Link>
      
     {location.pathname == '/products' && (
        <div className="space-x-2  lg:block">
            <span className="relative inline-block">
                <IconButton component={Link} to="/cart" aria-label='Show cart items' color='inherit' >
                    <Badge badgeContent={totalItems} color="secondary" >
                        <ShoppingCart/>
                    </Badge>
                </IconButton>
            </span>
        </div>)}
    </nav>
  </div>
  )
}

export default Navbar

