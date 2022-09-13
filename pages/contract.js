import Head from "next/head";
import NavBar from "../components/navbar";
import Footer from "../components/footer";
// import pdf from "../public/resources/pricing/MAndCPhotographyPricing.pdf";
import dynamic from "next/dynamic";

const FileViewer = dynamic(() => import("react-file-viewer"), {
  ssr: false,
});
export default function Contract() {
  return (
    <div>
      <NavBar />
      <div style={{ height: "1000px" }}>
        {/* <Document file="../public/resources/pricing/M&CPhotographyPricing.pdf" /> */}
        {/* <FileViewer
          fileType="pdf"
          filePath="../public/resources/pricing/M&CPhotographyPricing.pdf"
        /> */}
        <embed
          src={"../public/resources/pricing/MAndCPhotographyPricing.pdf"}
          type="application/pdf"
        />
        {/* <FileViewer
          fileType={"pdf"}
          filePath={"../public/resources/pricing/MAndCPhotographyPricing.pdf"}
          // title="testPdf"
          // height="100%"
          // width="100%"
        /> */}
      </div>
      <Footer />
    </div>
  );
}
