import React, { Component } from 'react';

const styles = {
    detallesCarro: {
        backgroundColor: '#fff',
        position: 'absolute',
        marginTop: 30,
        boxShadow: '1px 5px 5px rgba(0, 0, 0, 0.3)',
        borderRadius: '5px',
        width: '300px',
        right: 50,
    },
    ul: {
        margin: 0,
        padding: 0
    },
    producto: {
        listStyleType: 'none',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '25px 20px',
        borderBottom: 'solid 1px #aaa',
    },
    eliminar: {
        color: 'red',
        border: 'none',
        backgroundColor: 'white',
        cursor: 'pointer',
        fontSize: '1.2rem',
    }
}

class DetalleCarro extends Component {

    render() {
        const { carro, eliminar } = this.props;

        return (
            <div style={styles.detallesCarro} >
                <ul style={styles.ul}>
                    {
                        carro.map(
                            x =>
                                <li style={styles.producto} key={x.name}>
                                    <img src={x.img} alt={x.name} width="50" height="32" />
                                    {x.name}
                                    <span>{x.cantidad}</span>
                                    <button
                                        style={styles.eliminar}
                                        onClick={() => eliminar(x)}
                                    >
                                        X
                                    </button>
                                </li>
                        )
                    }
                </ul>
            </div>
        )
    }
}

export default DetalleCarro
