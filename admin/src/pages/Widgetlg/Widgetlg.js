import React from 'react';
import './Widgetlg.css';

const Widgetlg = () => {

    const Button = ({ type }) => {
        return <button className={"widgetlgButton " + type}>{type}</button>
    }

    return (
        <div className="Widgetlg">
            <h3 className="widgetlgTitle">Latest transactions</h3>
            <table className="widgetlgTable">
                <tbody>
                    <tr className="widgetlgTr">
                        <th className="widgetlgTh">Customer</th>
                        <th className="widgetlgTh">Date</th>
                        <th className="widgetlgTh">Amount</th>
                        <th className="widgetlgTh">Status</th>
                    </tr>

                    <tr className="widgetlgTr">
                        <td className="widgetlgUser">
                            <img src="https://i.pinimg.com/564x/db/ed/1a/dbed1aa7eb42f356978b909dccd31e9b.jpg" alt="" className="widgetlgImg" />
                            <span className="widgetlgName">Susan Carol</span>
                        </td>
                        <td className="widgetlgDate">2 Jun 2021</td>
                        <td className="widgetlgAmount">$122.00</td>
                        <td className="widgetlgStatus">
                            <Button type="Approved"/>
                        </td>
                    </tr>
                    <tr className="widgetlgTr">
                        <td className="widgetlgUser">
                            <img src="https://i.pinimg.com/564x/db/ed/1a/dbed1aa7eb42f356978b909dccd31e9b.jpg" alt="" className="widgetlgImg" />
                            <span className="widgetlgName">Susan Carol</span>
                        </td>
                        <td className="widgetlgDate">2 Jun 2021</td>
                        <td className="widgetlgAmount">$122.00</td>
                        <td className="widgetlgStatus">
                            <Button type="Declined"/>
                        </td>
                    </tr>
                    <tr className="widgetlgTr">
                        <td className="widgetlgUser">
                            <img src="https://i.pinimg.com/564x/db/ed/1a/dbed1aa7eb42f356978b909dccd31e9b.jpg" alt="" className="widgetlgImg" />
                            <span className="widgetlgName">Susan Carol</span>
                        </td>
                        <td className="widgetlgDate">2 Jun 2021</td>
                        <td className="widgetlgAmount">$122.00</td>
                        <td className="widgetlgStatus">
                            <Button type="Pending"/>
                        </td>
                    </tr>
                    <tr className="widgetlgTr">
                        <td className="widgetlgUser">
                            <img src="https://i.pinimg.com/564x/db/ed/1a/dbed1aa7eb42f356978b909dccd31e9b.jpg" alt="" className="widgetlgImg" />
                            <span className="widgetlgName">Susan Carol</span>
                        </td>
                        <td className="widgetlgDate">2 Jun 2021</td>
                        <td className="widgetlgAmount">$122.00</td>
                        <td className="widgetlgStatus">
                            <Button type="Approved"/>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Widgetlg
