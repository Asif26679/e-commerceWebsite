import { Link } from "react-router-dom"
import { useState } from "react";
import{Bars3Icon, MagnifyingGlassIcon, ShoppingCartIcon, XMarkIcon} from '@heroicons/react/24/solid'
function Navbar(){
    const[searchTerm,setSearchTerm]=useState('')
    const [menuOpen,setMenuOpen]=useState(false)

    const handelSearch=(e)=>{
        e.preventDeafault();
        if(searchTerm.trim()==='') return;
        console.log("Searching For",searchTerm)
    }
    return(
        <>
        <nav className="bg-gray-200 w-full shadow-md p-4 fixed top-0 z-20 rounded-2xl">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
            <div className="flex justify-between items-center">
            <Link to="/" className="text-xl font-bold text-indigo-600">ClearSound</Link> 
            <button className="md:hidden text-gray-700 text-2xl"
              onClick={()=>setMenuOpen(!menuOpen)}
            >
             {menuOpen ? (
                <XMarkIcon className="h-6 w-6 text-gray-700"/>
             ):(
                <Bars3Icon className="h-6 w-6 text-gray-700"/>
             )}
            </button>
            </div>
        
        <form onSubmit={handelSearch} className="w-full md:w-1/2 relative">
         <input type="text" 
                value={searchTerm}
                onChange={(e)=> setSearchTerm(e.target.value)}
                placeholder="Search Here!!"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
         />
         <button
          type="submit"
          onClick={handelSearch}
          className="absolute right-1 top-1/2 -translate-y-1/2 bg-indigo-600 hover:bg-indigo-800 p-2 rounded-md cursor-pointer"
         >
            <MagnifyingGlassIcon className="h-5 w-5 text-white hover:h-6 hover:w-6"></MagnifyingGlassIcon>
            
         </button>
        </form>
        <ul className="flex gap-6 text-gray-700 font-medium">
         <li><Link to="/" className="hover:underline">Home</Link></li>
         <li><Link to="/products" className="hover:underline">Products</Link></li>
         <li><Link to="/help" className="hover:underline">Customer Care</Link></li>
         <li> <Link to="/cart" className="relative flex items-center gap-1">
            <ShoppingCartIcon className="h-5 w-5 text-gray-700"></ShoppingCartIcon>
            <span className="absolute -top-2 -right-3 bg-red-500 text-white text-xs rounded-full px-1 ">0</span>
            </Link></li>
        </ul>
        
        </div>
        </nav>
        </>
    )
}
export default Navbar;