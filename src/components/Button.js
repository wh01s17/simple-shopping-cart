import React, { Component } from 'react';

const styles = {
    button: {
        backgroundColor: 'black',
        color: 'white',
        border: 'none',
        padding: '15px',
        borderRadius: '5px',
        cursor: 'pointer'
    }
}

class Button extends Component {
    render() {
        return (
            <button style={styles.button} { ...this.props } />
        )
    }
}

export default Button
