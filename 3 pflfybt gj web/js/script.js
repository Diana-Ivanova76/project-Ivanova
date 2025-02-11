
 // Получаем элементы
        const loginBtn = document.getElementById('login-btn');
        const loginPopup = document.getElementById('login-popup');
        const cancelBtn = document.getElementById('cancel-btn');
        const closeBtn = document.getElementById('close-btn');

        // Открытие модального окна при нажатии на кнопку
        loginBtn.addEventListener('click', () => {
            loginPopup.classList.add('show'); 
            // Добавляем класс для отображения
        });

        // Закрытие модального окна при нажатии на кнопку "Отмена"
        cancelBtn.addEventListener('click', () => {
            loginPopup.classList.remove('show'); // Убираем класс для скрытия
        });

        // Закрытие модального окна при клике вне формы (по области вокруг окна)
        window.addEventListener('click', (e) => {
            if (e.target === loginPopup) {
                loginPopup.classList.remove('show'); // Убираем класс для скрытия
            }
        });

        // Закрытие модального окна при нажатии на кнопку "×"
        closeBtn.addEventListener('click', () => {
            loginPopup.classList.remove('show'); // Убираем класс для скрытия
        });

   

 
        // Получаем элементы для регистрации
        const registerBtn = document.getElementById('register-btn');
        const registerPopup = document.getElementById('register-popup');
        const cancelRegisterBtn = document.getElementById('cancel-register-btn');
        const closeBtnRg = document.getElementById('close-btn-reg');

        // Открытие модального окна для регистрации при нажатии на кнопку
        registerBtn.addEventListener('click', () => {
            registerPopup.classList.add('show'); // Добавляем класс для отображения
        });

        // Закрытие модального окна для регистрации при нажатии на кнопку "Отмена"
        cancelRegisterBtn.addEventListener('click', () => {
            registerPopup.classList.remove('show'); // Убираем класс для скрытия
        });

        // Закрытие модального окна при клике вне формы (по области вокруг окна)
        window.addEventListener('click', (e) => {
            if (e.target === registerPopup) {
                registerPopup.classList.remove('show'); // Убираем класс для скрытия
            }
        });


        // Закрытие модального окна при нажатии на кнопку "×"
        closeBtnRg.addEventListener('click', () => {
            registerPopup.classList.remove('show'); // Убираем класс для скрытия
        });
