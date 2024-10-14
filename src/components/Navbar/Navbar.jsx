import { Link } from "react-router-dom";


const Navbar = () => {
    return (
        <div className="p-5 bg-[#00bcd4] flex justify-between items-center px-10">
            <Link to="/"><h3 className="text-3xl font-bold text-white">Wear Aura</h3></Link>
            <div className="flex justify-center gap-5 text-white">
                <li className="list-none font-semibold"><Link to="/">Home</Link></li>
                <li className="list-none font-semibold"><Link to="/contact">Contact</Link></li>
                <li className="list-none font-semibold"><Link to="/products">Products</Link></li>
                <li className="list-none font-semibold"><Link to="/cart">Cart</Link></li>
            </div>
        </div>
    );
};

export default Navbar;