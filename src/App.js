import "./scss/index.scss";
import MainLayout from "./components/MainLayout";
import AddVendorForm from "./templates/AddVendorForm";

function App() {
  return (
    <div className="App">
      <MainLayout>
        <AddVendorForm />
      </MainLayout>
    </div>
  );
}

export default App;
