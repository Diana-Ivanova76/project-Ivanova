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


