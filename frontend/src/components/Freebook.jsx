import list from "/src/assets/list.json";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Cards from "./Cards";
const Freebook = () => {
  // slider settings
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const freeBooks = list.filter((element) => element.category === "free");

  return (
    <>
      <div className="max-w-screen-2x1 container mx-auto md:px-20 px-4">
        <h1 className="font-bold text-xl">Free Books for you </h1>
        <dic className="mx-2">
          <Slider {...settings}>
            {freeBooks.map((item) => {
              return <Cards item={item} key={item.id} />;
            })}
          </Slider>
        </dic>
      </div>
    </>
  );
};

export default Freebook;
