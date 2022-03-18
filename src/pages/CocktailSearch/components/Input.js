
function Input ({handleChange, handleClick}){
    return(
        <div>
            <input onChange={handleChange}/>
            <button onClick={handleClick}>Search</button>
        </div>
    )
}

export default Input