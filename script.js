document.getElementById('calcular').addEventListener('click', function () {
    // Capturar os valores dos campos
    const valorVenda = parseFloat(document.getElementById('valorVenda').value) || 0;
    const itens = document.getElementById('itens').value;
    const irpf = parseFloat(document.getElementById('irpf').value) || 0;
    const pis = parseFloat(document.getElementById('pis').value) || 0;
    const cofins = parseFloat(document.getElementById('cofins').value) || 0;
    const inss = parseFloat(document.getElementById('inss').value) || 0;
    const issqn = parseFloat(document.getElementById('issqn').value) || 0;

    // Calcular os valores dos impostos
    const impostos = [
        { nome: 'IRPF', porcentagem: irpf, valor: (valorVenda * irpf) / 100 },
        { nome: 'PIS', porcentagem: pis, valor: (valorVenda * pis) / 100 },
        { nome: 'COFINS', porcentagem: cofins, valor: (valorVenda * cofins) / 100 },
        { nome: 'INSS', porcentagem: inss, valor: (valorVenda * inss) / 100 },
        { nome: 'ISSQN', porcentagem: issqn, valor: (valorVenda * issqn) / 100 }
    ];

    // Calcular o total de impostos
    const totalImpostos = impostos.reduce((total, imposto) => total + imposto.valor, 0);

    // Calcular o lucro
    const lucro = valorVenda - totalImpostos;

    // Atualizar os resultados na tabela
    document.getElementById('itens-vendidos').innerText = itens;
    document.getElementById('valor-venda').innerText = `R$ ${valorVenda.toFixed(2)}`;

    // Exibir os valores dos impostos na tabela
    document.getElementById('irpf').innerText = irpf > 0 ? `R$ ${(valorVenda * irpf) / 100}` : '-/-';
    document.getElementById('pis').innerText = pis > 0 ? `R$ ${(valorVenda * pis) / 100}` : '-/-';
    document.getElementById('cofins').innerText = cofins > 0 ? `R$ ${(valorVenda * cofins) / 100}` : '-/-';
    document.getElementById('inss').innerText = inss > 0 ? `R$ ${(valorVenda * inss) / 100}` : '-/-';
    document.getElementById('issqn').innerText = issqn > 0 ? `R$ ${(valorVenda * issqn) / 100}` : '-/-';

    // Exibir o total de impostos
    document.getElementById('total-impostos').innerText = `R$ ${totalImpostos.toFixed(2)}`;

    // Exibir o lucro
    document.getElementById('lucro').innerText = `R$ ${lucro.toFixed(2)}`;
});



function resetPage() {
    location.reload();
}