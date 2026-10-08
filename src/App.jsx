import "./App.css";
import Header from "./components/layout/Header";
import MobileNav from "./components/layout/MobileNav";
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import AppRoute from "./routes/AppRoute";

function App() {
  return (
    <>
      <div className="min-h-screen pb-20 lg:pb-0 bg-app-background text-text">
        <AppRoute />
      </div>
    </>
  );
}

export default App;
