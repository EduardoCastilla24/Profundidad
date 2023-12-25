
const overlay = document.getElementById('overlay')
const sectionModal = document.getElementById('section__modal')
const modal = document.getElementById('modal')


const modalTitle = document.getElementById('modal__title');
const inputDescripcion = document.getElementById('descripcion');
const divEad = document.getElementById('barcode');
const inputPrecio = document.getElementById('precio');
const inputOh = document.getElementById('oh');
const inputAsst = document.getElementById('asst');

export function Modal(descripcion, ean, precio, oh, asst, division){
    sectionModal.classList.add('show')
    overlay.classList.add('show')
    modal.classList.add('active')

    modalTitle.innerText = division
    inputDescripcion.value = descripcion
    inputPrecio.value = precio
    inputOh.value = oh
    inputAsst.value = asst
    divEad.innerText = ean
    JsBarcode("#barcode", ean);
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
