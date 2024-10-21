import "./Search.css";
import { useEffect, useRef } from "react";

type SearchProps = {
  setImage: React.Dispatch<React.SetStateAction<string>>;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
};

const Search = ({ setImage, setLoading }: SearchProps) => {
  const searchBoxRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (searchBoxRef.current) {
      searchBoxRef.current.focus();
    }
  }, []);

  const imageGenerator = async () => {
    if (searchBoxRef.current?.value === "") {
      return;
    }
    try {
      setLoading(true);
      const response = await fetch(
        `https://api.openai.com/v1/images/generations`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${import.meta.env.VITE_OPENAI_API_KEY}`,
          },
          body: JSON.stringify({
            prompt: `${searchBoxRef.current!.value}`, // Make sure this isn't empty
            n: 1,
            size: "512x512",
          }),
        }
      );

      if (!response.ok) {
        const errorResponse = await response.json(); // Get detailed error message
        console.error("Error response:", errorResponse);
        throw new Error(`Error: ${response.status} ${response.statusText}`);
      }

      const data = await response.json();
      if (data?.data?.length > 0) {
        const image = data.data[0];
        setImage(image?.url);
      } else {
        console.error("No image data received", data);
      }
    } catch (error) {
      console.error("Error fetching image", error);
    } finally {
      setLoading(false);
      searchBoxRef.current!.value = "";
      searchBoxRef.current!.focus();
    }
  };

  return (
    <div className="search-box">
      <input
        type="text"
        placeholder="Prompt what you want to see"
        name="search-box"
        id="search-box"
        title="search-box"
        ref={searchBoxRef}
      />
      <button type="submit" onClick={() => imageGenerator()}>
        Generate
      </button>
    </div>
  );
};

export default Search;
