import { Component } from 'react';
import Carro from './Carro';
import Logo from './Logo';

const styles = {
    navbar: {
        height: '100px',
        boxShadow: '0px 2px 3px rgba( 0, 0, 0, 0.1 )',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        padding: '0 50px',
        position: 'relative',
        justifyContent: 'space-between',
    }
}

class Navbar extends Component {
    render(){
        const { carro, mostrarCarro, esCarroVisible, eliminar } = this.props
        return(
            <nav style={styles.navbar} >
                <Logo />
                <Carro
                    carro={ carro }
                    mostrarCarro={mostrarCarro}
                    esCarroVisible={esCarroVisible}
                    eliminar={eliminar}
                />
            </nav>
        );
    }
}

export default Navbar;
