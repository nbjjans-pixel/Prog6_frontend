import React, { useState } from "react";

function CompanyCreateForm({ newItemCreated }) {
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        review: '',
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    async function createProduct() {
        try {
            const response = await fetch('http://145.24.223.176:3000/companys', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    title: formData.title,
                    description: formData.description,
                    review: formData.review
                })
            });

            const data = await response.json();
            console.log(data);
            newItemCreated();
        } catch (error) {
            console.error('Er is een fout opgetreden:', error);
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        createProduct();
    };

    return (
        <form onSubmit={handleSubmit} className="max-w-lg mx-auto p-6 bg-white shadow-md rounded-md space-y-4">
            <h2 className="text-xl font-bold text-gray-800 mb-4">Create a New Company</h2>

            <div className="flex flex-col">
                <label htmlFor="title" className="mb-2 font-medium text-gray-700">Title:</label>
                <input
                    type="text"
                    id="title"
                    name="title"
                    value={formData.title}
                    onChange={handleInputChange}
                    className="border rounded-md p-2 focus:ring-2 focus:ring-blue-500 outline-none"
                    placeholder="Enter the title"
                />
            </div>

            <div className="flex flex-col">
                <label htmlFor="description" className="mb-2 font-medium text-gray-700">Description:</label>
                <input
                    type="text"
                    id="description"
                    name="description"
                    value={formData.description}
                    onChange={handleInputChange}
                    className="border rounded-md p-2 focus:ring-2 focus:ring-blue-500 outline-none"
                    placeholder="Enter a description"
                />
            </div>

            <div className="flex flex-col">
                <label htmlFor="review" className="mb-2 font-medium text-gray-700">Review:</label>
                <input
                    type="text"
                    id="review"
                    name="review"
                    value={formData.review}
                    onChange={handleInputChange}
                    className="border rounded-md p-2 focus:ring-2 focus:ring-blue-500 outline-none"
                    placeholder="Write a review"
                />
            </div>

            <button
                type="submit"
                className="w-full bg-blue-600 text-white font-medium py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
            >
                Submit
            </button>
        </form>
    );
}

export default CompanyCreateForm;
