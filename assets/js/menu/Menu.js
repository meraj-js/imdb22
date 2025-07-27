function Menu() {
    // All - desktop
let optionmenu = document.querySelector(".optionmenu")
let optionsBtn = document.querySelector("#options")
optionsBtn.addEventListener("click" , function(){
    optionmenu.classList.toggle("open")
})



// Menu - desktop
let showBtn = document.querySelector("#showbtn")
let menu = document.querySelector(".menu")
let closeBtn = document.querySelector(".closeBtn")
function show () {
    menu.classList.add("show");
    document.body.style.overflow = "hidden"
}
function close () {
    menu.classList.remove("show")
    document.body.style.overflow = ""
}

showBtn.addEventListener("click" , show)
closeBtn.addEventListener("click" , close)



// language - desktop
let languageMenuBtn = document.querySelector("#language-M-Btn")
let languageMenu = document.querySelector(".language-menu")
languageMenuBtn.addEventListener("click" , function(){
    languageMenu.classList.toggle("open")
})



// All - tablet
let optionmenu2 = document.querySelector(".optionmenu-t")
let optionsBtn2 = document.querySelector("#options-t")
optionsBtn2.addEventListener("click" , function(){
    optionmenu2.classList.toggle("open")
})




// dropdown - tablet
let dropdownMenuBtn = document.querySelector("#dropdown-mbtn")
let dropdownMenu = document.querySelector(".dropdown-m")
let closeMBtn = document.querySelector(".close-M-Btn")
function showD () {
    dropdownMenu.classList.add("showD");
    document.body.style.position = "fixed"
}
function closeD () {
    dropdownMenu.classList.remove("showD")
    document.body.style.position = ""
}

dropdownMenuBtn.addEventListener("click" , showD)
closeMBtn.addEventListener("click" , closeD)





// dropdown items - tablet
let dropdownMenuItems = document.querySelectorAll(".D-menu-items")
dropdownMenuItems.forEach(item => {
    let dropdownMenui = item.querySelector(".dropdown-menu-i")
    let dropdownMenuList = item.querySelector(".dropdown-m-list")

    dropdownMenui.addEventListener("click" , function(){
    dropdownMenuList.classList.toggle("showDlist")
})
})


// language - tablet
let languageMenuT = document.querySelector(".language-menuT")
let languageMenuBtnT= document.querySelector(".language-btn")
let closeMBtnT = document.querySelector(".closeBtnT")
function showLT () {
    languageMenuT.classList.add("showLT");
    document.body.style.position = "fixed"
}
function closeLT () {
    languageMenuT.classList.remove("showLT")
    document.body.style.position = ""
}

languageMenuBtnT.addEventListener("click" , showLT)
closeMBtnT.addEventListener("click" , closeLT)
}


export default Menu