"use client";

import React from "react";
import StackerBarChartVertical from "@/components/@global/charts/StackedBarChartVertical";
import ColorPalette from "@/utils/palettes/charts/ColorPalette";
import { processImportacaoExportacaoPorPais } from "@/functions/process_data/observatorio/balanca-comercial/comercial/paisesImportacaoExportacao";

const ImportacaoExportacaoPorPais = ({
  data = [],
  colors = ColorPalette.default,
}: any) => {
  const chartData = processImportacaoExportacaoPorPais(data);
  console.log(chartData); // Verifique o formato dos dados aqui

  return (
    <div className="relative bg-white w-full p-4">
      <StackerBarChartVertical
        data={chartData}
        title="Importação vs Exportação por País"
        colors={colors}
        xKey="pais"
        bars={[
          { dataKey: "importacao", name: "Importação" },
          { dataKey: "exportacao", name: "Exportação" },
        ]}
        tooltipEntry=" dólares"
        heightPerCategory={60}  // Define a altura de cada categoria (barra)
        visibleHeight={300}  // Ajuste a altura do scroll
      />
    </div>
  );
};

export default ImportacaoExportacaoPorPais;
