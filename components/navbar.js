import { Typography, IconButton } from "@mui/material";
import { importAll } from "../utils/importUtils";
import Head from "next/head";
import { useCurrentBreakpointName, setDefaultWidth } from "react-socks";
import Image from "next/image";
import { useState, useEffect } from "react";

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

export default function NavBar() {
  // setDefaultWidth(
  //   {
  //     xsmall: 0,
  //     small: 376,
  //     medium: 426,
  //     large: 769,
  //     xlarge: 1025,
  //   }[breakpoint]
  // );
  const bp = useCurrentBreakpointName();

  const [breakpoint, setBreakpoint] = useState("");
  const [openMobileMenu, setOpenMobileMenu] = useState(false);

  function NavItemsHTML({ containerClass }) {
    return (
      <>
        {navItems.map(({ name, link }, i) => (
          <div className={containerClass} key={i}>
            <li>
              <a href={`./${link}`} className="nav-text">
                <Typography variant="h6">
                  <b>{name}</b>
                </Typography>
              </a>
            </li>
          </div>
        ))}
      </>
    );
  }

  const handleOpenMobileMenu = () => {
    setOpenMobileMenu((prev) => !prev);
  };

  useEffect(() => {
    if (openMobileMenu) {
      document.querySelector("body").classList.add("disable-scroll");
    } else {
      document.querySelector("body").classList.remove("disable-scroll");
    }
  }, [openMobileMenu]);

  useEffect(() => {
    setBreakpoint(bp);
  }, [bp]);

  return (
    <div>
      <Head>
        <title>M&C Photography</title>
        <meta
          name="description"
          content="We are Marina + Christopher, New York/New Jersey-based husband + wife photographers capturing engagements, showers, weddings, maternity, family, graduations + more!"
        />
      </Head>
      <nav className="fill nav-wrapper">
        <center className="title-container">
          <div className="title">
            <Image priority src={logoImages[0]} alt="" />
          </div>
        </center>
        {["medium", "small", "xsmall"].includes(breakpoint) && (
          <IconButton onClick={handleOpenMobileMenu} className="hamburger-icon">
            <svg
              className={
                "ham hamRotate ham4 " + (openMobileMenu ? "active" : "")
              }
              viewBox="0 0 100 100"
              width="60"
            >
              <path
                className="line top"
                d="m 70,33 h -40 c 0,0 -8.5,-0.149796 -8.5,8.5 0,8.649796 8.5,8.5 8.5,8.5 h 20 v -20"
              />
              <path className="line middle" d="m 70,50 h -40" />
              <path
                className="line bottom"
                d="m 30,67 h 40 c 0,0 8.5,0.149796 8.5,-8.5 0,-8.649796 -8.5,-8.5 -8.5,-8.5 h -20 v 20"
              />
            </svg>
          </IconButton>
        )}
        {["medium", "small", "xsmall"].includes(breakpoint) && (
          <ul
            className={
              "nav-item-mobile-container " +
              (openMobileMenu
                ? breakpoint === "medium"
                  ? "nav-item-mobile-container-active-medium"
                  : "nav-item-mobile-container-active"
                : "")
            }
          >
            <NavItemsHTML containerClass={"nav-item-mobile"} />
          </ul>
        )}
        {(!breakpoint || ["large", "xlarge"].includes(breakpoint)) && (
          <ul className="link-list">
            <NavItemsHTML containerClass={"nav-item"} />
          </ul>
        )}
      </nav>
    </div>
  );
}
