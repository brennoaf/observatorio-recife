/** 
 * Aqui temos o nosso "mapa" de rotas para filtros. A ideia é colocar cada rota
 * como chave do objeto e, dentro dela, mapear as possíveis abas (tabs) para
 * diferentes conjuntos de filtros.
 */
import { defaultFilters } from "@/utils/filters/defaultFilters";
import { anacFilters } from "@/utils/filters/aeroporto/anacFilters";
import { aenaFilters } from "@/utils/filters/aeroporto/aenaFilters";
import { balancaComercialFilters } from "../utils/filters/balanca-comercial/balancaComercialFilters";
// Se houver outros filtros específicos pra outras rotas, importe eles também.

export const routeFiltersMap: Record<
  string, 
  Record<string, Record<string, any>> | Record<string, any>
> = {
  "/observatorio/aeroportos": {
    // Se estivermos em /observatorio/aeroportos, podemos ter
    // "geral" apontando para anacFilters, ou "aena" apontando para aenaFilters.
    geral: anacFilters,
    comparativo: anacFilters,
    embarque: anacFilters,
    aena: aenaFilters,
    // Se existirem outras tabs, adicione aqui.
  },

  "/observatorio/balanca-comercial": {
    geral: {
      ...balancaComercialFilters,
    },
    analitico: {
      ...defaultFilters
    },
  },

  // E assim por diante pra outras rotas...
};

/**
 * Se nenhuma rota ou aba for encontrada, usamos esse fallback
 * para não quebrar a aplicação.
 */
export const fallbackFilters = defaultFilters;