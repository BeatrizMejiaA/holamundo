function ejecutar() {
  // Datos poliza
  var policyPrice = 250;
  var totalAmmount = 0;

  // Datos Asegurado
  var ageInsured = parseInt(document.getElementById('edad').value);
  var firstNameInsured = document.getElementsByName('nombre');
  var LastNameInsured = document.getElementsByName('apellido');
  var haveSpuse = document.getElementsByName("casado");

  if (haveSpuse == "Si") {
    haveSpuse = true;
  } else {
    haveSpuse = false;
  }

  var haveSon = false;
  var chargeInsured = 0;

  // Datos conyuge
  var ageSpouse = parseInt(document.getElementById('edad-conyug').value);
  var chargeSpouse = 0;

  // datos hijos
  var numberSonsUnder21 = parseInt(document.getElementsByName('cantidad-hijos').value);
  var chargeSons = 0;


  var informacion = "carne: 18010346 Nombre:Leticia Beatriz Mejía Agustín";

  // Total pago poliza + recargo por edad
  if (ageInsured < 18) {
      alert("Debe ser mayor de edad");
  } else if (ageInsured >= 18 && ageInsured < 21) {
      chargeInsured = 0
  } else if (ageInsured >= 21 && ageInsured < 25) {
      chargeInsured = policyPrice * 0.01;
  } else if (ageInsured >= 25 && ageInsured < 30) {
      chargeInsured = policyPrice * 0.02;
  } else if (ageInsured >= 30 && ageInsured < 40) {
      chargeInsured = policyPrice * 0.05;
  } else if (ageInsured >= 40 && ageInsured < 50) {
      chargeInsured = policyPrice * 0.08;
  } else if (ageInsured >= 50 && ageInsured <= 65) {
      chargeInsured = policyPrice * 0.12;
  } else  {
      alert("Lo sentimos, no aplica para ser asegurado");
  }

  // Cálculo recargo conyugue por edad
  if (haveSpuse = true) {
      if (ageSpouse < 30) {
          chargeSpouse = policyPrice * 0.01;
      } else if (ageSpouse >= 30 && ageSpouse <40) {
          chargeSpouse = policyPrice * 0.02;
      } else if (ageSpouse >= 40 && ageSpouse < 50) {
          chargeSpouse = policyPrice * 0.03;
      } else if (ageSpouse >= 50 && ageSpouse < 70) {
          chargeSpouse = policyPrice * 0.05;
      } else {
          alert("Lo sentimos, el conyugue no aplica para ser asegurado");
      }
  }

  // Cálculo recargo hijos menores a 21
  if (haveSon) {
      chargeSons = policyPrice * (numberSonsUnder21 / 100)
  }

  totalAmmount = policyPrice + chargeInsured + chargeSpouse + chargeSons;

  console.log(totalAmmount);

}
