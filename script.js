const modal = document.getElementById('modal');
const logo = modal.querySelector('img');
const startButton = document.getElementById('startButton');
const secondModal = document.getElementById('secondModal');
const cardImage = document.getElementById('cardImage');
const secondModalImage = document.getElementById('secondModalImage');

// Variables para control de animación
let animationInProgress = false;

window.addEventListener('load', () => {
    // Asegurar que la imagen de la tarjeta esté por encima
    cardImage.style.zIndex = '5';
    
    // Mostrar el logo con fade in
    logo.classList.add('fade-in');
    
    // Después de 2.5 segundos, hacer fade out del logo
    setTimeout(() => {
        logo.classList.remove('fade-in');
        logo.classList.add('fade-out');
        
        // Después de 1.5 segundos (cuando el logo ya se ha desvanecido), hacer fade out del fondo blanco
        setTimeout(() => {
            modal.classList.add('fade-out-background');
            
            // Ocultar el modal completamente después de la transición
            setTimeout(() => {
                modal.style.display = 'none';
            }, 1000); // Tiempo suficiente para que el fondo se desvanezca completamente
        }, 1500);
    }, 2500);
});

// Función para obtener la posición exacta de un elemento
function getOffset(el) {
    const rect = el.getBoundingClientRect();
    return {
        left: rect.left + window.scrollX,
        top: rect.top + window.scrollY,
        width: rect.width,
        height: rect.height
    };
}

// Función para crear una copia exacta de la imagen
function createClonedImage(sourceImage) {
    const imagePosition = getOffset(sourceImage);
    
    // Crear una nueva imagen con los mismos atributos
    const clonedImage = new Image();
    clonedImage.src = sourceImage.src;
    clonedImage.alt = sourceImage.alt;
    
    // Aplicar estilos exactos
    clonedImage.style.position = 'fixed';
    clonedImage.style.top = imagePosition.top + 'px';
    clonedImage.style.left = imagePosition.left + 'px';
    clonedImage.style.width = imagePosition.width + 'px';
    clonedImage.style.height = 'auto';
    clonedImage.style.zIndex = '1002';
    clonedImage.style.pointerEvents = 'none';
    
    return {
        element: clonedImage,
        position: imagePosition
    };
}

startButton.addEventListener('click', function() {
    // Evitar múltiples clics durante la animación
    if (animationInProgress) return;
    animationInProgress = true;
    
    // Crear clon de la imagen antes de cualquier cambio
    const clonedImageData = createClonedImage(cardImage);
    const clonedImage = clonedImageData.element;
    document.body.appendChild(clonedImage);
    
    // Ocultar la imagen original inmediatamente
    cardImage.style.visibility = 'hidden';
    
    // Asegurar que el modal comienza completamente opaco = 0
    secondModal.style.opacity = '0';
    secondModal.style.display = 'block';
    
    // Posicionar la imagen del segundo modal exactamente donde está el clon
    secondModalImage.style.top = clonedImageData.position.top + 'px';
    secondModalImage.style.left = clonedImageData.position.left + 'px';
    secondModalImage.style.width = clonedImageData.position.width + 'px';
    secondModalImage.style.height = 'auto';
    secondModalImage.style.opacity = '1';
    secondModalImage.classList.remove('fade-out'); // Asegurar que no tiene la clase fade-out
    
    // Pequeño retraso para asegurar que todo está en su lugar
    setTimeout(() => {
        // Iniciar fade in del segundo modal
        secondModal.style.opacity = '1';
        
        // Cuando el fondo blanco esté completamente visible, remover el clon
        setTimeout(() => {
            document.body.removeChild(clonedImage);
            
            // Después de 2 segundos, hacer fade out de la imagen del segundo modal
            setTimeout(() => {
                // Aplicar fade out a la imagen
                secondModalImage.classList.add('fade-out');
                
                // Verificar animación completa
                const fadeOutCheck = setInterval(() => {
                    // Si la opacidad computada es 0, la animación está completa
                    const opacity = window.getComputedStyle(secondModalImage).getPropertyValue('opacity');
                    if (opacity <= 0.1) {
                        clearInterval(fadeOutCheck);
                        console.log("Imagen desvanecida completamente");
                        animationInProgress = false;
                    }
                }, 100);
                
                // Por si acaso, asegurar que la animación termina después de un tiempo máximo
                setTimeout(() => {
                    secondModalImage.style.opacity = '0';
                    animationInProgress = false;
                }, 2000);
            }, 2000);
        }, 500);
    }, 50);
});

// Asegurar que la imagen esté correctamente posicionada en todo momento
window.addEventListener('resize', function() {
    if (secondModal.style.display === 'block' && secondModalImage) {
        // Recalcular la posición basada en dónde debería estar la imagen original
        const content = document.getElementById('content');
        const contentRect = content.getBoundingClientRect();
        
        // Determinar la posición según el tamaño de la pantalla
        let topOffset = -170; // Valor predeterminado
        let leftOffset = 10;
        let imageWidth = 140;
        
        // Ajustar según media queries
        if (window.innerWidth <= 375) {
            topOffset = -130;
            leftOffset = 5;
            imageWidth = 100;
        } else if (window.innerWidth <= 768) {
            topOffset = -150;
            imageWidth = 120;
        } else if (window.innerWidth <= 1200) {
            topOffset = -160;
        } else {
            topOffset = -180;
            imageWidth = 160;
        }
        
        // Aplicar nuevas posiciones
        secondModalImage.style.top = (contentRect.top + window.scrollY + topOffset) + 'px';
        secondModalImage.style.left = (contentRect.left + window.scrollX + leftOffset) + 'px';
        secondModalImage.style.width = imageWidth + 'px';
    }
});