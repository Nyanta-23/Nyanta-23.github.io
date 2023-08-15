// click side bar
document.getElementsByClassName("toggle")[0].addEventListener('click', () => {
  document.getElementById("mobile").classList.toggle('!left-0');
  document.querySelector(".toggle").querySelectorAll('.m-toggle-bar').forEach( e => e.classList.toggle('btnTransition'));

  // // click bar btn will close side bar
  // return document.querySelector('#mobile').querySelectorAll('ul li a').forEach(e => { 
  //   e.addEventListener('click', () => document.getElementById("mobile").classList.toggle('!left-0'));

  // });
});


// scroll effect
window.addEventListener('scroll', () => {
  const desktopNav = document.querySelector('#desktop').querySelectorAll('ul li a');
  if(window.scrollY > 10) {
    return [
      document.getElementById('navbar').classList.add('!bg-black'), 
      desktopNav.forEach(e => { 
        return [e.classList.remove('hover:text-indigo-900'), e.classList.add('hover:text-blue-600')];
      })
    ];
  }
  return [
    document.getElementById('navbar').classList.remove('!bg-black'), 
    desktopNav.forEach(e => {
      return[e.classList.remove('hover:text-blue-600'), e.classList.add('hover:text-indigo-900')]
    })
  ];
});




// typed
const typed = new Typed("#skills-typed-text", {
  strings: [
    "I am a Front-End Web Developer.",
    "And wan't to be Back-End Developer.",
    "But sometimes i wan't to be Full-Stack Developer.",
  ],
  startDelay: 100,
  typeSpeed: 30,
  backSpeed: 30,
  loop: true,
});


// swipper
const swiper = new Swiper(".mySwiper", {
  watchSlidesProgress: true,
  rewind: true,
  spaceBetween: 40,
  slidesPerView: 1,
  centeredSlides: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
});