<template>
  <Header />
  <HomeView />
  <Footer />
</template>

<script>
import Header from './components/Header.vue'; // Импортируйте компонент Header
import HomeView from './views/HomeView.vue'; // Импортируйте компонент footer
import Footer from './components/footer.vue'; // Импортируйте компонент footer
import headerColorMixin from '@/mixins/headerColorMixin';

export default {
  mixins: [headerColorMixin],
  components: {
    Header, // Зарегистрируйте компонент Header в качестве дочернего компонента
    HomeView,
    Footer, // Зарегистрируйте компонент Footer в качестве дочернего компонен
  },
}
</script>

<style lang="scss">
@font-face {
  font-family: 'Manrope';
  src: url('./assets/fonts/Manrope-Regular.ttf') format('truetype');
  font-weight: 400;
  font-style: normal;
}

@font-face {
  font-family: 'Manrope';
  src: url('./assets/fonts/Manrope-Medium.ttf') format('truetype');
  font-weight: 500;
  font-style: normal;
}

@font-face {
  font-family: 'Manrope';
  src: url('./assets/fonts/Manrope-SemiBold.ttf') format('truetype');
  font-weight: 600;
  font-style: normal;
}

@font-face {
  font-family: 'Manrope';
  src: url('./assets/fonts/Manrope-Bold.ttf') format('truetype');
  font-weight: 700;
  font-style: normal;
}

* {
  font-style: normal;
  font-weight: 700;
  font-family: 'Manrope', sans-serif;
  box-sizing: border-box;
}

@import "./scss/_fonts.scss";
@import "./scss/_reset.scss";
@import "./scss/accordion.scss";
@import "./scss/app.scss";
@import "./scss/burgerMenu.scss";
@import "./scss/footer.scss";
@import "./scss/header-nav-menu.scss";
@import "./scss/main-content.scss";
@import "./scss/reviews.scss";
@import "./scss/space-item.scss";
@import "./scss/tour-page.scss";
@import "./scss/tours-list.scss";
</style>
