document.addEventListener('DOMContentLoaded', function () {
    const burgerMenu = document.querySelector('.burger-menu');
    const nav = document.querySelector('nav');
    const exitBtn = document.querySelector('.exit-btn');

    const blogDots = document.querySelectorAll('.blog-section .dot');
    const breachDots = document.querySelectorAll('.example-breach-section .dot');

    let blogSlideIndex = 0;
    let breachSlideIndex = 0;

    burgerMenu.addEventListener('click', function () {
        nav.classList.toggle('active');
    });

    exitBtn.addEventListener('click', function () {
        nav.classList.remove('active');
    });

    document.addEventListener('click', function (event) {
        const isClickInsideNav = nav.contains(event.target);
        const isClickOnBurger = burgerMenu.contains(event.target);

        if (!isClickInsideNav && !isClickOnBurger && nav.classList.contains('active')) {
            nav.classList.remove('active');
        }
    });

    blogDots.forEach((dot, index) => {
        dot.addEventListener('click', function () {
            showBlogSlides(index);
        });
    });

    breachDots.forEach((dot, index) => {
        dot.addEventListener('click', function () {
            showBreachSlides(index);
        });
    });

    function showBlogSlides(n) {
        let i;
        const slides = document.querySelectorAll('.blog-section .mySlides');

        if (n !== undefined) {
            blogSlideIndex = n;
        }

        if (blogSlideIndex >= slides.length) {
            blogSlideIndex = 0;
        }

        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = 'none';
        }

        slides[blogSlideIndex].style.display = 'block';

        blogDots.forEach(dot => dot.classList.remove('active'));
        blogDots[blogSlideIndex].classList.add('active');

        blogSlideIndex++;
    }

    function showBreachSlides(n) {
        let i;
        const slides = document.querySelectorAll('.example-breach-section .mySlides');

        if (n !== undefined) {
            breachSlideIndex = n;
        }

        if (breachSlideIndex >= slides.length) {
            breachSlideIndex = 0;
        }

        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = 'none';
        }

        slides[breachSlideIndex].style.display = 'block';

        breachDots.forEach(dot => dot.classList.remove('active'));
        breachDots[breachSlideIndex].classList.add('active');

        breachSlideIndex++;
    }

    const copyButtons = document.querySelectorAll(".copy-button");

    copyButtons.forEach(function (button) {
        button.addEventListener("click", function () {
            const codeContainer = this.parentNode.nextElementSibling.querySelector('code');
            const codeText = codeContainer.innerText;

            const tempTextarea = document.createElement("textarea");
            tempTextarea.value = codeText;
            document.body.appendChild(tempTextarea);
            tempTextarea.select();
            document.execCommand('copy');
            document.body.removeChild(tempTextarea);
            alert("Code copied to clipboard!");
        });
    });
});
