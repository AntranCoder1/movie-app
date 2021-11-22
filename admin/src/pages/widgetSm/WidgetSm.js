import React from 'react';
import './WidgetSm.css';
import { Visibility } from '@material-ui/icons';

const WidgetSm = () => {
    return (
        <div className="widgetsm">
            <span className="widgetsmTitle">New Join Members</span>
            <ul className="widgetsmList">
                <li className="widgetsmListItem">
                    <img src="https://i.pinimg.com/564x/db/ed/1a/dbed1aa7eb42f356978b909dccd31e9b.jpg" alt="" className="widgetsmImg" />
                    <div className="widgetsmuser">
                        <span className="widgetsmUsername">Anna Keller</span>
                        <span className="widgetsmUserTitle">Software Engineer</span>
                    </div>
                    <button className="widgetsmButton">
                        <Visibility className="widgetsmIcon" />
                        Display
                    </button>
                </li>
                <li className="widgetsmListItem">
                    <img src="https://i.pinimg.com/564x/db/ed/1a/dbed1aa7eb42f356978b909dccd31e9b.jpg" alt="" className="widgetsmImg" />
                    <div className="widgetsmuser">
                        <span className="widgetsmUsername">Anna Keller</span>
                        <span className="widgetsmUserTitle">Software Engineer</span>
                    </div>
                    <button className="widgetsmButton">
                        <Visibility />
                        Display
                    </button>
                </li>
            </ul>
        </div>
    )
}

export default WidgetSm
