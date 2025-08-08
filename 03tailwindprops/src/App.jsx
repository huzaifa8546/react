import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./components/Card";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    // <>
    //   <Navbar />
    //   <div className="pt-20 px-4"></div>

    //   <Card
    //     heading="Apple Watch Series 9 GPS, Aluminium Case, Starlight Sport"
    //     price="$699"
    //     image="https://www.apple.com/newsroom/images/2023/09/apple-introduces-the-advanced-new-apple-watch-series-9/article/Apple-Watch-S9-hero-230912_Full-Bleed-Image.jpg.large.jpg"
    //   />
    //   <br></br>
    //   <Card
    //     heading="Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport"
    //     price="$499"
    //     image="https://images.macrumors.com/t/6TiN7cvXvrC3vo4vqPaaCdY9cnk=/1600x0/article-new/2022/08/Apple-Watch-Series-7-v-8-1.jpg"
    //   />
    //   <br></br>
    //   <Card
    //     heading="Apple Watch Series 8 GPS, Aluminium Case, Starlight Sport"
    //     price="$399"
    //     image="https://hicomm.bg/uploads/articles/202205/70003/apple-watch8.jpg?1652975998028"
    //   />

    //   <br></br>

    //   <Footer />
    // </>
    <div className="min-h-screen flex flex-col bg-white dark:bg-gray-900">
      {/* Navbar fixed on top */}
      <Navbar />

      {/* Main content */}
      <main className="pt-20 px-4 pb-20 bg-white dark:bg-gray-900">
        <div className="max-w-6xl mx-auto space-y-6">
          <Card
            heading="Apple Watch Series 9 GPS, Aluminium Case, Starlight Sport"
            price="$699"
            image="https://www.apple.com/newsroom/images/2023/09/apple-introduces-the-advanced-new-apple-watch-series-9/article/Apple-Watch-S9-hero-230912_Full-Bleed-Image.jpg.large.jpg"
          />
          <Card
            heading="Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport"
            price="$499"
            image="https://images.macrumors.com/t/6TiN7cvXvrC3vo4vqPaaCdY9cnk=/1600x0/article-new/2022/08/Apple-Watch-Series-7-v-8-1.jpg"
          />
          <Card
            heading="Apple Watch Series 8 GPS, Aluminium Case, Starlight Sport"
            price="$399"
            image="https://hicomm.bg/uploads/articles/202205/70003/apple-watch8.jpg?1652975998028"
          />
        </div>
      </main>

      {/* Footer always at bottom */}
      <Footer />
    </div>
  );
}

export default App;
