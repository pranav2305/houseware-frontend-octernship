import { useContext } from "react";
import { useDropzone } from "react-dropzone";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloudArrowUp, faFile } from "@fortawesome/free-solid-svg-icons";
import FileInfo from "./fileInfo";
import { ThemeContext } from "../contexts/ThemeContext";

export default function DropZone({ setFiles }: dropZoneProp) {
  const { getRootProps, getInputProps, open, acceptedFiles } = useDropzone({
    multiple: false,
  });
  const { theme } = useContext(ThemeContext);

  const files = acceptedFiles.map((file) => {
    setFiles(acceptedFiles);

    return (
      <li key={file.name}>
        <FileInfo
          text={`${file.name} - ${file.size} bytes`}
          icon={faFile}
          style="text-gray"
          iconDivStyle={null}
          textStyle={null}
        />
      </li>
    );
  });

  return (
    <div className="mb-6 w-full" id="dropzone">
      <div
        {...getRootProps({
          className: `flex-col gap-y-5 dropzone w-full ${
            theme === "light" ? "bg-light-text" : "bg-dark-text"
          } flex justify-center items-center py-12 rounded-xl ${
            theme === "light" ? "border-light-primary" : "border-dark-primary"
          } border-2 cursor-pointer mb-4 border-dashed`,
        })}
      >
        <input {...getInputProps()} />
        <FontAwesomeIcon
          icon={faCloudArrowUp}
          className={`w-8 h-8 ${
            theme === "light" ? "text-light-primary" : "text-dark-primary"
          }`}
        />
        <p
          className={`${
            theme === "light" ? "text-light-primary" : "text-dark-primary"
          } ml-4 text-sm sm:text-base font-semibold`}
        >
          Drag and drop a file here, or click to select a file
        </p>
      </div>
      <ul>{files}</ul>
    </div>
  );
}
