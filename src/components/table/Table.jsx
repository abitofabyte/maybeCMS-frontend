import PropTypes from "prop-types";

function Table({children, headers}) {
    return (
        <table>
            {
                headers != null ? <thead>
                <tr>{headers.map((header, index) => <th key={index}>{header}</th>)}</tr>
                </thead> : ""
            }
            <tbody>
            {children}
            </tbody>
        </table>
    )
}

Table.propTypes = {
    children: PropTypes.node.isRequired,
    headers: PropTypes.array
}


export default Table