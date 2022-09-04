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


function setTab() {
  const subscription = document.querySelector('.subscription');
  const titles = subscription.querySelectorAll('h3');
  const tabs = subscription.querySelectorAll('ul');
  const tabsBtn = subscription.querySelectorAll('.subscription__option');
  const nav = subscription.querySelector('.subscription__nav');


  nav.classList.remove('subscription__nav--nojs');

  titles.forEach(function (item) {
    item.classList.add('visually-hidden');
  });

  tabs.forEach(function (item) {
    item.classList.add('visually-hidden');
  });

  tabsBtn.forEach(function (item) {
    item.addEventListener('click', function () {
      let currentBtn = item;
      let tabId = currentBtn.getAttribute('data-tab');
      let currentTab = subscription.querySelector(tabId);

      if (!currentBtn.classList.contains('visually-hidden')) {
        tabsBtn.forEach(function (button) {
          button.classList.remove('subscription__option--active');
        });

        tabs.forEach(function (tab) {
          tab.classList.add('visually-hidden');
        });

        currentBtn.classList.add('subscription__option--active');
        currentTab.classList.remove('visually-hidden');
      }

    });
  });

  tabsBtn[0].click();

}

setTab();
