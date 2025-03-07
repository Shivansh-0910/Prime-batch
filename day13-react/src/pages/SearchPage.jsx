import "./SearchPage.css"


const card=[{
    title:"Invitaion",
    text:"You are invited",
},
{
    title:"Notice",
    text:"please have a look",
},];
const SearchPage=()=>{
    return(
        <div className="search-page">
            <header>Logo</header>
            <main><h2>Search Here..</h2>
            <div>
                {
                    card.map((elem)=>{
                        return(
                            <div>
                                <h3>{elem.title}</h3>
                                <label>{elem.text}</label>
                            </div>
                        )
                    })
                }
            </div>
            <button>Search</button></main>
            <footer>@Copy </footer>
        </div>
    )
}
export default SearchPage;