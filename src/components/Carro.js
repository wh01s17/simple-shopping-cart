import React, { Component } from 'react';
import BubbleAlert from './BubbleAlert';
import DetalleCarro from './DetalleCarro';

const styles = {
    button: {
        backgroundColor: 'green',
        color: 'white',
        border: 'none',
        padding: '15px',
        borderRadius: '15px',
        cursor: 'pointer'
    },
    buble: {
        position: 'relative',
        left: '15px',
        top: '15px',
    }
}

class Carro extends Component {

    render() {
        const { carro, mostrarCarro, esCarroVisible, eliminar } = this.props;
        const cantidad = carro.reduce((acc, el) => acc + el.cantidad, 0);

        return (
            <div>
                {
                    cantidad > 0 
                    && <span style={styles.buble}>
                        <BubbleAlert value={cantidad} />
                    </span>
                }

                <button style={styles.button} onClick={mostrarCarro}>
                    Carro
                </button>
                {
                    esCarroVisible 
                    && <DetalleCarro carro={carro} eliminar={eliminar}/>
                }
            </div>
        )
    }
}

export default Carro
