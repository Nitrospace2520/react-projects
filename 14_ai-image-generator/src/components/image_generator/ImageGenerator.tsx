import "./ImageGenerator.css";
import defaultImage from "../../assets/default.png";

type ImageGeneratorProps = {
  image: string;
  loading: boolean;
};

const ImageGenerator = ({ image, loading }: ImageGeneratorProps) => {
  return (
    <>
      <div className="image-loading">
        <img
          src={image !== "/" ? image : defaultImage}
          alt="default"
          width={512}
        />
        {loading && (
          <div className="loading">
            <div className="loading-bar"></div>
            Loading...
          </div>
        )}
      </div>
    </>
  );
};

export default ImageGenerator;
