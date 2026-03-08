import { useEffect, useState } from "react";
import "./Dashboard.css";

export default function Dashboard() {

    const [counties, setCounties] = useState([]);
    const [predictions, setPredictions] = useState([]);
    const [summary, setSummary] = useState(null);

    useEffect(() => {
        fetch("http://localhost:5000/api/counties")
            .then(res => res.json())
            .then(data => setCounties(data));

        fetch("http://localhost:5000/api/predictions")
            .then(res => res.json())
            .then(data => setPredictions(data));

        fetch("http://localhost:5000/api/summary")
            .then(res => res.json())
            .then(data => setSummary(data));

    }, []);

    return (
        <div className="dashboard">

            <h1>Food Price Dashboard</h1>


            {summary && (
                <div className="summary-grid">

                    <div className="summary-card">
                        <h3>Counties Analyzed</h3>
                        <p>{summary.total_counties}</p>
                    </div>

                    <div className="summary-card">
                        <h3>Most Volatile County</h3>
                        <p>{summary.most_volatile}</p>
                    </div>

                    <div className="summary-card">
                        <h3>Average Maize Price</h3>
                        <p>{summary.avg_maize}</p>
                    </div>

                    <div className="summary-card">
                        <h3>Average Bean Price</h3>
                        <p>{summary.avg_beans}</p>
                    </div>

                </div>
            )}

            <section>

                <h2>County Volatility Rankings</h2>

                <table>

                    <thead>
                        <tr>
                            <th>Rank</th>
                            <th>County</th>
                            <th>Volatility Score</th>
                        </tr>
                    </thead>

                    <tbody>

                        {counties.map((county, index) => (
                            <tr key={county.county}>

                                <td>{index + 1}</td>
                                <td>{county.county}</td>
                                <td>{county.volatility}</td>

                            </tr>
                        ))}

                    </tbody>

                </table>

            </section>

            <section>

                <h2>Price Predictions</h2>

                <table>

                    <thead>
                        <tr>
                            <th>County</th>
                            <th>Maize Current</th>
                            <th>Maize Predicted</th>
                            <th>Beans Current</th>
                            <th>Beans Predicted</th>
                        </tr>
                    </thead>

                    <tbody>

                        {predictions.map((p) => (

                            <tr key={p.county}>
                                <td>{p.county}</td>
                                <td>{p.maize_current}</td>
                                <td>{p.maize_predicted}</td>
                                <td>{p.beans_current}</td>
                                <td>{p.beans_predicted}</td>
                            </tr>

                        ))}

                    </tbody>

                </table>

            </section>

        </div>
    );
}