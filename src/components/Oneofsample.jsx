import PropTypes from "prop-types";

export const Oneofsample = (props) => {

    const color= props.color;
    return (
    <div style={{backgroundColor: color , padding:20, color:"white"}}>
        <p>
            background color { color }
        </p>
    </div>
  )
}
