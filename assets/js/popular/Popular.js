async function Popularmovies() {
    try {
        let data = await fetch("https://p-nouri004.github.io/IMDb-db/db.json")
        let res = await data.json()
        let popular = res.Popularmovies.map(function(elem){
            return`
            <div class="swiper-slide"> 
                    <img src="${elem.pmoviesurl}"alt="${elem.pmoviesalt}">
                    <p>${elem.title}</p>
            </div>
            `
        })
        document.querySelector(".popular-line .swiper-wrapper").insertAdjacentHTML("afterbegin",popular.join(""))
        
    } catch (error) {
        console.log(error.message);
    }
        var swiper = new Swiper(".popular-interests", {
      slidesPerView: 2,
      slidesPerGroup:2,
      spaceBetween: 5,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      breakpoints: {
        640: {
          slidesPerView: 2,
          spaceBetween: 10,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
        1024: {
          slidesPerView: 4,
          spaceBetween: 20,
        },
      },
    });
}

export default Popularmovies