import { ThemeContext } from "../contexts/ThemeContext";
import { useContext, useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleLeft } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Box, Tab } from "@mui/material";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import EditIcon from "@mui/icons-material/Edit";
import VisibilityIcon from "@mui/icons-material/Visibility";
import EditorTab from "../components/editorTab";
import PreviewTab from "../components/previewTab";

const Editor = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { theme } = useContext(ThemeContext);
  const textState = useSelector((state: TextState) => state);

  const [tab, setTab] = useState<string>("1");

  useEffect(() => {
    if (!textState.text || textState.status !== 200) {
      navigate("/");
    }
  }, [textState]);

  const onBack = () => {};

  return (
    <>
      <button
        type="button"
        className={`${
          theme === "light" ? "bg-light-primary" : "bg-dark-primary"
        } p-3 pl-5 pr-5 h-12 mt-8 rounded-lg text-white text-xl font-bold flex flex-row gap-x-3 items-center`}
        onClick={onBack}
      >
        <FontAwesomeIcon icon={faArrowAltCircleLeft} />
        Back to home
      </button>
      <TabContext value={tab}>
        <Box sx={{ borderBottom: 1, borderColor: "divider", pt: 1 }}>
          <TabList
            onChange={(e, newTab) => setTab(newTab)}
            TabIndicatorProps={{
              style: {
                backgroundColor: theme === "light" ? "#136FB4" : "#4ECBFB",
              },
            }}
          >
            <Tab
              icon={<EditIcon />}
              value="1"
              label="Editor"
              iconPosition="start"
            />
            <Tab
              icon={<VisibilityIcon />}
              value="2"
              label="Preview"
              iconPosition="start"
            />
          </TabList>
        </Box>
        <TabPanel value="1">
          <EditorTab />
        </TabPanel>
        <TabPanel value="2">
          <PreviewTab />
        </TabPanel>
      </TabContext>
    </>
  );
};

export default Editor;
