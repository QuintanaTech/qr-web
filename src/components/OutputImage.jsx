import PropTypes from "prop-types";
import {SITE_BASE_URL} from "../config/constants";

export default function OutputImage({ src }) {
  return (
    <div>
      <img src={src} alt="QR" width="100%" />
    </div>
  )
}

OutputImage.propTypes = {
  src: PropTypes.string,
}
OutputImage.defaultProps = {
  src: `https://8t9lw99ga6.execute-api.us-west-2.amazonaws.com/v1/qr.png?data=${encodeURIComponent(SITE_BASE_URL)}`,
}
