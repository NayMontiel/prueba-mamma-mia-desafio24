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
    const productoIndex = total.findIndex((item) => item.id === id);
    const producto = { id, name, img, price, count: 1 };

    if (productoIndex >= 0) {
      total[productoIndex].count++;

      Swal.fire({
        title: "Éxito!",
        text: "Pizza añadida",
        icon: "success",
        confirmButtonText: "ok",
      });

      setTotal([...total]);
    } else {
      setTotal([...total, producto]);
    }
  };

  console.log(total);
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
  const diminish = (i) => {
    const count = total[i];

    if (count === 1) {
      total.slice(i, 1);
    } else {
      total.find((element) => {
        if (element.id === i) {
          element.count--;
          console.log(element.count);
          if (element.count === 0) {
            console.log("ingresa a condicion");
            console.log(setTotal);
            setTotal((old) => {
              console.log(i);
              old.filter((item) => item.id !== i);
            });
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
