import { Link } from "react-router-dom";

export default function Navbar() {

    const navStyle = {
        padding: "15px 30px",
        background: "#2c3e50",
        color: "#fff",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",

        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        zIndex: 1000
    };

    const linkStyle = {
        color: "#fff",
        textDecoration: "none",
        marginLeft: "20px",
    };

    return (
        <nav style={navStyle}>
            <div style={{ fontWeight: "bold", fontSize: "20px" }}>
                Price Sight
            </div>

            <div style={{ marginRight: "45px" }}>
                <Link to="/" style={linkStyle}>Home</Link>
                <Link to="/about" style={linkStyle}>About</Link>
                <Link to="/dashboard" style={linkStyle}>Dashboard</Link>
                <Link to="/contact" style={linkStyle}>Contact Us</Link>
            </div>
        </nav>
    );
}