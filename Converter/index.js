const convertBtn = document.getElementById('convert-btn');
const inputValue = document.getElementById('input-value');
const meterToFeet = document.getElementById('meter-feet');
const feetToMeter = document.getElementById('feet-meter');
const litersToGallons = document.getElementById('liters-gallons');
const gallonsToLiters = document.getElementById('gallons-liters');
const kilosToPounds = document.getElementById('kilos-pounds');
const poundsToKilos = document.getElementById('pounds-kilos');

convertBtn.addEventListener('click', function () {
  const value = parseFloat(inputValue.value);

  if (!isNaN(value)) {
    const meterToFeetValue = value * 3.28084;
    const feetToMeterValue = value / 3.28084;
    const litersToGallonsValue = value * 0.264172;
    const gallonsToLitersValue = value * 3.78541;
    const kilosToPoundsValue = value * 2.20462;
    const poundsToKilosValue = value / 2.20462;

    meterToFeet.textContent = `${value} meters = ${meterToFeetValue.toFixed(
      2
    )} feet |`;
    feetToMeter.textContent = `${value} feet = ${feetToMeterValue.toFixed(
      2
    )} meters `;
    litersToGallons.textContent = `${value} liters = ${litersToGallonsValue.toFixed(
      2
    )} gallons |`;
    gallonsToLiters.textContent = `${value} gallons = ${gallonsToLitersValue.toFixed(
      2
    )} liters `;
    kilosToPounds.textContent = `${value} kilos = ${kilosToPoundsValue.toFixed(
      2
    )} pounds |`;
    poundsToKilos.textContent = `${value} pounds = ${poundsToKilosValue.toFixed(
      2
    )} kilos `;
  }
});
