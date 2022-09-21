import { Typography } from "@mui/material";
import { importAll } from "../utils/importUtils";
import Head from "next/head";
import Image from "next/image";

const logoImages = importAll(
  require.context("../public/resources/logo2", false, /\.(png|jpe?g|svg)$/)
);

const navItems = [
  {
    name: "Home",
    link: "",
  },
  {
    name: "Portfolio",
    link: "portfolio",
  },
  {
    name: "Pricing",
    link: "pricing",
  },
  {
    name: "Contact",
    link: "contact",
  },
  {
    name: "About",
    link: "about",
  },
];

export default function NavBar({ home }) {
  return (
    <div
    //className={home ? "nav-home-wrapper-styles" : ""}
    >
      <Head>
        <title>M&C Photography</title>
        <meta
          name="description"
          content="We are Marina + Christopher, New York/New Jersey-based husband + wife photographers capturing engagements, showers, weddings, maternity, family, graduations + more!"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <nav
        className={
          "fill nav-wrapper "
          //  + (home ? "nav-home-styles" : "")
        }
      >
        <div className="title">
          {/* <Typography variant="h1">
            M {`&`} C<br />
          </Typography>
          <Typography variant="h2">Photography</Typography> */}
          <Image
            priority
            src={logoImages[0]}
            layout="intrinsic"
            objectFit="contain"
            alt=""
            // className="nav-logo"
            height={"300px"}
            width={"300px"}
            // style={{ paddingBottom: "-100px" }}
          />
        </div>
        <ul className="link-list">
          {navItems.map(({ name, link }, i) => (
            <div className="nav-item" key={i}>
              <li>
                <a href={`./${link}`} className="nav-text">
                  <Typography variant="h6">
                    <b>{name}</b>
                  </Typography>
                </a>
              </li>
            </div>
          ))}
        </ul>
      </nav>
    </div>
  );
}
