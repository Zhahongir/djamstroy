// Hamburger
window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.menu'),
    menuItem = document.querySelectorAll('.menu__inner__nav__item__link'),
    menuBtn = document.querySelectorAll('.menu__inner__btn'),
    hamburger = document.querySelector('.header__wrap__content__hamburger');
  
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger_active');
        menu.classList.toggle('menu_active');
    });

    menuBtn.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger_active');
            menu.classList.toggle('menu_active');
        });
    });
  
    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger_active');
            menu.classList.toggle('menu_active');
        });
    });
});


// Nav fixed
const hideNav = () => {
    const hiddenNavClassName = 'navigation__hidden';
    const fixedNavClassName = 'navigation__fixed';
    const headerHeight = 100;
    const navHeight = 400;
    let initialYvalue = window.scrollY;
    let body = document.querySelector('body');

    let isItHidden = false;
    let isItFixed = false;

    window.addEventListener('scroll', (ev) => {
        const scrollY = window.scrollY;
        if (scrollY > headerHeight) {
            makeItFixed();

            if (scrollY > headerHeight + navHeight && scrollY > initialYvalue) {
                hide();
            } else {
                show();
            }
        } else {
            makeItNotFixed();
        }

        initialYvalue = scrollY;
    });

    function hide() {
        if (!isItHidden) {
            body.classList.add(hiddenNavClassName);
            isItHidden = true;
        }
    }

    function show() {
        if (isItHidden) {
            body.classList.remove(hiddenNavClassName);
            isItHidden = false;
        }
    }

    function makeItFixed() {
        if (!isItFixed) {
            body.classList.add(fixedNavClassName);
            isItFixed = true;
        }
    }

    function makeItNotFixed() {
        if (isItFixed) {
            body.classList.remove(fixedNavClassName);
            isItFixed = false;
        }
    }
}

hideNav()


// Glightbox
const lightbox = GLightbox({
    touchNavigation: true,
    loop: true,
    autoplayVideos: true
});


// Form
const modal = document.querySelector('.overlay');
const openModalBtn = document.querySelectorAll('.booking');
const closeModalBtn = document.querySelector('.modal__close');

openModalBtn.forEach((btn) => {
    btn.addEventListener('click', openModal);
});

function openModal() {
    modal.style.display = 'block';
    setTimeout(() => modal.style.opacity = 1, 0);
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    modal.style.opacity = 0;
    setTimeout(() => modal.style.display = 'none', 300);
    document.body.style.overflowY = 'auto'; 
}

closeModalBtn.addEventListener('click', closeModal);
window.addEventListener('click', (event) => {
    if (event.target == modal) {
        closeModal();
    }
});


// Tabs
window.addEventListener('DOMContentLoaded', () => {
    const tabs = document.querySelectorAll('.tabheader__item'),
        tabsContent = document.querySelectorAll('.tabcontent'),
        tabsParent = document.querySelector('.tabheader__items');   
        
    function hideTabContent() {
        tabsContent.forEach (item => {
            item.classList.add('hide');
            item.classList.remove('show', 'fade');
        });

        tabs.forEach(item => {
            item.classList.remove('tabheader__item_active');
        });
    }

    function showTabContent(i = 0) {
        tabsContent[i].classList.add('show', 'fade');
        tabsContent[i].classList.remove('hide');
        tabs[i].classList.add('tabheader__item_active');
    }

    hideTabContent();
    showTabContent(0);

    tabsParent.addEventListener('click', (event) => {
        const target = event.target;

        if (target && target.classList.contains('tabheader__item')) {
            tabs.forEach((item, i) => {
                if (target == item ) {
                    hideTabContent();
                    showTabContent(i);
                }
            });
        }
    });
});