import { AppProviders } from "./app/providers/Providers";
import { Content } from "./features/Content/components/Content";
import { Footer } from "./features/Footer/components/Footer";
import { Header } from "./features/Header/components/Header";

// Посмотреть архитектуру frontend приложений - FSD.
/* 
  Попробовать передалать на структуру:

  pages
    character-page
      character-page.tsx

  entities
    characers
      model
        characters-request.ts
      lib
        types.ts
        constants.ts

  views
    character-view
      character-view.tsx (будет содержать полностью собранную страницу с запросами и компонентами)

  widgets
  
  shared
    ui
      input
        ui
          input.tsx
        lib
          constants.ts
        modle
      select
    config
      query-config
    assets
      image
*/

export const App = () => {
  return (
    <AppProviders>
      <div className="w-3/5 mx-auto flex flex-col justify-center">
        <Header />
        <Content />
        <Footer />
      </div>
    </AppProviders>
  );
};
