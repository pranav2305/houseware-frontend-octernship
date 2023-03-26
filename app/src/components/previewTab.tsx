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
          <h2 className={`text-3xl text-center ${theme === "light" ? "text-light-primary" : "text-dark-primary"}`}>Original Text</h2>
          <textarea
            className={`${
              theme === "light" ? "border-light-primary bg-light-text text-light-primary" : "border-dark-primary bg-dark-text text-dark-primary"
            } w-full h-48 md:h-96 mt-16 p-4 rounded-lg border-2 resize-none focus:outline-none font-semibold`}
            placeholder="Enter text to remove duplicate characters..."
            readOnly
            value={textState.oldText ?? ""}
          ></textarea>
        </div>
        <div>
          <h2 className={`text-3xl text-center ${theme === "light" ? "text-light-primary" : "text-dark-primary"}`}>Edited Text</h2>
          <textarea
            className={`${
              theme === "light" ? "border-light-primary bg-light-text text-light-primary" : "border-dark-primary bg-dark-text text-dark-primary"
            } w-full h-48 md:h-96 mt-16 p-4 rounded-lg border-2 resize-none focus:outline-none font-semibold`}
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
