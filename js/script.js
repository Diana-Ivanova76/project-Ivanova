'use strict'

document.addEventListener("DOMContentLoaded", () => {
    console.log('Скрипт отработал корректно');

 // Получаем элементы
 const loginButton = document.querySelector('.login-button');
  if (loginButton){
    console.log('Кнопка входа есть');
  }
  const registerationButton = document.querySelector('.registeration-button');
  if (registerationButton){
    console.log('Кнопка регистрации есть');
 }
  const header = document.querySelector('.header');
  if (header) {
    console.log('Константа header существует');

        /*
         *   Алгоритм
         *
         *   1. Начало.
         *   2. Получаем высоту элемента.
         *   3. Ожидание прокрутки страницы: если страница прокручивается.
         *       3.1. Да: подсчет прокрутки.
         *           3.1.1 Сравнение позиции элемента и рокуртки 
         *               3.1.1.1. Да: добавляем класс модификатора на элемент
         *               3.1.1.2. Нет (если расстояние от верха экрана меньше высоты элемента): удаляется класс модификатора у элемента
         *       3.2. Нет: Конец
         *   4. Конец
         * 
         * Блок-схема:images/сhema.png
         */

        const heightHeader = header.offsetHeight;

        document.addEventListener('scroll', () => {

            console.log('Страница скролится');

            let scrollPageY = this.scrollY;

            if (scrollPageY > heightHeader) {
                header.classList.add('header--background')
            } else {
                header.classList.remove('header--background')

            }
        });
    }
   
});

/* 2. Создание слайдера */
let currentIndex = 0; // Индекс карточек
const slider = document.querySelectorAll(".treners__item");
const prevButton = document.querySelector(".treners__left");
const nextButton = document.querySelector(".treners__right");
const visibleCards = 3; // Количество отображаемых карточек
updateSlider();

prevButton.addEventListener("click", () => {
    if (currentIndex > 0) {
        currentIndex--;
    } else {
        currentIndex = slider.length - visibleCards; // Переход к последним карточкам
    }
    updateSlider();
});

nextButton.addEventListener("click", () => {
    if (currentIndex < slider.length - visibleCards) {
        currentIndex++;
    } else {
        currentIndex = 0; // Переход к началу карточек
    }
    updateSlider();
});

function updateSlider() {
    slider.forEach((item, index) => {
        // Проверяем, нужно ли показывать карточку
        if (index >= currentIndex && index < currentIndex + visibleCards) {
            item.style.display = "block"; // Показываем карточку
        } else {
            item.style.display = "none"; // Скрываем карточку
        }
    });
}

// ЛОГИН

// Находим кнопку "Войти"
const loginButton1 = document.getElementById('login-btn');

// Находим всплывающее окно входа
const loginWindow = document.getElementById('login-popup');

// Кнопка "Отмена" в окне входа
const loginCancelButton = document.getElementById('cancel-btn');

// Кнопка "Закрыть" (крестик) в окне входа
const loginCloseButton = document.getElementById('close-btn');

// Когда пользователь нажимает кнопку "Войти"
loginButton1.onclick = function () {
	// Показываем окно входа, добавляя класс "show"
	loginWindow.classList.add('show');
};

// Когда пользователь нажимает кнопку "Отмена"
loginCancelButton.onclick = function () {
	// Скрываем окно входа, убирая класс "show"
	loginWindow.classList.remove('show');
};

// Когда пользователь нажимает кнопку "×"
loginCloseButton.onclick = function () {
	// Скрываем окно входа, убирая класс "show"
	loginWindow.classList.remove('show');
};

// Если пользователь кликает на затемнённый фон вокруг окна входа
loginWindow.onclick = function (event) {
	// Проверяем, что клик был именно по фону, а не по форме
	if (event.target === loginWindow) {
		// Скрываем окно входа
		loginWindow.classList.remove('show');
	}
};

// РЕГИСТРАЦИЯ

// Находим кнопку "Регистрация"
const registerButton = document.getElementById('register-btn');

// Находим всплывающее окно регистрации
const registerWindow = document.getElementById('register-popup');

// Кнопка "Отмена" в окне регистрации
const registerCancelButton = document.getElementById('cancel-register-btn');

// Кнопка "Закрыть" (крестик) в окне регистрации
const registerCloseButton = document.getElementById('close-btn-reg');

// Когда пользователь нажимает кнопку "Регистрация"
registerButton.onclick = function () {
	// Показываем окно регистрации, добавляя класс "show"
	registerWindow.classList.add('show');
};

// Когда пользователь нажимает кнопку "Отмена"
registerCancelButton.onclick = function () {
	// Скрываем окно регистрации, убирая класс "show"
	registerWindow.classList.remove('show');
};

// Когда пользователь нажимает кнопку "×"
registerCloseButton.onclick = function () {
	// Скрываем окно регистрации
	registerWindow.classList.remove('show');
};

// Если пользователь кликает на затемнённый фон вокруг окна регистрации
registerWindow.onclick = function (event) {
	// Проверяем, что клик был именно по фону, а не по форме
	if (event.target === registerWindow) {
		// Скрываем окно регистрации
		registerWindow.classList.remove('show');
	}
};
