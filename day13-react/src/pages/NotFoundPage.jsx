import { Link } from "react-router-dom";

const NotFoundPage=()=>{
    return (
        <div>
        <h2>Oops... Page Not found</h2>
        <Link to="/">Home Link</Link><br></br>
        <a href="/">Home Anchor</a>
        </div>
    )
}
export default NotFoundPage;