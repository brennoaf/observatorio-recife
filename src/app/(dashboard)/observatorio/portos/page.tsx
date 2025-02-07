"use client";

import React, { useState, useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { useDashboard } from "@/context/DashboardContext";
import { LoadingScreen } from "@/components/home/LoadingScreen";
import Geral from "./(geral)/geral";
import Comparativo from "./(comparativo)/comparativo";
import Embarque from "./(embarque)/embarque";
import AenaPage from "./(aena)/aena";
import { getYearSelected } from "@/utils/filters/@global/getYearSelected";
import { getMonths } from "@/utils/filters/@global/getMonths";
import { prepareCargasPorAcaoData } from "@/functions/process_data/observatorio/porto/geral/charts/transacaoPorAcao";
import { processAtracacoesPorCarga } from "@/functions/process_data/observatorio/porto/geral/charts/transacaoProdutos";
import { processAtracacoesPorMes } from "@/functions/process_data/observatorio/porto/geral/charts/transacaoPorMes";
import { processarCargasPorTipo } from "@/functions/process_data/observatorio/porto/operacao/cards/portosCargasTotalizadores";

const PortosPage = () => {
  const searchParams = useSearchParams();
  const { isLoading, data, filters } = useDashboard();
  const [porto, setPorto] = useState({});
  const [activeTab, setActiveTab] = useState("geral");
  const router = useRouter();

  useEffect(() => {
      const tab = searchParams.get("tab");
      if (tab && tab !== activeTab) {
        setActiveTab(tab);
        
      }else if (!tab){
        setActiveTab('geral');
        router.replace(`?tab=${'geral'}`);
      }
    }, [searchParams, activeTab]);

  useEffect(() => {
      // console.log("Dados recebidos:", data);
  
      if (data) {
        // Extraindo os dados de passageiros e cargas
        // const anacData = data.geral || {};
  
        // const portoData = {
        //   atracacao: data?.atracacao?.filteredData,
        //   carga: data?.carga?.filteredData,
        //   ...data
        // }

        const portoData = {
          ...data,
          atracacao: data?.atracacao?.filteredData,
          carga: data?.carga,
        }

        // console.log('ATRACACAA', data?.atracacao?.filteredData)
        console.log('PORTODATA ___---___', portoData)
        console.log('dfdfnj', portoData.atracacao, portoData.carga)
        // console.log('GRAFICO 1 de pizza', prepareCargasPorAcaoData(portoData.atracacao, portoData.carga))
        // console.log('GRAFICO 2 de tabela', processAtracacoesPorCarga(portoData.atracacao, portoData.carga))
        // console.log('GRAFICO 3 de LINHA', processAtracacoesPorMes(portoData.atracacao, portoData.carga))

        // console.log('OPERACAO CARDS', processarCargasPorTipo(portoData.atracacao, portoData.carga))

        setPorto(portoData)

        // setPorto(anacData.filteredData || []);
  
        // console.log('AAA_M', data)

        // console.log("Dados filtrados - Anac:", anac);
        // console.log(filters.additionalFilters[4]);
      }
    }, [data]);
  
    if (isLoading) return <LoadingScreen />;

  const renderContent = () => {
    if (!data) {
      return <div className="text-center text-gray-600">Carregando dados...</div>;
    }

  switch (activeTab) {
    case "geral":
      return <Geral 
        data={porto || {}}
        // rawData={data?.geral?.rawData || []}
        // year={getYearSelected(filters)}
        months={getMonths(filters)}
      />;
      //FAVOR, EDITAR ESTE TOCOMPARE PARA SER SETTADO COM BASE EM DATA PARA DEPOIS SÓ PRECISAR SETAR O FILTRO DA TAB COMO
      // DEFAULTFILTERS E CONSEGUIR PASSAR SOMENTE O ANO.
    case "comparativo":
      return <Comparativo
        data={porto || []} 
        year={getYearSelected(filters)}
        months={getMonths(filters)}
      />;
    case "embarque":
      return <Embarque 
        data={porto || []}
        toCompare={filters.additionalFilters[4]?.selected}
      />;
    case "aena":
      return <AenaPage months={getMonths(filters)} />;
    default:
      return <Geral 
      data={porto || {}}
      // year={getYearSelected(filters)}
      months={getMonths(filters)}
      />;
  }
};

  const handleNavigation = (tab: string) => {
    setActiveTab(tab);
    router.replace(`?tab=${tab}`);
  };

  if (isLoading) return <LoadingScreen />;

  return (
    <div className="p-6 min-h-screen mt-48">
      <h1 className="text-4xl font-bold text-gray-800 text-center mb-8 tracking-wide">
        Movimentação dos Portos
      </h1>
      <div className="flex justify-center gap-6 mb-8 flex-wrap">
        {/* Botões de navegação */}
        <button
          onClick={() => handleNavigation("geral")}
          className={`px-6 py-3 rounded-lg flex-1 sm:flex-0 min-w-[250px] max-w-[350px] text-lg font-semibold transition-all duration-300 ease-in-out transform hover:scale-105 shadow-lg ${
            activeTab === "geral"
              ? "bg-gradient-to-r from-orange-500 to-orange-700 text-white"
              : "bg-gray-300 text-gray-500"
          }`}
        >
          Geral
        </button>
        <button
          onClick={() => handleNavigation("operacao")}
          className={`px-6 py-3 rounded-lg flex-1 sm:flex-0 min-w-[300px] max-w-[350px] text-lg font-semibold transition-all duration-300 ease-in-out transform hover:scale-105 shadow-lg ${
            activeTab === "operacao"
              ? "bg-gradient-to-r from-blue-500 to-blue-700 text-white"
              : "bg-gray-300 text-gray-500"
          }`}
        >
          Operação
        </button>
        <button
          onClick={() => handleNavigation("comparativo")}
          className={`px-6 py-3 rounded-lg flex-1 sm:flex-0 min-w-[250px] max-w-[350px] text-lg font-semibold transition-all duration-300 ease-in-out transform hover:scale-105 shadow-lg ${
            activeTab === "comparativo"
              ? "bg-gradient-to-r from-green-500 to-green-700 text-white"
              : "bg-gray-300 text-gray-500"
          }`}
        >
          Comparativo
        </button>
        <button
          onClick={() => handleNavigation("passageiros")}
          className={`px-6 py-3 rounded-lg flex-1 sm:flex-0 min-w-[250px] max-w-[350px] text-lg font-semibold transition-all duration-300 ease-in-out transform hover:scale-105 shadow-lg ${
            activeTab === "aena"
              ? "bg-gradient-to-r from-purple-500 to-purple-700 text-white"
              : "bg-gray-300 text-gray-500"
          }`}
        >
          Movimentaçaõ de Passageiros
        </button>
      </div>
      {renderContent()}
    </div>
  );
};

export default PortosPage;
