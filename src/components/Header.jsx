import React from 'react'
function Header() {
  return (
    <header className="flex items-center justify-between py-6">
      <div className="text-2xl font-bold">efatuix</div>
      <nav>
        <ul className="flex gap-6">
          <li className="hover:text-green-400 cursor-pointer">Home</li>
          <li className="hover:text-green-400 cursor-pointer">About us</li>
          <li className="hover:text-green-400 cursor-pointer">Service</li>
          <li className="hover:text-green-400 cursor-pointer">About</li>
          <li className="hover:text-green-400 cursor-pointer">Blog</li>
        </ul>
      </nav>
      <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">Contact</button>
    </header>
  )
}

export default Header