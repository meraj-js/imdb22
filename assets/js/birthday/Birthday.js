async function Birthday() {
    try {
        let data = await fetch("https://p-nouri004.github.io/IMDb-db/db.json")
        let res = await data.json()
        let birthday = res.birthday.map(function(elem){
            return`
                <div class="swiper-slide">
                        <img src="${elem.celebrityurl}"
                            alt="${elem.celebrityalt}">

                        <span>${elem.name}</span>
                        <span>${elem.age}</span>
                </div>
            `
        })

        document.querySelector(".born-today .swiper-wrapper").insertAdjacentHTML("afterbegin",birthday.join(""))
        
    } catch (error) {
        console.log(error.message);
    }

    var swiper = new Swiper(".birthdays", {
            slidesPerView: 1,
            spaceBetween: 10,
            slidesPerGroup:2,
            breakpoints: {
                "@0.00": {
                    slidesPerView: 2,
                    spaceBetween: 20
                },
                "@0.75": {
                    slidesPerView: 3,
                    spaceBetween: 20
                },
                "@1.00": {
                    slidesPerView: 3,
                    spaceBetween: 20
                },
                "@1.25": {
                    slidesPerView: 4,
                    spaceBetween: 20
                },
                "@1.50": {
                    slidesPerView: 6,
                    spaceBetween: 20
                },


            },
            navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
            },
        });
}

export default Birthday