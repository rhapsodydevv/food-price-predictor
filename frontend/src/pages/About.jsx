import "./About.css";

export default function About() {
    return (
        <div className="about-container">

            <h1 className="about-title">The Story of Price Sight</h1>

            <p className="about-intro">
                Imagine a family in a rural Kenyan county trying to plan meals for the month.
                One week, maize prices skyrocket because of a dry spell; the next, beans prices fall
                sharply after a bumper harvest.
                Traders struggle to stock markets efficiently, and policymakers scramble to ensure food
                security.
                Price Sight was born from this challenge: a tool that brings clarity to the chaos,
                helping families, traders, and organizations understand where staple food prices
                fluctuate the most and what might come next.
            </p>

            <div className="mission-section">

                <div className="mission-card card-1">
                    <h3>Our Mission</h3>
                    <p>
                        Make food price data accessible and actionable for everyone
                        starting from families to organizations.
                    </p>
                </div>

                <div className="mission-card card-2">
                    <h3>What We Analyze</h3>
                    <p>
                        Maize, beans, rice, and other staples across 47 counties,
                        highlighting where prices fluctuate the most.
                    </p>
                </div>

                <div className="mission-card card-3">
                    <h3>Why It Matters</h3>
                    <p>
                        Helping households budget, NGOs plan interventions, and
                        policymakers make data-driven decisions.
                    </p>
                </div>

            </div>

            <h2 className="section-title">Impact Highlights</h2>

            <div className="impact-grid">
                <div className="impact-card">
                    <h3>47 Counties</h3>
                    <p>Data tracked across all Kenyan counties.</p>
                </div>

                <div className="impact-card">
                    <h3>2 Staple Foods</h3>
                    <p>Maize and beans monitored for volatility.</p>
                </div>

                <div className="impact-card">
                    <h3>Predictive Insights</h3>
                    <p>Forecasts for the next month's prices in key counties.</p>
                </div>
            </div>
            

        </div>
    );
}