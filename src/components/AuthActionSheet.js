import React from "react";
import { Actionsheet } from "native-base";
const AuthActionSheet = ({ isOpen, onClose, authType }) => {
  return (
    <Actionsheet isOpen>
      <Actionsheet.Content>
        <Actionsheet.Item>abc</Actionsheet.Item>
      </Actionsheet.Content>
    </Actionsheet>
  );
};
export default AuthActionSheet;
