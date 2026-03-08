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
                            <p>
                                Maize is the most important staple food in Kenya and provides a large
                                portion of daily caloric intake for households across the country. <br />
                                <br />
                                It is grown by the vast majority of smallholder farmers and is widely
                                consumed in foods such as ugali, githeri, and maize flour dishes.
                                Because maize production depends heavily on rainfall and seasonal
                                harvest cycles, prices often fluctuate throughout the year. <br /> <br />
                                These fluctuations are influenced by factors such as drought, transport
                                costs, supply shortages, and cross-border trade. During periods of low
                                harvest or high demand, maize prices can rise significantly in many regions.
                            </p>
                        </div>
                        <img src="/images/maize2.jpg" alt="Maize market" />
                    </div>

                    <div className="explain-row">
                        <img src="/images/beans2.jpg" alt="Beans market" />
                        <div className="explain-text">
                            <h3>Beans</h3>
                            <p>
                                Beans are the second most important staple food crop in Kenya and are
                                widely consumed alongside maize in meals such as githeri and chapati
                                beans. They provide high levels of protein, fiber, and essential
                                vitamins, making them an important source of nutrition for many
                                households.
                            </p>
                            <p>
                                Beans are cultivated in several regions including Eastern, Western,
                                Central, and Rift Valley counties. However, their prices can fluctuate
                                depending on rainfall conditions, soil fertility, and market demand,
                                which can make them less predictable for both consumers and traders.
                            </p>
                        </div>
                    </div>

                    <div className="explain-row">
                        <div className="explain-text">
                            <h3>Rice</h3>
                            <p>
                                Rice is the third most important cereal staple in Kenya after maize
                                and wheat and is especially popular in urban areas. Much of Kenya’s
                                rice production comes from irrigated schemes like Mwea, while the rest
                                is rain-fed. Prices vary based on local supply, imports, and seasonal
                                production.
                            </p>
                        </div>
                        <img src="/images/rice2.jpg" alt="Rice field" />
                    </div>

                </div>

            </section>

            <section className="why">
                <h2>Why Price Sight</h2>

                <div className="why-grid">
                    {/* Icons used from Flaticon (Kenya icons by Agung Rama) */}
                    <div className="why-item">
                        <img src="/images/map.png" alt="Regional Analysis" />
                        <h3>Regional Analysis</h3>
                        <p>
                            Compare price volatility across all 47 counties to identify areas facing the
                            most unstable food prices.
                        </p>
                    </div>

                    <div className="why-item">
                        <img src="/images/chart.png" alt="Historical Trends" />
                        <h3>Historical Trends</h3>
                        <p>Visualize monthly price changes for staple foods using historical market data.

                        </p>
                    </div>

                    <div className="why-item">
                        <img src="/images/predict.png" alt="Price Forecasting" />
                        <h3>Price Forecasting</h3>
                        <p>Predict short-term price movements using simple statistical models trained
                            on previous data.</p>
                    </div>
                </div>
            </section>

            <section className="workflow">
                <h2>How the System Works</h2>

                <div className="workflow-steps">
                    <div>
                        <img src="/images/database.png" alt="Collect Data" />
                        <span>1</span>
                        <p>Collect monthly food price datasets from open data sources.</p>
                    </div>

                    <div>
                        <img src="/images/calculator.png" alt="Calculate Volatility" />
                        <span>2</span>
                        <p>Calculate volatility using statistical analysis of price changes.</p>
                    </div>

                    <div>
                        <img src="/images/map2.png" alt="Rank Counties" />
                        <span>3</span>
                        <p>Rank counties based on price instability.</p>
                    </div>

                    <div>
                        <img src="/images/trend.png" alt="Forecast Prices" />
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