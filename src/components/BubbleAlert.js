import React, { Component } from 'react'

const styles = {
    bubble:{
        backgroundColor: '#E9725A',
        color: 'white',
        position: 'relative',
        borderRadius: '15px',
        padding: '2px 10px',
    }
}

class BubbleAlert extends Component {

    getNumber(n) {
        if (!n) { return '' }
        return(
            n > 9 
            ? '9+' 
            : n
        )
    }

    render() {
        const { value } = this.props
        return (
            <span style={styles.bubble} >
                {this.getNumber(value)}
            </span>
        )
    }
}

export default BubbleAlert
