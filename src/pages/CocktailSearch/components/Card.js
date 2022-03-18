function Card ({cocktail}) {
    return(
        <div className="card bg-dark" style={{width: "30rem"}}>
            <img className="card-img-top" src={cocktail.strDrinkThumb} alt="Card image cap" style={{width: "10rem", borderRadius: "1000"}}/>
            <h3 class="card-title">{cocktail.strDrink}</h3>
            <div className="card-body">
                <ul>
                    <li>Glass: {cocktail.strGlass}</li>
                    <li>Instructions: {cocktail.strInstructions}</li>
                </ul>
            </div>
        </div>
    )
}

export default Card;