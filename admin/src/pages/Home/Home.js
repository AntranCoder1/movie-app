import React from 'react';
import Chart from '../chart/Chart';
import FeaturedInfo from '../featuredInfo/FeaturedInfo';
import { data } from '../../data';
import './Home.css';
import WidgetSm from '../widgetSm/WidgetSm';
import Widgetlg from '../Widgetlg/Widgetlg';

const Home = () => {
    return (
        <div className="home">
            <FeaturedInfo />
            <Chart data={data} title="User Analytics" grid datakey="uv" />
            <div className="homwWidgets">
                <WidgetSm />
                <Widgetlg />
            </div>
        </div>
    )
}

export default Home
