import { useState } from "react";
import {
    Bar,
    BarChart,
    CartesianGrid,
    Legend,
    Line,
    LineChart,
    ResponsiveContainer,
    Tooltip,
    XAxis,
    YAxis
} from "recharts";

import "leaflet/dist/leaflet.css";

import "./Dashboard.css";

export default function Dashboard() {

    const regions = {
        Western: ["Kakamega", "Bungoma", "Busia", "Vihiga"],
        Nyanza: ["Kisumu", "Siaya", "Homa Bay", "Migori", "Kisii", "Nyamira"],
        RiftValley: ["Nakuru", "Turkana", "Uasin Gishu", "Baringo"],
        Central: ["Kiambu", "Nyeri", "Murang'a", "Kirinyaga", "Nyandarua"],
        Eastern: ["Machakos", "Meru", "Embu", "Kitui"],
        Coast: ["Mombasa", "Kilifi", "Kwale", "Tana River", "Lamu"],
        Nairobi: ["Nairobi"],
        NorthEastern: ["Garissa", "Wajir", "Mandera"]
    };

    const allCounties = Object.values(regions).flat();

    const priceData = [
        { month: "Jan", maize: 55, beans: 95 },
        { month: "Feb", maize: 58, beans: 100 },
        { month: "Mar", maize: 60, beans: 102 },
        { month: "Apr", maize: 57, beans: 98 },
        { month: "May", maize: 63, beans: 108 },
        { month: "Jun", maize: 64, beans: 110 }
    ];

    const countyData = [
        { county: "Turkana", volatility: 0.78 },
        { county: "Mandera", volatility: 0.74 },
        { county: "Nairobi", volatility: 0.65 },
        { county: "Kisumu", volatility: 0.61 },
        { county: "Nakuru", volatility: 0.59 }
    ];

    const [region, setRegion] = useState("");
    const [county, setCounty] = useState("");
    const [search, setSearch] = useState("");
    const [error, setError] = useState("");

    /* SEARCH FUNCTION */

    const handleSearch = () => {

        const found = allCounties.find(
            c => c.toLowerCase() === search.toLowerCase()
        );

        if (found) {

            setCounty(found);
            setError("");

            const regionFound = Object.keys(regions).find(r =>
                regions[r].includes(found)
            );

            setRegion(regionFound);

        } else {

            setError("County not found. Please check spelling.");

        }

    };

    /* SIMPLE PRICE PREDICTION */

    const predict = (data, key) => {

        let n = data.length;
        let sumX = 0, sumY = 0, sumXY = 0, sumXX = 0;

        data.forEach((d, i) => {
            sumX += i;
            sumY += d[key];
            sumXY += i * d[key];
            sumXX += i * i;
        });

        const slope = (n * sumXY - sumX * sumY) / (n * sumXX - sumX * sumX);
        const intercept = (sumY - slope * sumX) / n;

        return Math.round(intercept + slope * n);

    };

    const maizePrediction = predict(priceData, "maize");
    const beansPrediction = predict(priceData, "beans");

    /* SORT RANKINGS */

    const ranked = [...countyData].sort(
        (a, b) => b.volatility - a.volatility
    );

    /* MARKET ALERTS */

    const alerts = [];

    if (maizePrediction > priceData[priceData.length - 1].maize) {
        alerts.push("⚠ Maize prices expected to rise next month");
    }

    if (beansPrediction > priceData[priceData.length - 1].beans) {
        alerts.push("⚠ Beans prices trending upward");
    }

    if (region === "RiftValley") {
        alerts.push("⚠ Volatility increasing in Rift Valley markets");
    }

    return (

        <div className="dashboard-container">

            {/* HEADER */}

            <div className="dashboard-header">
                <h1>Market Insights Dashboard</h1>
                <p>Monitoring food price volatility across Kenyan counties</p>
            </div>

            {/* FILTERS */}

            <div className="filters">

                <select onChange={(e) => setRegion(e.target.value)}>
                    <option>Select Region</option>
                    {Object.keys(regions).map((r) => (
                        <option key={r}>{r}</option>
                    ))}
                </select>

                <select onChange={(e) => setCounty(e.target.value)}>
                    <option>Select County</option>
                    {region &&
                        regions[region].map((c) => (
                            <option key={c}>{c}</option>
                        ))}
                </select>

                <input
                    className="search-bar"
                    placeholder="Search county..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    onKeyDown={(e) => {
                        if (e.key === "Enter") handleSearch();
                    }}
                />

                <button onClick={handleSearch}>Search</button>

            </div>

            {error && <p className="error">{error}</p>}

            {/* COUNTY PROFILE */}

            <div className="county-card">

                <h2>{county || "Select a County"}</h2>

                <p>Region: {region || "Unknown"}</p>
                <p>Average Maize Price: 64 KES/kg</p>
                <p>Average Beans Price: 110 KES/kg</p>
                <p>Volatility Score: 0.61</p>

            </div>

            {/* METRIC CARDS */}

            <div className="stats-grid">

                <div className="stat-card">
                    <h3>Highest Volatility</h3>
                    <p>Turkana</p>
                </div>

                <div className="stat-card">
                    <h3>Predicted Maize Price</h3>
                    <p>{maizePrediction} KES/kg</p>
                </div>

                <div className="stat-card">
                    <h3>Predicted Beans Price</h3>
                    <p>{beansPrediction} KES/kg</p>
                </div>

                <div className="stat-card">
                    <h3>Counties Tracked</h3>
                    <p>47</p>
                </div>

            </div>

            {/* CHARTS */}

            <div className="chart-grid">

                <div className="card">

                    <h2>Price Trends</h2>

                    <ResponsiveContainer width="100%" height={300}>

                        <LineChart data={priceData}>

                            <CartesianGrid strokeDasharray="3 3" opacity={0.2} />
                            <XAxis dataKey="month" />
                            <YAxis />
                            <Tooltip />
                            <Legend />

                            <Line
                                type="monotone"
                                dataKey="maize"
                                stroke="#22c55e"
                                strokeWidth={3}
                            />

                            <Line
                                type="monotone"
                                dataKey="beans"
                                stroke="#3b82f6"
                                strokeWidth={3}
                            />

                        </LineChart>

                    </ResponsiveContainer>

                </div>

                <div className="card">

                    <h2>County Volatility</h2>

                    <ResponsiveContainer width="100%" height={300}>

                        <BarChart data={ranked}>

                            <CartesianGrid strokeDasharray="3 3" opacity={0.2} />
                            <XAxis dataKey="county" />
                            <YAxis />
                            <Tooltip />

                            <Bar dataKey="volatility" fill="#f97316" />

                        </BarChart>

                    </ResponsiveContainer>

                </div>

            </div>

            {/* RANKING TABLE */}

            <div className="card">

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

                        {ranked.map((c, index) => (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{c.county}</td>
                                <td>{c.volatility}</td>
                            </tr>
                        ))}

                    </tbody>

                </table>

            </div>

            {/* ALERTS */}

            <div className="alerts-card">

                <h2>Market Alerts</h2>

                <ul>
                    {alerts.map((a, i) => (
                        <li key={i}>{a}</li>
                    ))}
                </ul>

            </div>

            {/* INSIGHTS */}

            <div className="insight-card">

                <h2>Market Insight</h2>

                <p>

                    Recent data suggests maize prices have gradually increased over the
                    past three months. Northern counties such as Turkana and Mandera
                    continue to show the highest volatility, likely influenced by supply
                    disruptions and rainfall variability.

                </p>

                <p className="data-source">

                    Last Updated: June 2025
                    Data Source: Kenya Open Data Portal

                </p>

            </div>

        </div>

    );
}