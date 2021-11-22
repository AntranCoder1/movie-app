import React, { useState } from 'react';
import './UserList.css';
import { DataGrid } from '@material-ui/data-grid';
import { DeleteOutline } from '@material-ui/icons';
import { rows } from '../../data';
import { Link } from 'react-router-dom';

const UserList = () => {

    const [user, setUser] = useState(rows);

    const handleChangeDelete = (id) => {
        setUser(user.filter(item => item.id !== id));
    }

    const columns = [
        { field: 'id', headerName: 'ID', width: 90 },
        { field: 'username', headerName: 'User name', width: 300, renderCell: (params) => {
            return (
                <div className="userListUser">
                    <img src={params.row.avatar} alt="" className="userListImg" />
                    {params.row.username}
                </div>
            )
        } },
        { field: 'email', headerName: 'Email', width: 300 },
        {
          field: 'status',
          headerName: 'Status',
          width: 120,
        },
        {
            field: 'transaction',
            headerName: 'Transaction',
            width: 150,
        },
        {
            field: 'action',
            headerName: 'Action',
            width: 150,
            renderCell: (params) => {
                return (
                    <>
                        <Link to={"/users/" + params.row.id}>
                            <button className="userListEdit">Edit</button>
                        </Link>
                        <DeleteOutline className="userListDelete" onClick={() => handleChangeDelete(params.id)} />
                    </>
                )
            }
        }
    ];

    return (
        <div className="userList">
            <DataGrid
                rows={user}
                columns={columns}
                pageSize={8}
                rowsPerPageOptions={[5]}
                checkboxSelection
                disableSelectionOnClick
            />
        </div>
    )
}

export default UserList
