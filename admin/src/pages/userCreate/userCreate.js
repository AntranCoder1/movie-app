import React from 'react';
import './userCreate.css';

const userCreate = () => {
    return (
        <div className="userCreate">
            <h1 className="userCreateTitle">New User</h1>
            <form className="userCreateForm">
                <div className="createUserItem">
                    <label className="">Username</label>
                    <input type="text" placeholder="username" />
                </div>
                <div className="createUserItem">
                    <label className="">Full Name</label>
                    <input type="text" placeholder="full name" />
                </div>
                <div className="createUserItem">
                    <label className="">Email</label>
                    <input type="text" placeholder="email" />
                </div>
                <div className="createUserItem">
                    <label className="">Password</label>
                    <input type="text" placeholder="password" />
                </div>
                <div className="createUserItem">
                    <label className="">Phone</label>
                    <input type="text" placeholder="phone" />
                </div>
                <div className="createUserItem">
                    <label className="">Address</label>
                    <input type="text" placeholder="address" />
                </div>
                <div className="createUserItem">
                    <label className="">Gender</label>
                    <div className="userCreateGender">
                        <input type="radio" placeholder="gender" id="male" value="male" />
                        <label htmlFor="male">Male</label>
                        <input type="radio" placeholder="gender" id="female" value="female" />
                        <label htmlFor="female">Female</label>
                        <input type="radio" placeholder="gender" id="others" value="others" />
                        <label htmlFor="others">Others</label>
                    </div>
                </div>
                <div className="createUserItem">
                    <label>Active</label>
                    <select className="userCreateSelect" name="active" id="active">
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                    </select>
                </div>
                <button className="userCreateButton">Create</button>
            </form>
        </div>
    )
}

export default userCreate
