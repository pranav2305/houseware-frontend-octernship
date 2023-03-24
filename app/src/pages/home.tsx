import { ThemeContext } from "../contexts/ThemeContext";
import { useContext, useState } from "react";
import DropZone from "../components/dropZone";

const Home = () => {
  const { theme } = useContext(ThemeContext);
  const [text, setText] = useState<string>("");
  const [file, setFile] = useState<File[] | null>(null);

  return (
    <div className="flex flex-col justify-center items-center pt-8">
      <h1
        className={`text-4xl md:text-5xl lg:text-6xl ${
          theme === "light" ? "text-light-primary" : "text-dark-primary"
        } flex items-center text-center`}
      >
        Duplicate Character Remover
      </h1>
      <textarea
        className={`${
          theme === "light" ? "border-light-primary" : "border-dark-primary"
        } w-9/12 h-48 mt-16 p-4 rounded-lg bg-white border-2 resize-none focus:outline-none focus:border-[3px]`}
        placeholder="Enter text to remove duplicate characters..."
      ></textarea>
      <h1
        className={`text-4xl md:text-5xl lg:text-6xl ${
          theme === "light" ? "text-light-primary" : "text-dark-primary"
        } flex items-center pt-8`}
      >
        Or
      </h1>
      <div className="w-9/12 mt-8">
        <DropZone setFiles={setFile} />
      </div>
      <button
        className={`${
          theme === "light" ? "bg-light-primary" : "bg-dark-primary"
        } p-3 pl-5 pr-5 h-12 mt-8 rounded-lg text-white text-xl font-bold`}
      >
        Submit
      </button>
    </div>
  );
};

export default Home;
