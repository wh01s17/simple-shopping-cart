import React, { Component } from 'react';

const styles = {
    layout: {
        padding: '40px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    container: {
        width: '90%'
    }
}

class Layout extends Component {
    render() {
        return (
            <div style={ styles.layout }>
                <div style={ styles.container }>
                    { this.props.children }
                </div>
            </div>
        )
    }
}

export default Layout
