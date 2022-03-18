import axios from "axios";
import {useState} from "react";
import Input from './components/Input';
import List from './components/List';

function CocktailSearch(){
    const [search, setSearch] = useState("")
    const [cocktails, setCocktails] = useState([])

    const handleChange = (event) => {
        setSearch(event.target.value)
    }

    const handleClick = () => {
        axios({
            url: `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${search}`
        }).then(result => setCocktails(result.data.drinks))
    }
    
    return (
        <>
            <Input handleChange={handleChange} handleClick={handleClick}/>
            <List cocktails={cocktails}/>
        </>
    )
}

export default CocktailSearch;