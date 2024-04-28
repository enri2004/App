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
                    <h2>Soporte</h2>
                    <p style={{position:"absolute", top:"80px",textAlign:"center", padding:"50px 50px 50px 50px"}}>
                        ¡Bienvenido a nuestro servicio de soporte! Estamos disponibles las 24 horas para ayudarte. Si has experimentado pérdida o robo de datos, te recomendamos que contactes con nosotros de inmediato al número 9341053850. Nuestros técnicos están preparados para proporcionarte una solución rápida y segura.
                        Si tienes algún problema con la página, como lentitud de carga o dificultades para acceder con tu contraseña o usuario, por favor envía un mensaje detallando el problema a [correo electrónico]. Nos comprometemos a resolverlo lo antes posible.
                        Además, valoramos tus consejos e ideas para mejorar nuestro servicio. Si tienes alguna sugerencia o comentario, no dudes en compartirlo con nosotros. Estamos atentos a todas tus ideas para seguir mejorando. ¡Tu opinión cuenta!</p>
                    {
                     <div class="form-floating" style={{position:"absolute", top:"70%", left:"30%"}}>
                      <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea2" style={{height:"200%", width:"200%"}}></textarea>
                        <label for="floatingTextarea2" >tu comentario es importante</label>
                      </div>
                      
                    }
                </form>
            )}

                <div className="barra2" onClick={toggleFormularioRecuperar}>
                <FaKey /> Recuperar  
                </div>
                {mostrarFormularioRecuperar && (
              
                <form className="form" >
                    <h2>Recuperar</h2>
                <form class="row g-3 needs-validation" novalidate  style={{position:"absoluta", top:"80px",left:"10px", padding:"10px 10px 10px 10px"}}>
                    <div class="col-md-4">
                      <label for="validationCustom01" class="form-label">Apellido paterno</label>
                      <input type="text" class="form-control" id="validationCustom01"  required />
                      <div class="valid-feedback">
                        Looks good!
                      </div>
                    </div>
                    <div class="col-md-4">
                      <label for="validationCustom02" class="form-label">Apellido materno</label>
                      <input type="text" class="form-control" id="validationCustom02"  required/>
                      <div class="valid-feedback">
                        Looks good!
                      </div>
                    </div>
                    <div class="col-md-4">
                      <label for="validationCustomUsername" class="form-label">Nombre</label>
                      <div class="input-group has-validation">
                        <span class="input-group-text" id="inputGroupPrepend">@</span>
                        <input type="text" class="form-control" id="validationCustomUsername" aria-describedby="inputGroupPrepend" required/>
                      </div>
                    </div>
                    
                    <div class="col-md-4">
                      <label for="validationCustomUsername" class="form-label">Lugar</label>
                      <div class="input-group has-validation">
                        <span class="input-group-text" id="inputGroupPrepend">@</span>
                        <input type="text" class="form-control" id="validationCustomUsername" aria-describedby="inputGroupPrepend" required/>
                      </div>
                    </div>
                    <div class="col-md-4">
                      <label for="validationCustomUsername" class="form-label">correo</label>
                      <div class="input-group has-validation">
                        <span class="input-group-text" id="inputGroupPrepend">@</span>
                        <input type="text" class="form-control" id="validationCustomUsername" aria-describedby="inputGroupPrepend" required/>
                      </div>
                    </div>
                    <div class="col-md-4">
                      <label for="validationCustomUsername" class="form-label">escuela</label>
                      <div class="input-group has-validation">
                        <span class="input-group-text" id="inputGroupPrepend">@</span>
                        <input type="text" class="form-control" id="validationCustomUsername" aria-describedby="inputGroupPrepend" required/>
                      </div>
                    </div>
                    <div class="col-md-4">
                      <label for="validationCustomUsername" class="form-label">Usuario</label>
                      <div class="input-group has-validation">
                        <span class="input-group-text" id="inputGroupPrepend">@</span>
                        <input type="text" class="form-control" id="validationCustomUsername" aria-describedby="inputGroupPrepend" required/>
                      </div>
                    </div>
                    
                    <div class="col-md-4">
                      <label for="validationCustomUsername" class="form-label">ultima Contraseña</label>
                      <div class="input-group has-validation">
                        <span class="input-group-text" id="inputGroupPrepend">@</span>
                        <input type="text" class="form-control" id="validationCustomUsername" aria-describedby="inputGroupPrepend" required/>
                      </div>
                    </div>


                    <div class="col-12">
                      <button class="btn btn-primary" type="submit">Recuperar</button>
                    </div>
                  </form>

                    
</form>

            )}
        </div>
    );
}
