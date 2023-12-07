import Navbar from "../components/navbarComponent";
import EditAccount from "../components/editAccount";
import { Footer, AppFooter } from "../components/footer";

function EditAccountPage() {
  return (
    <div>
      <Navbar />
      <div className="container">
        <h1 className="text-center ">Edit Akun</h1>
        <EditAccount />
      </div>
      <Footer />
      <AppFooter />
    </div>
  );
}

export default EditAccountPage;
