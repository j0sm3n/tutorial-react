import React, { Component } from "react"

class Form extends Component {
    state = {
        nombre: '',
        apellido: ''
    }

    gestionarCambio = (event) => {
        const { name, value } = event.target

        this.setState({
            [name]: value,
        })
    }

    enviarFormulario = () => {
        this.props.enviarFormulario(this.state)
        this.setState({
            nombre: '',
            apellido: ''
        })
    }

    render() {
        const { nombre, apellido } = this.state

        return (
            <form className="col-md-4">
                <div className="form-group">
                    <label htmlFor="nombre">Nombre</label>
                    <input
                        className="form-control"
                        type="text"
                        name="nombre"
                        id="nombre"
                        value={nombre}
                        onChange={this.gestionarCambio}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="apellido">Apellido</label>
                    <input
                        className="form-control"
                        type="text"
                        name="apellido"
                        id="apellido"
                        value={apellido}
                        onChange={this.gestionarCambio}
                    />
                </div>
                <div className="form-group">
                    <input type="button" value="Enviar" onClick={this.enviarFormulario} />
                </div>
            </form>
        )
    }
}

export default Form