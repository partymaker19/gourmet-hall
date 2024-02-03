//изменение кнопки "в корзину"
document.querySelectorAll(".btn.btn-success.cards__btn").forEach((button) => {
  button.addEventListener("click", (event) => {
    event.preventDefault();
    const basketTitle = event.target.parentElement.querySelector(
      ".cards__basket-title"
    );
    const basketText = basketTitle.textContent;

    basketTitle.textContent = "супер!";

    setTimeout(() => {
      basketTitle.textContent = basketText;
    }, 1000);
  });
});

document.querySelectorAll(".big-card__card-block").forEach(function (card) {
  card.addEventListener("mousemove", function (e) {
    let rect = card.getBoundingClientRect();
    let x = e.clientX - rect.left;
    let y = e.clientY - rect.top;
    card.querySelector(
      ".big-card__img"
    ).style.transformOrigin = `${x}px ${y}px`;
  });
});

    var docWidth = document.documentElement.offsetWidth;
    [].forEach.call(document.querySelectorAll("*"), function (el) {
      if (el.offsetWidth > docWidth) {
        console.log(el);
      }
    });