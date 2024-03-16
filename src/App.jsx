import AppIcon from "./icons/icon.png";
import GooglePlay from "./icons/google_play.png";
import AvailableInWeb from "./icons/available_in_web.png";
import SampleImage from "./mobile_pics/free_open_source.png";
import QrCode from "./mobile_pics/qr_code.png";
import { OpenSource } from "./components/openSource";
import Precautions from "./mobile_pics/precautions.png";
import HomeScreen from "./mobile_pics/home_screen.png";

function App() {
  let currentDate = new Date();
  let currentFullYear = currentDate.getFullYear();
  return (
    <div className="scroll-smooth">
      <header id="airBubble" className=" h-auto max-w-full gradient-effect">
        <section className="flex flex-row p-6">
          <span className="">
            <img src={AppIcon} width={"60%"} height={"auto"} />
          </span>
          <h1 className="text-white text-3xl font-medium">Air&nbsp;IQ</h1>
        </section>
      </header>
      <main className="">
        {/**md -> ipad's  */}
        <OpenSource />
        <section className="bg-black h-auto flex flex-row ">
          <div className="p-24 flex flex-row -mt-8">
            <div className="ps-16 pt-12 md:ps-4">
              <h1
                style={{ lineHeight: "3.0rem" }}
                className="text-4xl text-white poppins-medium"
              >
                Free&nbsp;&&nbsp;open-source
                <br />
                air pollution tracking
              </h1>
              <h3 className="text-white py-5 text-lg">
                Visualize your environment impact with automated
                <br />
                air quality index and commute tracking.
              </h3>
            </div>
            <img
              src={SampleImage}
              alt="free open source"
              width={"60%"}
              height={"auto"}
              className="ps-12 md:ps-2 md:max-w-full"
            />
          </div>
        </section>
        <section className="bg-black h-auto flex flex-row xl:hidden 2xl:hidden">
          <div className="p-24 flex flex-row -mt-8">
            <div className="ps-16 pt-12 md:ps-4">
              <h1
                style={{ lineHeight: "3.0rem" }}
                className="text-4xl text-white poppins-medium"
              >
                Free&nbsp;&&nbsp;open-source
                <br />
                air pollution tracking
              </h1>
              <h3 className="text-white py-5 text-lg">
                Visualize your environment impact with automated
                <br />
                air quality index and commute tracking.
              </h3>
            </div>
            <img
              src={SampleImage}
              alt="free open source"
              width={"60%"}
              height={"auto"}
              className="ps-12 md:ps-2 md:max-w-full"
            />
          </div>
        </section>
        <section className="bg-teal-700 xl:h-auto xl:flex xl:flex-row 2xl:h-auto 2xl:flex 2xl:flex-row md:hidden xl:justify-center">
          <img
            src={Precautions}
            alt="face mask"
            className="p-12 w-auto h-[500px] object-cover"
            width={"45%"}
            height={"auto"}
          />
          <div className="p-24">
            <h1
              style={{ lineHeight: "3.0rem" }}
              className="text-4xl text-white poppins-medium"
            >
              Take precautions before <br /> the disease eats you
            </h1>
            <h3 className="text-white py-6 text-lg">
              Polluted air triggers respiratory woes like asthma, bronchitis.
              <br /> It can worsen heart disease, stroke, even cancer. <br />
              Children and elderly are most at risk.
            </h3>
          </div>
        </section>
        <section className="bg-teal-700 xl:hidden 2xl:hidden md:flex md:flex-col-reverse ">
          <img
            src={Precautions}
            alt="face mask"
            className="md:ps-12 md:pt-12 md:w-auto md:h-96 md:object-cover"
          />
          <div className="p-24">
            <h1
              style={{ lineHeight: "3.0rem" }}
              className="text-4xl text-white poppins-medium"
            >
              Take precautions before <br /> the disease eats you
            </h1>
            <h3 className="text-white py-6 text-lg">
              Polluted air triggers respiratory woes like asthma, bronchitis.
              <br /> It can worsen heart disease, stroke, even cancer. <br />
              Children and elderly are most at risk.
            </h3>
          </div>
        </section>
        <section
          style={{ backgroundColor: "#023e8a" }}
          className="xl:h-auto xl:flex xl:flex-row md:hidden flex-row h-auto flex ps-24 "
        >
          <div className="p-24 ">
            <h1
              style={{ lineHeight: "3.0rem" }}
              className="text-4xl text-white poppins-medium"
            >
              Breathe Easier: Expert Advice on <br /> Air Pollution's Health
              Impacts
            </h1>
            <h3 className="text-white py-6 text-lg">
              This informative session empowers you to breathe easier! <br />
              Experts shed light on air pollution's health risks, <br />
              offering valuable guidance to protect yourself and your loved
              ones.
            </h3>
          </div>
          <img
            src={HomeScreen}
            alt="doctor consultancy"
            width={"45%"}
            height={"auto"}
            className="md:p-12 md:w-auto md:h-[500px]"
          />
        </section>
        {/* <section
          style={{ backgroundColor: "#023e8a" }}
          className="h-auto flex flex-row xl:hidden 2xl:hidden md:flex md:flex-col"
        >
          <div className="p-24 md:text-left">
            <h1
              style={{ lineHeight: "3.3rem" }}
              className="text-4xl text-white poppins-medium"
            >
              Breathe Easier: Expert Advice on <br /> Air Pollution's Health
              Impacts
            </h1>
            <h3 className="text-white py-6 text-lg">
              This informative session empowers you to breathe easier! <br />
              Experts shed light on air pollution's health risks, offering
              valuable guidance to protect yourself and your loved ones.
            </h3>
          </div>
          <img
            src={HomeScreen}
            alt="doctor consultancy"
            width={"45%"}
            height={"auto"}
            className="pb-6 md:w-full md:h-full md:p-12 md:-mt-32"
          />
        </section> */}
        <section className="bg-white p-24 text-center">
          <div className=" items-center">
            <h1 className="text-5xl">
              Get Air&nbsp;IQ on the Google Play <br /> and{" "}
              <a href="#airBubble" className="underline decoration-blue">
                the web
              </a>
            </h1>
            <br />
            <h3 className="text-lg pt-8">
              Air&nbsp;Bubble is free for everyone. No commitments.
            </h3>
            <div className="flex justify-center">
              <img src={QrCode} width={"50%"} height={"auto"} />
            </div>
          </div>
          <article className="justify-center flex flex-row p-4 gap-8">
            <div>
              <a href="#">
                <img className="w-auto h-12" src={GooglePlay} />
              </a>
            </div>
            <div>
              <a href="#airBubble">
                <img src={AvailableInWeb} className="w-auto h-12" />
              </a>
            </div>
          </article>
        </section>
      </main>
      <footer>
        <section className="text-black flex justify-center py-8">
          <h1 className="text-white dark:text-black">
            &copy;{currentFullYear} Air&nbsp;IQ
          </h1>
        </section>
      </footer>
    </div>
  );
}

export default App;
