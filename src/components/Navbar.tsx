import Link from "next/link"

function  Navbar() {
  return (
    <div> 
          <header>
        <nav className="bg-gray-500">
          <ul className="flex justify-center gap-4">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/dashboard">Dashboard</Link></li>
            <li><Link href="/products">Product</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/register">Register</Link></li>
            <li><Link href="/login">Login</Link></li>
          </ul>
        </nav>
      </header>
        
    </div>
  )
}

export default Navbar 
