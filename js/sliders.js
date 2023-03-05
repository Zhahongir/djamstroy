// Services Slider
var swiper = new Swiper(".mySwiper", {
    loop: false,
    spaceBetween: 40,
    slidesPerView: 3,
    navigation: {
      nextEl: ".swiper-button-next1",
      prevEl: ".swiper-button-prev1",
    },
    breakpoints: {
      993: {
        slidesPerView: 3,
        spaceBetween: 40,
      },
      992: {
        slidesPerView: 'auto',
        spaceBetween: 40,
      },
      768: {
        slidesPerView: 'auto',
        spaceBetween: 20,
      },
      576: {
        slidesPerView: 'auto',
        spaceBetween: 20,
      },
      320: {
        slidesPerView: 'auto',
        spaceBetween: 20,
      }
    }
});


// Works Slider
var swiper2 = new Swiper(".mySwiper2", {
  loop: false,
  spaceBetween: 30,
  slidesPerView: 3,
  navigation: {
    nextEl: ".swiper-button-next2",
    prevEl: ".swiper-button-prev2",
  },
  breakpoints: {
    993: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    992: {
      slidesPerView: 'auto',
      spaceBetween: 30,
    },
    768: {
      slidesPerView: 'auto',
      spaceBetween: 20,
    },
    576: {
      slidesPerView: 'auto',
      spaceBetween: 20,
    },
    320: {
      slidesPerView: 'auto',
      spaceBetween: 20,
    }
  }
});


// Reviews Slider
var swiper3 = new Swiper(".mySwiper3", {
  loop: false,
  spaceBetween: 40,
  slidesPerView: 2,
  autoHeight: true,
  navigation: {
    nextEl: ".swiper-button-next3",
    prevEl: ".swiper-button-prev3",
  },
  breakpoints: {
    993: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
    992: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    576: {
      slidesPerView: 'auto',
      spaceBetween: 20,
    },
    320: {
      slidesPerView: 'auto',
      spaceBetween: 20,
    }
  }
});