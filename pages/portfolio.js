import Footer from "../components/footer";
import { useEffect, useState, useRef } from "react";
import NavBar from "../components/navbar";
import { importAll } from "../utils/importUtils";
import Image from "next/image";
import { shuffle } from "underscore";
import { Masonry } from "@mui/lab";
import SecondaryTypography from "../components/secondaryTypography";
import { useCurrentBreakpointName } from "react-socks";

const responsiveSettings = {
  masonryColumns: {
    xsmall: 2,
    small: 2,
    medium: 3,
    large: 4,
    default: 4,
  },
  masonrySpacing: {
    xsmall: 1.3,
    small: 1.3,
    medium: 1.6,
    large: 2,
    default: 2,
  },
};

const images = importAll(
  require.context("../public/resources/portfolio", false, /\.(png|jpe?g|svg)$/)
);

function FadeInSection({ children }) {
  const domRef = useRef();
  const [isVisible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setVisible(true);
        observer.unobserve(domRef.current);
      }
    });
    observer.observe(domRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={domRef}
      className={"fade-in-section " + (isVisible ? " is-visible" : "")}
    >
      {children}
    </section>
  );
}

export default function Portfolio() {
  const breakpoint = useCurrentBreakpointName();
  const { masonryColumns, masonrySpacing } = responsiveSettings;

  return (
    <div className="root">
      <NavBar />
      <div
        className="portfolio-heading-container"
        id="portfolio-heading-container"
      >
        <SecondaryTypography variant="h3" className="portfolio-heading">
          <b>Weddings, Couples, Families, Events, & more!</b>
        </SecondaryTypography>
      </div>
      <Masonry
        columns={masonryColumns[breakpoint] || masonryColumns.default}
        spacing={masonrySpacing[breakpoint] || masonrySpacing.default}
        defaultColumns={4}
        defaultSpacing={2}
      >
        {shuffle(images).map((e, i) => (
          <FadeInSection key={i} className="portfolio-image-container">
            <Image priority alt="" src={e} className="portfolio-image" />
          </FadeInSection>
        ))}
      </Masonry>
      <Footer />
    </div>
  );
}
