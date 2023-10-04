const cepInput = document.querySelector("#cep")
const cidadeInput = document.querySelector("#city")

cepInput.addEventListener("keypress", (e) => {
    const onlyNumbers = /[0-9]/;
    const key = String.fromCharCode(e.keyCode);

    if(!onlyNumbers.test(key)) {
        e.preventDefault();
        return;
    }
});

cepInput.addEventListener("keyup", (e) =>{
    const inputValue = e.target.value;

    if(inputValue.length === 8){
        getAddress(inputValue);
    }
});

const getAddress = async (cep) => {
    cepInput.blur();

    const apiUrl = `https://viacep.com.br/ws/${cep}/json/`
    const response = await fetch(apiUrl);
    const data = await response.json();
    
    if(data.erro === "true"){
        addressForm.reset();
        return;
    }

    cidadeInput.value = data.localidade;
};