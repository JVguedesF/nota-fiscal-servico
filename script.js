document.getElementById('calcular').addEventListener('click', function () {
    const valorVenda = parseFloat(document.getElementById('valorVenda').value) || 0;
    const itens = document.getElementById('itens').value;
    const irpf = parseFloat(document.getElementById('irpf').value) || 0;
    const pis = parseFloat(document.getElementById('pis').value) || 0;
    const cofins = parseFloat(document.getElementById('cofins').value) || 0;
    const inss = parseFloat(document.getElementById('inss').value) || 0;
    const issqn = parseFloat(document.getElementById('issqn').value) || 0;

 
    const valorIRPF = (valorVenda * irpf) / 100;
    const valorPIS = (valorVenda * pis) / 100;
    const valorCOFINS = (valorVenda * cofins) / 100;
    const valorINSS = (valorVenda * inss) / 100;
    const valorISSQN = (valorVenda * issqn) / 100;
    
    const totalImpostos = valorIRPF + valorPIS + valorCOFINS + valorINSS + valorISSQN;

    
    const lucro = valorVenda - totalImpostos;

    document.getElementById('itens-vendidos').innerText = itens;
    document.getElementById('valor-venda').innerText = `R$ ${valorVenda.toFixed(2)}`;
    document.getElementById('irpf-valor').innerText = `R$ ${valorIRPF.toFixed(2)}`; 
    document.getElementById('pis-valor').innerText = `R$ ${valorPIS.toFixed(2)}`; 
    document.getElementById('cofins-valor').innerText = `R$ ${valorCOFINS.toFixed(2)}`; 
    document.getElementById('inss-valor').innerText = `R$ ${valorINSS.toFixed(2)}`; 
    document.getElementById('issqn-valor').innerText = `R$ ${valorISSQN.toFixed(2)}`; 
    document.getElementById('total-impostos').innerText = `R$ ${totalImpostos.toFixed(2)}`;
    document.getElementById('lucro').innerText = `R$ ${lucro.toFixed(2)}`;

});

function resetPage() {
    location.reload();
}
