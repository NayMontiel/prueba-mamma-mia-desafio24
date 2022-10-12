import React, { useContext, useEffect, useState } from 'react'
import {  useParams } from 'react-router-dom';
import {Context} from '../context/UserProvider'


export const PizzaSelected = () => {
    const [pizzaSelected, setPizzaSelected] = useState({});
    const { pizzas, addCar, increase, diminish } = useContext(Context);
    const { id } = useParams();

useEffect(() =>{
   const getData = (id) => {
    const dataPizza = pizzas.find((product) => product.id === id);
      setPizzaSelected(dataPizza);
   }
   console.log(pizzaSelected)
    getData(id)

   }, [id]); 
   

  return (
    <>
      
        <div className="card-selected mb-2 border-danger">
        <div className="row g-0">
          <div className='d-flex border-danger'>
          <div className="col-md-4">
            <img
              src={pizzaSelected.img}
              className="img-fluid rounded-start mx-5 mt-5 w-100 animate__animated animate__swing"
              alt={pizzaSelected.name}
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title animate__animated animate__swing"style={{ textTransform: 'capitalize'}}>{pizzaSelected.name}</h5>
                      
              <div className="card-text text-left fs-6 mx-5 animate__animated animate__swing">
                <p>{pizzaSelected.desc}</p>
                <b>Ingredientes:</b>
                {pizzaSelected.ingredients?.map((ingr, i) => (
                  <p key={i} className='list'>
                 🍕 { ingr }
                  </p>
                ))}
              </div>
              <p className="card-text animate__animated animate__swing">
                <b>Valor: ${pizzaSelected.price}</b> 
              </p> 

              {/* <button className='btn btn-success mx-2' onClick={() => increase(pizzaSelected) }> ➕ </button>
              <span></span>
              <button className='btn btn-light border-danger'onClick={() => diminish(pizzaSelected) } > ➖ </button> */}

              <button to="/carrito" className='btn btn-danger mx-4' onClick={() => addCar(pizzaSelected)}> Añadir 🛒</button>
            </div>
          </div>
        </div>
        </div>
      </div>

    </>
  )
}
