import { Link } from "react-router-dom";


export default function ErrorPage() {
  return (
    <div>
      <h1 className="text-4xl text-center">Je sens qu'on est perdu... non ?</h1>
      <Link to="/" ><p className="text-xl text-center">Retour à l'accueil ?</p></Link>
          </div>
  );
}
