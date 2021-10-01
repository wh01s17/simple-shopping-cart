import { Component } from 'react';
import Layout from './components/Layout';
import Navbar from './components/Navbar';
import Productos from './components/Productos';
import Title from './components/Title';

class App extends Component {

  state = {
    productos: [
      { name: 'Tomate', price: 1500, img: '/productos/tomate.jpg' },
      { name: 'Arbejas', price: 2500, img: '/productos/arbejas.jpg' },
      { name: 'Lechuga', price: 500, img: '/productos/lechuga.jpg' }

    ],
    carro: [],
    esCarroVisible: false,
  }

  agregarAlCarro = (producto) => {
    const { carro } = this.state;

    if (carro.find(x => x.name === producto.name)) {
      const newCarro = carro.map(
        x => x.name === producto.name
          ? {
            ...producto,
            cantidad: x.cantidad + 1
          }
          : x
      );
      return this.setState({ carro: newCarro });
    }

    return this.setState({
      carro: this.state.carro.concat({
        ...producto,
        cantidad: 1
      })
    });
  }

  mostrarCarro = () => {
    if (!this.state.carro.length) {
      return
    }

    return this.setState({ esCarroVisible: !this.state.esCarroVisible });
  }

  eliminar = (producto) => {
    const { carro } = this.state;

    if (carro.find(x => x.name === producto.name)) {
      if (producto.cantidad > 1) {
        const newCarro = carro.map(
          x => x.name === producto.name
            ? {
              ...producto,
              cantidad: x.cantidad - 1
            }
            : x
        );
        return this.setState({ carro: newCarro });
      }
      else {
        const newCarro = carro.filter(x => x.name !== producto.name);
        if (!carro.length) {
          return this.setState({ esCarroVisible: false, carro: newCarro });
        }
        else {
          return this.setState({ carro: newCarro });
        }
      }
    }
  }

  render() {
    const { esCarroVisible, carro, productos } = this.state

    return (
      <>
        <Navbar
          carro={carro}
          esCarroVisible={esCarroVisible}
          mostrarCarro={this.mostrarCarro}
          eliminar={this.eliminar}
        />
        <Layout>
          <Title />
          <Productos
            productos={productos}
            agregarAlCarro={this.agregarAlCarro}
          />
        </Layout>
      </>
    );
  }
}

export default App;
