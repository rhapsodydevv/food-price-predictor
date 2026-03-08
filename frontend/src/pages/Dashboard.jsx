import {
    Bar,
    BarChart,
    Line,
    LineChart,
    ResponsiveContainer,
    Tooltip,
    XAxis,
    YAxis
} from "recharts";
import "./Dashboard.css";

export default function Dashboard() {

    const priceData = [
        { month: "Jan", maize: 55, beans: 98 },
        { month: "Feb", maize: 57, beans: 102 },
        { month: "Mar", maize: 60, beans: 105 },
        { month: "Apr", maize: 58, beans: 100 },
        { month: "May", maize: 62, beans: 108 },
        { month: "Jun", maize: 64, beans: 110 }
    ];

    const countyVolatility = [
        { county: "Turkana", score: 0.78 },
        { county: "Mandera", score: 0.74 },
        { county: "Nairobi", score: 0.65 },
        { county: "Kisumu", score: 0.61 },
        { county: "Nakuru", score: 0.59 }
    ];

    const predictions = [
        { food: "Maize", current: 64, predicted: 67 },
        { food: "Beans", current: 110, predicted: 108 }
    ];

    return (
        <div className="dashboard-container">

            <h1>Price Sight Dashboard</h1>

            <div className="card">
                <h2>Food Price Trends</h2>

                <ResponsiveContainer width="100%" height={300}>
                    <LineChart data={priceData}>
                        <XAxis dataKey="month" />
                        <YAxis />
                        <Tooltip />
                        <Line type="monotone" dataKey="maize" stroke="#22c55e" />
                        <Line type="monotone" dataKey="beans" stroke="#f59e0b" />
                    </LineChart>
                </ResponsiveContainer>

            </div>

            <div className="card">
                <h2>County Volatility Rankings</h2>

                <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={countyVolatility}>
                        <XAxis dataKey="county" />
                        <YAxis />
                        <Tooltip />
                        <Bar dataKey="score" fill="#3b82f6" />
                    </BarChart>
                </ResponsiveContainer>

            </div>


            <div className="card">
                <h2>Estimated Prices Next Month</h2>

                <table>
                    <thead>
                        <tr>
                            <th>Commodity</th>
                            <th>Current Price (KES)</th>
                            <th>Predicted Price (KES)</th>
                        </tr>
                    </thead>

                    <tbody>
                        {predictions.map((item, index) => (
                            <tr key={index}>
                                <td>{item.food}</td>
                                <td>{item.current}</td>
                                <td>{item.predicted}</td>
                            </tr>
                        ))}
                    </tbody>

                </table>
            </div>

        </div>
    );
}