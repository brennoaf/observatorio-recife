export const variacaoMensalAnualIpca = (data: any[], capital: string) => {
  // Filtra os dados pela capital fornecida
  const dadosFiltrados = data.filter((dado) => dado.Capital === capital);

  const mensalTotal = dadosFiltrados.reduce((acc, obj) => {
    const objMensal = parseFloat(obj["IPCA - Variação mensal"]);

    return acc + objMensal;
  }, 0);

  if (dadosFiltrados.length === 0) {
    return {
      mês: "0",
      variaçãoMensal: "0",
      variaçãoAcumuladaNoAno: "0",
    }; // Nenhum dado encontrado para a capital
  }

  // Ordena os dados pelo mês de forma decrescente
  const dadosOrdenados = dadosFiltrados.sort(
    (a, b) => parseInt(b.MÊS) - parseInt(a.MÊS)
  );

  // Seleciona o maior mês (primeiro da lista ordenada)
  const maiorMes = dadosOrdenados[0];

  // Retorna as informações necessárias
  return {
    mês: maiorMes.Mês,
    // variaçãoMensal: maiorMes["variação mensal"],
    variaçãoMensal: mensalTotal.toFixed(2),
    variaçãoAcumuladaNoAno: maiorMes["IPCA - Variação acumulado no ano"],
  };
};
