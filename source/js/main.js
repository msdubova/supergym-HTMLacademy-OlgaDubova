import {iosVhFix} from './utils/ios-vh-fix';
import {initModals} from './modules/modals/init-modals';

// ---------------------------------

window.addEventListener('DOMContentLoaded', () => {

  // Utils
  // ---------------------------------

  iosVhFix();

  // Modules
  // ---------------------------------

  // все скрипты должны быть в обработчике 'DOMContentLoaded', но не все в 'load'
  // в load следует добавить скрипты, не участвующие в работе первого экрана
  window.addEventListener('load', () => {
    initModals();
  });
});

// ---------------------------------

// ❗❗❗ обязательно установите плагины eslint, stylelint, editorconfig в редактор кода.

// привязывайте js не на классы, а на дата атрибуты (data-validate)

// вместо модификаторов .block--active используем утилитарные классы
// .is-active || .is-open || .is-invalid и прочие (обязателен нейминг в два слова)
// .select.select--opened ❌ ---> [data-select].is-open ✅

// выносим все в дата атрибуты
// url до иконок пинов карты, настройки автопрокрутки слайдера, url к json и т.д.

// для адаптивного JS используется matchMedia и addListener
// const breakpoint = window.matchMedia(`(min-width:1024px)`);
// const breakpointChecker = () => {
//   if (breakpoint.matches) {
//   } else {
//   }
// };
// breakpoint.addListener(breakpointChecker);
// breakpointChecker();

// используйте .closest(el)

// Функция делает активным таб в разделе Абонементы
function setTab() {
  const subscription = document.querySelector('.subscription');
  const titles = subscription.querySelectorAll('h3');
  const tabs = subscription.querySelectorAll('ul');
  const tabsBtn = subscription.querySelectorAll('.subscription__option');
  const nav = subscription.querySelector('.subscription__nav');
  const buttons = subscription.querySelectorAll('.subscription__button');

  nav.classList.remove('subscription__nav--nojs');

  titles.forEach(function (item) {
    item.classList.add('visually-hidden');
  });

  tabs.forEach(function (item) {
    item.classList.add('visually-hidden');
  });

  buttons.forEach(function (item) {
    item.setAttribute('tabindex', '-1');
  });

  tabsBtn.forEach(function (item) {
    item.addEventListener('click', function () {
      let currentBtn = item;
      let tabId = currentBtn.getAttribute('data-tab');
      let currentTab = subscription.querySelector(tabId);
      let currentButtons = currentTab.querySelectorAll('.subscription__button');

      if (!currentBtn.classList.contains('visually-hidden')) {
        tabsBtn.forEach(function (button) {
          button.classList.remove('subscription__option--active');
        });

        tabs.forEach(function (tab) {
          tab.classList.add('visually-hidden');
        });

        currentBtn.classList.add('subscription__option--active');
        currentTab.classList.remove('visually-hidden');
        currentButtons.forEach(function (currentButton) {
          currentButton.setAttribute('tabindex', '0');
        });
      }

    });
  });

  tabsBtn[0].click();

}

// Функция подключает видео к странице по нажатию кнопки видеоблока
function setupVideo() {
  let video = document.querySelector('.video__container');
  let link = video.querySelector('.video__link');
  let button = video.querySelector('.video__button');

  button.addEventListener('click', (evt) => {
    evt.preventDefault();
    let iframe = createIframe();
    link.remove();
    button.remove();
    video.appendChild(iframe);
  });
}

// Функция создает iframe для подключения к странице в качестве видео
function createIframe() {
  let iframe = document.createElement('iframe');

  iframe.setAttribute('allowfullscreen', '');
  iframe.setAttribute('allow', 'autoplay');
  iframe.setAttribute('src', 'https://www.youtube.com/embed/9TZXsZItgdw?autoplay=1&controls=2');
  iframe.classList.add('video__media');

  return iframe;
}

// Функция иммитирует ховер при клике на карточку тренера в режиме планшет и смартфон
function setHoverClick(item) {
  if (window.innerWidth < 1200) {
    if (item.classList.contains('coaches__item--hover')) {
      item.classList.remove('coaches__item--hover');
    } else {
      item.classList.add('coaches__item--hover');
    }

  }
}

// Функция иммитирует ховер при попадании мышки на карточку тренера в режиме десктоп
function setHoverMouseEnter(item) {
  if (window.innerWidth >= 1200) {
    const items = document.querySelectorAll('.coaches__item');

    for (let y = 0; y < items.length; y++) {
      items[y].classList.remove('coaches__item--hover');
    }

    if (item.classList.contains('coaches__item--hover')) {
      item.classList.remove('coaches__item--hover');
    }
    item.classList.add('coaches__item--hover');
  }
}

// Функция иммитирует закрытие ховера когда курсор покидает область  карточки тренера в режиме десктоп
function setHoverMouseLeave(item) {
  if (window.innerWidth >= 1200) {
    // if (item.classList.contains('coaches__item--hover')) {
    //   item.classList.remove('coaches__item--hover');
    // }
    item.classList.remove('coaches__item--hover');
  }
}

// Функция отслеживает изменения ширины вьюпорта чтоб включить актулаьные Функции иммитации ховера
function checkViewport() {
  window.addEventListener('resize', function () {
    const items = document.querySelectorAll('.coaches__item');

    for (let y = 0; y < items.length; y++) {
      items[y].classList.remove('coaches__item--hover');
    }
  });
}

// Функция запускает другие функции которые иммитируют ховер
function setHover() {
  const items = document.querySelectorAll('.coaches__item');

  for (let i = 0; i < items.length; i++) {
    items[i].addEventListener('click', function () {
      let currentCard = items[i];
      let currentId = currentCard.getAttribute('data-tab');

      for (let y = 0; y < items.length; y++) {
        if (items[y].getAttribute('data-tab') !== currentId) {
          items[y].classList.remove('coaches__item--hover');
        }
      }
      setHoverClick(items[i]);
    });
  }

  for (let i = 0; i < items.length; i++) {
    items[i].addEventListener('mouseenter', function () {
      setHoverMouseEnter(items[i]);
    });
  }

  for (let i = 0; i < items.length; i++) {
    items[i].addEventListener('mouseleave', function () {
      setHoverMouseLeave(items[i]);
    });
  }

  checkViewport();
}

// Функция задает маску ввода номера телефона в форме
function maskPhone() {
  const elems = document.querySelectorAll('input[type="tel"]');

  function mask(event) {
    const keyCode = event.keyCode;
    const template = '+7 (___) ___-__-__';
    const def = template.replace(/\D/g, '');
    const val = event.target.value.replace(/\D/g, '');

    let i = 0;
    let newValue = template.replace(/[_\d]/g, function (a) {
      return i < val.length ? val.charAt(i++) || def.charAt(i) : a;
    });
    i = newValue.indexOf('_');
    if (i !== -1) {
      newValue = newValue.slice(0, i);
    }
    let reg = template.substr(0, event.target.value.length).replace(/_+/g,
        function (a) {
          return '\\d{1,' + a.length + '}';
        }).replace(/[+()]/g, '\\$&');
    reg = new RegExp('^' + reg + '$');
    if (!reg.test(event.target.value) || event.target.value.length < 5 || keyCode > 47 && keyCode < 58) {
      event.target.value = newValue;
    }
    if (event.type === 'blur' && event.target.value.length < 5) {
      event.target.value = ' ';
    }
  }

  for (const elem of elems) {
    elem.addEventListener('input', mask);
    elem.addEventListener('focus', mask);
    elem.addEventListener('blur', mask);
  }
}

// localStorage
if (window.localStorage) {
  let elements = document.querySelectorAll('[name]');

  for (let i = 0, length = elements.length; i < length; i++) {
    (function (element) {
      let name = element.getAttribute('name');

      element.value = localStorage.getItem(name) || '';

      element.onkeyup = function () {
        localStorage.setItem(name, element.value);
      };
    })(elements[i]);
  }
}

// Функция скрывает элементы, которые должны быть отрыты с применением JS
function setJavaScript() {
  const coaches = document.querySelectorAll('.coaches__item');
  for (let i = 0; i < coaches.length; i++) {
    coaches[i].classList.remove('coaches__item--hover');
  }

  const buttons = document.querySelectorAll('.slider__button');

  for (let i = 0; i < buttons.length; i++) {
    buttons[i].classList.remove('visually-hidden');
  }

  const video = document.querySelector('.video__link--nojs');
  video.remove();
}

setJavaScript();
setupVideo();
setTab();
setHover();
maskPhone();
