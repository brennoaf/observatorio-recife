export const processIpcaUltimos12Meses = (data: any[]) => {
    // Reduz os dados para calcular o acumulado por capital
    const processedData = data.reduce((acc: any, item: any) => {
      const capital = item["Capital"] || "Indefinido";

      if (capital == "Brasil") {
        return acc;
      }

      const acumuladoUltimosMeses = parseFloat(
        (item["IPCA - Variação acumulada em 12 meses"] || "0")
      ); // Converte o acumulado para número
  
      if (!acc[capital]) {
        acc[capital] = { capital, acumuladoUltimosMeses: 0 };
      }
      
      if(acc[capital].capital !== "Brasil") acc[capital].acumuladoUltimosMeses += acumuladoUltimosMeses;
  
      return acc;
    }, {});
  
    // Converte o objeto em uma lista e ordena pelo acumulado no ano (descendente)
    return Object.values(processedData).sort(
      (a: any, b: any) => b.acumuladoUltimosMeses - a.acumuladoUltimosMeses
    );
  };
  