import React, { useState, useRef } from "react";
import { connect, styled } from "frontity";
import offlineImage from "../images/offline.png";

import useOnlineStatus from "../hooks/useOnlineStatus";

const OfflineIcon = () => {
  const { online } = useOnlineStatus();
  if (!online) {
    return <OfflineNav />;
  }
  return <OnlineNav />;
};

const OfflineNav = styled.div`
  visibility: visible;
  position: absolute;
  top: 10px;
  right: 10px;
  width: 55px;
  height: 49px;
  background: url(${offlineImage}) 0px 0px/55px 49px no-repeat;
`;

const OnlineNav = styled.div`
  visibility: hidden;
  position: absolute;
  top: 10px;
  right: 10px;
  width: 55px;
  height: 49px;
  background: url(${offlineImage}) 0px 0px/55px 49px no-repeat;
`;

export default OfflineIcon;
