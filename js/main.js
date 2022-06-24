let chart = document.getElementById("lineChart");

//* Create chart for gold prices and fill it with data
const lineChart = new Chart(chart, {
  type: "line",
  data: {
    labels: [
      0, 0.2, 0.4, 0.6, 0.8, 1, 1.2, 1.4, 1.6, 1.8, 2, 2.2, 2.4, 2.6, 2.8, 3,
      3.2, 3.4, 3.6, 3.8, 4,
    ],
    datasets: [
      {
        label: "Price in EGP",
        data: [
          0, 10, 5, 13, 7, 10, 16, 6, 13, 5, 12, 7, 16, 8, 10, 5, 9, 2, 11, 5,
          7,
        ],

        fill: true,
        borderColor: "#bd9030",
        tension: 0.1,
      },
    ],
  },
});

/*--------------------*/

//* Declare variables and select HTML elements
const buyForm = document.getElementById("buyForm");
const sellForm = document.getElementById("sellForm");
const buyBtn = document.getElementById("buyBtn");
const sellBtn = document.getElementById("sellBtn");
const buyBtn2 = document.getElementById("buyBtn2");
const sellBtn2 = document.getElementById("sellBtn2");

//* Handle submit buy form (Prevent page refresh)
buyForm.addEventListener("submit", (e) => {
  e.preventDefault();
});

//* Handle submit sell form (Prevent page refresh)
sellForm.addEventListener("submit", (e) => {
  e.preventDefault();
});

/**
 * Display buy form when BUY tab clicked
 */
const showBuyForm = () => {
  //* Change display of Buy form to appear
  buyForm.style.display = "block";

  //* Change display of Sell form to disappear
  sellForm.style.display = "none";

  //* Change tabs styles (activate and deactivate)
  buyBtn.classList.add("activeBtn");
  sellBtn.classList.add("inactiveBtn");
};

/**
 * Display sell form when SELL tab clicked
 */
const showSellForm = () => {
  //* Change display of Sell form to appear
  sellForm.style.display = "block";

  //* Change display of Buy form to disappear
  buyForm.style.display = "none";

  //* Change tabs styles (activate and deactivate)
  sellBtn2.classList.add("activeBtn");
  buyBtn2.classList.add("inactiveBtn");
};

//* Add event listeners to buy and sell buttons for buy form
buyBtn.addEventListener("click", showBuyForm);
sellBtn.addEventListener("click", showSellForm);

//* Add event listeners to buy and sell buttons for sell form
buyBtn2.addEventListener("click", showBuyForm);
sellBtn2.addEventListener("click", showSellForm);
