import React, { useEffect, useState } from 'react';
import './WidgetSm.css';
import { Visibility } from '@material-ui/icons';
import axios from 'axios';

const WidgetSm = () => {

    const [newUser, setNewUser] = useState([]);

    useEffect(() => {
        const getNewUser = async () => {
            try {
                const res = await axios.get('/users?new=true', {
                    headers: {
                        token: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxOThiODdkMTM0MDQzMjU4ODMzYTAzYiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYzNzYzODYwMywiZXhwIjoxNjM4MDcwNjAzfQ.ghUzt1r2Lg41GaOMjUwFKYqnfukBdZVTOH4K5pcEbKI"
                    }
                });
                setNewUser(res.data);
            } catch (error) {
                console.log(error);
            }
        }
        getNewUser();
    }, []);

    return (
        <div className="widgetsm">
            <span className="widgetsmTitle">New Join Members</span>
            <ul className="widgetsmList">
                { newUser.map(user => (
                    <li className="widgetsmListItem">
                        <img 
                            src={user.profilePic || "https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"} 
                            alt="" 
                            className="widgetsmImg" 
                        />
                        <div className="widgetsmuser">
                            <span className="widgetsmUsername">{user.username}</span>
                            {/* <span className="widgetsmUserTitle">Software Engineer</span> */}
                        </div>
                        <button className="widgetsmButton">
                            <Visibility className="widgetsmIcon" />
                            Display
                        </button>
                    </li>
                )) }
            </ul>
        </div>
    )
}

export default WidgetSm
