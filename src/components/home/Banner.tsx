import { useState } from "react";
import Image from "next/image";
import { NavBarHome } from "./NavBarHome";

interface BannerProps {
  onSearch: (term: string) => void;
}

export const Banner: React.FC<BannerProps> = ({ onSearch }) => {
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onSearch(event.target.value); // Envia o termo para o componente pai
  };

  return (
    <div className="relative">
      {/* Gradiente de fundo */}
      <div className="absolute bottom-0 w-full h-[50px] bg-gradient-to-b from-transparent to-white transition-opacity duration-[20ms] ease-out dark:opacity-0 dark:duration-[460ms]"></div>
  
      {/* Gradiente escuro */}
      <div className="absolute bottom-0 w-full h-[50px] bg-gradient-to-b from-transparent to-[#0C1B2B] transition-opacity duration-[300ms] ease-out opacity-0 dark:opacity-100 dark:duration-[590ms]"></div>

      {/* Seção principal */}
      <section className="bg-[url('/images/backgrounds/home_carousel/goodJesusStreet.png')] w-full bg-center">
        {/* Cabeçalho */}
        <header className="bg-black bg-opacity-37 text-blue-900 w-full flex items-center justify-center py-3 px-3">
          <div className="flex w-[80%] content_wrapper">
            <div className="logo_container">
              <Image
                src="/images/logos/PREF-REC-LOGO.png"
                alt="Prefeitura do Recife"
                width={100}
                height={60}
              />
            </div>
            <div className="flex items-center ml-auto text-sm title-container">
              <p className="text-white text-sm">Prefeitura da Cidade do Recife</p>
            </div>
          </div>
        </header>

        {/* Navegação */}
        <NavBarHome />

        {/* Conteúdo */}
        <div className="flex flex-col justify-center items-center">
          <div className="pt-32 pb-60 gap-px w-full flex flex-col justify-center items-center">
            <h1 className="text-white font-medium text-3xl mb-[2.5em] text-center">
              OBSERVATÓRIO ECONÔMICO DO RECIFE
            </h1>

            {/* Campo de busca */}
            <div className="relative input-content lg:w-2/6">
              <span className="absolute top-[0.5em] left-[0.5em]">
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 48 48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M35.9518 5.20428C36.8786 4.6851 37.4838 4.34858 37.9648 4.15674C38.4178 3.9761 38.6162 3.9853 38.7514 4.0204C38.8848 4.05508 39.058 4.14116 39.3546 4.51406C39.671 4.91186 40.0208 5.49506 40.5562 6.39494L42.764 10.105C43.2996 11.0051 43.6452 11.5902 43.8418 12.0543C44.0264 12.4903 44.0124 12.6703 43.9806 12.786C43.948 12.9035 43.865 13.0695 43.4768 13.3601C43.0656 13.6679 42.463 14.008 41.536 14.5273L33.672 18.9324C32.7948 19.4237 32.2274 19.7391 31.7778 19.918C31.3566 20.0856 31.1848 20.0716 31.076 20.0428C30.9672 20.014 30.8114 19.9414 30.5314 19.5884C30.2328 19.2116 29.901 18.6585 29.3902 17.8001L27.0322 13.8376C26.5076 12.9559 26.17 12.3842 25.9778 11.931C25.7972 11.5056 25.8116 11.3328 25.841 11.224C25.8706 11.1153 25.9456 10.9586 26.3176 10.6792C26.7136 10.3816 27.2956 10.0531 28.1966 9.54838L35.9518 5.20428Z"
                    fill="#BEC6FC"
                  />
                  <path
                    d="M17.2756 16.9016L24.1741 13.0374C24.4277 13.5635 24.7813 14.1578 25.1815 14.8303L27.6099 18.9109C27.9763 19.5267 28.3033 20.0762 28.6185 20.5254L25.5247 22.2584L33.8767 41.8364C34.2151 42.6296 33.8379 43.5434 33.0343 43.8774C32.2305 44.2114 31.3047 43.8392 30.9663 43.046L24.0005 26.717L17.0346 43.046C16.6962 43.8392 15.7703 44.2114 14.9666 43.8774C14.1629 43.5434 13.7857 42.6296 14.1241 41.8364L21.5187 24.5024C20.7139 24.9528 20.1801 25.2462 19.753 25.4162C19.3318 25.5838 19.1599 25.5698 19.0512 25.541C18.9424 25.5122 18.7865 25.4396 18.5066 25.0866C18.2079 24.7098 17.8762 24.1566 17.3654 23.2984L16.1113 21.1908C15.5867 20.3092 15.2491 19.7374 15.0567 19.2842C14.8762 18.8588 14.8905 18.686 14.92 18.5772C14.9496 18.4685 15.0247 18.3118 15.3965 18.0324C15.7927 17.7348 16.3746 17.4063 17.2756 16.9016Z"
                    fill="#BEC6FC"
                  />
                </svg>
              </span>
              <input
                className="bg-white bg-opacity-7 border border-[#959595] w-full rounded-2xl py-3.5 pl-20 text-white focus:outline-none hover:border-[#C5DFFF] focus:border-white focus:ring-1 focus:ring-[#C5DFFF]"
                placeholder="Pesquise por títulos, descrições..."
                type="text"
                onChange={handleInputChange} // Chama a função ao digitar
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
