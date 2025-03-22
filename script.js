const modal = document.getElementById('modal');
const logo = modal.querySelector('img');
const startButton = document.getElementById('startButton');
const secondModal = document.getElementById('secondModal');
const cardImage = document.getElementById('cardImage');
const secondModalImage = document.getElementById('secondModalImage');
const countrySelect = document.getElementById('country');
const countryFlag = document.getElementById('countryFlag');
const mainContent = document.getElementsByTagName('main')[0];
const registrationContainer = document.querySelector('.registration-container');
const registrationLogo = document.getElementById('registrationLogo');
const registrationForm = document.getElementById('registrationForm');

// Mapeo de países a códigos de bandera (añadidos nuevos países)
const countryFlags = {
    'ar': 'flags/ar.png',
    'uk': 'flags/uk.png',
    'us': 'flags/us.png',
    'ca': 'flags/ca.png',
    'au': 'flags/au.png',
    'es': 'flags/es.png',
    'fr': 'flags/fr.png',
    'de': 'flags/de.png',
    'it': 'flags/it.png',
    'br': 'flags/br.png', // Brasil
    'cn': 'flags/cn.png', // China
    'in': 'flags/in.png', // India
    'jp': 'flags/jp.png', // Japón
    'mx': 'flags/mx.png', // México
    'other': 'flags/unknown.png'
};

// Sistema de internacionalización
const translations = {
    'ar': {
        fullName: 'Nombre Completo',
        email: 'Correo Electrónico',
        password: 'Contraseña',
        confirmPassword: 'Confirmar Contraseña',
        register: 'Registrarse',
        country: 'País',
        selectCountry: 'Seleccione su país',
        successTitle: 'Registro Exitoso',
        successMessage: '¡Bienvenido al Reino Británico de Peppa!',
        confirmationTitle: 'Confirmación de Datos',
        name: 'Nombre',
        back: 'Volver',
        confirm: 'Confirmar'
    },
    'uk': {
        fullName: 'Full Name',
        email: 'Email',
        password: 'Password',
        confirmPassword: 'Confirm Password',
        register: 'Register',
        country: 'Country',
        selectCountry: 'Select your country',
        successTitle: 'Registration Successful',
        successMessage: 'Welcome to Peppa\'s British Kingdom!',
        confirmationTitle: 'Data Confirmation',
        name: 'Name',
        back: 'Back',
        confirm: 'Confirm'
    },
    'us': {
        fullName: 'Full Name',
        email: 'Email',
        password: 'Password',
        confirmPassword: 'Confirm Password',
        register: 'Register',
        country: 'Country',
        selectCountry: 'Select your country',
        successTitle: 'Registration Successful',
        successMessage: 'Welcome to Peppa\'s British Kingdom!',
        confirmationTitle: 'Data Confirmation',
        name: 'Name',
        back: 'Back',
        confirm: 'Confirm'
    },
    'ca': {
        fullName: 'Full Name',
        email: 'Email',
        password: 'Password',
        confirmPassword: 'Confirm Password',
        register: 'Register',
        country: 'Country',
        selectCountry: 'Select your country',
        successTitle: 'Registration Successful',
        successMessage: 'Welcome to Peppa\'s British Kingdom!',
        confirmationTitle: 'Data Confirmation',
        name: 'Name',
        back: 'Back',
        confirm: 'Confirm'
    },
    'au': {
        fullName: 'Full Name',
        email: 'Email',
        password: 'Password',
        confirmPassword: 'Confirm Password',
        register: 'Register',
        country: 'Country',
        selectCountry: 'Select your country',
        successTitle: 'Registration Successful',
        successMessage: 'Welcome to Peppa\'s British Kingdom!',
        confirmationTitle: 'Data Confirmation',
        name: 'Name',
        back: 'Back',
        confirm: 'Confirm'
    },
    'es': {
        fullName: 'Nombre Completo',
        email: 'Correo Electrónico',
        password: 'Contraseña',
        confirmPassword: 'Confirmar Contraseña',
        register: 'Registrarse',
        country: 'País',
        selectCountry: 'Seleccione su país',
        successTitle: 'Registro Exitoso',
        successMessage: '¡Bienvenido al Reino Británico de Peppa!',
        confirmationTitle: 'Confirmación de Datos',
        name: 'Nombre',
        back: 'Volver',
        confirm: 'Confirmar'
    },
    'fr': {
        fullName: 'Nom Complet',
        email: 'Email',
        password: 'Mot de Passe',
        confirmPassword: 'Confirmer le Mot de Passe',
        register: 'S\'inscrire',
        country: 'Pays',
        selectCountry: 'Sélectionnez votre pays',
        successTitle: 'Inscription Réussie',
        successMessage: 'Bienvenue au Royaume Britannique de Peppa !',
        confirmationTitle: 'Confirmation des Données',
        name: 'Nom',
        back: 'Retour',
        confirm: 'Confirmer'
    },
    'de': {
        fullName: 'Vollständiger Name',
        email: 'E-Mail',
        password: 'Passwort',
        confirmPassword: 'Passwort Bestätigen',
        register: 'Registrieren',
        country: 'Land',
        selectCountry: 'Wählen Sie Ihr Land',
        successTitle: 'Registrierung Erfolgreich',
        successMessage: 'Willkommen im Britischen Königreich von Peppa!',
        confirmationTitle: 'Datenbestätigung',
        name: 'Name',
        back: 'Zurück',
        confirm: 'Bestätigen'
    },
    'it': {
        fullName: 'Nome Completo',
        email: 'Email',
        password: 'Password',
        confirmPassword: 'Conferma Password',
        register: 'Registrati',
        country: 'Paese',
        selectCountry: 'Seleziona il tuo paese',
        successTitle: 'Registrazione Completata',
        successMessage: 'Benvenuto nel Regno Britannico di Peppa!',
        confirmationTitle: 'Conferma Dati',
        name: 'Nome',
        back: 'Indietro',
        confirm: 'Conferma'
    },
    'br': {
        fullName: 'Nome Completo',
        email: 'E-mail',
        password: 'Senha',
        confirmPassword: 'Confirmar Senha',
        register: 'Registrar',
        country: 'País',
        selectCountry: 'Selecione seu país',
        successTitle: 'Registro Concluído',
        successMessage: 'Bem-vindo ao Reino Britânico da Peppa!',
        confirmationTitle: 'Confirmação de Dados',
        name: 'Nome',
        back: 'Voltar',
        confirm: 'Confirmar'
    },
    'cn': {
        fullName: '全名',
        email: '电子邮件',
        password: '密码',
        confirmPassword: '确认密码',
        register: '注册',
        country: '国家',
        selectCountry: '选择您的国家',
        successTitle: '注册成功',
        successMessage: '欢迎来到佩奇的英国王国！',
        confirmationTitle: '数据确认',
        name: '姓名',
        back: '返回',
        confirm: '确认'
    },
    'in': {
        fullName: 'पूरा नाम',
        email: 'ईमेल',
        password: 'पासवर्ड',
        confirmPassword: 'पासवर्ड की पुष्टि करें',
        register: 'रजिस्टर करें',
        country: 'देश',
        selectCountry: 'अपना देश चुनें',
        successTitle: 'पंजीकरण सफल',
        successMessage: 'पेप्पा के ब्रिटिश किंगडम में आपका स्वागत है!',
        confirmationTitle: 'डेटा पुष्टिकरण',
        name: 'नाम',
        back: 'वापस',
        confirm: 'पुष्टि करें'
    },
    'jp': {
        fullName: '氏名',
        email: 'メールアドレス',
        password: 'パスワード',
        confirmPassword: 'パスワードの確認',
        register: '登録',
        country: '国',
        selectCountry: '国を選択してください',
        successTitle: '登録成功',
        successMessage: 'ペッパのブリティッシュキングダムへようこそ！',
        confirmationTitle: 'データ確認',
        name: '名前',
        back: '戻る',
        confirm: '確認'
    },
    'mx': {
        fullName: 'Nombre Completo',
        email: 'Correo Electrónico',
        password: 'Contraseña',
        confirmPassword: 'Confirmar Contraseña',
        register: 'Registrarse',
        country: 'País',
        selectCountry: 'Seleccione su país',
        successTitle: 'Registro Exitoso',
        successMessage: '¡Bienvenido al Reino Británico de Peppa!',
        confirmationTitle: 'Confirmación de Datos',
        name: 'Nombre',
        back: 'Volver',
        confirm: 'Confirmar'
    },
    'other': {
        fullName: 'Full Name',
        email: 'Email',
        password: 'Password',
        confirmPassword: 'Confirm Password',
        register: 'Register',
        country: 'Country',
        selectCountry: 'Select your country',
        successTitle: 'Registration Successful',
        successMessage: 'Welcome to Peppa\'s British Kingdom!',
        confirmationTitle: 'Data Confirmation',
        name: 'Name',
        back: 'Back',
        confirm: 'Confirm'
    }
};

// Idioma actual
let currentLanguage = 'uk'; // Inglés por defecto

// Variables para control de animación
let animationInProgress = false;

// Función para actualizar los textos según el idioma
function updateLanguage(langCode) {
    const texts = translations[langCode] || translations['uk'];
    currentLanguage = langCode;
    
    // Actualizar etiquetas
    document.querySelector('label[for="name"]').textContent = texts.fullName;
    document.querySelector('label[for="email"]').textContent = texts.email;
    document.querySelector('label[for="password"]').textContent = texts.password;
    document.querySelector('label[for="confirmPassword"]').textContent = texts.confirmPassword;
    document.querySelector('label[for="country"]').textContent = texts.country;
    
    // Actualizar botón
    document.getElementById('registerButton').textContent = texts.register;
    
    // Actualizar placeholder del select
    const defaultOption = countrySelect.querySelector('option[disabled]');
    if (defaultOption) {
        defaultOption.textContent = texts.selectCountry;
    }
}

window.addEventListener('load', () => {
    // Asegurar que la imagen de la tarjeta esté por encima
    cardImage.style.zIndex = '5';
    
    // Mostrar el logo con fade in
    logo.classList.add('fade-in');
    
    // Inicializar la bandera con la predeterminada
    countryFlag.src = countryFlags['other'];
    countryFlag.alt = 'Country flag';
    
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
    
    // Preparar el contenedor de registro para el segundo modal
    if (registrationContainer) {
        registrationContainer.style.opacity = '0';
        secondModal.appendChild(registrationContainer);
    }
    
    // Establecer idioma por defecto
    updateLanguage(currentLanguage);
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

// Evento para actualizar la bandera cuando cambia el país seleccionado
countrySelect.addEventListener('change', function() {
    const countryCode = this.value;
    if (countryCode in countryFlags) {
        countryFlag.src = countryFlags[countryCode];
        countryFlag.alt = `${this.options[this.selectedIndex].text} flag`;
        
        // Actualizar el idioma
        updateLanguage(countryCode);
    } else {
        countryFlag.src = countryFlags['other'];
        countryFlag.alt = 'Flag';
        updateLanguage('other');
    }
});

startButton.addEventListener('click', function() {
    // Evitar múltiples clics durante la animación
    if (animationInProgress) return;
    animationInProgress = true;
    
    // Ocultar el contenido principal para evitar que se muestre durante las transiciones
    mainContent.style.display = 'none';
    
    // Crear clon de la imagen antes de cualquier cambio
    const clonedImageData = createClonedImage(cardImage);
    const clonedImage = clonedImageData.element;
    document.body.appendChild(clonedImage);
    
    // Ocultar la imagen original inmediatamente
    cardImage.style.visibility = 'hidden';
    
    // Asegurar que el modal comienza completamente opaco = 0
    secondModal.style.opacity = '0';
    secondModal.style.display = 'flex';
    secondModal.style.justifyContent = 'center';
    secondModal.style.alignItems = 'center';
    
    // Posicionar la imagen del segundo modal exactamente donde está el clon
    secondModalImage.style.top = clonedImageData.position.top + 'px';
    secondModalImage.style.left = clonedImageData.position.left + 'px';
    secondModalImage.style.width = clonedImageData.position.width + 'px';
    secondModalImage.style.height = 'auto';
    secondModalImage.style.opacity = '1';
    secondModalImage.classList.remove('fade-out'); // Asegurar que no tiene la clase fade-out
    
    // Asegurar que el contenedor de registro está oculto al inicio
    if (registrationContainer) {
        registrationContainer.style.opacity = '0';
        registrationLogo.classList.remove('fade-in');
        registrationForm.classList.remove('fade-in');
    }
    
    // Pequeño retraso para asegurar que todo está en su lugar
    setTimeout(() => {
        // Iniciar fade in del segundo modal (fondo blanco)
        secondModal.style.opacity = '1';
        
        // Cuando el fondo blanco esté completamente visible, remover el clon
        setTimeout(() => {
            document.body.removeChild(clonedImage);
            
            // Después de 2 segundos, hacer fade out de la imagen del segundo modal
            setTimeout(() => {
                // Aplicar fade out a la imagen
                secondModalImage.classList.add('fade-out');
                
                // Una vez que la imagen desaparece, mostrar el formulario de registro
                setTimeout(() => {
                    if (registrationContainer) {
                        // Mostrar el contenedor de registro con fade in
                        registrationContainer.style.opacity = '1';
                        
                        // Animación secuencial: primero el logo, luego el formulario
                        setTimeout(() => {
                            registrationLogo.classList.add('fade-in');
                            
                            setTimeout(() => {
                                registrationForm.classList.add('fade-in');
                                animationInProgress = false;
                            }, 500);
                        }, 300);
                    }
                }, 1500);
            }, 2000);
        }, 500);
    }, 50);
});

// Crear el modal de confirmación de datos
function createConfirmationModal(formData) {
    const texts = translations[currentLanguage];
    
    // Eliminar modal de confirmación existente si hay alguno
    const existingConfirmationModal = document.getElementById('confirmationModal');
    if (existingConfirmationModal) {
        document.body.removeChild(existingConfirmationModal);
    }
    
    // Crear modal de confirmación
    const confirmationModal = document.createElement('div');
    confirmationModal.id = 'confirmationModal';
    confirmationModal.className = 'modal';
    confirmationModal.style.display = 'flex';
    confirmationModal.style.opacity = '0';
    confirmationModal.style.justifyContent = 'center';
    confirmationModal.style.alignItems = 'center';
    
    // Crear contenedor para la confirmación
    const confirmationContainer = document.createElement('div');
    confirmationContainer.className = 'registration-container';
    confirmationContainer.style.opacity = '0';
    
    // Crear el contenido
    confirmationContainer.innerHTML = `
        <div class="registration-form confirmation-form">
            <h2>${texts.confirmationTitle}</h2>
            <div class="form-group">
                <label>${texts.country}</label>
                <p>${countrySelect.options[countrySelect.selectedIndex].text}</p>
            </div>
            <div class="form-group">
                <label>${texts.name}</label>
                <p>${formData.name}</p>
            </div>
            <div class="form-group">
                <label>${texts.email}</label>
                <p>${formData.email}</p>
            </div>
            <div class="buttons-container" style="display: flex; justify-content: space-between; margin-top: 15px;">
                <button id="backButton" style="background-color: #8c8c8c; flex: 1; margin-right: 10px;">${texts.back}</button>
                <button id="confirmButton" style="flex: 1; margin-left: 10px;">${texts.confirm}</button>
            </div>
        </div>
    `;
    
    confirmationModal.appendChild(confirmationContainer);
    document.body.appendChild(confirmationModal);
    
    // Animación de entrada
    setTimeout(() => {
        confirmationModal.style.opacity = '1';
        
        setTimeout(() => {
            confirmationContainer.style.opacity = '1';
            
            // Configurar botones
            document.getElementById('backButton').addEventListener('click', () => {
                // Volver al formulario
                confirmationModal.style.opacity = '0';
                
                setTimeout(() => {
                    document.body.removeChild(confirmationModal);
                    secondModal.style.display = 'flex';
                    
                    setTimeout(() => {
                        secondModal.style.opacity = '1';
                        registrationContainer.style.opacity = '1';
                    }, 100);
                }, 500);
            });
            
            document.getElementById('confirmButton').addEventListener('click', () => {
                // Ir al modal final de éxito
                confirmationModal.style.opacity = '0';
                
                setTimeout(() => {
                    document.body.removeChild(confirmationModal);
                    showSuccessModal();
                }, 500);
            });
        }, 500);
    }, 100);
    
    return confirmationModal;
}

// Crear el modal final de éxito
function showSuccessModal() {
    const texts = translations[currentLanguage];
    
    // Crear modal de éxito
    const successModal = document.createElement('div');
    successModal.id = 'successModal';
    successModal.className = 'modal';
    successModal.style.display = 'flex';
    successModal.style.opacity = '0';
    successModal.style.justifyContent = 'center';
    successModal.style.alignItems = 'center';
    
    // Crear contenedor para el mensaje de éxito
    const successContainer = document.createElement('div');
    successContainer.className = 'registration-container';
    successContainer.style.opacity = '0';
    
    // Estilos CSS para la imagen de éxito
    const successImageStyle = `
        width: 200px;
        display: block;
        margin: 0 auto 20px auto;
        border-radius: 15px;
    `;
    
    // Crear el contenido con la imagen2.png
    successContainer.innerHTML = `
        <div class="registration-form success-form" style="text-align: center;">
            <img src="image2.png" alt="Success" class="success-image" style="${successImageStyle}">
            <h2>${texts.successTitle}</h2>
            <p>${texts.successMessage}</p>
        </div>
    `;
    
    successModal.appendChild(successContainer);
    document.body.appendChild(successModal);
    
    // Animación de entrada
    setTimeout(() => {
        successModal.style.opacity = '1';
        
        setTimeout(() => {
            successContainer.style.opacity = '1';
        }, 500);
    }, 100);
}

// Manejar envío del formulario
registrationForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Datos del formulario
    const formData = {
        country: document.getElementById('country').value,
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        password: document.getElementById('password').value,
        confirmPassword: document.getElementById('confirmPassword').value
    };
    
    // Hacer fade out del formulario
    registrationContainer.style.opacity = '0';
    
    setTimeout(() => {
        // Ocultar el segundo modal
        secondModal.style.opacity = '0';
        
        setTimeout(() => {
            secondModal.style.display = 'none';
            
            // Mostrar el modal de confirmación
            createConfirmationModal(formData);
        }, 500);
    }, 500);
});

// Asegurar que la imagen esté correctamente posicionada en todo momento
window.addEventListener('resize', function() {
    if (secondModal.style.display === 'flex' && secondModalImage) {
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
