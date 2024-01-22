import React from "react";
import { colourMapping, StatusType } from "@/utils/reuse";

// import { colourMapping } from "@/utils/constants";
// import { underSCoreCapitalizeWord } from "@/utils/stringTransform";
interface IProps {
  value: StatusType[keyof StatusType];
}
const StatusAlert = (props: IProps) => {
  const { value } = props;
  const { bgcolor } = colourMapping(value);
  const { color } = colourMapping(value);
  return (
    <span className={`inline-block py-1 px-2 ${bgcolor}  rounded-xl capitalize  ${color}`}>
      {value}
    </span>
  );
};

export default StatusAlert;
