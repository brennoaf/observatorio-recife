"use client";

import StackerBarChartVertical from "@/components/@global/charts/StackedVerticalBarChart";
import ColorPalette from "@/utils/palettes/charts/ColorPalette";
import { processImportacaoExportacaoPorPais } from "@/functions/process_data/observatorio/balanca-comercial/comercial/charts/paisesImportacaoExportacao";
import ChartGrabber from "@/components/@global/features/ChartGrabber";

const ImportacaoExportacaoPorPais = ({
  data = [],
  colors = ColorPalette.default,
}: any) => {
  const chartData = processImportacaoExportacaoPorPais(data);

  return (
    <div className="chart-wrapper">
      <ChartGrabber>
        <StackerBarChartVertical
        data={chartData}
        title="Importação vs Exportação por País"
        colors={colors.slice(1)}
        xKey="pais"
        bars={[
          { 
            dataKey: "importacao", 
            name: "Importação",
            showPercentage: true,
            percentageField: "percentualImportacao",
          },
          { 
            dataKey: "exportacao", 
            name: "Exportação",
            showPercentage: true,
            percentageField: "percentualExportacao",
          },
        ]}
        tooltipEntry=" dólares"
        heightPerCategory={60}  // Define a altura de cada categoria (barra)
        visibleHeight={400}  // Ajuste a altura do scroll
        left={0}
        widthY={100}
      />
      </ChartGrabber>
      
    </div>
  );
};

export default ImportacaoExportacaoPorPais;
