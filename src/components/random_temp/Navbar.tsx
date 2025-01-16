"use client";

import { useState, useEffect } from "react";
import FocusHidden from "../@global/features/FocusHidden";
import { useDashboard } from "@/context/DashboardContext";

const ChevronIcon = ({ up = false }: { up?: boolean }) => (
  <svg
    className={`h-4 w-4 text-gray-500 transition-transform duration-200 ${
      up ? "rotate-180" : ""
    }`}
    viewBox="0 0 20 20"
  >
    <path d="M6 8l4 4 4-4" />
  </svg>
);

const Navbar = () => {
  const { filters, applyFilters, resetFilters } = useDashboard();

  // Estado local: "tempFilters" é o rascunho do que o usuário edita antes de aplicar
  const [tempFilters, setTempFilters] = useState(filters);

  // Exibe ou oculta o modal de filtros
  const [filtersVisible, setFiltersVisible] = useState(false);

  // Dropdowns abertos para cada label
  const [dropdowns, setDropdowns] = useState<Record<string, boolean>>({});

  // Campos de busca por label
  const [searchTerms, setSearchTerms] = useState<Record<string, string>>({});

  // Mensagem inicial (true => exibe)
  const [showInitialMessage, setShowInitialMessage] = useState(true);

  // Sempre que o 'filters' global mudar, copiamos para "tempFilters"
  useEffect(() => {
    setTempFilters(filters);
  }, [filters]);

  /** Some com a mensagem inicial ao menor sinal de interação */
  const hideInitialMessage = () => {
    if (showInitialMessage) {
      setShowInitialMessage(false);
    }
  };

  /** Toggle do painel principal de filtros */
  const toggleFiltersVisible = () => {
    setFiltersVisible((prev) => !prev);
  };

  /** Toggle do dropdown específico */
  const toggleDropdown = (label: string) => {
    setDropdowns((prev) => ({ ...prev, [label]: !prev[label] }));
  };

  /** Marca/desmarca individualmente */
  const handleCheckboxChange = (label: string, option: string) => {
    setTempFilters((prev) => {
      const updated = prev.additionalFilters.map((f: any) =>
        f.label === label
          ? {
              ...f,
              selected: f.selected.includes(option)
                ? f.selected.filter((x: string) => x !== option)
                : [...f.selected, option],
            }
          : f
      );
      return { ...prev, additionalFilters: updated };
    });
  };

  /** Selecionar/deselecionar tudo */
  const handleSelectAll = (label: string) => {
    setTempFilters((prev) => {
      const updated = prev.additionalFilters.map((f: any) => {
        if (f.label !== label) return f;
        const allSelected = f.selected.length === f.options.length;
        return {
          ...f,
          selected: allSelected ? [] : [...f.options],
        };
      });
      return { ...prev, additionalFilters: updated };
    });
  };

  /** Busca local */
  const handleSearchChange = (label: string, value: string) => {
    setSearchTerms((prev) => ({ ...prev, [label]: value }));
  };

  /** Ao clicar em "Aplicar", chamamos applyFilters do contexto */
  const onApplyFilters = () => {
    hideInitialMessage();
    applyFilters(tempFilters);
    setFiltersVisible(false);
  };

  /** Ao clicar em "Limpar Filtros" */
  const onResetFilters = () => {
    hideInitialMessage();
    resetFilters();
  };

  return (
    <div className="w-full bg-gray-50 flex flex-col items-start gap-4 py-4 px-4">
      <button
        onClick={toggleFiltersVisible}
        className="inline-flex items-center gap-2 text-sm font-medium text-gray-700 px-4 py-2 border border-gray-300 rounded-md"
      >
        {filtersVisible ? "Esconder Filtros" : "Exibir Filtros"}
        <ChevronIcon up={filtersVisible} />
      </button>

      {/* Resumo dos filtros atuais */}
      <div className="p-4 bg-white shadow-md rounded-lg text-sm text-gray-700">
        <span className="font-medium text-lg text-gray-800">Filtros selecionados:</span>
        <ul className="flex flex-wrap gap-4 mt-2">
          <li>
            Ano: <strong>{filters.year || 2024}</strong>
          </li>
          {filters.additionalFilters?.map((f: any) => {
            if (f.selected?.length > 0) {
              const visible = f.selected.slice(0, 5).join(", ");
              const remaining = f.selected.length - 5;
              return (
                <li key={f.label}>
                  {f.label}: <strong>{visible}</strong>
                  {remaining > 0 && <span> ... e outros {remaining}</span>}
                </li>
              );
            }
            return null;
          })}
        </ul>

        {/* Aviso inicial */}
        {showInitialMessage && (
          <p className="mt-2 text-xs text-red-600">
            Para consultar todos os dados, limpe ou altere os filtros.
          </p>
        )}
      </div>

      {/* Modal principal de filtros */}
      {filtersVisible && tempFilters && (
        <FocusHidden open={filtersVisible} setOpen={setFiltersVisible}>
          <div className="absolute rounded-lg border bg-white p-6 shadow-sm z-50">
            <h2 className="mb-4 text-base font-semibold text-gray-800">Filtros</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {/* Seletor de Ano */}
              <div className="flex flex-col">
                <label className="text-xs font-medium text-gray-600 mb-1">ANO</label>
                <select
                  value={tempFilters.year || "2024"}
                  onChange={(e) => {
                    setTempFilters((prev) => ({ ...prev, year: e.target.value }));
                  }}
                  className="px-3 py-2 border text-sm rounded-md"
                >
                  {filters.years?.map((yr: string) => (
                    <option key={yr} value={yr}>
                      {yr}
                    </option>
                  ))}
                </select>
              </div>

              {/* Additional filters */}
              {tempFilters.additionalFilters?.map((f: any) => (
                <div key={f.label} className="relative flex flex-col">
                  <label className="text-xs font-medium text-gray-600 mb-1">{f.label}</label>
                  <button
                    onClick={() => {
                      toggleDropdown(f.label);
                    }}
                    className="w-full flex justify-between items-center px-3 py-2 border rounded-md text-sm"
                  >
                    <span>
                      {f.selected?.length
                        ? `${f.selected.length} selecionado(s)`
                        : "Nenhum selecionado"}
                    </span>
                    <ChevronIcon up={dropdowns[f.label]} />
                  </button>

                  {dropdowns[f.label] && (
                    <FocusHidden
                      open={dropdowns[f.label]}
                      setOpen={(val) =>
                        setDropdowns((prev) => ({ ...prev, [f.label]: val }))
                      }
                    >
                      <div className="absolute z-50 mt-1 p-4 bg-white border shadow-md max-h-60 overflow-y-auto">
                        <input
                          type="text"
                          placeholder="Pesquisar..."
                          value={searchTerms[f.label] || ""}
                          onChange={(e) => {
                            handleSearchChange(f.label, e.target.value);
                          }}
                          className="border rounded mb-2 px-2 py-1 text-sm w-full"
                        />
                        <button
                          onClick={() => {
                            handleSelectAll(f.label);
                          }}
                          className="text-blue-600 font-medium hover:underline w-[max-content] block mb-2"
                        >
                          {f.selected.length === f.options.length
                            ? "Desselecionar Todos"
                            : "Selecionar Todos"}
                        </button>

                        {f.options
                          .filter((op: string) =>
                            op
                              .toLowerCase()
                              .includes((searchTerms[f.label] || "").toLowerCase())
                          )
                          .map((op: string) => (
                            <label key={op} className="flex items-center gap-2 py-1 text-sm">
                              <input
                                type="checkbox"
                                checked={f.selected.includes(op)}
                                onChange={() => {
                                  handleCheckboxChange(f.label, op);
                                }}
                                className="h-4 w-4 text-blue-600"
                              />
                              {op}
                            </label>
                          ))}
                      </div>
                    </FocusHidden>
                  )}
                </div>
              ))}

              {/* Botões no final */}
              <div className="col-span-full flex justify-end mt-4 gap-4">
                <button onClick={onResetFilters} className="bg-gray-100 px-4 py-2 rounded-md">
                  Limpar Filtros
                </button>
                <button
                  onClick={onApplyFilters}
                  className="bg-blue-600 text-white px-4 py-2 rounded-md"
                >
                  Aplicar Filtros
                </button>
              </div>
            </div>
          </div>
        </FocusHidden>
      )}
    </div>
  );
};

export default Navbar;
