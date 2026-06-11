import Navbar from "@/components/Navbar";
import Slider from "@/components/Slider";
import GameRow from "@/components/GameRow";
import TrendingSection from "@/components/TrendingSection";
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

      <Footer />
    </>
  );
}