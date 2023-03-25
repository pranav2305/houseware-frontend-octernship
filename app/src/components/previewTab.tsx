import { ThemeContext } from "../contexts/ThemeContext";
import { useSelector } from "react-redux";
import { useContext } from "react";

const PreviewTab = () => {
  const { theme } = useContext(ThemeContext);
  const textState = useSelector((state: TextState) => state);

  return (
    <>
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-3xl text-center">Original Text</h2>
          <textarea
            className={`${
              theme === "light" ? "border-light-primary" : "border-dark-primary"
            } w-full h-48 md:h-96 mt-8 mb-8 p-4 rounded-lg bg-white border-2 resize-none focus:outline-none`}
            placeholder="Enter text to remove duplicate characters..."
            readOnly
            value={textState.oldText ?? ""}
          ></textarea>
        </div>
        <div>
          <h2 className="text-3xl text-center">Edited Text</h2>
          <textarea
            className={`${
              theme === "light" ? "border-light-primary" : "border-dark-primary"
            } w-full md:h-96 mt-8 p-4 rounded-lg bg-white border-2 resize-none focus:outline-none`}
            placeholder="Enter text to remove duplicate characters..."
            readOnly
            value={textState.text ?? ""}
          ></textarea>
        </div>
      </div>
    </>
  );
};

export default PreviewTab;
