import React, { useContext } from "react";
import { Link } from "react-router-dom";
import {Context} from "../context/UserProvider";

const NavBar = () => {
 const {total} = useContext(Context);
 const totalAPagar = total.reduce((valueante, {count, price}) => valueante + price * count, 0 );


  return (
    <nav className="navBar p-3 mt-2">
      
        <Link to="/" className="link mx-3">
          <h3>🍕 Pizzeria Mama Mia!</h3>
        </Link>
        
        <Link to="/carrito"  className="link mx-3 ">
           <h3>🛒 ${totalAPagar}</h3>  
        </Link>
      
    </nav>
  );
};

export default NavBar;
