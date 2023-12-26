
const overlay = document.getElementById('overlay')
const sectionModal = document.getElementById('section__modal')
const modal = document.getElementById('modal')


const modalTitle = document.getElementById('modal__title');
const inputDescripcion = document.getElementById('descripcion');
const inputEan = document.getElementById('ean');
const inputPrecio = document.getElementById('precio');
const inputOh = document.getElementById('oh');
const inputAsst = document.getElementById('asst');
const inputEstado = document.getElementById('estado');

export function Modal(descripcion, ean, precio, oh, asst, division, estado){
    sectionModal.classList.add('show')
    overlay.classList.add('show')
    modal.classList.add('active')

    modalTitle.innerText = division
    inputDescripcion.value = descripcion
    inputEan.innerText = ean
    inputPrecio.value = precio
    inputOh.value = oh
    inputAsst.value = asst
    inputEstado.innerText = estado

    estado == 'Obsoleto' ? inputEstado.classList.add('obsoleto') :  inputEstado.classList.add('activo')

    JsBarcode("#barcode", ean, {
        displayValue: false,
    })
    // EVITAR QUE SE QUEDE ACTIVO EL SIDEBAR Y OVERLAY EN PANTALLAS DESKTOP
    reSize()
}

export function closeModal(){
    sectionModal.classList.remove('show')
    modal.classList.remove('active')
    overlay.classList.remove('show')
}

function reSize(){
    const sizeScreen = 1200

    window.addEventListener('resize', function() {
        if(window.innerWidth >= sizeScreen){
            if(overlay.classList.contains('show') || sectionModal.classList.contains('show') || modal.classList.contains('active') ){
                closeModal()
            }
        }
    })
}
