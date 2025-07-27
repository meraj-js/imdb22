async function Tikets() {
    try {
        let data = await fetch("https://p-nouri004.github.io/IMDb-db/db.json")
        let res = await data.json()
        let tikets = res.tikets.map(function(elem){
            return`
                <div class="tikets">
                        <span>${elem.no}</span>
                        <svg width="20px" height="20px" viewBox="0 0 24.00 24.00" fill="none"
                            xmlns="http://www.w3.org/2000/svg" stroke="rgb(245,197,24)">
                            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                            <g id="SVGRepo_iconCarrier">
                                <g id="Interface / Line_Xl">
                                    <path id="Vector" d="M12 21V3" stroke="rgb(245,197,24)" stroke-width="2.4"
                                        stroke-linecap="round" stroke-linejoin="round"></path>
                                </g>
                            </g>
                        </svg>
                        <svg width="60px" height="60px" viewBox="-2.4 -2.4 20.80 20.80"
                            xmlns="http://www.w3.org/2000/svg" fill="none" stroke="#ffffff" stroke-width="0.00016">
                            <g id="SVGRepo_bgCarrier" stroke-width="0" transform="translate(4.48,4.48), scale(0.44)">
                                <rect x="-2.4" y="-2.4" width="20.80" height="20.80" rx="10.4" fill="#c2c2c2"
                                    strokewidth="0"></rect>
                            </g>
                            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"
                                stroke="#CCCCCC" stroke-width="1.1199999999999999"></g>
                            <g id="SVGRepo_iconCarrier">
                                <path fill="rgb(31,31,31)" fill-rule="evenodd"
                                    d="M4.25 1A2.25 2.25 0 002 3.25v10.83a1 1 0 001.478.878l4.403-2.394a.25.25 0 01.238 0l4.403 2.394A1 1 0 0014 14.08V3.25A2.25 2.25 0 0011.75 1h-7.5zM7 4.75a.75.75 0 011.5 0V6h1.25a.75.75 0 010 1.5H8.5v1.25a.75.75 0 01-1.5 0V7.5H5.75a.75.75 0 010-1.5H7V4.75z"
                                    clip-rule="evenodd"></path>
                            </g>
                        </svg>
                        <div class="movies-name">
                            <p>${elem.title}</p>
                            <p>${elem.score}</p>
                        </div>
                        <svg width="25px" height="25px" viewBox="0 0 28 28" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                            <g id="SVGRepo_iconCarrier">
                                <path
                                    d="M18.5855 2.91384C17.6028 1.82492 15.9084 1.78149 14.8712 2.81863L2.80233 14.8871C1.77391 15.9155 1.80656 17.5926 2.87422 18.5802L4.2494 19.8523C4.96332 20.5126 5.94127 20.365 6.53962 20.1218C6.73219 20.0435 6.94342 20 7.16667 20C8.08714 20 8.83333 20.7462 8.83333 21.6667C8.83333 21.844 8.80591 22.0134 8.75563 22.1718C8.56037 22.7868 8.48875 23.7737 9.2029 24.4343L10.2226 25.3774C11.2264 26.306 12.7825 26.2827 13.7582 25.3246L25.2864 14.0026C26.2661 13.0404 26.3132 11.477 25.3932 10.4575L24.3181 9.26619C23.6832 8.56267 22.7258 8.60169 22.117 8.77197C21.9746 8.8118 21.8238 8.83334 21.6667 8.83334C20.7462 8.83334 20 8.08714 20 7.16667C20 6.9492 20.0413 6.74318 20.1157 6.55472C20.3483 5.96606 20.4845 5.01807 19.8498 4.31481L18.5855 2.91384Z"
                                    fill="#426ed7"></path>
                            </g>
                        </svg>
                </div>
            `
        })
        document.querySelector(".Movies-TVshows .top-box .tiket-container").insertAdjacentHTML("afterbegin",tikets.join(""))
    } catch (error) {
        console.log(error.message);
    }
}

export default Tikets