
(() => {
    'use strict'
    const forms = document.querySelectorAll('.needs-validation')
    
    Array.from(forms).forEach(form => {
        form.addEventListener('submit', event => {
        if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
        }
        
        form.classList.add('was-validated')
    }, false)
    })
})()
const formulario=document.querySelector("#formulario");
formulario.addEventListener("submit", validarFormulario)

function validarFormulario(event){
    event.preventDefault();

const formulario=document.querySelector("#formulario").value;
const nombre=document.querySelector("#validationCustom01").value;
const apellido=document.querySelector("#validationCustom02").value;
const email=document.querySelector("#validationCustom03").value;
const mensaje=document.querySelector("#validationTextarea").value;

const respuesta=document.getElementById("respuesta");

respuesta.textContent= `Hola ${nombre} ${apellido} gracias por comunicarte, a la brevedad recibiras un correo a tu e-mail ${email}`

}
