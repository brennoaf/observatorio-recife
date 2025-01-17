import { useEffect, useState } from "react";

/**
 * Componente ObservatorioWave
 * 
 * Este componente apresenta um fundo animado, ondas decorativas e cartões
 * informativos, com transições suaves. Ideal para páginas de apresentação como "Sobre".
 */
export const AboutUs = () => {
  const [currentImage, setCurrentImage] = useState<string>("/images/about/about-1.png");
  const [transitionClass, setTransitionClass] = useState<string>("");

  useEffect(() => {
    const images = [
      "/images/about/about-1.png",
      "/images/about/about-2.png",
      "/images/about/about-3.png",
    ];

    let index = 0;
    const interval = setInterval(() => {
      setTransitionClass("fade-out"); // Inicia fade-out

      setTimeout(() => {
        index = (index + 1) % images.length; // Próxima imagem
        setCurrentImage(images[index]);
        setTransitionClass("fade-in"); // Inicia fade-in
      }, 600);
    }, 8000);

    return () => clearInterval(interval); // Limpa intervalo ao desmontar
  }, []);

  const renderWave = (position: "top" | "bottom", extraClasses = "") => (
    <div
      className={`absolute ${position === "top" ? "top-0" : "bottom-0"} left-0 right-0 ${
        position === "bottom" ? "transform scale-y-[-1]" : ""
      } ${extraClasses}`}
    >
      <svg
        className="w-full h-[150px] lg:h-[200px] fill-[#ffffff] dark:fill-[#0C1B2B] transition-all"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
      >
        <path
          fillOpacity="0.3"
          d="M0,64L30,90.7C60,117,120,171,180,186.7C240,203,300,181,360,160C420,139,480,117,540,133.3C600,149,660,203,720,229.3C780,256,840,256,900,234.7C960,213,1020,171,1080,170.7C1140,171,1200,213,1260,208C1320,203,1380,149,1410,122.7L1440,96L1440,0L1410,0C1380,0,1320,0,1260,0C1200,0,1140,0,1080,0C1020,0,960,0,900,0C840,0,780,0,720,0C660,0,600,0,540,0C480,0,420,0,360,0C300,0,240,0,180,0C120,0,60,0,30,0L0,0Z"
        />
      </svg>
    </div>
  );

  const renderCard = (
    title: string,
    description: string,
    additionalClasses: string = ""
  ) => (
    <div
      className={`backdrop-blur-sm bg-white/90 dark:bg-[#0C1B2B]/90 p-8 rounded-3xl shadow-xl transform transition-all duration-200 hover:-translate-y-3 ${additionalClasses}`}
    >
      <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-800 dark:text-gray-200 mb-4">
        {title}
      </h2>
      <p className="text-base lg:text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
        {description}
      </p>
    </div>
  );

  return (
    <section className="relative w-full flex flex-col items-center justify-center overflow-hidden text-white mt-4 mb-4 z-0">
      {/* Fundo com transição de imagem */}
      <div className="absolute inset-0">
        <img
          src={currentImage}
          alt="Fundo rotativo"
          className={`w-full h-full object-cover transition-transform duration-1000 ${transitionClass}`}
        />
        {/* Overlay escuro para contraste */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black/80" />
      </div>

      {/* Ondas decorativas */}
      {renderWave("top")}
      {renderWave("bottom")}

      {/* Seção de Cartões Flutuantes */}
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-3 gap-8 p-8 max-w-6xl mt-10 mb-16">
        {renderCard(
          "Sobre Nós",
          "O Observatório Econômico do Recife é uma iniciativa da Prefeitura do Recife, em parceria com a Faculdade Senac, que oferece uma análise detalhada do panorama econômico da cidade. Nosso objetivo é criar pontes entre dados confiáveis e decisões estratégicas."
        )}
        {renderCard(
          "Nossa Visão",
          "Acreditamos que a transparência de dados e a análise especializada podem impulsionar o desenvolvimento de políticas públicas efetivas, investimentos sociais responsáveis e crescimento econômico sustentável para toda a população."
        )}
        {renderCard(
          "Nossos Valores",
          "Somos guiados por inovação, ética, colaboração e compromisso social. Trabalhamos para tornar o Recife mais inclusivo e competitivo, promovendo a troca de conhecimento entre o poder público, a academia, o setor privado e a sociedade civil.",
          "lg:col-span-1"
        )}
      </div>
    </section>
  );
};
