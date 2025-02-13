"use client";

import React, { useRef, useState } from "react";
import charts from "./@imports/charts";
import maps from "./@imports/maps";
import GraphSkeleton from "@/components/random_temp/GraphSkeleton";
import { SortableDiv } from "@/components/@global/features/SortableDiv";

const Geral = ({
  data,
  // year,
  months,
}: {
  data: any;
  // year: string;
  months: number;
}) => {

  const [chartOrder, setChartOrder] = useState(charts.map((_, index) => index));

  // REF do container e REF da instância do Sortable
  const sortableContainerRef = useRef<HTMLDivElement>(null);

  console.log(maps[0])
  const { Component }: any = maps[0]

  return (
    <div>
      <div className="place-items-center z-0 mb-6">
        <div className="bg-white shadow-md rounded-lg p-4 w-full overflow-x-hidden flex flex-col items-center">
          <Component data={data.coords || []} />
        </div>
      </div>
      <SortableDiv chartOrder={chartOrder} setChartOrder={setChartOrder} sortableContainerRef={sortableContainerRef} style="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-6 place-items-center">
        {chartOrder.map((index) => {
          const { Component } = charts[index];
          return (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg p-4 w-full overflow-x-hidden flex flex-col items-center"
            >
              <React.Suspense fallback={<GraphSkeleton />}>
                <Component data={data}  months={months} />
              </React.Suspense>
            </div>
          );
        })}
      </SortableDiv>
    </div>
  );
};

export default Geral;
