import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function FileInfo({ icon, text, style, iconDivStyle, textStyle }: fileInfoProp) {
    return (
        <div className="flex items-center px-0 py-0 flex-row gap-[10px]">
            <div className={`${iconDivStyle} flex justify-center items-center`}>
                <FontAwesomeIcon
                    icon={icon}
                    className={`w-[20px] h-[20px] ${style}`}
                />
            </div>
            <p className={`text-darkGray text-sm sm:text-base ${textStyle}`}>
                {text}
            </p>
        </div>
    );
}
