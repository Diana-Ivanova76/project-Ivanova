'use strict'

document.addEventListener("DOMContentLoaded", () => {
    console.log('Скрипт отработал корректно');

    // Получаем элементы
    const loginButton = document.querySelector('.login-button');
    if (loginButton) {
        console.log('Кнопка входа есть');
    }
    const registerationButton = document.querySelector('.registeration-button');
    if (registerationButton) {
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
        //скролл страницы 
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
    //3.4.1.	Формируем массив из частей определенных элементов блока 
    // const cardsContainer = document.querySelector (".card"); 
    // if (cardsContainer) {
    //     const dataTitleList = [
    //         "Индивидуальные занятия",
    //         "Профессиональные преподаватели",
    //         "Удобство дистанционного обучения",
    //         "Доступная цена",
    //     ];
    //     const titleList= cardsContainer.querySelectorAll(".card__title");
    //     titleList.forEach((item, index) => {
    //         item.textContent = dataTitleList[index];
    //     });
    // }

    /* 4. Появление модального окна*/
    const headerLoginButton = document.querySelector(".login-button");
    const loginStyle = document.querySelector(".login-popup");
    if (headerLoginButton && loginStyle) {
        headerLoginButton.addEventListener("click", () => {
            loginStyle.removeAttribute("hidden");
        });

    }
    // Закрытие модального окна при клике вне его области 
    window.addEventListener("click", (event) => {
        if (event.target === loginStyle) {
            loginStyle.setAttribute("hidden", true);
        }
    });
    // Закрытие модального окна при клике на кнопку закрытия 
    const closeLoginButton = document.querySelector(".close-btn");
    closeLoginButton.addEventListener("click", () => {
        loginStyle.setAttribute("hidden", true);
    });
    
    const headerRegisterationButton = document.querySelector(".registeration-button");
    const registerStyle = document.querySelector(".register-popup");
    if (headerRegisterationButton && registerStyle) {
        headerRegisterationButton.addEventListener("click", () => {
            registerStyle.removeAttribute("hidden");
        });

    }
    // Закрытие модального окна при клике вне его области 
    window.addEventListener("click", (event) => {
        if (event.target === registerStyle) {
            registerStyle.setAttribute("hidden", true);
        }
    }); 
    // Закрытие модального окна при клике на кнопку закрытия 
    const closeRegisterationButton = document.querySelector(".close-btn-reg");
    closeRegisterationButton.addEventListener("click", () => {
        registerStyle.setAttribute("hidden", true);
    });

    //3.5.1.
// const cardsContainer = document.querySelector('.card');
// if (cardsContainer) {
// const cardList = cardsContainer.querySelector('.card__list');

//   /* Моковые данные */
//        const cardsData = {
//            card1: {
//            image: 'images/e-learning.png',
//                  imageAlt: 'Иконка для индивидуальных занятий',
//                  imageWidth: 22,
//                  imageHeight: 24,
//                  title: 'Индивидуальные занятия',
//                  description: 'Проводятся с использованием специально разработанных программ обучения, гибкий график занятий.',
//              },
//             card2: {
//                 image: 'images/messaging-.png',
//                 imageAlt: 'Иконка для профессиональных преподавателей',
//                 imageWidth: 24,
//                 imageHeight: 24,
//                 title: 'Профессиональные преподаватели',
//                 description: 'Квалифицированные специалисты, преподаватели проходят тщательный отбор и постоянные проверки квалификации.',
//             },
//             card3: {
//                 image: 'images/survey--v1.png',
//                 imageAlt: 'Иконка для удобства дистанционного обучения',
//                 imageWidth: 24,
//                 imageHeight: 23,
//                 title: 'Удобство дистанционного обучения',
//                 description: 'В любое удобное время, занимайтесь в комфортной обстановке и не тратьте время на дорогу.',
//              },
//             card4: {
//                 image: 'images/cheque.png',
//                 imageAlt: 'Иконка для стоимости занятий',
//                 imageWidth: 24,
//                 imageHeight: 23,
//                 title: 'Доступная цена',
//                 description: 'Подберите для себя удобный тарифный план и способ оплаты.',
//             }
//         }

//         const createCard = (image, imageAlt, imageWidth, imageHeight, title, description) => {

//             // Шаблонные строки подстановки (второй вариант вывода разметки - рекомендуемый)

//             const card = `
//             <li class="card__item">
//                     <img class="card__icon" src="${image}" alt="${imageAlt}"
//                         width="${imageWidth}" height="${imageHeight}">
//                     <h3 class="card__title">${title}</h3>
//                     <p class="card__description">${description}</p>
//                 </li>
//             `;
//             return card;
//         }


//         for (const cardKey in cardsData) {
//             const card = cardsData[cardKey];
 
//             const cardElement = createCard(card.image, card.imageAlt, card.imageWidth, card.imageHeight, card.title, card.description);
// cardList.insertAdjacentHTML('beforeend', cardElement); // Второй вариант
//         }
//     }

    //3.6.1.
    const cardsContainer = document.querySelector('.card');
    if (cardsContainer) {
        const cardList = cardsContainer.querySelector('.card__list');

        // Пример URL для получения данных с сервера
        const apiUrl = 'data.json';

        // Функция для создания карточки
        const createCard = (image, imageAlt, imageWidth, imageHeight, title, description) => {
            // Шаблонные строки и подстановки
            const card = `
                <li class="card__item">
                    <img class="card__icon">
                        <img src="${image}" alt="${imageAlt}" width="${imageWidth}" height="${imageHeight}">
                    </img>
                    <h3 class="card__title">${title}</h3>
                    <p class="card__description">${description}</p>
                </li>
            `;

            return card;
        }

        // Загрузка данных с сервера
        fetch(apiUrl)
            .then(response => response.json())
            .then(data => {
                console.log(data); // Данные
                console.log(typeof (data)); // Тип полученных данных

                // for (const item in data) {
                //     const card = data[item];

                //     const cardElement = createCard(card.image, card.imageAlt, card.imageWidth, card.imageHeight, card.title, card.description);
                //     cardList.insertAdjacentHTML('beforeend', cardElement);
                // }

                data.forEach(item => {
                    const cardElement = createCard (item.image, item.imageAlt, item.imageWidth, item.imageHeight, item.title, item.description);
                    cardList.insertAdjacentHTML('beforeend', cardElement);
                });
            })
            .catch(error => {
                console.error('Ошибка при загрузке данных:', error);
            });
    }



//3.6.2.
    const preloader = document.querySelector(".preloader");
    const content = document.querySelector(".content");
    if (preloader && content) {
        setTimeout(() => {
            // Скрываем прелоадер
            preloader.style.opacity = "0";
            preloader.style.visibility = "hidden";

            // Показываем контент
            content.style.display = "block";

            // Удаляем элемент из DOM
            preloader.remove();
        }, 3000); // Задержка 3 секунды
    }


    const swiper = new Swiper('.swiper', {
        // Optional parameters
         slidesPerView: 4,
         spaceBetween: 50,
        loop: true,
      
        // If we need pagination
        pagination: {
          el: '.swiper-pagination',
        },
      
        // Navigation arrows
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      
        // And if we need scrollbar
        scrollbar: {
          el: '.swiper-scrollbar',
        },
      });

})

