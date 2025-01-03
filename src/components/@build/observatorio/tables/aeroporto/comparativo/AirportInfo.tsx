import ChartGrabber from "@/components/@global/features/ChartGrabber";
import TableGeneric from "@/components/@global/tables/TableGeneric";
import { monthFormatter } from "@/utils/formatters/@global/dateArrFormatter";
import { formatNormalnumber } from "@/utils/formatters/@global/numberFormatter";

const AirportInfo = ({
  data = [],
  airport = 'Recife',
  year,
  color = '#000000'
}: any) => {
  // Filtra os dados com base no aeroporto e ano
  const aggregatedData = data
    .filter((item: any) => item["AEROPORTO NOME"] === airport && item["ANO"] === `${year}`)
    .reduce((acc: any, item: any) => {
      const mes = item["MÊS"];
      if (!acc[mes]) {
        acc[mes] = { MÊS: mes, PASSAGEIRO: 0, CARGA: 0, DECOLAGENS: 0 };
      }
      acc[mes].PASSAGEIRO += Number(item["PASSAGEIRO"]) || 0;
      acc[mes].CARGA += Number(item["CARGA"]) || 0;
      acc[mes].DECOLAGENS += Number(item["DECOLAGENS"]) || 0;
      return acc;
    }, {});

  const sortedData = Object.values(aggregatedData).sort((a: any, b: any) => parseInt(a.MÊS, 10) - parseInt(b.MÊS, 10));

  // Verifica se o dado foi agregado e se existe algum mês agregado
  const firstAggregated = Object.keys(aggregatedData)[0];
  
  if (!firstAggregated) {
    return <div>Nenhum dado econtrado</div>;
  }

  const header = Object.keys(aggregatedData[firstAggregated]);

  const getRows = (values: any) => {
    const rows: string[][] = [];

    values.map((obj: any) => {
      rows.push([monthFormatter(+obj.MÊS) || 'Desconhecido', formatNormalnumber(+obj.PASSAGEIRO), formatNormalnumber(+obj.CARGA), formatNormalnumber(+obj.DECOLAGENS)]);
    });

    return rows;
  };

  return (
    <div className="relative bg-white w-full p-4">
      <TableGeneric maxHeight={400} color={color} headers={header} title={`Dados de ${airport} (${year})`} rows={getRows(sortedData)} />
    </div>
  );
};

export default AirportInfo;
