import PropTypes from "prop-types";

function TableRow({children}) {
    return (<tr>{children}</tr>)
}

TableRow.propTypes = {
    children: PropTypes.node.isRequired
}

export default TableRow;
