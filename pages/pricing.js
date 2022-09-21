import NavBar from "../components/navbar";
import Footer from "../components/footer";
import Image from "next/image";
import { importAll } from "../utils/importUtils";

const images = importAll(
  require.context("../public/resources/pricing", false, /\.(png|jpe?g|svg)$/)
);

export default function Pricing() {
  return (
    <div className="root">
      <NavBar />
      {images.map((e, i) => (
        <Image
          key={i}
          priority
          height={"1150px"}
          layout="responsive"
          objectFit="contain"
          alt=""
          src={e}
        />
      ))}
      <Footer />
    </div>
  );
}
