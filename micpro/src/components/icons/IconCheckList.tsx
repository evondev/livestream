import React from "react";
import { IconCheckOrange, IconCheckPink, IconCheckPurple } from ".";
import { EIconCheckListKeys } from "@/types";
const iconsList: Record<EIconCheckListKeys, any> = {
  pink: <IconCheckPink></IconCheckPink>,
  orange: <IconCheckOrange></IconCheckOrange>,
  blue: <IconCheckPink></IconCheckPink>,
  purple: <IconCheckPurple></IconCheckPurple>,
};
function IconCheckList({
  type = EIconCheckListKeys.pink,
}: {
  type?: EIconCheckListKeys;
}) {
  return <>{iconsList[type]}</>;
}

export default IconCheckList;
