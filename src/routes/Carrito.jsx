import { useContext } from "react"
import {Context} from "../context/UserProvider"
import Table from 'react-bootstrap/Table';
import Swal from 'sweetalert2'

const Carrito = () => {
   const {total, setTotal, increase, diminish } = useContext(Context);
    const totalAPagar = total.reduce((valueante, {count, price}) => valueante + price * count, 0 );

    const eliminarTodo = (id) => {
      Swal.fire({
        title: 'Seguro de eliminar producto?',
        text: "Esto no se puede revertir!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: 'rgba(4,148,68,0.958420868347339)',
        cancelButtonColor: 'rgba(228,15,15,0.9472163865546218)',
        confirmButtonText: 'si'
      }).then((result) => {
        if (result.isConfirmed) {
          setTotal((old) => old.filter((item) => item.id !== id));
          Swal.fire(
            'Eliminado!',
            'La pizza a sido eliminada.',
            'success'
          )
        }
      })
      
    };

  return (
    <>
    <div className="container table">
      <div className="detalles bg-light w-75 p-5 m-auto ">
        <h4>Detalles del pedido: </h4>
        {total.map((pizza, i) => ( 
        <Table striped bordered hover key={i} className="text-center my-2" >
      <tbody className="p2">
        <tr>
          <td><img src={pizza.img} alt={pizza.name} className='w-25'/> <b>{pizza.name}</b></td>
                  
          <td><b>valor ${pizza.price * pizza.count}</b></td>
                  
          <td><button className='btn btn-success ' onClick={() => increase(pizza.count++) }> ➕ </button></td>
          <td><p>{pizza.count}</p></td>
          <td><button className='btn btn-light border-danger text-danger 'onClick={() => diminish(pizza.count--) } > ➖ </button></td>
          <td><button className="btn btn-danger mx-3" onClick={() => eliminarTodo(pizza.id)}> 🗑 </button></td>
        </tr>
      </tbody>
    </Table>
    ))}
        <div>
          <h3>Total: ${totalAPagar}</h3>
          <button className="btn btn-success text-dark fw-bold" type='submit'> Pagar </button>
        </div>
      </div>
      </div>
    </>
  )
}

export default Carrito