
// Initialize Swiper 
const menuDetailswiper = new Swiper(".menuDetailswiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    freeMode: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

//Toast
const toastTrigger = document.querySelector('#liveToastBtn')
const toastLiveExample = document.querySelector('#liveToast')
if (toastTrigger) {
  toastTrigger.addEventListener('click', function () {
    var toast = new bootstrap.Toast(toastLiveExample)

    toast.show()
  })
}
