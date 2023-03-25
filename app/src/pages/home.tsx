import { ThemeContext } from "../contexts/ThemeContext";
import { LangContext } from "../contexts/LanguageContext";
import { SnackbarContext } from "../contexts/SnackbarContext";
import { useContext, useEffect, useState } from "react";
import { submitText } from "../store/actionCreators";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import DropZone from "../components/dropZone";
import { ReactTransliterate } from "react-transliterate";
import "react-transliterate/dist/index.css";

const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { theme } = useContext(ThemeContext);
  const { lang } = useContext(LangContext);
  const { setSnackbarInfo } = useContext(SnackbarContext);
  const textState = useSelector((state: TextState) => state);

  const [text, setText] = useState<string>("");
  const [file, setFile] = useState<File[] | null>(null);

  useEffect(() => {
    if (file?.length) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const text = e.target?.result;
        setText(text as string);
      };
      reader.readAsText(file[0]);
    }
  }, [file])

  const onSubmit = () => {
    dispatch(submitText(text));
  };

  useEffect(() => {
    if (textState.error) {
      setSnackbarInfo({
        open: true,
        message: textState.error,
        severity: "error",
      });
    } else if (textState.status === 200) {
      setSnackbarInfo({
        open: true,
        message: "Text submitted successfully",
        severity: "success",
      });
      navigate("/editor");
    }
  }, [textState]);

  return (
    <div className="flex flex-col justify-center items-center pt-8">
      <h1
        className={`text-4xl md:text-5xl lg:text-6xl ${
          theme === "light" ? "text-light-primary" : "text-dark-primary"
        } flex items-center text-center`}
      >
        Duplicate Character Remover
      </h1>
      <ReactTransliterate
        containerClassName="w-9/12"
        renderComponent={(props) => (
          <textarea
            {...props}
            className={`${
              theme === "light" ? "border-light-primary" : "border-dark-primary"
            } w-full h-48 mt-16 p-4 rounded-lg bg-white border-2 resize-none focus:outline-none focus:border-[3px]`}
            placeholder="Enter text to remove duplicate characters..."
          ></textarea>
        )}
        value={text}
        onChangeText={(text) => {
          setText(text);
        }}
        lang={lang}
        enabled={lang !== "en"}
      />
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
        onClick={onSubmit}
      >
        Submit
      </button>
    </div>
  );
};

export default Home;
