import React from "react";

const charts = [
  {
    Component: React.lazy(
      () =>
        import(
          "@/components/@build/observatorio/charts/aeroporto/comparativo/PassageirosAnoComparativo"
        )
    ),
  },
  {
    Component: React.lazy(
      () =>
        import(
          "@/components/@build/observatorio/charts/aeroporto/comparativo/CargasAnoComparativo"
        )
    ),
  },
  {
    Component: React.lazy(
      () =>
        import(
          "@/components/@build/observatorio/charts/aeroporto/comparativo/DecolagensAnoComparaivo"
        )
    ),
  },
];

export default charts;
