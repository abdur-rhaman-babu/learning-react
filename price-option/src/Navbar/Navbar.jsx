import { useState } from "react";
import Link from "./Link/Link";
import { FaTimes, FaBars } from "react-icons/fa";

const Navbar = () => {
    const [open, setOpen] = useState(false)

    const datas = [
        { id: 1, title: "Home", path: "/" },
        { id: 2, title: "About Us", path: "/about" },
        { id: 3, title: "Services", path: "/services" },
        { id: 4, title: "Products", path: "/products" },
        { id: 5, title: "Contact", path: "/contact" }
      ];

    return (
        <nav className='bg-blue-600 shadow-lg z-10 py-5 px-4 text-white font-semibold'>
            <div className='text-2xl md:hidden' onClick={()=>setOpen(!open)}>
                {
                    open ? <FaTimes /> : <FaBars/>
                    
                }
            </div>
            <ul className={`md:flex absolute p-4 duration-1000 md:static md:duration-0 md:bg-blue-600 rounded
            ${open ? 'top-16 left-0 -z-10': '-top-40 -left-40 -z-10'}
            bg-blue-600 text-white`}>
                {
                    datas && datas.map((data)=> <Link key={data.id} data = {data}/>)
                }
            </ul>
        </nav>
    );
};

export default Navbar;