import React, { useState, useEffect } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";
import ChartGrabber from "@/components/@global/features/ChartGrabber";

const formatNumber = (value: number) => {
  return new Intl.NumberFormat("pt-BR", {
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(value);
};

interface GraficoPassageirosPorMesAnoProps {
  data: any[];
  municipio: string;
  year: string;
  color: Array<string>;
}

const GraficoPassageirosPorMesAno: React.FC<
  GraficoPassageirosPorMesAnoProps
> = ({ data, municipio, year, color }) => {
  const [showRecife, setShowRecife] = useState(true);
  const [windowWidth, setWindowWidth] = useState(768);

  useEffect(() => {
    const handleResize = () => {
      if (typeof window !== "undefined") {
        setWindowWidth(window.innerWidth);
      }
    };

    if (typeof window !== "undefined") {
      setWindowWidth(window.innerWidth);
      window.addEventListener("resize", handleResize);
    }

    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("resize", handleResize);
      }
    };
  }, []);

  const getProcessedData = (municipioFilter: string) => {
    return data.reduce((acc: any, item: any) => {
      const itemMunicipio = item["AEROPORTO NOME"];
      const itemAno = item["ANO"];
      const itemMes = item["MÊS"];
      const passageiros = parseInt(item["PASSAGEIRO"], 10) || 0;

      if (itemMunicipio === municipioFilter && itemAno === year) {
        acc[itemMes] = (acc[itemMes] || 0) + passageiros;
      }
      return acc;
    }, {});
  };

  const processedData = getProcessedData(municipio);
  const recifeData = getProcessedData("Recife");

  const chartData = Array.from({ length: 12 }, (_, index) => ({
    mes: (index + 1).toString(),
    [municipio]: processedData[(index + 1).toString()] || 0,
    recife: showRecife ? recifeData[(index + 1).toString()] || 0 : null,
  }));

  const tickFontSize = windowWidth < 768 ? 8 : windowWidth <= 1120 ? 10 : 12;
  const titleFontSize = windowWidth < 768 ? 12 : windowWidth <= 1120 ? 20 : 12;

  return (
    <div className="w-full bg-white p-6 rounded-lg shadow-lg">
      <ChartGrabber>
        <h3
          className="text-center font-semibold mb-4"
          style={{ fontSize: `${titleFontSize}px` }}
        >
          Passageiros em {municipio} ({year}){" "}
          {showRecife && "e Recife para Comparação"}
        </h3>
        <div className="text-center mb-4 button-container">
          <button
            onClick={() => setShowRecife(!showRecife)}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            {showRecife ? "Ocultar Recife" : "Mostrar Recife"}
          </button>
        </div>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart
            data={chartData}
            margin={{ top: 20, right: 20, left: 5, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis
              dataKey="mes"
              tick={{ fontSize: tickFontSize }}
              label={{
                value: "Meses",
                position: "insideBottomRight",
                offset: -5,
              }}
            />
            <YAxis
              tick={{ fontSize: tickFontSize }}
              label={{
                value: "Passageiros",
                angle: -90,
                position: "insideLeft",
                offset: 1,
                fontSize: 12,
              }}
            />
            <Tooltip formatter={(value) => formatNumber(value as number)} />
            <Legend />
            <Line
              type="monotone"
              dataKey={municipio}
              stroke={color[0]}
              strokeWidth={2}
            />
            {showRecife && (
              <Line
                type="monotone"
                dataKey="recife"
                stroke={color[1]}
                strokeWidth={2}
              />
            )}
          </LineChart>
        </ResponsiveContainer>
      </ChartGrabber>
    </div>
  );
};

export default GraficoPassageirosPorMesAno;
