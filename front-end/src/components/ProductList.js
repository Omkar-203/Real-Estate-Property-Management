import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const ProductList = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        getProducts();
    }, []);

    const getProducts = async () => {
        try {
            const res = await fetch("http://localhost:5000/products", {
                headers: {
                    authorization: `bearer ${JSON.parse(localStorage.getItem('token'))}`
                }
            });
            if (!res.ok) throw new Error("Failed to fetch");
            const data = await res.json();
            setProducts(data);
        } catch (error) {
            console.error("Error fetching products:", error);
        }
    };

    const deleteProduct = async (id) => {
        try {
            const res = await fetch(`http://localhost:5000/product/${id}`, {
                method: 'DELETE',
                headers: {
                    authorization: `bearer ${JSON.parse(localStorage.getItem('token'))}`
                }
            });

            if (res.ok) {
                // Filter out the deleted product from local state
                setProducts(prev => prev.filter(item => item._id !== id));
            } else {
                console.error("Delete failed with status:", res.status);
            }
        } catch (err) {
            console.error("Delete error:", err);
        }
    };

    const searchHandle = async (event) => {
        let key = event.target.value;
        if (key) {
            try {
                const res = await fetch(`http://localhost:5000/search/${key}`, {
                    headers: {
                        authorization: `bearer ${JSON.parse(localStorage.getItem('token'))}`
                    }
                });
                if (!res.ok) throw new Error("Search failed");
                const data = await res.json();
                setProducts(data);
            } catch (error) {
                console.error("Search error:", error);
            }
        } else {
            getProducts();
        }
    };

    return (
        <div className='product-list'>
            <h3>Property List</h3>
            <input
                type='text'
                className='search-product-box'
                placeholder='Search Property'
                onChange={searchHandle}
            />
            <ul>
                <li>S.No</li>
                <li>Property Name</li>
                <li>Price</li>
                <li>Location</li>
                <li>Operation</li>
            </ul>
            {
                products.length > 0 ? (
                    products.map((item, index) => (
                        <ul key={item._id}>
                            <li>{index + 1}</li>
                            <li>{item.name}</li>
                            <li>{item.price}</li>
                            <li>{item.category}</li>
                            <li>
                                <button onClick={() => deleteProduct(item._id)}>Delete</button>
                                <Link to={"/update/" + item._id}>Update</Link>
                            </li>
                        </ul>
                    ))
                ) : (
                    <h1>No result Found!!!</h1>
                )
            }
        </div>
    );
};

export default ProductList;
