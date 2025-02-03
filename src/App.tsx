import { AppProviders } from "./app/providers/AppProviders";
import { Characters } from "./pages/Characters";
import { Footer } from "./features/Footer/components/Footer";
import { Header } from "./features/Header/components/Header";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Locations } from "./pages/Locations";


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
      <Router>
        <Header />
        <div className="w-3/5 mx-auto flex flex-col justify-center">
          <Routes>
            <Route path="/" element={<Characters />} />
            <Route path="/locations" element={<Locations />} />
            {/* <Route path="/episodes" element={<Episodes />} /> */}
          </Routes>
        </div>
        <Footer />
      </Router>
    </AppProviders>
  );
};
