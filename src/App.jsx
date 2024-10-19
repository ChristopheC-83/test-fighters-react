import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ErrorPage from "./pages/ErrorPage";
import CreateCharacterPage from "./pages/CreateCharacterPage";
import Layout from "./components/Layout";
import LocalCharactersPage from "./pages/LocalCharactersPage";
import SpreadOp from "./pages/SpreadOp";
import ApiCharactersPage from "./pages/ApiCharactersPage";
import AllCharacters from "./pages/AllCharacters";
import ModifyCharacterPage from "./pages/ModifyCharacterPage ";
import NoUpdatePage from "./pages/NoUpdatePage";

const router = createBrowserRouter([
  {
    path: "/", // Correspond à la racine du site (ex. http://localhost:3000/)
    element: <Layout />, // Le composant "Layout" sera rendu ici

    children: [
      { path: "/", element: <HomePage /> },
      { path: "/ApiCombattants", element: <ApiCharactersPage /> },
      { path: "/creer-un-personnage", element: <CreateCharacterPage /> },
      { path: "/combattants-locaux", element: <LocalCharactersPage /> },
      { path: "/tous-les-combattants", element: <AllCharacters /> },
      { path: "/modifier-personnage/:id", element: <ModifyCharacterPage /> },
      { path: "/modification-impossible", element: <NoUpdatePage /> },
      { path: "/spread", element: <SpreadOp /> },
      { path: "/*", element: <ErrorPage /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
