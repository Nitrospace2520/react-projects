import { Parallax } from "react-parallax";
import image2 from "../images/space_img-2.jpg";

const ImageTwo = () => {
  return (
    <Parallax className="image" bgImage={image2} strength={800}>
      <div className="content">
        <span className="img-txt">The Vastness of Space </span>
        <p>
          Space, the boundless expanse that encompasses everything we know and
          beyond, is a realm of wonder and mystery. It is a vast emptiness
          dotted with celestial bodies, from stars that blaze with fiery
          intensity to planets that hold the potential for life. Within its
          depths lie countless galaxies, each containing billions of stars and
          uncountable worlds.
        </p>
      </div>
    </Parallax>
  );
};

export default ImageTwo;
