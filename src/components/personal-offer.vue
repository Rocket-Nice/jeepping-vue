<!-- <script src="https://unpkg.com/imask"></script>
<script src="https://cdn.jsdelivr.net/npm/pikaday/pikaday.js"></script> -->
<template>
    <form class="personal-offer__form form-container" method="POST">
        <div class="personal-offer__ personal-offer__first-step active-offer-step">
            <div class="first-step__container-item">
                <div class="date-tours__title">
                    <span class="date-title">Укажите даты тура</span>
                    <p class="date-subtitle">Хотя бы примерные, это поможет более точное сориентировать по стоимости</p>
                </div>
                <div class="date-inputs">
                    <div class="date-arrival">
                        <label for="date">Дата заезда</label>
                        <input ref="arrivalDate" type="text" class="arrival-date" name="date" required>
                    </div>
                    <div class="departure-date">
                        <label for="date">Дата выезда</label>
                        <input ref="departureDate" type="text" class="departure-date-id" name="date" required>
                    </div>
                </div>
            </div>
            <div class="first-step__container-item">
                <div class="date-tours__title">
                    <span class="date-title">Состав вашей команды</span>
                    <p class="date-subtitle">Учтите всех от мала до велика</p>
                </div>
                <div class="date-inputs">
                    <div class="first-step__count-container adults">
                        <span>Взрослые</span>
                        <div class="first-step__count-btn-number">
                            <button @click="decreaseAdults" type="button" class="first-step__button-minus-adults">
                                <svg width="24" height="25" viewBox="0 0 24 25" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path d="M6 12.5H18" stroke="black" stroke-width="1.5" stroke-linecap="round"
                                        stroke-linejoin="round" />
                                </svg>
                            </button>
                            <strong class="first-step__count first-step__count-adults">{{ countAdults }}</strong>
                            <button @click="countAdults++" type="button" class="first-step__button-plus-adults">
                                <svg width="24" height="25" viewBox="0 0 24 25" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path d="M6 12.5H12M12 12.5H18M12 12.5V6.5M12 12.5V18.5" stroke="black"
                                        stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </button>
                        </div>
                    </div>
                    <div class="first-step__count-container children">
                        <span>Дети</span>
                        <div class="first-step__count-btn-number">
                            <button @click="decreaseChildren" type="button" class="first-step__button-minus-children">
                                <svg width="24" height="25" viewBox="0 0 24 25" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path d="M6 12.5H18" stroke="black" stroke-width="1.5" stroke-linecap="round"
                                        stroke-linejoin="round" />
                                </svg>
                            </button>
                            <strong class="first-step__count first-step__count-children">{{ countChildren }}</strong>
                            <button @click="countChildren++" type="button" class="first-step__button-plus-children">
                                <svg width="24" height="25" viewBox="0 0 24 25" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path d="M6 12.5H12M12 12.5H18M12 12.5V6.5M12 12.5V18.5" stroke="black"
                                        stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="first-step__container-item">
                <div class="date-tours__title">
                    <span class="date-title">Транспорт</span>
                    <p class="date-subtitle">Базовая вместимость 1 машины – 4 места</p>
                </div>
                <div class="date-inputs">
                    <div class="first-step__count-container transport">
                        <span>Транспорт</span>
                        <div class="first-step__count-btn-number">
                            <button @click="decreaseTransport" type="button" class="first-step__button-minus-transport">
                                <svg width="24" height="25" viewBox="0 0 24 25" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path d="M6 12.5H18" stroke="black" stroke-width="1.5" stroke-linecap="round"
                                        stroke-linejoin="round" />
                                </svg>
                            </button>
                            <strong class="first-step__count first-step__count-transport">{{ countTransport }}</strong>
                            <button @click="countTransport++" type="button" class="first-step__button-plus-transport">
                                <svg width="24" height="25" viewBox="0 0 24 25" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path d="M6 12.5H12M12 12.5H18M12 12.5V6.5M12 12.5V18.5" stroke="black"
                                        stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="personal-offer__ personal-offer__second-step">
            <div class="second-step__checkbox-container swiper">
                <div class="second-step__select-location">
                    <div class="date-tours__title">
                        <span class="date-title">Выберите локации</span>
                        <p class="date-subtitle">Хотя бы примерные, это поможет более точное сориентировать по стоимости
                        </p>
                    </div>
                    <div class="pagination">
                        <button disabled type="button" class="pagination__back">
                            <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M3 12.5H21M21 12.5L12.5 4M21 12.5L12.5 21" stroke="url(#paint0_linear_108_12775)"
                                    stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                <defs>
                                    <linearGradient id="paint0_linear_108_12775" x1="3" y1="12.6667" x2="21" y2="12.6667"
                                        gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#2057E5" />
                                        <stop offset="1" stop-color="#0075FF" />
                                    </linearGradient>
                                </defs>
                            </svg>
                        </button>
                        <ul class="pagination__personal-offer">
                            <li class="pagination__item active-item" data-index="1">1</li>
                            <span class="pagination__slash">/</span>
                            <li class="pagination__item" data-index="2">2</li>
                        </ul>
                        <button type="button" class="pagination__next" disabled>
                            <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M3 12.5H21M21 12.5L12.5 4M21 12.5L12.5 21" stroke="url(#paint0_linear_108_12775)"
                                    stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                <defs>
                                    <linearGradient id="paint0_linear_108_12775" x1="3" y1="12.6667" x2="21" y2="12.6667"
                                        gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#2057E5" />
                                        <stop offset="1" stop-color="#0075FF" />
                                    </linearGradient>
                                </defs>
                            </svg>
                        </button>
                    </div>
                </div>
                <div class="select-location__checkbox-list swiper-wrapper">
                    <div class="checkbox-list__item swiper-slide">
                        <div class="location__checkbox this-checkbox">
                            <input class="custom-checkbox checkbox-location" id="1" type="checkbox">
                            <label class="personal-account-info__not-checked" for="1">Хачляндия</label>
                        </div>
                    </div> <!-- Закрываем checkbox-list__item -->
                </div>
            </div>
        </div>
        <div class="personal-offer__ personal-offer__third-step">
            <div class="third-step__tour-details">
                <div class="tour-details__left">
                    <h3 class="left__title">Обязательно проверьте
                        все детали вашего
                        тура</h3>
                    <p class="left__paragraph">Наша несомненная сила - это умение сращивать классные места в единый маршрут,
                        тем самым экономя ваше
                        время и деньги. Мы показали и погрузили в эти красоты сотни путешественников, но все еще не вас.</p>
                    <span class="left__location-title">Локации</span>
                    <ul class="left__location-items">
                    </ul>
                    <div class="have-a-nice-trip__container">
                        <div class="have-a-nice-trip">
                            <div class="have-a-nice-trip__title">
                                <div>СЧАСТЛИВОГО ПУТЕШЕСТВИЯ!</div>
                                <div>HAVE A NICE TRIP! </div>
                                <div>СЧАСТЛИВОГО ПУТЕШЕСТВИЯ!</div>
                            </div>
                            <div>RSO</div>
                        </div>
                    </div>
                    <div class="left__border-circle"></div>
                </div>
                <div class="tour-details__right">
                    <div class="right__container-info">
                        <div class="left__location-title">Дата поездки</div>
                        <div class="container-info__date-to-date">
                            <span class="arrival-date-recount"></span>
                            <span class="minus">-</span>
                            <span class="departure-date-result"></span>
                        </div>
                    </div>
                    <div class="right__container-info">
                        <div class="left__location-title">Количество людей</div>
                        <div class="container-info__date-to-date">
                            <span ref="rightAdult" class="right__adult">10 взрослых</span>
                            <span ref="rightChild" class="right__child">12 детей</span>
                        </div>
                    </div>
                    <div class="right__container-info">
                        <div class="left__location-title">Транспорт</div>
                        <div class="container-info__date-to-date">
                            <span ref="rightTransport" class="right__transport">6</span>
                        </div>
                    </div>
                    <div class="right__logo-shtrih">
                        <svg width="127" height="36" viewBox="0 0 127 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g filter="url(#filter0_di_108_12918)">
                                <path d="M108.404 1.39769V0.137477H113.911V1.39769H111.931V6.14067H110.407V1.39769H108.404Z"
                                    fill="#C9CDD6" />
                                <path
                                    d="M118.75 0.137477H120.366L118.398 6.62184C118.193 7.36269 117.912 7.8706 117.556 8.14555C117.199 8.42814 116.672 8.56944 115.974 8.56944C115.709 8.56944 115.436 8.55417 115.155 8.52362V7.35506C115.489 7.37033 115.728 7.37797 115.872 7.37797C116.198 7.37797 116.445 7.31305 116.612 7.18321C116.778 7.06101 116.915 6.81278 117.021 6.43854L117.101 6.14067H116.202L114.12 0.137477H115.758L117.419 5.51056L118.75 0.137477Z"
                                    fill="#C9CDD6" />
                                <path
                                    d="M121.015 8.43196V0.137477H122.437V1.2373C122.862 0.412433 123.533 0 124.451 0C125.202 0 125.813 0.282593 126.283 0.847779C126.761 1.40533 127 2.16909 127 3.13907C127 4.10905 126.761 4.87664 126.283 5.44182C125.813 5.99937 125.206 6.27815 124.462 6.27815C123.613 6.27815 122.972 5.91536 122.54 5.18978V8.43196H121.015ZM122.881 1.72993C122.608 2.0889 122.472 2.55861 122.472 3.13907C122.472 3.71953 122.608 4.18925 122.881 4.54822C123.154 4.90719 123.522 5.08667 123.985 5.08667C124.447 5.08667 124.815 4.90719 125.088 4.54822C125.361 4.18925 125.498 3.71953 125.498 3.13907C125.498 2.55861 125.361 2.0889 125.088 1.72993C124.815 1.37096 124.447 1.19147 123.985 1.19147C123.522 1.19147 123.154 1.37096 122.881 1.72993Z"
                                    fill="#C9CDD6" />
                                <path
                                    d="M6.39297 27.9941C4.74992 27.9941 3.38071 27.5757 2.28534 26.739C1.19993 25.9023 0.438147 24.7736 0 23.3531L3.55497 22.5213C3.66451 23.1148 3.98316 23.6256 4.51093 24.0537C5.03869 24.4818 5.62123 24.6958 6.25854 24.6958C6.67677 24.6958 7.11989 24.5888 7.58792 24.3747C8.05594 24.151 8.40446 23.7958 8.63349 23.3094C8.77291 22.998 8.85257 22.6283 8.87249 22.2002C8.90236 21.7624 8.91729 21.2564 8.91729 20.6824V6.54064H12.5619V20.6824C12.5619 21.3343 12.5569 21.9083 12.5469 22.4045C12.5469 22.891 12.4972 23.3531 12.3976 23.791C12.308 24.2191 12.1237 24.6618 11.8449 25.119C11.2574 26.1114 10.4906 26.8412 9.54464 27.3082C8.59864 27.7655 7.54808 27.9941 6.39297 27.9941Z"
                                    fill="#C9CDD6" />
                                <path
                                    d="M23.8236 27.9941C22.1905 27.9941 20.7565 27.6487 19.5218 26.9579C18.287 26.2671 17.3211 25.3088 16.624 24.0829C15.9369 22.8569 15.5934 21.4462 15.5934 19.8505C15.5934 18.1284 15.9319 16.635 16.6091 15.3701C17.2862 14.0956 18.2272 13.108 19.4321 12.4075C20.637 11.707 22.0311 11.3567 23.6144 11.3567C25.2874 11.3567 26.7064 11.741 27.8714 12.5097C29.0465 13.2686 29.9178 14.3437 30.4854 15.735C31.053 17.1263 31.2671 18.7657 31.1277 20.6532H27.5578V19.3689C27.5478 17.6565 27.2391 16.4063 26.6317 15.6182C26.0243 14.8301 25.0683 14.4361 23.7638 14.4361C22.29 14.4361 21.1947 14.8836 20.4777 15.7788C19.7607 16.6641 19.4023 17.963 19.4023 19.6754C19.4023 21.271 19.7607 22.5067 20.4777 23.3823C21.1947 24.258 22.2403 24.6958 23.6144 24.6958C24.5007 24.6958 25.2625 24.5061 25.8998 24.1266C26.547 23.7375 27.0449 23.178 27.3935 22.4483L30.9484 23.4991C30.331 24.9196 29.3751 26.0239 28.0806 26.812C26.796 27.6001 25.377 27.9941 23.8236 27.9941ZM18.2671 20.6532V17.9971H29.3651V20.6532H18.2671Z"
                                    fill="#C9CDD6" />
                                <path
                                    d="M41.2269 27.9941C39.5938 27.9941 38.1598 27.6487 36.925 26.9579C35.6903 26.2671 34.7243 25.3088 34.0273 24.0829C33.3402 22.8569 32.9967 21.4462 32.9967 19.8505C32.9967 18.1284 33.3352 16.635 34.0124 15.3701C34.6895 14.0956 35.6305 13.108 36.8354 12.4075C38.0403 11.707 39.4344 11.3567 41.0177 11.3567C42.6907 11.3567 44.1097 11.741 45.2747 12.5097C46.4498 13.2686 47.3211 14.3437 47.8887 15.735C48.4563 17.1263 48.6704 18.7657 48.531 20.6532H44.9611V19.3689C44.9511 17.6565 44.6424 16.4063 44.035 15.6182C43.4275 14.8301 42.4716 14.4361 41.1671 14.4361C39.6933 14.4361 38.598 14.8836 37.881 15.7788C37.164 16.6641 36.8055 17.963 36.8055 19.6754C36.8055 21.271 37.164 22.5067 37.881 23.3823C38.598 24.258 39.6435 24.6958 41.0177 24.6958C41.904 24.6958 42.6658 24.5061 43.3031 24.1266C43.9503 23.7375 44.4482 23.178 44.7968 22.4483L48.3517 23.4991C47.7343 24.9196 46.7784 26.0239 45.4839 26.812C44.1993 27.6001 42.7803 27.9941 41.2269 27.9941ZM35.6703 20.6532V17.9971H46.7684V20.6532H35.6703Z"
                                    fill="#C9CDD6" />
                                <path
                                    d="M58.6108 27.9941C57.0374 27.9941 55.718 27.6292 54.6525 26.8995C53.587 26.1698 52.7854 25.1774 52.2477 23.9223C51.7099 22.6575 51.4411 21.2419 51.4411 19.6754C51.4411 18.0895 51.7099 16.669 52.2477 15.4139C52.7854 14.1588 53.5721 13.1713 54.6077 12.4513C55.6533 11.7216 56.9428 11.3567 58.4763 11.3567C59.9999 11.3567 61.3193 11.7216 62.4346 12.4513C63.5598 13.1713 64.4312 14.1588 65.0485 15.4139C65.6659 16.6593 65.9746 18.0798 65.9746 19.6754C65.9746 21.2516 65.6709 22.6672 65.0635 23.9223C64.4561 25.1774 63.5997 26.1698 62.4943 26.8995C61.389 27.6292 60.0945 27.9941 58.6108 27.9941ZM50.8287 34.5615V11.7945H54.0102V22.8569H54.4583V34.5615H50.8287ZM58.0581 24.8418C58.9941 24.8418 59.7659 24.6131 60.3733 24.1558C60.9807 23.6985 61.4288 23.0807 61.7176 22.3024C62.0164 21.5143 62.1657 20.6386 62.1657 19.6754C62.1657 18.7219 62.0164 17.856 61.7176 17.0776C61.4189 16.2896 60.9558 15.6669 60.3285 15.2096C59.7012 14.7426 58.9045 14.5091 57.9386 14.5091C57.0225 14.5091 56.2756 14.728 55.6981 15.1658C55.1205 15.5939 54.6923 16.1971 54.4135 16.9755C54.1446 17.7441 54.0102 18.6441 54.0102 19.6754C54.0102 20.697 54.1446 21.597 54.4135 22.3753C54.6923 23.1537 55.1255 23.7618 55.713 24.1996C56.3105 24.6277 57.0922 24.8418 58.0581 24.8418Z"
                                    fill="#C9CDD6" />
                                <path
                                    d="M76.4517 27.9941C74.8783 27.9941 73.5589 27.6292 72.4934 26.8995C71.4279 26.1698 70.6263 25.1774 70.0886 23.9223C69.5508 22.6575 69.282 21.2419 69.282 19.6754C69.282 18.0895 69.5508 16.669 70.0886 15.4139C70.6263 14.1588 71.413 13.1713 72.4486 12.4513C73.4942 11.7216 74.7837 11.3567 76.3172 11.3567C77.8408 11.3567 79.1602 11.7216 80.2755 12.4513C81.4007 13.1713 82.272 14.1588 82.8894 15.4139C83.5068 16.6593 83.8155 18.0798 83.8155 19.6754C83.8155 21.2516 83.5118 22.6672 82.9044 23.9223C82.2969 25.1774 81.4406 26.1698 80.3352 26.8995C79.2299 27.6292 77.9354 27.9941 76.4517 27.9941ZM68.6696 34.5615V11.7945H71.8511V22.8569H72.2992V34.5615H68.6696ZM75.899 24.8418C76.835 24.8418 77.6068 24.6131 78.2142 24.1558C78.8216 23.6985 79.2697 23.0807 79.5585 22.3024C79.8573 21.5143 80.0066 20.6386 80.0066 19.6754C80.0066 18.7219 79.8573 17.856 79.5585 17.0776C79.2598 16.2896 78.7967 15.6669 78.1694 15.2096C77.5421 14.7426 76.7454 14.5091 75.7795 14.5091C74.8634 14.5091 74.1165 14.728 73.539 15.1658C72.9614 15.5939 72.5332 16.1971 72.2544 16.9755C71.9855 17.7441 71.8511 18.6441 71.8511 19.6754C71.8511 20.697 71.9855 21.597 72.2544 22.3753C72.5332 23.1537 72.9664 23.7618 73.5539 24.1996C74.1514 24.6277 74.9331 24.8418 75.899 24.8418Z"
                                    fill="#C9CDD6" />
                                <path
                                    d="M86.8391 9.4011V6.17578H90.4388V9.4011H86.8391ZM86.8391 27.5563V11.7945H90.4388V27.5563H86.8391Z"
                                    fill="#C9CDD6" />
                                <path
                                    d="M105.503 27.5563V19.9673C105.503 19.4711 105.468 18.9214 105.399 18.3181C105.329 17.7149 105.165 17.136 104.906 16.5814C104.657 16.0171 104.279 15.555 103.771 15.195C103.273 14.835 102.596 14.655 101.739 14.655C101.281 14.655 100.828 14.728 100.38 14.8739C99.9319 15.0199 99.5236 15.2728 99.1552 15.6328C98.7967 15.9831 98.5079 16.4696 98.2888 17.0922C98.0698 17.7052 97.9602 18.4933 97.9602 19.4565L95.8243 18.5662C95.8243 17.2236 96.0882 16.0074 96.6159 14.9177C97.1536 13.828 97.9403 12.9621 98.9759 12.3199C100.012 11.6681 101.286 11.3421 102.8 11.3421C103.995 11.3421 104.981 11.5367 105.757 11.9259C106.534 12.3151 107.151 12.8113 107.609 13.4145C108.068 14.0177 108.406 14.6599 108.625 15.3409C108.844 16.022 108.984 16.669 109.043 17.282C109.113 17.8852 109.148 18.3765 109.148 18.756V27.5563H105.503ZM94.3157 27.5563V11.7945H97.5271V16.6836H97.9602V27.5563H94.3157Z"
                                    fill="#C9CDD6" />
                                <path
                                    d="M119.259 34.9993C118.363 34.9993 117.502 34.8631 116.675 34.5907C115.859 34.3182 115.122 33.9242 114.465 33.4085C113.808 32.9026 113.27 32.2897 112.852 31.5697L116.168 29.9643C116.476 30.5384 116.909 30.9616 117.467 31.234C118.035 31.5162 118.637 31.6572 119.274 31.6572C120.021 31.6572 120.688 31.5259 121.276 31.2632C121.863 31.0102 122.317 30.6308 122.635 30.1248C122.964 29.6286 123.118 29.006 123.098 28.2568V23.7764H123.546V11.7945H126.698V28.3152C126.698 28.7141 126.678 29.0935 126.638 29.4535C126.608 29.8232 126.554 30.1832 126.474 30.5335C126.235 31.5551 125.777 32.3918 125.1 33.0437C124.423 33.7053 123.581 34.1966 122.575 34.5177C121.58 34.8388 120.474 34.9993 119.259 34.9993ZM118.946 27.9941C117.462 27.9941 116.168 27.6292 115.062 26.8995C113.957 26.1698 113.101 25.1774 112.493 23.9223C111.886 22.6672 111.582 21.2516 111.582 19.6754C111.582 18.0798 111.886 16.6593 112.493 15.4139C113.11 14.1588 113.982 13.1713 115.107 12.4513C116.232 11.7216 117.557 11.3567 119.08 11.3567C120.614 11.3567 121.898 11.7216 122.934 12.4513C123.98 13.1713 124.771 14.1588 125.309 15.4139C125.847 16.669 126.116 18.0895 126.116 19.6754C126.116 21.2419 125.847 22.6575 125.309 23.9223C124.771 25.1774 123.97 26.1698 122.904 26.8995C121.839 27.6292 120.519 27.9941 118.946 27.9941ZM119.498 24.8418C120.464 24.8418 121.241 24.6277 121.829 24.1996C122.426 23.7618 122.859 23.1537 123.128 22.3753C123.407 21.597 123.546 20.697 123.546 19.6754C123.546 18.6441 123.407 17.7441 123.128 16.9755C122.859 16.1971 122.436 15.5939 121.858 15.1658C121.281 14.728 120.534 14.5091 119.618 14.5091C118.652 14.5091 117.855 14.7426 117.228 15.2096C116.601 15.6669 116.138 16.2896 115.839 17.0776C115.54 17.856 115.391 18.7219 115.391 19.6754C115.391 20.6386 115.535 21.5143 115.824 22.3024C116.123 23.0807 116.576 23.6985 117.183 24.1558C117.791 24.6131 118.562 24.8418 119.498 24.8418Z"
                                    fill="#C9CDD6" />
                            </g>
                            <defs>
                                <filter id="filter0_di_108_12918" x="0" y="0" width="127" height="36"
                                    filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                    <feColorMatrix in="SourceAlpha" type="matrix"
                                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                    <feOffset dy="1" />
                                    <feComposite in2="hardAlpha" operator="out" />
                                    <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" />
                                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_108_12918" />
                                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_108_12918"
                                        result="shape" />
                                    <feColorMatrix in="SourceAlpha" type="matrix"
                                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                    <feOffset dy="0.5" />
                                    <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                                    <feColorMatrix type="matrix"
                                        values="0 0 0 0 0.551354 0 0 0 0 0.587014 0 0 0 0 0.658333 0 0 0 1 0" />
                                    <feBlend mode="normal" in2="shape" result="effect2_innerShadow_108_12918" />
                                </filter>
                            </defs>
                        </svg>
                        <!-- Бар код -->
                        <svg class="logo-bar" width="130" height="43" viewBox="0 0 130 43" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <rect width="13" height="43" transform="matrix(-1 0 0 1 130 0)" fill="#101113" />
                            <rect x="5" width="13" height="43" fill="#101113" />
                            <rect width="2.45283" height="43" transform="matrix(-1 0 0 1 110.377 0)" fill="#101113" />
                            <rect x="19.623" width="2.45283" height="43" fill="#101113" />
                            <rect width="2.45283" height="43" transform="matrix(-1 0 0 1 51.5098 0)" fill="#101113" />
                            <rect width="2.45283" height="43" transform="matrix(1 0 0 -1 50.283 43)" fill="#101113" />
                            <rect x="80.9434" y="43" width="2.45283" height="43" transform="rotate(180 80.9434 43)"
                                fill="#101113" />
                            <rect x="91.9805" y="43" width="2.45283" height="43" transform="rotate(180 91.9805 43)"
                                fill="#101113" />
                            <rect width="1.22642" height="43" transform="matrix(-1 0 0 1 99.3398 0)" fill="#101113" />
                            <rect width="1.22642" height="43" transform="matrix(-1 0 0 1 113.227 0)" fill="#101113" />
                            <rect x="30.6604" width="1.22642" height="43" fill="#101113" />
                            <rect width="1.22642" height="43" transform="matrix(-1 0 0 1 40.4727 0)" fill="#101113" />
                            <rect width="1.22642" height="43" transform="matrix(1 0 0 -1 61.3203 43)" fill="#101113" />
                            <rect x="69.9062" y="43" width="1.22642" height="43" transform="rotate(180 69.9062 43)"
                                fill="#101113" />
                            <rect x="80.9434" y="43" width="1.22642" height="43" transform="rotate(180 80.9434 43)"
                                fill="#101113" />
                            <rect width="1.22642" height="43" transform="matrix(-1 0 0 1 101.793 0)" fill="#101113" />
                            <rect width="1.22642" height="43" transform="matrix(-1 0 0 1 115.68 0)" fill="#101113" />
                            <rect x="28.207" width="1.22642" height="43" fill="#101113" />
                            <rect width="1.22642" height="43" transform="matrix(-1 0 0 1 42.9238 0)" fill="#101113" />
                            <rect width="1.22642" height="43" transform="matrix(1 0 0 -1 58.8672 43)" fill="#101113" />
                            <rect x="72.3594" y="43" width="1.22642" height="43" transform="rotate(180 72.3594 43)"
                                fill="#101113" />
                            <rect x="83.3965" y="43" width="1.22642" height="43" transform="rotate(180 83.3965 43)"
                                fill="#101113" />
                            <rect width="2.45283" height="43" transform="matrix(-1 0 0 1 106.697 0)" fill="#101113" />
                            <rect x="23.3027" width="2.45283" height="43" fill="#101113" />
                            <rect width="2.45283" height="43" transform="matrix(-1 0 0 1 47.8301 0)" fill="#101113" />
                            <rect width="2.45283" height="43" transform="matrix(1 0 0 -1 53.9629 43)" fill="#101113" />
                            <rect x="77.2637" y="43" width="2.45283" height="43" transform="rotate(180 77.2637 43)"
                                fill="#101113" />
                            <rect x="88.3027" y="43" width="2.45283" height="43" transform="rotate(180 88.3027 43)"
                                fill="#101113" />
                            <rect width="1.22642" height="43" transform="matrix(-1 0 0 1 95.6604 0)" fill="#101113" />
                            <rect x="34.3396" width="1.22642" height="43" fill="#101113" />
                            <rect width="1.22642" height="43" transform="matrix(-1 0 0 1 36.793 0)" fill="#101113" />
                            <rect width="1.22642" height="43" transform="matrix(1 0 0 -1 65 43)" fill="#101113" />
                            <rect x="66.2263" y="43" width="1.22642" height="43" transform="rotate(180 66.2263 43)"
                                fill="#101113" />
                            <rect x="77.2637" y="43" width="1.22642" height="43" transform="rotate(180 77.2637 43)"
                                fill="#101113" />
                        </svg>
                    </div>
                </div>
            </div>
        </div>
        <div class="personal-offer__ personal-offer__fourth-step">
            <!-- Тело формы тут. Перенести после в файл send-form и настроить get-template -->
            <section class="send-form-container">
                <div class="send-form__inputs">
                    <div class="send-form__label-and-input name-box">
                        <label for="name">Ваше имя</label>
                        <input ref="nameInput" type="text" class="user-name" name="name" required placeholder="Имя">
                        <p class="input-error__text">Неверный формат данных</p>
                    </div>
                    <div class="send-form__label-and-input">
                        <label for="city">Город</label>
                        <input type="text" class="user-cuty" name="city" placeholder="Укажите из какого вы города">
                    </div>
                </div>
                <div class="send-form__inputs">
                    <div class="send-form__label-and-input phone-box">
                        <label for="telephone">Телефон</label>
                        <input type="text" class="user-telephone" name="telephone" required placeholder="+7 (___) __ – __">
                        <p class="input-error__text">Неверный формат данных</p>
                    </div>
                    <div class="send-form__label-and-input email-box">
                        <label for="email">E-mail</label>
                        <input type="email" class="user-email" name="email" placeholder="E-mail">
                        <p class="input-error__text">Неверный формат данных</p>
                    </div>
                </div>
                <div class="send-form__inputs">
                    <div class="send-form__label-and-input">
                        <label for="comment">Комментарий</label>
                        <textarea class="user-comment" name="comment" style="height: 42px;"
                            placeholder="Здесь можно указать любые нюансы, которые не учитываются стандартной формой"></textarea>
                    </div>
                </div>
                <div class="send-form__inputs">
                    <div class="personal-data__checkbox this-checkbox">
                        <input class="custom-checkbox" id="personal-account-info-main" type="checkbox">
                        <label for="personal-account-info-main" class="personal-account-info__not-checked">
                            <p>Отправляя свои данные через эту форму, я принимаю условия&nbsp;<a
                                    style="text-decoration: underline !important;" href="-#">соглашения</a>&nbsp;об
                                обработке персональных данных</p>
                        </label>
                    </div>
                </div>
            </section>
            <!-- Конец тела формы тут -->
        </div>
        <div class="personal-offer__btn-container">
            <button ref="backButton" @click="previousStep" type="button"
                class="button button--header personal-offer__button-back">
                <div class="button__item-and-icon">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4.16699 15.8333L15.0003 5M15.0003 5V15.4M15.0003 5H4.60033" stroke="white"
                            stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                    </svg>
                    <span>Назад</span>
                </div>
            </button>
            <button ref="nextButton" @click="nextStep" type="button"
                class="button button--header button--red button--small-red personal-offer__button-next">
                <div class="button__item-and-icon">
                    <span>Продолжить</span>
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4.16699 15.8333L15.0003 5M15.0003 5V15.4M15.0003 5H4.60033" stroke="white"
                            stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                    </svg>
                </div>
            </button>
            <button ref="connectBtn" type="button" id="connect-btn" data-form-type="mainpage"
                class="button button--header button--red button--small-red personal-offer-submit">
                <div class="button__item-and-icon">
                    <span>Оставить заявку</span>
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4.16699 15.8333L15.0003 5M15.0003 5V15.4M15.0003 5H4.60033" stroke="white"
                            stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                    </svg>
                </div>
            </button>
        </div>
    </form>
</template>

<script>
import globalMixins from '../mixins/globalMixins';
import 'pikaday/css/pikaday.css';

export default {
    mixins: [globalMixins],
    // остальной код компонента
    data() {
        return {
            choosingPerformance: null,
            chipItemSelect: null,
            thisSelect: '',
            currentIndex: 0,
            countClickButtonNext: 1,
            countAdults: 0,
            countChildren: 0,
            countTransport: 0,
            checkedCheckboxes: [],
            nameInput: '',
            emailInput: '',
            phone: '',
            commentInput: '',
            arrivalDate: '',
            departureDate: '',
            userCity: '',
            tourTitleSearchParent: null,
            parentBlockTour: null,
            firstTitleTour: '',
            secondTitleTour: '',
            tourTitle: '',
            ageFromTo: '',
            countPeopleFrom: '',
            countDayTour: '',
            priceWithInterest: '',
            PrivacyPolicy: false,
            PrivacyPolicyTour: false,
        };
    },
    methods: {
        selectToggle() {
            this.$refs.selectHeader.forEach((item) => {
                item.parentElement.classList.toggle('is-active');
            });
        },
        selectChoose(e) {
            const text = e.target.textContent;
            document.querySelector('.select__current').textContent = text;
            document.querySelector('.select').classList.remove('is-active');
        },
        selectChoose() {
            const text = this.innerText;
            const select = this.closest('.container-select');
            const currentText = select.querySelector('.select__current');
            currentText.innerText = text;
            select.classList.remove('is-active');
            this.chipItemSelect.textContent = text;

            this.choosingPerformance.forEach((sel) => {
                sel.value = text;
                this.thisSelect = sel.value;
                this.choosingPerformance.forEach((el) => {
                    el.value = this.thisSelect;
                });
            });
        },
        decreaseAdults() {
            if (this.countAdults > 0) {
                this.countAdults--;
            }
        },
        decreaseChildren() {
            if (this.countChildren > 0) {
                this.countChildren--;
            }
        },
        decreaseTransport() {
            if (this.countTransport > 0) {
                this.countTransport--;
            }
        },

        nextStep() {
            var offerSteps = document.querySelectorAll('.personal-offer__');
            var personaSteps = document.querySelectorAll('.persona-offer__step');

            if (this.currentIndex < offerSteps.length - 1) {
                offerSteps[this.currentIndex].classList.remove('active-offer-step');
                personaSteps[this.currentIndex].classList.remove('active-step-js');
                this.currentIndex++;
                offerSteps[this.currentIndex].classList.add('active-offer-step');
                personaSteps[this.currentIndex].classList.add('active-step-js');
                personaSteps[this.currentIndex - 1].style.backgroundColor = '#2057E5';
                personaSteps[this.currentIndex - 1].style.color = 'white';
            }

            this.countClickButtonNext++;

            if (this.countClickButtonNext > 1) {
                this.$refs.backButton.style.display = 'block';
            } else {
                this.$refs.backButton.style.display = 'none';
            }

            this.checkedCheckboxes = document.querySelectorAll('input[type="checkbox"].checkbox-location:checked');
            const list = document.querySelector('.left__location-items');

            // Передача чекбоксов
            if (this.countClickButtonNext === 3) {
                // Пройтись по каждому выбранному элементу чекбокса
                this.checkedCheckboxes.forEach(function (checkbox) {
                    let labelChecked = document.querySelector('label[for="' + checkbox.id + '"]');
                    // Создать новый пункт списка
                    const listItem = document.createElement('li');
                    listItem.classList.add('left__location-item');
                    // Установить содержимое пункта списка как значение чекбокса
                    listItem.textContent = labelChecked.textContent;
                    // Добавить пункт списка в список
                    list.appendChild(listItem);
                });
            }

            // Передача дат
            this.arrivalDate = this.$refs.arrivalDate.value;
            this.departureDate = this.$refs.departureDate.value;

            // Передача количества людей и машин
            this.$refs.rightAdult.textContent = `${this.countAdults} взрослых`;
            this.$refs.rightChild.textContent = `${this.countChildren} детей`;
            this.$refs.rightTransport.textContent = `${this.countTransport}`;

            // Логика для четвертого шага
            if (this.countClickButtonNext === 4) {
                this.$refs.nextButton.style.display = 'none';
                this.$refs.connectBtn.style.display = 'block';
                document.querySelector('.personal-offer__btn-container').style.maxWidth = '862.77px';

                document.querySelector('.personal-offer__title').textContent = "Оставьте заявку и мы свяжемся с вами";
                document.querySelector('.before-4-step').style.display = 'none';
                document.querySelector('.after-4-step').style.display = 'block';
            }
        },
        previousStep() {
            var offerSteps = document.querySelectorAll('.personal-offer__');
            var personaSteps = document.querySelectorAll('.persona-offer__step');
            if (this.currentIndex > 0) {
                offerSteps[this.currentIndex].classList.remove('active-offer-step');
                personaSteps[this.currentIndex].classList.remove('active-step-js');
                this.currentIndex--;
                offerSteps[this.currentIndex].classList.add('active-offer-step');
                personaSteps[this.currentIndex].classList.add('active-step-js');
                personaSteps[this.currentIndex].style.backgroundColor = '';
                personaSteps[this.currentIndex].style.color = '#2057E5';
            }

            this.countClickButtonNext--;
            if (this.countClickButtonNext > 1) {
                const backButton = this.$refs.backButton;
                if (backButton) {
                    backButton.style.display = 'block';
                }
            } else {
                const backButton = this.$refs.backButton;
                if (backButton) {
                    backButton.style.display = 'none';
                }
            }

            if (this.countClickButtonNext !== 4) {
                document.querySelector('.personal-offer-submit').style.display = "none";
                document.querySelector('.personal-offer__btn-container').style.maxWidth = 'unset';
                const nextButton = this.$refs.nextButton;
                const connectBtn = this.$refs.connectBtn;
                const btnContainer = this.$refs.btnContainer;
                if (nextButton) {
                    nextButton.style.display = 'block';
                }
                if (connectBtn) {
                    connectBtn.style.display = 'none';
                }
                if (btnContainer) {
                    btnContainer.style.maxWidth = 'unset';
                }

                const titleElement = document.querySelector('.personal-offer__title');
                if (titleElement) {
                    titleElement.textContent = "Хотите персональное предложение?";
                }
                const beforeStepElement = document.querySelector('.before-4-step');
                const afterStepElement = document.querySelector('.after-4-step');
                if (beforeStepElement) {
                    beforeStepElement.style.display = 'block';
                }
                if (afterStepElement) {
                    afterStepElement.style.display = 'none';
                }
            }

            if (this.countClickButtonNext < 3) {
                //Обнуление списка. Добавлено для возможности выбирать новые в случае, если нажата кнопка "назад"
                const listContainer = document.querySelector('.left__location-items');
                listContainer.innerHTML = '';
            }

        },

        submitForm() {
            const modal = document.querySelector('.modals-complete');
            const closeBtn = document.querySelector('.modal__btn-complete');

            modal.addEventListener('click', (e) => {
                if (e.target === modal) {
                    this.closeModal();
                }
            });

            closeBtn.addEventListener('click', () => {
                this.closeModal();
            });

            this.openModal();
        },
        closeModal() {
            modal.classList.remove('is-open');
            document.body.style.overflow = 'unset';
        },
        openModal() {
            modal.classList.add('is-open');
            document.body.style.overflow = 'hidden';
        },
        validateForm() {
            let isValid = true;
            const nameInput = document.querySelector('.user-name')?.value;
            const nameBox = document.querySelector('.name-box');
            const emailInput = document.querySelector(".user-email")?.value;
            const emailBox = document.querySelector('.email-box');
            const phone = document.querySelector(".user-telephone")?.value;
            const phoneBox = document.querySelector('.phone-box');
            const commentInput = document.querySelector('.user-comment')?.value;
            const PrivacyPolicy = document.getElementById("personal-account-info-main");
            const PrivacyPolicyTour = document.getElementById("personal-account-info");

            const regx = /^[a-zA-Zа-яА-Я]+$/;
            const regex = /\+7\(\d{3}\)\d{3}-\d{2}-\d{2}/;
            const EMAIL_REGEXP = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;

            // Валидация имени
            if (!regx.test(nameInput)) {
                isValid = false;
                nameBox.classList.add('input-error-name');
            }

            // Валидация email
            if (emailInput && !EMAIL_REGEXP.test(emailInput)) {
                isValid = false;
                emailBox.classList.add('input-error-email');
            }

            // Валидация телефона
            if (!regex.test(phone)) {
                isValid = false;
                phoneBox.classList.add('input-error-phone');
            }

            // Валидация чекбокса
            const notCheckedElements = document.querySelectorAll('.personal-account-info__not-checked');
            if (!PrivacyPolicy && !PrivacyPolicyTour) {
                isValid = false;
                notCheckedElements.forEach((element) => {
                    element.classList.add('checked-info-error');
                });
            } else {
                notCheckedElements.forEach((element) => {
                    element.classList.remove('checked-info-error');
                });
            }

            return isValid;
        },
        completeForm() {
            this.$refs.modalComplete.style.animationName = 'form-modal';
            this.$refs.modalComplete.style.animationDuration = '1s';
            this.$refs.modalComplete.style.animationFillMode = 'forwards';
            this.$refs.modalComplete.style.animationIterationCount = '1';
            this.openModal();
        },
        sendForm(arrayCheckbox, userCity, nameInput, arrivalDate, departureDate, countAdults, countChildren, countTransport, commentInput, emailInput, phone, btnType) {
            // Ваш код отправки формы здесь
            // ...
            return true; // Вернуть true, если форма отправлена успешно
        },
        sendFormTourPage(userCity, nameInput, commentInput, emailInput, phone, btnType, thisSelect, tourTitle, ageFromTo, countPeopleFrom, countDayTour, priceWithInterest) {
            // Ваш код отправки формы здесь
            // ...
            return true; // Вернуть true, если форма отправлена успешно
        }
    },
    mounted() {
        this.choosingPerformance = document.querySelectorAll('.choosing-performance');
        this.chipItemSelect = document.querySelector('.chip_item-select');

        if (this.countClickButtonNext > 1) {
            this.$refs.backButton.style.display = 'block';
        } else {
            this.$refs.backButton.style.display = 'none';
        }
    }
};
</script>