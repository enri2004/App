import React, { useState } from "react";
import '../css/Soporte.css'
import { FaLifeRing, FaKey } from 'react-icons/fa'; 

export default function Soporte() {
    const [mostrarFormularioSoporte, setMostrarFormularioSoporte] = useState(false);
    const [mostrarFormularioRecuperar, setMostrarFormularioRecuperar] = useState(false);

    const toggleFormularioSoporte = () => {
        setMostrarFormularioSoporte(!mostrarFormularioSoporte);
        setMostrarFormularioRecuperar(false); // Oculta el otro formulario
    };

    const toggleFormularioRecuperar = () => {
        setMostrarFormularioRecuperar(!mostrarFormularioRecuperar);
        setMostrarFormularioSoporte(false); // Oculta el otro formulario
    };

    return (
        <div className="contenedor">
            <div className="barra1" onClick={toggleFormularioSoporte}>
                <FaLifeRing /> Soporte 
            </div>
            {mostrarFormularioSoporte && (
                <form className="form">
                    <h2>Formulario de Soporte</h2>
                    {<div>
                        <a>bienvenido al soporte si tiene problemas con la plataforma 
                        llamar al numero 9341053850
                        para que unos de nuestros asesores lo ayude con su problema</a>
                        <input />
                        </div>
                        }
                </form>
            )}

                <div className="barra2" onClick={toggleFormularioRecuperar}>
                <FaKey /> Recuperar  
                </div>
                {mostrarFormularioRecuperar && (
              
                <form className="form">
                <h2>Formulario de Recuperar</h2>

                <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Email address</label>
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">Password</label>
                <input type="password" class="form-control" id="exampleInputPassword1"/>
                </div>
                <div class="mb-3 form-check">
                <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
                <label class="form-check-label" for="exampleCheck1">Check me out</label>
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
</form>

            )}
        </div>
    );
}
