import React from 'react';
import { Link } from 'react-router-dom';
import Chart from '../chart/Chart';
import { productData } from '../../data';
import './productEdit.css';
import { Publish } from '@material-ui/icons';

const productEdit = () => {
    return (
        <div className="productEdit">
            <div className="productEditContainer">
                <h1 className="productEditTitle">Product</h1>
                <Link to="/newProduct">
                    <button className="productEditAddButton">Create</button>
                </Link>
            </div>
            <div className="productEditTop">
                <div className="productEditTopLeft">
                    <Chart title="Sales Performance" data={productData} grid datakey="sales" />
                </div>
                <div className="productEditTopRight">
                    <div className="productEditInfoTop">
                        <img src="https://i.pinimg.com/564x/03/d7/c4/03d7c44f97b9b40facec6064df85107c.jpg" alt="" className="productEditImg" />
                        <span className="productEditName">buttermilk pancakes</span>
                    </div>
                    <div className="productEditInfoBottom">
                        <div className="productEditInfoItem">
                            <div className="productEditInfoKey">id:</div>
                            <div className="productEditInfoValue">123</div>
                        </div>
                        <div className="productEditInfoItem">
                            <div className="productEditInfoKey">sales:</div>
                            <div className="productEditInfoValue">5123</div>
                        </div>
                        <div className="productEditInfoItem">
                            <div className="productEditInfoKey">active:</div>
                            <div className="productEditInfoValue">yes</div>
                        </div>
                        <div className="productEditInfoItem">
                            <div className="productEditInfoKey">in stock:</div>
                            <div className="productEditInfoValue">no</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="productEditBottom">
                <form className="productEditForm">
                    <div className="productEditFormLeft">
                        <label>Product Name</label>
                        <input type="text" placeholder="" />
                        <label>In Stock</label>
                        <select name="inStock" id="idStock">
                            <option value="yes">Yes</option>
                            <option vlaue="no">No</option>
                        </select>

                        <label>Active</label>
                        <select name="active" id="idActive">
                            <option value="yes">Yes</option>
                            <option vlaue="no">No</option>
                        </select>
                    </div>
                    <div className="productEditFormRight">
                        <div className="productEditUpload">
                            <img src="https://i.pinimg.com/564x/03/d7/c4/03d7c44f97b9b40facec6064df85107c.jpg" alt="" className="productEditUploadImg" />
                            <label for="file">
                                <Publish />
                            </label>
                            <input type="file" id="file" style={{ display: 'none' }} />
                        </div>
                        <button className="productEditButton">Update</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default productEdit
