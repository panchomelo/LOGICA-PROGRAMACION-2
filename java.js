function obtenerCelsius() {
  let valorCelsius = document.getElementById("Celsius").value;
  let CelsiusFloat = parseFloat(valorCelsius);

  if (!isNaN(CelsiusFloat)) {
    let gradosKelvin = CelsiusFloat + 273.15;
    let gradosFarenheit = CelsiusFloat * 1.8 + 32;
    alert(`la temperatura en gradius Kelvin es ${gradosKelvin}`);
    alert(`la temperatura en grados Farenheit es ${gradosFarenheit}`);
  } else {
    alert("dato incorrecto, por favor ingrese un número");
  }
}
