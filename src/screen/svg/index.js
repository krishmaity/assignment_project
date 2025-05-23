import React from "react";
import { PropTypes } from 'prop-types';
import Tick from "./tickSvg";
import Arrow from "./arrowSvg";
import Search from "./search";
import ArrowSvg from "./arrowSvg";
import BackArrow from "./arrowSvg";

function SvgComponent({
    strokeColor,
    svgName,
    height,
    width,
    children,
    isColorChange,
    fill
}) {

    var svgCom = null;
    switch (svgName) {
        case "tick":
            svgCom = <Tick strokeColor={strokeColor} height={height} width={width} />;
            break;
        case "arrow":
            svgCom = <BackArrow fill={fill} height={height} width={width} />;
            break;
        case "search":
            svgCom = <Search strokeColor={strokeColor} height={height} width={width} />;
            break;
        default:
            svgCom = null;
    }
    return svgCom;
}


SvgComponent.defaultProps = {
    strokeColor: "#FFFFFF",
    svgName: "home",
    height: 25,
    width: 25,
    children: null,
    isColorChange: false
};

SvgComponent.propTypes = {
    strokeColor: PropTypes.string,
    svgName: PropTypes.string,
    height: PropTypes.number,
    width: PropTypes.number,
    children: PropTypes.node,
    isColorChange: PropTypes.bool
};


export default SvgComponent;