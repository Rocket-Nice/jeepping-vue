import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import { Fancybox } from "@fancyapps/ui";
Fancybox.bind("[data-fancybox]", {
    // Your custom options
});
// Variables
const html = document.documentElement;
const $body = document.querySelector('body');
const $header = document.querySelector('.header')
const $main = document.querySelector('.main-content');
const $footer = document.querySelector('.footer-section');

class Accordion {
    /**
     * Создать открывающийся список.
     * @param {HTMLElement} $el - Оболочка открывающегося списка.
     * @param {HTMLElement} $button - Кнопка открытия закрытия.
     * @param {HTMLElement} $body - Тело/список - то, что открывается.

     */
    constructor($el, $button, $body, customHeight = null) {
        this.$el = $el;
        this.$button = $button;
        this.$body = $body;

        this.customHeight = customHeight;
        this.opened = this.$button.classList.contains('active');

        this.initialization();
    }

    initialization() {
        this.$button.addEventListener('click', () => {
            if (this.opened) this.close();
            else this.open();
        })

        if (this.opened) {
            this.$body.style.height = `${(this.customHeight !== null) ? this.customHeight() : this.$body.scrollHeight}px`;
            console.log(`${(this.customHeight !== null) ? this.customHeight() : this.$body.scrollHeight}px`);
        }

        window.addEventListener('resize', () => { this.resizeHandler() });
    }

    /** Открыть список. */
    open() {
        this.opened = true;
        this.$button.classList.add('active');
        this.$body.style.height = `${(this.customHeight !== null) ? this.customHeight() : this.$body.scrollHeight}px`;
    }

    /** Закрыть список. */
    close() {
        this.opened = false;
        this.$button.classList.remove('active');
        this.$body.style.height = 0;
    }

    resizeHandler() {
        if (this.opened) {
            const $body = this.$el.querySelector('.accordion__body-container');
            this.$body.style.height = `${(this.customHeight !== null) ? this.customHeight() : this.$body.scrollHeight}px`;
            window.addEventListener('resize', () => {
                this.resizeHandler();
            });
        }
    }
}

// $main.querySelectorAll('.accordion')?.forEach($accordion => {
//     $accordion.querySelectorAll('.accordion__item').forEach($item => {
//         const $button = $item.querySelector('.accordion__header-button');
//         const $bodyNavBlock = $item.querySelector('.accordion__body');
//         $item.accordion = new Accordion($item, $button, $bodyNavBlock);
//     })
// });

// // Формат даты
// const dateInputArrival = document.querySelector('.arrival-date');
// const dateInputDeparture = document.querySelector('.departure-date-id');

// if (dateInputArrival || dateInputDeparture) {
//     function dateFormat(dateInput) {
//         const currentDate = new Date(); // Текущая дата

//         const maskOptions = {
//             mask: Date,
//             pattern: 'd{.}`m{.}`Y',
//             lazy: false
//         };

//         const mask = IMask(dateInput, maskOptions);

//         const picker = new Pikaday({
//             field: dateInput,
//             format: 'DD-MM-YYYY',
//             minDate: currentDate, // Ограничение на выбор даты
//             onSelect: function (date) {
//                 mask.value = date.toLocaleDateString();
//             }
//         });
//     }

//     dateFormat(dateInputArrival);
//     dateFormat(dateInputDeparture);
// }

// // Формат телефона

// let userPhone = document.querySelectorAll('.user-telephone');

// if (userPhone) {
//     let maskOptions = {
//         mask: '+7(000)000-00-00',
//         lazy: false
//     }

//     userPhone.forEach(function (element) {
//         let mask = new IMask(element, maskOptions);

//         // Функция для проверки и изменения цвета текста
//         function checkInput() {
//             if (element.value.trim() === '') {
//                 // Поле пустое, изменяем цвет текста на цвет по умолчанию
//                 element.style.color = getComputedStyle(element).color;
//             } else {
//                 // Поле не пустое, оставляем цвет текста черным
//                 element.style.color = 'black';
//             }
//         }

//         // Добавляем обработчик события input
//         element.addEventListener('input', checkInput);

//         // Добавляем обработчик события blur (когда поле теряет фокус)
//         element.addEventListener('blur', checkInput);
//     });
// }

createApp(App).use(store).use(router).mount('#app')
