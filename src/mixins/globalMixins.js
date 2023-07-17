import IMask from 'imask';
import Pikaday from 'pikaday';

export default {
    mounted() {
        // Формат даты
        const dateInputArrival = document.querySelector('.arrival-date');
        const dateInputDeparture = document.querySelector('.departure-date-id');

        if (dateInputArrival || dateInputDeparture) {
            function dateFormat(dateInput) {
                const currentDate = new Date(); // Текущая дата

                const maskOptions = {
                    mask: Date,
                    pattern: 'd{.}`m{.}`Y',
                    lazy: false,
                };

                const mask = IMask(dateInput, maskOptions);

                const picker = new Pikaday({
                    field: dateInput,
                    format: 'DD-MM-YYYY',
                    minDate: currentDate, // Ограничение на выбор даты
                    onSelect: function (date) {
                        if (dateInput.value !== date.toLocaleDateString()) {
                            dateInput.value = date.toLocaleDateString();
                        }
                    },
                });
            }

            if (dateInputArrival) {
                dateFormat(dateInputArrival);
            }

            if (dateInputDeparture) {
                dateFormat(dateInputDeparture);
            }
        }

        // Формат телефона
        let userPhone = document.querySelectorAll('.user-telephone');

        if (userPhone) {
            let maskOptions = {
                mask: '+7(000)000-00-00',
                lazy: false,
            };

            userPhone.forEach(function (element) {
                let mask = new IMask(element, maskOptions);

                // Функция для проверки и изменения цвета текста
                function checkInput() {
                    if (element.value.trim() === '') {
                        // Поле пустое, изменяем цвет текста на цвет по умолчанию
                        element.style.color = getComputedStyle(element).color;
                    } else {
                        // Поле не пустое, оставляем цвет текста черным
                        element.style.color = 'black';
                    }
                }

                // Добавляем обработчик события input
                element.addEventListener('input', checkInput);

                // Добавляем обработчик события blur (когда поле теряет фокус)
                element.addEventListener('blur', checkInput);
            });
        }
    },
};
