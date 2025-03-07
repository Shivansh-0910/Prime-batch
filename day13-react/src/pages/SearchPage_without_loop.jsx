import "./SearchPage.css"


const card=[{
    title:"invitaion",
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
                <div>
                    <h3>{card[0].title}</h3>
                    <label>{card[0].text}</label>
                </div>
                <div>
                    <h3>{card[1].text}</h3>
                    <label>{card[1].text}</label>
                </div>
            </div>
            <button>Search</button></main>
            <footer>@Copy </footer>
        </div>
    )
}
export default SearchPage;