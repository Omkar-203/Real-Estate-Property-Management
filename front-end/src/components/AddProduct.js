import React from 'react';

const AddProduct = () => {
    const [name, setName] = React.useState('');
    const [price, setPrice] = React.useState('');
    const [category, setCategory] = React.useState('');
    const [company, setCompany] = React.useState('');
    const [error, setError] = React.useState(false);
    const [success, setSuccess] = React.useState(false); // ✅ For success message

    const addProduct = async () => {
        setSuccess(false); // reset previous message
        if (!name || !price || !category || !company) {
            setError(true);
            return false;
        }

        const userId = JSON.parse(localStorage.getItem('user'))._id;
        let result = await fetch("http://localhost:5000/add-product", {
            method: 'post',
            body: JSON.stringify({ name, price, category, company, userId }),
            headers: {
                "Content-Type": "application/json",
                authorization: `bearer ${JSON.parse(localStorage.getItem('token'))}`
            }
        });

        result = await result.json();
        console.warn("Added:", result);

        // ✅ Clear form fields
        setName('');
        setPrice('');
        setCategory('');
        setCompany('');
        setError(false);

        // ✅ Show success message
        setSuccess(true);

        // ✅ Auto-hide message after 3 seconds
        setTimeout(() => {
            setSuccess(false);
        }, 3000);
    }

    return (
        <div className='product'>
            <h1>Add Property List</h1>

            <input type="text" placeholder='Enter Property name' className='inputBox'
                value={name} onChange={(e) => setName(e.target.value)} />
            {error && !name && <span className='invalid-input'>Enter valid name</span>}

            <input type="text" placeholder='Enter Property price' className='inputBox'
                value={price} onChange={(e) => setPrice(e.target.value)} />
            {error && !price && <span className='invalid-input'>Enter valid price</span>}

            <input type="text" placeholder='Enter Property Location' className='inputBox'
                value={category} onChange={(e) => setCategory(e.target.value)} />
            {error && !category && <span className='invalid-input'>Enter valid location</span>}

            <input type="text" placeholder='Enter Property Type' className='inputBox'
                value={company} onChange={(e) => setCompany(e.target.value)} />
            {error && !company && <span className='invalid-input'>Enter valid type</span>}

            <button onClick={addProduct} className='appButton'>Add Property</button>

            {/* ✅ Success message */}
            {success && <p style={{ color: 'green', marginTop: '10px' }}>✅ Property added successfully!</p>}
        </div>
    );
}

export default AddProduct;
