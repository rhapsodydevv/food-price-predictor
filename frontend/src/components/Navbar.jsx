import { Link } from "react-router-dom";

export default function Navbar() {
    const navStyle = {
        padding: "15px 30px",
        background: "#2c3e50",
        color: "#fff",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
    };

    const linkStyle = {
        color: "#fff",
        textDecoration: "none",
        marginLeft: "20px",
    };

    return (
        <nav style={navStyle}>
            <div style={{ fontWeight: "bold", fontSize: "20px" }}>Price Sight</div>
            <div>
                <Link to="/" style={linkStyle}>
                    Home
                </Link>
                <Link to="/about" style={linkStyle}>
                    About
                </Link>
                <Link to="/dashboard" style={linkStyle}>
                    Dashboard
                </Link>
            </div>
        </nav>
    );
}