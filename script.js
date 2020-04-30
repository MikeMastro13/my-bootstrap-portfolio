const colorHtml = 0xf06529;
const colorCss = 0x2965f1;
const colorJs = 0xf0db4f;
const colorScss = 0xcc6699;

const colorOptions = [colorHtml, colorCss, colorJs, colorScss];
const colorHexOptions = ['#f06529', '#2965f1', '#f0db4f', '#cc6699'];

const portfolioBtn = document.getElementById('portfolio-btn');
const heroSubtitle = document.getElementById('home-hero-subtitle');

// Vanta Effectszzz
const effect = VANTA.NET({
    el: "#vanta-area",
    mouseControls: true,
    touchControls: true,
    minHeight: 400.00,
    minWidth: 400.00,
    scale: 1.00,
    scaleMobile: 1.00,
    backgroundColor: 0x0D1317,
    color: 0x2965f1,
    maxDistance: 20.00,
    showDots: false //Find a way to make this work
});

setInterval(() => {
    let colorChoice = Math.floor(Math.random() * colorOptions.length);
    effect.setOptions({
        color: colorOptions[colorChoice]
    })
    portfolioBtn.style.borderColor = colorHexOptions[colorChoice];
    heroSubtitle.style.borderColor = colorHexOptions[colorChoice];

}, 5000);
