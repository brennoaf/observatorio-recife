"use client";

import React from "react";
import VerticalScrollableBarChart from "@/components/@global/charts/VerticalScrollableBarChart";
import ColorPalette from "@/utils/palettes/charts/ColorPalette";
import ChartGrabber from "@/components/@global/features/ChartGrabber";
import { embarqueDesembarqueNatureTipo } from "@/functions/process_data/observatorio/aeroporto/embarque/embarqueDesembarqueNaturezaTipo";

const DecolagensEmbarqueDom = ({
  data = [],
  toCompare = ["Recife"],
  title = "Doméstico Decolagens",
  colors = ColorPalette.default,
  type,
  monthRecent,
}: any) => {
  // Assumimos que o filtro de dados (ano, etc.) já foi aplicado antes de passar para o componente.
  const chartData = embarqueDesembarqueNatureTipo(
    data,
    toCompare,
    "Doméstica",
    "decolagens",
    type,
    monthRecent
  );

  return (
    <div className="relative bg-white w-full p-4">
      <ChartGrabber>
        <VerticalScrollableBarChart
          data={chartData}
          title={`${type} ${title}`}
          colors={colors}
          xKey="uf"
          bars={[{ dataKey: "total", name: "Decolagens" }]}
          height={400} // Altura do viewport visível para scroll
          barSize={30} // Altura individual de cada barra
        />
      </ChartGrabber>
    </div>
  );
};

export default DecolagensEmbarqueDom;