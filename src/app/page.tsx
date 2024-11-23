import FeatureWork from "./components/FeatureWork";
import Hero from "./components/Hero";
import PostSection from "./components/PostSection";

export default function Home() {
  return (
    <div className="bg-background">
      <Hero/>
      <PostSection/>
      <FeatureWork/>
    </div>
  );
}
