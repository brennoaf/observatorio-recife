import React from "react";

const charts = [
  // {
  //   Component: React.lazy(
  //     () =>
  //       import(
  //         "@/components/@build/observatorio/charts/aeroporto/geral/EmbarqueDesembarqueRegiao"
  //       )
  //   ),
  //   title: "Embarque e Desembarque por Região",
  // },
  // {
  //   Component: React.lazy(
  //     () =>
  //       import(
  //         "@/components/@build/observatorio/charts/aeroporto/geral/PassageirosAno"
  //       )
  //   ),
  // },
  // {
  //   Component: React.lazy(
  //     () =>
  //       import(
  //         "@/components/@build/observatorio/charts/aeroporto/geral/CargaAno"
  //       )
  //   ),
  // },
  // {
  //   Component: React.lazy(
  //     () =>
  //       import(
  //         "@/components/@build/observatorio/charts/aeroporto/geral/PassageirosPorAeroporto"
  //       )
  //   ),
  // },
  // {
  //   Component: React.lazy(
  //     () =>
  //       import(
  //         "@/components/@build/observatorio/charts/aeroporto/geral/CargaPorAeroporto"
  //       )
  //   ),
  // },
  // {
  //   Component: React.lazy(
  //     () =>
  //       import(
  //         "@/components/@build/observatorio/charts/aeroporto/geral/DecolagemPorAeroporto"
  //       )
  //   ),
  // },
  // {
  //   Component: React.lazy(
  //     () =>
  //       import(
  //         "@/components/@build/observatorio/charts/aeroporto/geral/PassageirosPorNatureza"
  //       )
  //   ),
  // },
  {
    Component: React.lazy(
      () =>
        import(
          "@/components/@build/observatorio/charts/aeroporto/embarque/PassageirosEmbarqueDom"
        )
    ),
  },
  {
    Component: React.lazy(
      () =>
        import(
          "@/components/@build/observatorio/charts/aeroporto/embarque/CargasEmbarqueDom"
        )
    ),
  },
  {
    Component: React.lazy(
      () =>
        import(
          "@/components/@build/observatorio/charts/aeroporto/embarque/DecolagensEmbarqueDom"
        )
    ),
  },
  {
    Component: React.lazy(
      () =>
        import(
          "@/components/@build/observatorio/charts/aeroporto/embarque/CargasIntEmbarque"
        )
    ),
  },
  {
    Component: React.lazy(
      () =>
        import(
          "@/components/@build/observatorio/charts/aeroporto/embarque/PassageirosIntEmbarque"
        )
    ),
  },
  {
    Component: React.lazy(
      () =>
        import(
          "@/components/@build/observatorio/charts/aeroporto/embarque/DecolagensIntEmbarque"
        )
    ),
  },
  {
    Component: React.lazy(
      () =>
        import(
          "@/components/@build/observatorio/charts/aeroporto/embarque/PassageirosComparativo"
        )
    ),
  },
  {
    Component: React.lazy(
      () =>
        import(
          "@/components/@build/observatorio/charts/aeroporto/embarque/CargasComparativo"
        )
    ),
  },
  {
    Component: React.lazy(
      () =>
        import(
          "@/components/@build/observatorio/charts/aeroporto/embarque/DecolagensComparativo"
        )
    ),
  },
];
export default charts;
