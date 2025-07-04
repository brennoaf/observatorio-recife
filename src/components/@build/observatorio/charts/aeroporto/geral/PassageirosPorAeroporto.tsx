"use client";

import React from "react";
import ScrollableBarChart from "@/components/@global/charts/VerticalScrollableBarChart";
import ColorPalette from "@/utils/palettes/charts/ColorPalette";
import { preparePassageirosPorAeroportoData } from "@/functions/process_data/observatorio/aeroporto/geral/charts/passageirosPorAeroporto";
import ChartGrabber from "@/components/@global/features/ChartGrabber";

const PassageirosPorAeroporto = ({
  rawData,
  title = "Passageiros por Aeroporto",
  year,
}: any) => {
  const chartData = preparePassageirosPorAeroportoData(rawData);

  return (
    <div className="chart-wrapper">
      <ChartGrabber>
        <ScrollableBarChart
          data={chartData}
          title={title}
          xKey="aeroporto"
          left={10}
          bars={[{ dataKey: "total", name: "Passageiros" }]}
          colors={ColorPalette.default}
          heightPerCategory={50}
        />
      </ChartGrabber>
    </div>
  );
};

export default PassageirosPorAeroporto;
