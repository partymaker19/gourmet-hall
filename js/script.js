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

//изменение картинки при наведении
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

//изменеие цвета текста в радио
document.addEventListener("DOMContentLoaded", function () {
  const radioButtons = document.querySelectorAll(".radio");

  // функция для обновления цвета текста
  function updateLabelColor() {
    document
      .querySelectorAll(".label")
      .forEach((label) => label.classList.remove("selected"));

    const selectedRadio = document.querySelector(".radio:checked");
    if (selectedRadio) {
      const label = selectedRadio
        .closest(".big-card__souse-item")
        .querySelector(".label");
      if (label) {
        label.classList.add("selected");
      }
    }
  }

  // обработчики событий на все радио кнопки
  radioButtons.forEach((radio) => {
    radio.addEventListener("change", updateLabelColor);
  });

  updateLabelColor();
});

//счетчик
const incrementButton = document.querySelector(
  ".big-card__green.big-card__max"
);
const decrementButton = document.querySelector(".big-card__dark.big-card__max");
const counterDisplay = document.querySelector(".big-card__number");

let counterValue = parseInt(counterDisplay.textContent, 10);

function incrementCounter() {
  if (counterValue < 25) {
    counterValue++;
    counterDisplay.textContent = counterValue;
  }
}

function decrementCounter() {
  if (counterValue > 1) {
    counterValue--;
    counterDisplay.textContent = counterValue;
  }
}

incrementButton.addEventListener("click", incrementCounter);
decrementButton.addEventListener("click", decrementCounter);
