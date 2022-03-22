import React, { useState } from 'react';

const Add = () => {
    // title, imageTitle, genre, description
    const [newProduct, setNewProduct] = useState({
        title: "",
        imageTitle: "",
        genre: "",
        description: ""
    })
    return (
        <div>
            <input type="text" />
            <input type="text" />
            <input type="text" />
            <input type="text" />
        </div>
    );
};

export default Add;