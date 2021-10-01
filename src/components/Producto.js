import React, { Component } from 'react';
import Button from './Button';

const styles = {
    producto: {
        border: '1px solid rgba( 0, 0, 0, 0.1 )',
        boxShadow: '0 3px 3px rgba( 0, 0, 0, 0.1 )',
        borderRadius: '5px',
        width: '30%',
        padding: '20px',
        margin: '10px',
    },
    img: {
        width: '100%'
    }
}

class Producto extends Component {
    render() {
        const { producto, agregarAlCarro } = this.props;

        return (
            <div style={styles.producto}>
                <img style={styles.img} src={producto.img} alt={producto.name} />
                <h3>{producto.name}</h3>
                <p>{producto.price}</p>

                <Button onClick={() => agregarAlCarro(producto)}>
                    Agregar al carro
                </Button>

            </div>
        )
    }
}

export default Producto
