import Footer from "../components/footer";
import { useEffect, useState, useRef } from "react";
import NavBar from "../components/navbar";
import Grid from "@mui/material/Grid";
import Item from "@mui/material/Grid";
import { importAll } from "../utils/importUtils";
import Image from "next/image";
import { sample, shuffle } from "underscore";
import { Avatar, Typography } from "@mui/material";
import { Masonry } from "@mui/lab";
import { styled } from "@mui/material/styles";
// import ExpandLessIcon from "@mui/icons-material/ExpandLess";
// import IconButton from "@mui/core/IconButton";
import SecondaryTypography from "../components/secondaryTypography";

const images = importAll(
  require.context("../public/resources/portfolio", false, /\.(png|jpe?g|svg)$/)
);

function FadeInSection(props) {
  const [isVisible, setVisible] = useState(false);
  const domRef = useRef();
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => setVisible(entry.isIntersecting));
    });
    observer.observe(domRef.current);
  }, []);
  return (
    <div
      className={`fade-in-section ${isVisible ? "is-visible" : ""}`}
      ref={domRef}
    >
      {props.children}
    </div>
  );
}

export default function Portfolio() {
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
      <Masonry columns={4} spacing={2}>
        {shuffle(images).map((e, i) => (
          <FadeInSection key={i} className="portfolio-image-container">
            <Image priority alt="" src={e} className="portfolio-image" />
          </FadeInSection>
        ))}
      </Masonry>
      {/* Display if #portfolio-heading-container is not in view. Animate in  */}
      {/* <Scroll showBelow={250} /> */}
      <Footer />
    </div>
  );
}

// const useStyles = makeStyles((theme) => ({
//   toTop: {
//     zIndex: 2,
//     position: "fixed",
//     bottom: "2vh",
//     backgroundColor: "#DCDCDC",
//     color: "black",
//     "&:hover, &.Mui-focusVisible": {
//       transition: "0.3s",
//       color: "#397BA6",
//       backgroundColor: "#DCDCDC",
//     },
//     [theme.breakpoints.up("xs")]: {
//       right: "5%",
//       backgroundColor: "rgb(220,220,220,0.7)",
//     },
//     [theme.breakpoints.up("lg")]: {
//       right: "6.5%",
//     },
//   },
// }));

// const Scroll = ({ showBelow }) => {
//   const classes = useStyles();

//   const [show, setShow] = useState(showBelow ? false : true);

//   const handleScroll = () => {
//     if (window.pageYOffset > showBelow) {
//       if (!show) setShow(true);
//     } else {
//       if (show) setShow(false);
//     }
//   };

//   const handleClick = () => {
//     window[`scrollTo`]({ top: 0, behavior: `smooth` });
//   };

//   useEffect(() => {
//     if (showBelow) {
//       window.addEventListener(`scroll`, handleScroll);
//       return () => window.removeEventListener(`scroll`, handleScroll);
//     }
//   });

//   return (
//     <div>
//       {show && (
//         <IconButton
//           onClick={handleClick}
//           className={classes.toTop}
//           aria-label="to top"
//           component="span"
//         >
//           <ExpandLessIcon />
//         </IconButton>
//       )}
//     </div>
//   );
// };
