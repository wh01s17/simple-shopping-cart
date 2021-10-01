import React, { Component } from 'react'
import Producto from './Producto';

const styles = {
    producto: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
    }
}

class Productos extends Component {
    render() {
        const { productos, agregarAlCarro } = this.props;

        return (
            <div style={styles.producto} >
                {
                    productos.map(
                        x =>
                            <Producto
                                key={x.name}
                                producto={x}
                                agregarAlCarro={agregarAlCarro}
                            />
                    )
                }
            </div>
        )
    }
}

export default Productos
