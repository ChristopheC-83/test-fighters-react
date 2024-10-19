import { Outlet } from "react-router-dom";
import Navbar from "./navbar";
import Footer from "./Footer";
import { Toaster } from "sonner";

export default function Layout() {
  return (
    <main className="flex flex-col min-h-svh">
      <Navbar />
      <section className="container p-2 mx-auto grow">
      
      <Toaster position="top-center" richColors expand={true} />
        {/* C'est ici que les pages enfant comme HomePage seront rendues */}
        <Outlet />{" "}
      </section>
      <Footer />
    </main>
  );
}
