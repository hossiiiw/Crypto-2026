import "./App.css";
import AppRoute from "./routes/AppRoute";

function App() {
  return (
    <>
      <div className="min-h-screen pb-20 lg:pb-0 bg-app-background text-text transition-colors duration-300">
        <AppRoute />
      </div>
    </>
  );
}

export default App;
