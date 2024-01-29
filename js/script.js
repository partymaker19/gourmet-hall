document.querySelectorAll(".cards__link").forEach(function (link) {
  link.addEventListener("click", function () {
    this.style.color = "#079c5a";
  });
});

// document.querySelectorAll(".card").forEach(function (card) {
//   card.addEventListener("mousemove", function (e) {
//     let rect = card.getBoundingClientRect();
//     let x = e.clientX - rect.left;
//     let y = e.clientY - rect.top;
//     card.querySelector(".card-img-top").style.transformOrigin = `${x}px ${y}px`;
//   });
// });
