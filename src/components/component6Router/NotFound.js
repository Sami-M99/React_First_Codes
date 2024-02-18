import { Link } from "react-router-dom";

export default function NotFound(){
    return(
        <div style={divStyle}>
            <h1 style={h1Style}>404 Not Found</h1>
            <Link to={"/"}>
                <h2 style={h2Style}>Return Back To Home Page </h2>
            </Link>
        </div>
    );
}

// CSS Styles
let divStyle = {
    backgroundColor:" #d5d5d5de",
    textAlign: "center",
    position: "fixed",
    height:" 100%",
    width: "100%",
    left: "0",
    top: "0"
}

let h1Style = {
    color: "red",
    position: "relative",
    top: "50%",
    transform: "translateY(-50%)",
    fontSize: "50px",
    margin: "0"
}

let h2Style = {
    position: "relative",
    top: "50%",
    transform: "translateY(-50%)"
}