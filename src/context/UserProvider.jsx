import React, { createContext, useState, useEffect } from "react";
import Swal from "sweetalert2";

export const Context = createContext();

const UserProvider = (props) => {
  const [pizzas, setPizzas] = useState([]);
  const [total, setTotal] = useState([]);

  //   consumiendo archivo json
  const endpoint = "json/pizzas.json";
  useEffect(() => {
    const getPizzas = async () => {
      const res = await fetch(endpoint);
      let pizzas = await res.json();

      setPizzas(pizzas);
      console.log(pizzas);
    };
    getPizzas();
  }, []);

  //   carrito añadir
  const addCar = ({ id, price, img, name }) => {

      Swal.fire({
        title: "Éxito!",
        text: "Pizza añadida",
        icon: "success",
        confirmButtonText: "ok",
      });
    const productoIndex = total.findIndex((item) => item.id === id);
    const producto = { id, name, img, price, count: 1 };

    if (productoIndex >= 0) {
      total[productoIndex].count++; 

      setTotal([...total]);
    } else {
      setTotal([...total, producto]);
    }
  };

  //   boton aumentar
  const increase = (i) => {
    total.find((element) => {
      if (element.id === i) {
        element.count++;
      }
    });
    setTotal([...total]);
  };

  // boton disminuir no logro eliminar con esta opcion
  const diminish = (id) => {
    const count = total[id];

    if (count === 1) {
      total.slice(id, 1);
    } else {
      total.find((element) => {
        if (element.id === id) {
          element.count--;
          console.log(element.count--);
          if (element.count === 0) {
            // console.log("ingresa a condicion");
            // console.log(setTotal);
            setTotal((old) => {
             
              old.filter((item) => item.id !== id);
            });
            return;
          }
        }
      });
    }
    setTotal([...total]);
  };
  ///console.log(total);

  return (
    <Context.Provider
      value={{ pizzas, total, setTotal, increase, diminish, addCar }}
    >
      {props.children}
    </Context.Provider>
  );
};

export default UserProvider;
