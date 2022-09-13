import Image from "next/image";

export default function Carousel({ images }) {
  return (
    <div className="landing-carousel">
      <div
        id="carouselExampleCaptions"
        className="carousel slide relative"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4">
          {images.map((_, i) => {
            if (i == 0) {
              return (
                <button
                  key={i}
                  type="button"
                  data-bs-target="#carouselExampleCaptions"
                  data-bs-slide-to="0"
                  className="active"
                  aria-current="true"
                  aria-label="Slide 1"
                ></button>
              );
            }
            return (
              <button
                key={i}
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to={`${i}`}
                aria-label={`Slide ${i + 1}`}
              ></button>
            );
          })}
        </div>
        <div className="carousel-inner relative w-full overflow-hidden">
          {images.map((image, i) => (
            <div
              key={i}
              className={`carousel-item ${
                i == 0 ? "active" : ""
              } relative float-left w-full`}
            >
              <img src={image.default.src} className="block w-full" alt="..." />
              {/* <div className="carousel-caption hidden md:block absolute text-center">
              <h5 className="text-xl">First slide label</h5>
              <p>
                Some representative placeholder content for the first slide.
              </p>
            </div> */}
            </div>
          ))}
        </div>
        <button
          className="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon inline-block bg-no-repeat"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon inline-block bg-no-repeat"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}
