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
//3.4.1.	Формируем массив из частей определенных элементов блока 
const cardsContainer = document.querySelector (".card"); 
if (cardsContainer) {
    const dataTitleList = [
        "Индивидуальные занятия",
        "Профессиональные преподаватели",
        "Удобство дистанционного обучения",
        "Доступная цена",
    ];
    const titleList= cardsContainer.querySelectorAll(".card__title");
    titleList.forEach((item, index) => {
        item.textContent = dataTitleList[index];
    });
}

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
const registerStyle= document.querySelector(".register-popup");
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
const CardsContainer = document.querySelector (".card"); 
if (CardsContainer) {
    const cardList= cardsContainer.querySelectorAll(".card__list");
    const cardsContainerData = {
        card1: {
            description: 'Проводятся с использованием специально разработанных программ обучения, гибкий график занятий.',
        },
        card2: {
            description: 'Квалифицированные специалисты, преподаватели проходят тщательный отбор и постоянные проверки квалификации.',
        },
        card3: {
            description: 'В любое удобное время, занимайтесь в комфортной обстановке и не тратьте время на дорогу.',
        },
        card4: {
            description: 'Подберите для себя удобный тарифный план и способ оплаты.',
        }
    }
    const createCard = (description) => {
        const сard = `
            <li class="card__item">
                <p class="card__description">${description}</p>
            </li>
    `;
        return card;
    }
    for (const cardKey in cardsContainerData) {
        const card = cardsContainerData [cardKey];
        const cardElement = createCard (card.description);
        cardList.insertAdjacentHTML('beforeend', cardElement);
    }
}

//3.5.2.
const headerContainer = document.querySelector('.header__ container');
if (headerContainer){
    const headerList = headerMenu.querySelector('.header__list');
    const  ContainerData = {
        link1: {
            link: '#',
            title: 'О нас/Контакты',
        },
        link2: {
            link: '#',
            title: 'Услуги',
        }
    }
    const createLink = (UrlLink, title) =>{
        const link = `
            <li class="header__item"><a href="${UrlLink}"
class="header__link">${title}</a></li>
            `;
            return link;
        }
        for (const linkItem in ContainerData) {
            const link = ContainerData [linkItem];
            const linkIndex = createLink(link.UrlLink, link.title);
            headerList.insertAdjacentHTML('beforeend', linkIndex);
        }
}

//3.6.2.
const preloader = document.querySelector(".preloader");
const content = document.querySelector(".content");
if (preloader && content) {
    setTimeout(() => {
        // Скрываем предзагрузчик
        preloader.style.opacity = "0";
        preloader.style.visibility = "hidden";
        content.style.display = "block";
        preloader.remove();
}, 3000);
}
