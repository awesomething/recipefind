import { useState } from 'react'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';


function SearchBar(props){
    let [searchTerm, setSearchTerm] = useState(null)

   

    return (
            <form onSubmit={(e) => {props.handleSearch(e, searchTerm)}}>
                <TextField type="text" placeholder="Search Here" onChange={(e) => setSearchTerm(e.target.value)} />
                <Button type="submit">Search</Button>
                <Button onClick={props.clearSearch}>Clear</Button>

            </form>
    )
}

export default SearchBar