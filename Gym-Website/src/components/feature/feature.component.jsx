import { Featurebox } from "./featurebox.component";
import fimage1 from "../../assets/1.svg";
import fimage2 from "../../assets/2.svg";
import fimage3 from "../../assets/3.svg";
import fimage4 from "../../assets/4.svg";
export function Feature() {
  return (
    <div id="features">
      <h1>FEATURES</h1>
      <div className="a-container">
        <Featurebox image={fimage1} title="WeightLifting" />
        <Featurebox image={fimage2} title="Specific Muscles" />
        <Featurebox image={fimage3} title="Flex Your Muscles" />
        <Featurebox image={fimage4} title="Cardio Exercise" />
      </div>
    </div>
  );
}
