import "./About.css";

export default function About() {
    return (
        <div className="about-container">

            <h1>About Price Sight</h1>

            <p className="about-intro">
                Price Sight helps visualize food price volatility across Kenyan counties.
                By analyzing market price fluctuations, we help households, researchers,
                and policymakers understand where food prices are unstable.
            </p>

            <div className="info-section">

                <div className="info-card">
                    <h3>📊 Data Driven</h3>
                    <p>
                        We analyze historical food price data to detect volatility
                        patterns across counties and markets.
                    </p>
                </div>

                <div className="info-card">
                    <h3>🌍 Local Insights</h3>
                    <p>
                        Price Sight focuses on regional differences so communities
                        can understand their local food markets.
                    </p>
                </div>

                <div className="info-card">
                    <h3>📈 Smart Planning</h3>
                    <p>
                        Policymakers and NGOs can use these insights to plan
                        interventions and food programs.
                    </p>
                </div>

            </div>

            <h2 className="section-title">Food Market Examples</h2>

            <div className="image-grid">
                <div className="image-card">
                    <img src="/images/maize.jpg" alt="Maize" />
                    <p>Tracking maize price volatility</p>
                </div>

                <div className="image-card">
                    <img src="/images/beans.jpg" alt="Beans" />
                    <p>Bean market trends</p>
                </div>

                <div className="image-card">
                    <img src="/images/market2.jpg" alt="Market" />
                    <p>Local market monitoring</p>
                </div>
            </div>

        </div>
    );
}