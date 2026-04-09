import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {

const [menuOpen, setMenuOpen] = useState(false)

return (
<nav className='sticky bg-white top-0 z-50 border-b'>

<div className='flex justify-between items-center px-8 py-4'>

<h1 className='text-xl font-bold'>
Jyoti Sharma
</h1>

<div className='hidden md:flex space-x-6'>
<Link className="hover:text-blue-500" to="/">Home</Link>
<Link className='hover:text-blue-500' to="/about">About</Link>
<Link className='hover:text-blue-500' to="/ux-case-studies">UX</Link>
<Link className="hover:text-blue-500" to="/projects">Projects</Link>
<Link className="hover:text-blue-500" to="/contact">Contact</Link>
</div>

<button
className='md:hidden text-2xl'
onClick={() => setMenuOpen(!menuOpen)}
>
☰
</button>

</div>

{menuOpen && (
<div className="md:hidden flex flex-col items-center bg-white py-4 space-y-4 shadow-md">
<Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
<Link to="/about" onClick={() => setMenuOpen(false)}>About</Link>
<Link to="/ux-case-studies"nClick={() => setMenuOpen(false)}>UX</Link>
<Link to="/projects" onClick={() => setMenuOpen(false)}>Projects</Link>
<Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>
</div>
)}

</nav>
)
}

export default Navbar