"use client";

import React from "react";
import ScrollableBarChart from "@/components/@global/charts/VerticalScrollableBarChart";
import ColorPalette from "@/utils/palettes/charts/ColorPalette";
import ChartGrabber from "@/components/@global/features/ChartGrabber";
import { getPortoCountryNameByCode } from "@/utils/formatters/getPortoCountryNameByCode";
import { processCargasLongoCurso } from "@/functions/process_data/observatorio/porto/operacao/charts/paisesImportados";

const PaisesImportados = ({
  data,
  color = ColorPalette.default,
  porto,
  title = "Países Importados"  + ` - ${porto}`,
  year,
}: any) => {

  const chartData = getPortoCountryNameByCode(processCargasLongoCurso(data.atracacao, data.carga, 'importacao'), data.dictionaries.origem, 'Origem')

  return (
    <div className="chart-wrapper">
      <ChartGrabber>
        <ScrollableBarChart
          data={chartData}
          title={title}
          xKey="pais"
          bars={[{ dataKey: "totalVLPesoCargaBruta", name: "Carga (Ton)" }]}
          colors={[color]}
          heightPerCategory={50}
        />
      </ChartGrabber>
    </div>
  );
};

export default PaisesImportados;
