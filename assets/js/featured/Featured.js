async function Featured() {
    try {
        let data = await fetch("https://p-nouri004.github.io/IMDb-db/db.json")
        let res = await data.json()
        let featured = res.Featuredtoday.map(function(elem){
            return`
                <div class="swiper-slide">
                    <div class="featured-image">
                        <img
                            src="${elem.Featuredurl}" />
                        <div class="list-option">
                            <svg width="28px" height="28px" viewBox="0 0 24 24" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                                <g id="SVGRepo_iconCarrier">
                                    <path d="M7 8H21M7 12H21M7 16H21M3 8H3.01M3 12H3.01M3 16H3.01" stroke="#ffffff"
                                        stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                                </g>
                            </svg>
                            <span>List</span>
                        </div>
                        <div class="shadow"></div>
                    </div>
                    <div class="tap-for-more">
                        <a href="#">${elem.title}</a>
                        <a href="#">${elem.seemore}</a>
                    </div>
                </div>
            `
        })
        document.querySelector(".Featured .swiper-wrapper").insertAdjacentHTML("afterbegin",featured.join(""))
        
    } catch (error) {
        console.log(error.message);
    }
    var swiper = new Swiper(".featuredsec", {
            slidesPerView: 1,
            centeredSlides: false,
            slidesPerGroupSkip: 1,
            spaceBetween: 10,
            grabCursor: true,
            keyboard: {
                enabled: true,
            },
            breakpoints: {
                600: {
                    slidesPerView: 2,
                    slidesPerGroup: 1,
                },
            },
            scrollbar: {
                el: ".swiper-scrollbar",
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            
        });
    
}

export default Featured


