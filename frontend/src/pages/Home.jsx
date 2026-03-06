import { Link } from "react-router-dom";

export default function Home() {
    const heroStyle = {
        textAlign: "center",
        padding: "80px 20px",
        backgroundColor: "#f5f5f5",
        minHeight: "80vh",
    };

    const buttonStyle = {
        padding: "12px 25px",
        fontSize: "16px",
        marginTop: "20px",
        cursor: "pointer",
        backgroundColor: "#2c3e50",
        color: "#fff",
        border: "none",
        borderRadius: "5px",
    };

    const infoStyle = {
        maxWidth: "600px",
        margin: "40px auto",
        lineHeight: "1.6",
        textAlign: "left",
    };

    return (
        <div>
            <section style={heroStyle}>
                <h1>Price Sight</h1>
                <p>Track food price volatility across Kenyan counties to make informed decisions.</p>
                <Link to="/dashboard">
                    <button style={buttonStyle}>View Dashboard</button>
                </Link>
            </section>

            <section style={infoStyle}>
                <h2>How it Works</h2>
                <ul>
                    <li>Collect monthly price data from reliable sources (Kenya Open Data, FAO, WFP)</li>
                    <li>Calculate volatility using standard deviation of prices</li>
                    <li>Rank counties by price instability</li>
                    <li>Visualize 12-month price trends</li>
                    <li>Optional: Predict next month's prices using simple regression</li>
                </ul>
            </section>

            <footer style={{ textAlign: "center", padding: "20px", background: "#2c3e50", color: "#fff" }}>
                Made by Team Price Sight | Hackathon 2026
            </footer>
        </div>
    );
}