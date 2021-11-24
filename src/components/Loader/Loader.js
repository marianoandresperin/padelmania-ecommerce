import "./Loader.css"
import loaderImg from "../../assets/loader.gif"

const Loader = (size) => {
    return (
        <>
            <div>
                <img src={loaderImg} className="loaderImg" alt="Loading.."></img>
            </div>
        </>
    )
}

export default Loader;