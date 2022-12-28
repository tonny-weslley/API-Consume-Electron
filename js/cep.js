function handleCEP(){
    const cep = document.getElementById('cep').value;
    if(cep.length == 8){
        document.getElementById('cep').disabled = true;
        preencherCampos();
    }
}

async function getCep() {
    const cep = document.getElementById('cep').value;
    const url = `https://viacep.com.br/ws/${cep}/json/`;
    const data = await fetch(url);
    const json = await data.json();
    return json;
  }

function preencherCampos(){
    getCep().then((data) => {
        if(data.logradouro){
            const logradouro = document.getElementById('logradouro');
            logradouro.innerHTML = data.logradouro;
            logradouro.disabled = true;
        }
        if(data.complemento){
            const complemento = document.getElementById('complemento');
            complemento.innerHTML = data.complemento;
            complemento.disabled = true;
        }
        if(data.bairro){
            const bairro = document.getElementById('bairro');
            bairro.innerHTML = data.bairro;
            bairro.disabled = true;
        }
        if(data.localidade){
            const localidade = document.getElementById('localidade');
            localidade.innerHTML = data.localidade;
            localidade.disabled = true;
        }
        if(data.uf){
            const uf = document.getElementById('uf');
            uf.innerHTML = data.uf;
            uf.disabled = true;
        }
        if (data.ibge) {
            const ibge = document.getElementById('ibge');
            ibge.innerHTML = data.ibge;
            ibge.disabled = true;
        }
        if (data.gia) {
            const gia = document.getElementById('gia');
            gia.innerHTML = data.gia;
            gia.disabled = true;
        }
        if (data.ddd) {
            const ddd = document.getElementById('ddd');
            ddd.innerHTML = data.ddd;
            ddd.disabled = true;
        }
        if (data.siafi) {
            const siafi = document.getElementById('siafi');
            siafi.innerHTML = data.siafi;
            siafi.disabled = true;
        }
        if(data.erro == true){
            cpfError();
        }
    });
}