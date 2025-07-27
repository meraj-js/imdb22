async function News() {
    try {
        let data = await fetch("https://p-nouri004.github.io/IMDb-db/db.json")
        let res = await data.json()
        let news = res.news.map(function(elem){
            return`
                <div class="swiper-slide">
                        <img
                            src="${elem.imageurl}" alt="${elem.imagealt}">
                        <div class="options">
                            <span>${elem.Description}</span>
                            <span>${elem.date}</span>
                        </div>
                </div>
            `
        })
        document.querySelector(".news .swiper-wrapper").insertAdjacentHTML("afterbegin",news.join(""))
        
    } catch (error) {
        console.log(error.message);
    }

    var swiper = new Swiper(".top-newssec", {
            slidesPerView: 1,
            centeredSlides: false,
            slidesPerGroupSkip: 1,
            grabCursor: true,
            keyboard: {
                enabled: true,
            },
            breakpoints: {
                769: {
                    slidesPerView: 3,
                    slidesPerGroup: 2,
                },
            },
            scrollbar: {
                el: ".swiper-scrollbar",
            },
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
            
        });
}

export default News