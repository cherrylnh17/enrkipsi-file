import Navbar from "@/components/Navbar";
import LandingPage from "@/components/LandingPage";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="bg-slate-950 text-slate-200">
      <Navbar />
      <LandingPage />
      <Footer />
    </div>
  );
}
