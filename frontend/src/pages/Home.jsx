import { Link } from "react-router-dom";
import "./Home.css";

export default function Home() {
    return (
        <div className="home">

            <section className="hero">
                <h1>Price Sight</h1>
                <p>Tracking and predicting food price volatility across Kenyan counties.</p>

                <Link to="/dashboard">
                    <button className="hero-button">Explore Dashboard</button>
                </Link>
            </section>

            <section className="problem">

                <div className="problem-text">
                    <h2>Understanding Food Price Volatility</h2>

                    <div className="explain-row">
                        <div className="explain-text">
                            <h3>Maize</h3>
                            <p>Maize is the most important staple food in Kenya and provides a large 
                                portion of daily caloric intake for households across the country. 
                                It is grown by the vast majority of smallholder farmers and is widely 
                                consumed in foods such as ugali, githeri, and maize flour dishes.
                                Because maize production depends heavily on rainfall and seasonal 
                                harvest cycles, prices often fluctuate throughout the year. 
                                
                                These fluctuations are influenced by factors such as drought, transport costs,
                                supply shortages, and cross-border trade. During periods of low harvest 
                                or high demand, maize prices can rise significantly in many regions.</p>
                        </div>

                        <img src="/images/maize-market.jpg" />
                    </div>

                    <div className="explain-row">
                        <img src="/images/beans-market.jpg" />

                        <div className="explain-text">
                            <h3>Beans</h3>
                            <p>...</p>
                        </div>
                    </div>
                </div>

                <div className="problem-images">
                    <img src="/images/market.jpg" alt="Market" />
                    <img src="/images/maize.jpg" alt="Maize" />
                    <img src="/images/beans.jpg" alt="Beans" />
                </div>

            </section>

            <section className="why">

                <h2>Why Price Sight</h2>

                <div className="why-grid">

                    <div className="why-item">
                        <h3>Regional Analysis</h3>
                        <p>
                            Compare price volatility across all 47 counties to
                            identify areas facing the most unstable food prices.
                        </p>
                    </div>

                    <div className="why-item">
                        <h3>Historical Trends</h3>
                        <p>
                            Visualize monthly price changes for staple foods
                            using historical market data.
                        </p>
                    </div>

                    <div className="why-item">
                        <h3>Price Forecasting</h3>
                        <p>
                            Predict short-term price movements using simple
                            statistical models trained on previous data.
                        </p>
                    </div>

                </div>

            </section>

            <section className="workflow">

                <h2>How the System Works</h2>

                <div className="workflow-steps">

                    <div>
                        <span>1</span>
                        <p>Collect monthly food price datasets from open data sources.</p>
                    </div>

                    <div>
                        <span>2</span>
                        <p>Calculate volatility using statistical analysis of price changes.</p>
                    </div>

                    <div>
                        <span>3</span>
                        <p>Rank counties based on price instability.</p>
                    </div>

                    <div>
                        <span>4</span>
                        <p>Generate simple forecasts for maize and bean prices.</p>
                    </div>

                </div>

            </section>

            <footer className="footer">
                Price Sight | Hackathon Project
            </footer>

        </div>
    );
}