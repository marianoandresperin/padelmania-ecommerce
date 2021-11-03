import "./Loader.css"
import loaderImg from "../../assets/loader.gif"

const Loader = () => {
    return (
        <>
            <div className="loader">
                <img src={loaderImg} alt="Loading.."></img>
            </div>
        </>
    )
}

export default Loader;