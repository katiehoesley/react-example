const SearchButton = (props) => {
    return(
    <form>
        Search Inbox:
        <input type="text" id="searchTerm" />
        <input type="submit" value="Submit" onClick={props.onClick}/>
    </form>
    )
}

export default SearchButton