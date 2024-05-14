import { Parallax } from "react-parallax";
import image3 from "../images/space_img-3.jpg";

const ImageThree = () => {
  return (
    <Parallax className="image" bgImage={image3} strength={800}>
      <div className="content">
        <span className="img-txt">The Spectacular Masterpieces of Physics</span>
        <p>
          Space is not just a physical void; it is a canvas upon which the laws
          of physics paint their most spectacular masterpieces. From the
          graceful dance of planets around their suns to the cataclysmic
          explosions of dying stars, the events that unfold in space are both
          awe-inspiring and humbling. It is a laboratory where the forces of
          nature operate on a scale beyond comprehension, shaping the very
          fabric of reality itself.
        </p>
      </div>
    </Parallax>
  );
};

export default ImageThree;
