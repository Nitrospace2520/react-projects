import { Parallax } from "react-parallax";
import image4 from "../images/space_img-4.jpg";

const ImageFour = () => {
  return (
    <Parallax className="image" bgImage={image4} strength={800}>
      <div className="content">
        <span className="img-txt">The Final Frontier of Exploration</span>
        <p>
          Despite the vastness of space, it remains one of the final frontiers
          of human exploration. For centuries, we have gazed up at the stars
          with wonder and curiosity, dreaming of the day when we might venture
          beyond our own planet and explore the cosmos. Today, that dream is
          becoming a reality, as space agencies and private companies alike work
          tirelessly to push the boundaries of our understanding and reach ever
          further into the depths of space.
        </p>
      </div>
    </Parallax>
  );
};

export default ImageFour;
