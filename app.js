const fetchapiUrl = 'https://fakestoreapi.com/products';
const main = document.querySelector('.slides');
fetch(fetchapiUrl)
  .then(res => res.json())
  .then(mehsullar => {
    mehsullar.forEach(reavel => {
      const second = document.createElement('div');
      second.classList.add('slide');
      second.innerHTML = `<img src="${reavel.image}" alt="${reavel.title}">`;
      main.appendChild(second);
    });
    const slides = document.querySelectorAll('.slide');
    let index = 0;
    function nextSlide() {
      index = (index + 1) % slides.length;
      updateSlider();
    }
    function prevSlide() {
      index = (index - 1 + slides.length) % slides.length;
      updateSlider();
    }
    function updateSlider() {
      const good = -index * slides[0].offsetWidth;
    main.style.transform = `translateX(${good}px)`;
    }
    setInterval(nextSlide, 1000);
  })
  .catch(er => {
    console.error('error:', er);
  });