import style from "./TagSmall.module.css"
import PropTypes from "prop-types";

function TagSmall({tag}) {
    return (<div className={style.tag}>{tag.name}</div>)
}

TagSmall.propTypes = {
    tag: PropTypes.object.isRequired
}

export default TagSmall