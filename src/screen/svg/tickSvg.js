import * as React from "react"
import { PropTypes } from 'prop-types';
import Svg, { Path } from "react-native-svg"

function Tick({
    strokeColor,
    height,
    width,
}) {
    return (
        <Svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 48 48"
            width={width}
            height={height}
        >
            <Path
                fill={strokeColor}
                d="M40.6 12.1L17 35.7 7.4 26.1 4.6 29 17 41.3 43.4 14.9z"
            />
        </Svg>
    )
}

Tick.defaultProps = {
    strokeColor: "#FFFFFF",
    height: 165,
    width: 177,
};

Tick.propTypes = {
    strokeColor: PropTypes.string,
    height: PropTypes.number,
    width: PropTypes.number,
};

export default Tick;
