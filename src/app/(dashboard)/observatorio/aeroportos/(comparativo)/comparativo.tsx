import React, { useState, useEffect, useRef } from "react";
import ColorPalette from "@/utils/palettes/charts/ColorPalette";
import cards from "./@imports/cards";
import charts from "./@imports/charts";
import tables from "./@imports/tables";
import SelectPrincipal from "@/components/@global/features/SelectPrincipal";
import GraphSkeleton from "@/components/random_temp/GraphSkeleton";
import { getUniqueValues } from "@/utils/filters/@global/getUniqueValues";
import { ProcessedData } from "@/@types/observatorio/aeroporto/processedData";
import { SortableDiv } from "@/components/@global/features/SortableDiv";

// AEROPORTO NOME

const Comparativo = ({
  year,
  data,
  toCompare = getUniqueValues<ProcessedData, "AEROPORTO NOME">(
    data,
    "AEROPORTO NOME"
  ),
  months,
}: {
  year: string;
  toCompare?: any;
  data: any[];
  months: number;
}) => {
  const [pageCompare, setPageCompare] = useState(0);
  const [tempFiltred, setTempFiltred] = useState([]);
  const [tablesRender, setTablesRender] = useState(tables);
  const [animationClass, setAnimationClass] = useState("card-enter");

  const [chartOrder, setChartOrder] = useState(charts.map((_, index) => index));
  const [tableOrder, setTableOrder] = useState(tables.map((_, index) => index));

  // REF do container e REF da instância do Sortable
  const sortableContainerRef = useRef<HTMLDivElement>(null);
  const sortableContainerTableRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const getNewTables = tempFiltred.map((val) => {
      return {
        Component: React.lazy(
          () =>
            import(
              "@/components/@build/observatorio/tables/aeroporto/comparativo/AeroportoInfo"
            )
        ),
      };
    });
    setTablesRender([...tables, ...getNewTables]);
  }, [tempFiltred]);

  const handlePageChange = (direction: "prev" | "next") => {
    setAnimationClass("card-exit"); // Aplica a animação de saída
    setTimeout(() => {
      setPageCompare((prevPage) =>
        direction === "next"
          ? prevPage === tempFiltred.length - 1
            ? 0
            : prevPage + 1
          : prevPage === 0
          ? tempFiltred.length - 1
          : prevPage - 1
      );
      setAnimationClass("card-enter"); // Aplica a animação de entrada após a mudança
    }, 500); // Tempo suficiente para a animação de saída
  };

  return (
    <div>
      <SelectPrincipal
        options={toCompare}
        filters={tempFiltred}
        setFilters={setTempFiltred}
        label="Compare Aeroportos"
        placeholder="Digite para buscar um aeroporto"
        notFoundMessage="Nenhum aeroporto encontrado"
      />

      <div className="flex justify-between items-center gap-2">
        {tempFiltred.length >= 1 ? (
          <>
            <button
              className="border transition duration-500 hover:bg-slate-200 bg-white rounded-full w-10 h-10 flex items-center justify-center"
              onClick={() => handlePageChange("prev")}
            >
              <svg
                className={`h-4 w-4 text-gray-500 transition-transform duration-200 rotate-90`}
                viewBox="0 0 20 20"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M6 8l4 4 4-4" />
              </svg>
            </button>

            <div className="w-[85%] flex flex-wrap gap-4 justify-center mb-2">
              {tempFiltred.map((toCompare: string) => {
                return cards.map(({ Component }, index) => (
                  <React.Suspense fallback={<div>Carregando...</div>} key={index}>
                    <div
                      className={`${
                        toCompare === tempFiltred[pageCompare]
                          ? animationClass
                          : "hidden"
                      } flex-1`}
                    >
                      <Component
                        toCompare={toCompare}
                        data={data}
                        year={year}
                        color={ColorPalette.default[index]}
                      />
                    </div>
                  </React.Suspense>
                ));
              })}
            </div>

            <button
              className="border transition duration-500 hover:bg-slate-200 bg-white rounded-full w-10 h-10 flex items-center justify-center"
              onClick={() => handlePageChange("next")}
            >
              <svg
                className={`h-4 w-4 text-gray-500 transition-transform duration-200 -rotate-90`}
                viewBox="0 0 20 20"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M6 8l4 4 4-4" />
              </svg>
            </button>
          </>
        ) : (
          <p className="text-center w-full text-gray-700">
            Selecione um aeroporto para as informações serem comparadas
          </p>
        )}
      </div>

      <div className="flex items-center justify-center mb-6 gap-2">
        {tempFiltred.map((_, i) => {
          return (
            <button
              key={i}
              onClick={() => setPageCompare(i)}
              className={`transition duration-200 hover:bg-slate-200 h-4 w-4 ${
                pageCompare === i ? "bg-slate-500" : "bg-white"
              } rounded-full border`}
            ></button>
          );
        })}
      </div>

      <div className="flex flex-col gap-6">
       
      <SortableDiv chartOrder={chartOrder} setChartOrder={setChartOrder} sortableContainerRef={sortableContainerRef} style="charts-items-wrapper">
        {chartOrder.map((index) => {
          const { Component } = charts[index];
          return (
            <div
              key={index}
              className={`chart-content-wrapper`}
            >
              <React.Suspense fallback={<GraphSkeleton />}>
                <Component
                  data={data}
                  toCompare={["Recife", ...tempFiltred]}
                  months={months}
                />
              </React.Suspense>
            </div>
          );
        })}
      </SortableDiv>


        <SortableDiv chartOrder={tableOrder} setChartOrder={setTableOrder} sortableContainerRef={sortableContainerTableRef} style="charts-items-wrapper">
          {tablesRender.map(({ Component }, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg w-100 flex flex-col items-center"
            >
              <React.Suspense fallback={<div>Carregando...</div>}>
                <Component
                  airport={["Recife", ...tempFiltred][index]}
                  color={ColorPalette.default[index]}
                  data={data}
                  year={year}
                />
              </React.Suspense>
            </div>
          ))}
        </SortableDiv>
      </div>
    </div>
  );
};

export default Comparativo;
