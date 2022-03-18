import Card from "./Card"

function List ({cocktails}) {
    return(
        <div className="card-deck">
            {
                cocktails.map( 
                    cocktail => <Card cocktail={cocktail}/>
                )
            }
        </div>
    )
}

export default List;