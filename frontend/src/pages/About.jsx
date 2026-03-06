import "./About.css";

export default function About() {
    return (
        <div style={{ padding: "40px", textAlign: "center" }}>
            <h1>About Price Sight</h1>
            <p>
                Price Sight is a tool that tracks food price volatility across Kenyan counties.
                Our goal is to help households, policymakers, and organizations plan better
                by highlighting areas with unpredictable food prices.
            </p>

            <div className="image-grid">
                <div className="image-card">
                    <img src="/images/maize.jpg" alt="Maize" />
                    <p>Maize price tracking</p>
                </div>
                <div className="image-card">
                    <img src="/images/beans.jpg" alt="Beans" />
                    <p>Beans price tracking</p>
                </div>
                <div className="image-card">
                    <img src="/images/market.jpg" alt="Market" />
                    <p>Market overview</p>
                </div>
            </div>
        </div>
    );
}