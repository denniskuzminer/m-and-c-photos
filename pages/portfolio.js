import Footer from "../components/footer";
import { useEffect, useState, useRef } from "react";
import NavBar from "../components/navbar";
import { importAll } from "../utils/importUtils";
import Image from "next/image";
import { shuffle } from "underscore";
import SecondaryTypography from "../components/secondaryTypography";
import { useCurrentBreakpointName } from "react-socks";
import { memo } from "react";
import { NoSsr } from "@mui/base";
import { Masonry } from "@mui/lab";
// import Masonry from "react-responsive-masonry";

const images = shuffle(
  importAll(
    require.context(
      `../public/resources/portfolio/compressed`,
      false,
      /\.(png|jpe?g|svg)$/
    )
  )
);

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
  // masonrySpacing: {
  //   xsmall: "8px",
  //   small: "8px",
  //   medium: "14px",
  //   large: "25px",
  //   default: "25px",
  // },
  banner: {
    xsmall: "h4",
    small: "h4",
    medium: "h3",
    large: "h3",
    default: "h3",
  },
};

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

export default memo(function Portfolio() {
  const breakpoint = useCurrentBreakpointName();
  const { masonryColumns, masonrySpacing, banner } = responsiveSettings;

  return (
    <NoSsr>
      <div className="root">
        <NavBar />
        <div
          className="portfolio-heading-container"
          id="portfolio-heading-container"
        >
          <SecondaryTypography
            variant={banner[breakpoint] || banner.default}
            className="portfolio-heading"
          >
            <b>Weddings, Couples, Families, Events, & more!</b>
          </SecondaryTypography>
        </div>
        <Masonry
        className="masonry"
          columns={
            // Count
            masonryColumns[breakpoint] || masonryColumns.default
          }
          // gutter
          spacing={masonrySpacing[breakpoint] || masonrySpacing.default}
          // defaultColumns={4}
          // defaultSpacing={2}
        >
          {images.map((e, i) => (
            <div key={i}>
              <FadeInSection className="portfolio-image-container">
                <Image
                  // priority
                  alt=""
                  src={e}
                  className="portfolio-image"
                  // layout="intrinsic"
                  placeholder="blur"
                  objectfill="contain"
                  quality={40}
                />
              </FadeInSection>
            </div>
          ))}
        </Masonry>
        <Footer />
      </div>
    </NoSsr>
  );
});
