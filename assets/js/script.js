const billInput = document.getElementById("bill");
const peopleInput = document.getElementById("people");
const tipAmount = document.getElementById("tip-amount");
const total = document.getElementById("total-amount");
const tipButtons = document.querySelectorAll(".tip-btn");
const resetBtn = document.getElementById("resetBtn");
const customTip = document.getElementById("customTip");

let tipPercentage = 0;

function calcTip() {
  const bill = Number(billInput.value);
  const people = Number(peopleInput.value);
  const tip = Number(tipPercentage);

  if (bill && people && tip >= 0) {
    const totalTip = bill * (tip / 100);
    const tipPerPerson = totalTip / people;
    const totalPerPerson = (bill + totalTip) / people;

    tipAmount.textContent = `${tipPerPerson.toFixed(2)}`;
    total.textContent = `${totalPerPerson.toFixed(2)}`;
  }
}
tipButtons.forEach((button) => {
  button.addEventListener("click", () => {
    tipPercentage = button.getAttribute("tip-value");
    tipButtons.forEach((btn) => {
      btn.classList.remove("active");
    });

    button.classList.add("active");

    calcTip();
  });
});
billInput.addEventListener("input", calcTip);
peopleInput.addEventListener("input", calcTip);

customTip.onchange = () => {
  tipPercentage = customTip.value;

  calcTip();
};

resetBtn.onclick = () => {};
resetBtn.addEventListener("click", () => {
  tipButtons.forEach((button) => {
    button.classList.remove("active");
  });
  tipPercentage = 0;
  billInput.value = 0;
  tipButtons.value = 0;
  peopleInput.value = 0;
  tipAmount.textContent = 0;
  total.textContent = 0;
});
