import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

export interface fileInfoProp {
  icon: IconDefinition;
  text: string | null;
  style: string | null;
  iconDivStyle: string | null;
  textStyle: string | null;
}

export interface dropZoneProp {
  setFiles: (files: File[]) => void;
}
