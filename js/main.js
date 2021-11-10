const btnUp = document.querySelector('#btnUp');
btnUp.addEventListener('click', topFunction);

window.addEventListener('scroll', function () {
  if (window.pageYOffset > 100) {
    nav.classList.add('bg-dark', 'shadow');
  } else {
    nav.classList.remove('bg-dark', 'shadow');
  }
});

window.onscroll = function () {
  scrollFunction();
};

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

const scrollFunction = () => {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    btnUp.style.display = 'block';
  } else {
    btnUp.style.display = 'none';
  }
};
