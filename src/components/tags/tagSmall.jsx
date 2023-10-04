function TagSmall({tag}) {
    return (<div>{tag.name}</div>)
}

TagSmall.propTypes = {
    tag: Object
}

export default TagSmall