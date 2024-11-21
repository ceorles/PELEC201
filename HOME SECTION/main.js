let menu = document.querySelector('#menu-icon');
let navigation = document.querySelector('.navigation');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navigation.classList.toggle('open');
};

const sr = ScrollReveal ({
    distance: '65px',
    duration: 2600,
    delay: 450,
    reset: true
});

sr.reveal('.landing-text',{delay:200, origin:'top'});
sr.reveal('.landing-img',{delay:450, origin:'top'});
sr.reveal('.scroll-down',{delay:500, origin:'right'});