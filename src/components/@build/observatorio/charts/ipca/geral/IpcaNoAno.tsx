"use client";

import React from "react";
import ChartGrabber from "@/components/@global/features/ChartGrabber";
import VerticalScrollableBarChart from "@/components/@global/charts/VerticalScrollableBarChart";
import ColorPalette from "@/utils/palettes/charts/ColorPalette";
import { processIpcaNoAno } from "@/functions/process_data/observatorio/ipca/geral/charts/ipcaNoAno";

const IpcaAcumuladoPorCapital = ({
  rawData = [],
  nameKey = "capital",
  colors = ColorPalette.default,
  title = "IPCA Acumulado ao Ano por Capital",
}: any) => {
  
  // Processamento inicial dos dados
  const chartData = processIpcaNoAno(rawData);

  return (
    <div className="chart-wrapper">
      <ChartGrabber>
        <VerticalScrollableBarChart
          data={chartData}
          title={title}
          colors={colors}
          xKey={nameKey}
          widthY={100}
          left={5}
          bars={[{ dataKey: "acumuladoAno", name: "Acumulado no Ano (%)", barWidth: 30 }]}
        />
      </ChartGrabber>
    </div>
  );
};

export default IpcaAcumuladoPorCapital;