import { NavLink } from "react-router-dom";

export default function Navbar() {

  const navItems=[
    {text: "Accueil", path: "/"},
    {text: "ApiCombattants", path: "/ApiCombattants"},
    {text: "Combattants Locaux", path: "/combattants-locaux"},
    {text: "Team Complete", path: "/tous-les-combattants"},
    // {text: "yawp", path: "/truc"},


    
  ]
  return (
    <nav className="p-4 mb-3 border-2 border-bottom customShadow">
      <div className="container flex justify-between mx-auto">
        <NavLink
          to="/"
          className={({ isActive }) => 
            `text-2xl ${isActive ? 'underline' : ''}`
          }
        >
          La taverne des Combattants
        </NavLink>
        <div className="flex gap-3">
          {navItems.map((item, index) => (
            <NavLink
              key={index}
              to={item.path}
              className={({ isActive }) => 
                `text-xl ${isActive ? 'underline' : ''}`
              }
            >
              {item.text}
            </NavLink>


          ))}
          {/* <NavLink
            to="/"
            className={({ isActive }) => 
              `text-xl ${isActive ? 'underline' : ''}`
            }
          >
            Accueil
          </NavLink>
          <NavLink
            to="/tous-les-personnages"
            className={({ isActive }) => 
              `text-xl ${isActive ? 'underline' : ''}`
            }
          >
            Tous les Combattants
          </NavLink> */}
        </div>
      </div>
    </nav>
  );
}
