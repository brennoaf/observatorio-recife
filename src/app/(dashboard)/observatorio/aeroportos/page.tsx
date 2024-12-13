"use client";

import React, { useEffect, useState } from "react";
import { useDashboard } from "@/context/DashboardContext";
import { LoadingScreen } from "@/components/home/LoadingScreen";
import { AeroportoData } from "@/@api/http/to-charts/aeroporto/AeroportoData";
import { aeroportoDataFilter } from "@/utils/filters/data_filters/aeroportoDataFilter";

// Importa as guias
import Geral from "./(geral)/geral";

const AeroportosPage = () => {
  const { filters } = useDashboard();
  const [data, setData] = useState([]) as any;
  const [filteredData, setFilteredData] = useState([]) as any;
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState("geral");

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const aeroportoService = new AeroportoData(filters.year);

      try {
        const fetchedData = await aeroportoService.fetchProcessedData();
        setData(fetchedData);
      } catch (error) {
        console.error("Erro ao buscar dados:", error);
        setError("Erro ao buscar os dados. Tente novamente mais tarde.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [filters.year]);

  useEffect(() => {
    const filtered = aeroportoDataFilter(data, filters);
    setFilteredData(filtered);
  }, [data, filters]);

  if (loading) return <LoadingScreen />;
  if (error) return <p className="text-red-500 text-center">{error}</p>;

  const renderContent = () => {
    switch (activeTab) {
      case "geral":
        return <Geral data={filteredData} />;
      case "embarque":
        return "Estatísticas de Embarque";
      default:
        return <Geral data={filteredData} />;
    }
  };

  return (
    <div className="p-6 min-h-screen">
      <h1 className="text-3xl font-bold text-gray-800 text-center mb-6">
        Movimentação de Aeroportos
      </h1>

      <div className="flex justify-center gap-4 mb-6">
        <button
          onClick={() => setActiveTab("geral")}
          className={`px-4 py-2 rounded ${
            activeTab === "geral" ? "bg-blue-500 text-white" : "bg-gray-200"
          }`}
        >
          Resumo Geral
        </button>
        <button
          onClick={() => setActiveTab("embarque")}
          className={`px-4 py-2 rounded ${
            activeTab === "embarque" ? "bg-blue-500 text-white" : "bg-gray-200"
          }`}
        >
          Estatísticas
        </button>
      </div>

      {renderContent()}
    </div>
  );
};

export default AeroportosPage;
