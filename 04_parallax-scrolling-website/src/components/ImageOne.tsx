import { Parallax } from "react-parallax";
import image1 from "../images/space_img-1.jpg";

const ImageOne = () => {
  return (
    <Parallax bgImage={image1} className="image" strength={800}>
      <div className="content">
        <span className="img-txt">A trip to space</span>
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

export default ImageOne;
