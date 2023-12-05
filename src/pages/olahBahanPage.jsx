import Navbar from "../components/navbarComponent";
import OlahBahanList from "../components/olahBahanListComponent";
// import "../style/page.css";
// import "../style/olahBahan.css";
function ModulOlahBahanPage() {
  return (
    <div>
      <Navbar />
      <div className="container">
        <h1 className="text-center ">Modul Olah Bahan</h1>
        <OlahBahanList />
      </div>
    </div>
  );
}

export default ModulOlahBahanPage;
