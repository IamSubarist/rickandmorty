import headerLogo from "../../assets/header-logo.svg";

// const Component = () => ( ... )
export const Header = () => {
  return (
    // Фрагмент здесь не нужен.
    <>
      <div className="flex flex-row justify-between items-center">
        {/* alt стоит или заполнить или не использовать. */}
        <img src={headerLogo} />
        <div className="menu__link flex gap-5">
          {/* 
            Вынести элементы меню в отдельный переиспользуемый компонент.

            Структура может быть следующая: 
              [{
                id: number,
                name: string,
                link: string,
              }]
          */}
          <a className="font-bold" href="/">
            Characters
          </a>
          <a className="font-bold" href="/">
            Location
          </a>
          <a className="font-bold" href="/">
            Episodes
          </a>
        </div>
      </div>
    </>
  );
};
