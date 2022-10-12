import React, { useContext } from "react";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Context } from "../context/UserProvider";

export const Menu = () => {
  const { pizzas, addCar } = useContext(Context);
  const navigate = useNavigate();


  return (
    <>
     {pizzas.map((item) => (
        <div className="col" key={item.id}>
        <Card className="card d-flex  mx-3 animate__animated animate__fadeInUp">
           <Card.Img variant="top" src={item.img} />
           <Card.Body>
             <Card.Title className="fs-5" style={{ textTransform: "capitalize" }}>
               {item.name}
             </Card.Title>
             <hr />
             
             <h5 className="fs-6">Ingredientes</h5>
             
             <Card.Text >
             {item.ingredients.map((ingr, i) => (
             
               <li key={i} className='list'>🍕 {ingr}</li>
             
            ))} 
             </Card.Text>
            
             <hr />
             <h5>{`Valor: $ ${item.price.toLocaleString('es-CL')}`}</h5>
             <Link
               to={`/pizza/${item.id}`}
               className="btn mx-2 btn-success"
               onClick={() => navigate(`/pizza/${item.id}`)}
             >
               {" "}
               Ver Más 👀
             </Link>
             <button to="/carrito" className="btn btn-danger" onClick={() => addCar(item)}>
               {" "}
               Agregar 🛒
             </button>
           </Card.Body>
         </Card>
        </div>
     ))}
    </>
  );
};
