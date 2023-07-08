export default {
    mounted() {
        this.header = document.querySelector('.header'); // Измените селектор в соответствии с вашим HTML
        this.recolorHeaderWhiteItems = document.querySelectorAll('.bg-white');

        window.addEventListener('scroll', this.handleScroll);
        window.addEventListener('resize', this.handleScroll);

        this.handleScroll(); // Вызов при монтировании компонента
    },
    beforeDestroy() {
        window.removeEventListener('scroll', this.handleScroll);
        window.removeEventListener('resize', this.handleScroll);
    },
    methods: {
        checkHeaderContact() {
            const headerRect = this.header.getBoundingClientRect();
            this.isContact = Array.from(this.recolorHeaderWhiteItems).some((item) => {
                const itemRect = item.getBoundingClientRect();
                return (
                    headerRect.bottom > itemRect.top && headerRect.top < itemRect.bottom
                );
            });

            if (this.isContact) {
                this.header.classList.add('header-dark');
            } else {
                this.header.classList.remove('header-dark');
            }
        },
        hideHeader() {
            if (this.header) {
                this.header.style.opacity = '1';
            }
        },
        showHeader() {
            if (this.header) {
                this.header.style.opacity = '0';
            }
        },
        handleScroll() {
            if (!this.isScrolling) {
                this.showHeader();
                clearTimeout(this.animationFrameId);
                this.animationFrameId = setTimeout(() => {
                    this.hideHeader();
                    this.isScrolling = false;
                }, 500);
            }
            this.isScrolling = true;

            this.checkHeaderContact(); // Проверка контакта блоков при прокрутке или изменении размеров
        },
    },
};
