import React, { Fragment } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


const cart = () => {
  return (
    <Fragment>
        <div className='cart1'>
            <h1 className='txt1'>TU COMPRA:</h1>
            <hr className='linea'/>
            <h1 className='txt'> Subtotal: </h1>
            <hr className='linea'/>
            <h1 className='txt'> Costo de envío aprox:</h1>
            <hr className='linea'/>
            <h1 className='txt'> Total:</h1>
            <hr className='linea'/>

            <Button className='btnCompra' variant="primary" size="lg">
                Finaliza Compra
            </Button>{' '}
        </div>
        
        <div className='cart2'> 
        <Card className='tarjeta1'>
                <Card.Header className='headerCart1'>OBTEN DESCUENTO POR COMPRAS MAYORES A  
                </Card.Header>

            </Card>       
            <Card className='tarjeta'>
                <Card.Header className='headerCart'>TU CARRITO() </Card.Header>
                <Card.Body>
                    {/* insertar tabla */}
                </Card.Body>
            </Card>
    </div>  
    </Fragment>
  )
}

export default cart