import React, { useState } from 'react';
import './Product.css';
import { product } from '../../data';
import { DataGrid } from '@material-ui/data-grid';
import { Link } from 'react-router-dom';
import { DeleteOutline } from '@material-ui/icons';

const Product = () => {

    const [products, setProduct] = useState(product);

    const handleChangeDelete = (id) => {
        setProduct(products.filter(item => item.id !== id));
    }

    const columns = [
        { field: 'id', headerName: 'ID', width: 90 },
        { field: 'imageUrl', headerName: 'Product Image', width: 170, renderCell: (params) => {
            return (
                <div className="userListUser">
                    <img src={params.row.imageUrl} alt="" className="userListImg" />
                </div>
            )
        } },
        { field: 'name', headerName: 'Product Name', width: 200 },
        { field: 'description', headerName: 'Description', width: 400 },
        { field: 'price', headerName: 'Product Price', width: 170 },
        { field: 'action', headerName: 'Action', width: 150, renderCell: (params) => {
            return (
                <>
                    <Link to={"/products/" + params.id}>
                        <button className="userListEdit">Edit</button>
                    </Link>
                    <DeleteOutline className="userListDelete" onClick={() => handleChangeDelete(params.id)} />
                </>
            )
        } }
    ]

    return (
        <div className="product">
            <DataGrid
                rows={products}
                columns={columns}
                pageSize={8}
                rowsPerPageOptions={[5]}
                checkboxSelection
                disableSelectionOnClick
            />
        </div>
    )
}

export default Product
