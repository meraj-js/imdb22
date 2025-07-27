async function Celebrity() {
    try {
        let data = await fetch("https://p-nouri004.github.io/IMDb-db/db.json")
        let res = await data.json()
        let celebrity = res.Celebrity.map(function(elem){
            return`
                <div class="swiper-slide">
                    <img src="${elem.celebrityurl}"
                        alt="${elem.celebrityalt}">
                    <div class="ranking">
                        <span>${elem.ranking1}</span>
                        <span>(<svg fill="#30ca1c" width="15px" height="15px" viewBox="0 0 512.00 512.00" xmlns="http://www.w3.org/2000/svg" stroke="#30ca1c"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><title>ionicons-v5-b</title><path d="M414,321.94,274.22,158.82a24,24,0,0,0-36.44,0L98,321.94c-13.34,15.57-2.28,39.62,18.22,39.62H395.82C416.32,361.56,427.38,337.51,414,321.94Z"></path></g></svg>${elem.ranking2})</span>
                    </div>
                    <span>${elem.name}</span>
                </div>
            `
        })
        document.querySelector(".celebrities .swiper-wrapper").insertAdjacentHTML("afterbegin",celebrity.join(""))
        
    } catch (error) {
        console.log(error.message);
    }

    var swiper = new Swiper(".celebrity", {
            slidesPerView: 1,
            slidesPerGroup:2,
            spaceBetween: 10,
            breakpoints: {
                "@0.00": {
                    slidesPerView: 2,
                    spaceBetween: 10,
                },
                "@0.75": {
                    slidesPerView: 3,
                    spaceBetween: 10,
                },
                "@1.00": {
                    slidesPerView: 3,
                    spaceBetween: 10,
                },
                "@1.25": {
                    slidesPerView: 4,
                    spaceBetween: 10,
                },
                "@1.40": {
                    slidesPerView: 5,
                    spaceBetween: 10,
                },
                "@1.50": {
                    slidesPerView: 6,
                    spaceBetween: 10,
                },


            },
            navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
            },
        });
}

export default Celebrity


