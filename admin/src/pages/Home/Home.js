import React, { useState, useEffect, useMemo } from 'react';
import Chart from '../chart/Chart';
import FeaturedInfo from '../featuredInfo/FeaturedInfo';
import WidgetSm from '../widgetSm/WidgetSm';
import Widgetlg from '../Widgetlg/Widgetlg';
import axios from 'axios';
import './Home.css';

const Home = () => {

    const MONTHS = useMemo(() => [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Agu',
        'Sep',
        'Oct',
        'Nov',
        'Dec'
    ], []);
    
    const [userStats, setUserStats] = useState([]);
    
    useEffect(() => {
        const getStats = async () => {
            try {
                const res = await axios.get('/users/stats', {
                    headers: {
                        token: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxOThiODdkMTM0MDQzMjU4ODMzYTAzYiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYzNzYzODYwMywiZXhwIjoxNjM4MDcwNjAzfQ.ghUzt1r2Lg41GaOMjUwFKYqnfukBdZVTOH4K5pcEbKI"
                    }
                })

                const statsList = res.data.sort((a, b) => {
                    return a._id - b._id;
                });

                statsList.map((item) => 
                    setUserStats((prev) => 
                    [...prev, { name: MONTHS[item._id - 1], "New User": item.total }]
                    )
                )
            } catch (error) {
                console.log(error);
            }
        }
        getStats();
    }, [MONTHS]);

    return (
        <div className="home">
            <FeaturedInfo />
            <Chart 
                data={userStats} 
                title="User Analytics" 
                grid
                datakey="New User"
            />
            <div className="homwWidgets">
                <WidgetSm />
                <Widgetlg />
            </div>
        </div>
    )
}

export default Home
