// https://calculator.swiftutors.com/spherical-capacitor-calculator.html

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const v3 = document.getElementById('v3');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const capacitanceofSphericalCapacitorRadio = document.getElementById('capacitanceofSphericalCapacitorRadio');
const radiusoftheOuterConductorRadio = document.getElementById('radiusoftheOuterConductorRadio');
const radiusoftheInnerConductorRadio = document.getElementById('radiusoftheInnerConductorRadio');

let capacitanceofSphericalCapacitor;
const E0 = 8.85e-12;
const k = 1;
const PI = Math.PI;
let radiusoftheOuterConductor = v1;
let radiusoftheInnerConductor = v2;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');

capacitanceofSphericalCapacitorRadio.addEventListener('click', function() {
  variable1.textContent = '(b) Radius of the Outer Conductor (m)';
  variable2.textContent = '(a) Radius of the Inner Conductor (m)';
  radiusoftheOuterConductor = v1;
  radiusoftheInnerConductor = v2;
  result.textContent = '';
});

radiusoftheOuterConductorRadio.addEventListener('click', function() {
  variable1.textContent = '(C) Capacitance of Spherical Capacitor (farad)';
  variable2.textContent = '(a) Radius of the Inner Conductor (m)';
  capacitanceofSphericalCapacitor = v1;
  radiusoftheInnerConductor = v2;
  result.textContent = '';
});

radiusoftheInnerConductorRadio.addEventListener('click', function() {
  variable1.textContent = '(C) Capacitance of Spherical Capacitor (farad)';
  variable2.textContent = '(b) Radius of the Outer Conductor (m)';
  capacitanceofSphericalCapacitor = v1;
  radiusoftheOuterConductor = v2;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(capacitanceofSphericalCapacitorRadio.checked)
    result.textContent = `Capacitance of Spherical Capacitor = ${computeCapacitanceofSphericalCapacitor()} farad`;

  else if(radiusoftheOuterConductorRadio.checked)
    result.textContent = `Radius of the Outer Conductor = ${computeRadiusoftheOuterConductor().toFixed(2)} m`;

  else if(radiusoftheInnerConductorRadio.checked)
    result.textContent = `Radius of the Inner Conductor = ${computeRadiusoftheInnerConductor().toFixed(2)} m`;
})

// calculation

function computeCapacitanceofSphericalCapacitor() {
  return 4 * PI * k * E0 * ((Number(radiusoftheInnerConductor.value) * Number(radiusoftheOuterConductor.value)) / (Number(radiusoftheOuterConductor.value) - Number(radiusoftheInnerConductor.value)));
}

function computeRadiusoftheOuterConductor() {
  return Number(capacitanceofSphericalCapacitor.value) / Number(bookValueofAsset.value);
}

function computeRadiusoftheInnerConductor() {
  return Number(capacitanceofSphericalCapacitor.value) / Number(depreciationRate.value);
}