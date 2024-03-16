// import Atropos component
import Atropos from "atropos/react";
import SampleImage from "./mobile_pics/free_open_source.png";

export default function AppSample() {
  return (
    <div id="app">
      <Atropos
        activeOffset={40}
        shadowScale={1.05}
        onEnter={() => console.log("Enter")}
        onLeave={() => console.log("Leave")}
        onRotate={(x, y) => console.log("Rotate", x, y)}
      >
        {/* <Precautions /> */}
      </Atropos>
    </div>
  );
}
