import Image from "next/image";

export const ObsHeader = () => {
    return (
        <header className="bg-white text-blue-900 w-full flex items-center justify-center py-3 px-3 dark:text-white dark:bg-[#0C1B2B]">
        <div className="flex w-[80%] content_wrapper">
          <div className="logo_container dark:invert dark:grayscale dark:brightness-0 duration-0 dark:duration-0">
            <Image
              src="/images/logos/prefeitura_recife_header.avif"
              alt="Prefeitura do Recife"
              width={100}
              height={60}
              unoptimized
            />
          </div>
          <div className="flex items-center ml-auto text-sm title-container">
            <p className="header-title">Prefeitura da Cidade do Recife</p>
            </div>
        </div>
      </header>
      )
}