import { closeModal } from './functions/modal.js';
import { handleSignoutClick} from './sheets/auth.js';

document.addEventListener("DOMContentLoaded", function() {
    // Muestra el loader inmediatamente al cargar la página
    Notiflix.Loading.pulse();
});

document.getElementById('signout_button').onclick = function() {
    Swal.fire({
        title: '¿Desea Cerrar Sesión?',
        text: "Al confirmar cerrará la sesión",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Si, salir',
        cancelButtonText: 'Cancelar'
    }).then((result) => {
        if (result.isConfirmed) {
            handleSignoutClick()

            Notiflix.Loading.pulse();
            setTimeout(function(){
                // REMOVE LOADER
                window.location.href = '../../index.html';
                Notiflix.Loading.remove();
            }, 700);
        }
    })
};

document.getElementById('modal__close').onclick = function() {
    closeModal()
}
document.getElementById('section__modal').onclick = function() {
    closeModal()
}