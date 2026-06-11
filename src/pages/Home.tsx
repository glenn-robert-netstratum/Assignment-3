import Navbar from "@/components/Navbar";
import Slider from "@/components/Home/Slider";
import GameRow from "@/components/Home/GameRow";
import TrendingSection from "@/components/Home/TrendingSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Slider />

      <GameRow title="PlayStation Games" />
      <GameRow title="Xbox Games" />
      <TrendingSection/>
      <GameRow title="PC Games" />
      <div className="mt-20">
        <Footer />
      </div>
    </>
  );
}