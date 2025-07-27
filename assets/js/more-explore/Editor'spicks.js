async function Editorspicks() {
    try {
        let data = await fetch("https://p-nouri004.github.io/IMDb-db/db.json")
        let res = await data.json()
        let editorspicks = res.Editorspicks.map(function (elem) {
            return`
                <div class="swiper-slide">
                        <div class="more-exploreimage">
                            <img
                                src="${elem.movieurl}" alt="${elem.moviealt}">
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
                        <div class="tap-for-more2">
                                <a href="#">${elem.title}</a>
                                <a href="#">${elem.seemore}</a>
                        </div>
                </div>
            `
        })
        document.querySelector(".more-explore .more-exploresec .swiper-wrapper").insertAdjacentHTML("afterbegin",editorspicks.join(""))
        
    } catch (error) {
        console.log(error.message);
    }

            var swiper = new Swiper(".more-exploresec", {
            slidesPerView: 1,
            centeredSlides: false,
            slidesPerGroupSkip: 1,
            spaceBetween: 10,
            grabCursor: true,
            keyboard: {
                enabled: true,
            },
            breakpoints: {
                769: {
                    slidesPerView: 3,
                    slidesPerGroup: 1,
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

export default Editorspicks