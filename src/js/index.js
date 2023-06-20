AllConvert();
menuMobile();
function AllConvert() {
  function DomElement(seletor) {
    return document.querySelector(seletor);
  }

  const inputElement = DomElement("#input");
  const fromElement = DomElement("#from");
  const toElement = DomElement("#to");
  const outputElement = DomElement("#output");
  const convertButton = DomElement("#convert-btn");
  const message = DomElement("#message");
  // Função para converter unidade
  function convert() {
    const fromValue = fromElement.value;
    const toValue = toElement.value;
    if (fromValue === toValue) {
      outputElement.value = inputElement.value;
      message.textContent = "";
      return;
    }

    // Conversão da entrada para metros
    let meters;
    switch (fromValue) {
      case "m":
        meters = inputElement.value;
        break;
      case "km":
        meters = inputElement.value * 1000;
        break;
      case "cm":
        meters = inputElement.value / 100;
        break;
      case "mm":
        meters = inputElement.value / 1000;
        break;
    }
    // Conversão de metros para unidade de saída
    let result;
    switch (toValue) {
      case "m":
        result = meters;
        break;
      case "km":
        result = meters / 1000;
        break;
      case "cm":
        result = meters * 100;
        break;
      case "mm":
        result = meters * 1000;
        break;
    }
    // Resultado
    outputElement.value = result;
    const fromLabel = fromElement.options[fromElement.selectedIndex].text;
    const toLabel = toElement.options[toElement.selectedIndex].text;
    const resultMessage = `${inputElement.value} ${fromLabel} equivale a ${result} ${toLabel}`;
    message.textContent = resultMessage;
    return;
    console.log(toLabel, fromLabel);
  }

  convertButton.addEventListener("click", convert);
}

function menuMobile() {
  const btnMobile = document.getElementById("btn-mobile");

  function toggleMenu() {
    const nav = document.getElementById("nav");
    nav.classList.toggle("active");
  }
  btnMobile.addEventListener("click", toggleMenu);
}
