import "./App.css";
import Header from "./components/layout/Header";
import MobileNav from "./components/layout/MobileNav";
import Landing from "./pages/Landing";

function App() {
  return (
    <>
      <body class="min-h-screen pb-20 lg:pb-0 bg-app-background text-text">
        <Header />
        <Landing/>
        <MobileNav/>
      </body>
    </>
  );
}

export default App;
