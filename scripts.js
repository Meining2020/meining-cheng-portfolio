const profolio = {}

profolio.init = () => {
    //nav bar scroll to show
    window.addEventListener('scroll', function () {
        const navElement = document.querySelector('#nav-bar')
        if (this.scrollY > 20) {
            navElement.classList.add('sticky');
        } else {
            navElement.classList.remove('sticky')
        }
    })

    //burger icon show and disappear
    const burgerButton = document.querySelector('#nav-button');
    burgerButton.setAttribute('aria-expanded', false);
    //function to show nav bar when click burger icon
    burgerButton.addEventListener('click', function () {
        const navMenu = document.querySelector('#nav-menu');
        const navIcon = document.querySelector('#menu-icon');
        const navItem = document.querySelectorAll("a[tabindex='-1']");
        navMenu.classList.toggle('nav-show');
        navIcon.classList.toggle('fa-times');

        //for aria accessbility
        if (burgerButton.getAttribute('aria-expanded') === 'false') {
            burgerButton.setAttribute('aria-expanded', true);
        } else {
            burgerButton.setAttribute('aria-expanded', false);
        }

        //tab through nav items
        navItem. forEach(function(item) {
            item.setAttribute('tabindex', '0');
        })
    })

    //scroll down arrow
    const arrowIcon = document.querySelector('#scroll-down-button');
    arrowIcon.addEventListener('click', function () {
        arrowIcon.scrollIntoView();
    })

    //span animation
    const spanElement = document.getElementById('span-animation');
    const text = "Front-end Developer.";
    const splittedText = text.split("");
    let currentText = '';
    let direction = 0;

    const textAnimation = () => {
        let i = 0;
        setInterval(() => {
            if (i == splittedText.length - 1) {
                direction = 1;
            }
            if (i < 0) {
                direction = 0;
            }
            currentText = "";
            for (let c = 0; c <= i; c++) {
                currentText += splittedText[c];
            }
            spanElement.textContent = currentText;

            if (direction === 0) {
                i++;
            } else {
                i--;
            }
        }, 100);
    }
    textAnimation();
}

profolio.init();





