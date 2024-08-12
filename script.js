const barCont = document.querySelector(".menue_bar_btns");
const mobileMenueShow = document.querySelector(".main_header .menue_bar");

barCont.addEventListener("click", () => {
	barCont.classList.toggle("is_active");
	mobileMenueShow.classList.toggle("show_menue")
	console.log("added")
})