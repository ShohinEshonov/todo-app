import React from 'react'

const Layout = ({children}) => {
  return (
	 <div className='bg-gray-900 h-screen text-white py-10'>
		{children}
	 </div>
  )
}

export default Layout