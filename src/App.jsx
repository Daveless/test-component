import "./App.css";
import Brands from "./components/Brands";
import Footer from "./components/Footer";
import Guarantee from "./components/Guarantee";
import Main from "./components/Main";

function App() {
  return (
    <>
      <div className="w-full flex flex-col justify-center items-center gap-[2rem]">
        <header className="flex flex-col items-center gap-[1.5rem] sm:gap-0 w-full">
          <Guarantee />
          <Brands />
        </header>
        <Main />
        <Footer />
      </div>
    </>
  );
}

export default App;
