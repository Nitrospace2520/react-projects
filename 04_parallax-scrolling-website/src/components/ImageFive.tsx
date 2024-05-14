import { Parallax } from "react-parallax";
import image5 from "../images/space_img-5.jpg";

const ImageFive = () => {
  return (
    <Parallax className="image" bgImage={image5} strength={800}>
      <div className="content">
        <span className="img-txt">Challenges and Rewards</span>
        <p>
          Yet, for all its beauty and grandeur, space is also a harsh and
          unforgiving environment. The vacuum of space is devoid of air, making
          it impossible for humans to survive without the protection of advanced
          technology. Radiation from the sun and other cosmic sources poses a
          constant threat to both human health and the delicate electronics of
          spacecraft. And the vast distances between celestial bodies mean that
          even a journey to the nearest star would take thousands of years with
          current technology. But despite these challenges, the allure of space
          exploration remains as strong as ever. It is a journey of discovery,
          not just of the universe around us, but also of ourselves.
        </p>
      </div>
    </Parallax>
  );
};

export default ImageFive;
