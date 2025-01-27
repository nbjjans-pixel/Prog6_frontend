import { useParams, useNavigate } from "react-router";
import { useEffect, useState } from "react";

function CompanyDetail() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [company, setCompany] = useState(null);
    const [isEditing, setIsEditing] = useState(false);
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        review: ''
    });

    useEffect(() => {
        loadCompany();
    }, []);

    async function loadCompany() {
        try {
            const response = await fetch(`http://145.24.223.176:8000/companys/${id}`, {
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            });

            const data = await response.json();
            setCompany(data);
            setFormData({
                title: data.title,
                description: data.description,
                review: data.review
            });
        } catch (error) {
            console.error('Er is een fout opgetreden:', error);
        }
    }

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleUpdate = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(`http://145.24.223.176:8000/companys/${id}`, {
                method: 'PUT',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                setIsEditing(false);
                loadCompany();
            } else {
                console.error('Update failed');
            }
        } catch (error) {
            console.error('Er is een fout opgetreden:', error);
        }
    };

    if (!company) {
        return <p>Loading...</p>;
    }

    return (
        <div className="max-w-lg mx-auto p-6 bg-white shadow-md rounded-md">
            {!isEditing ? (
                <div className="space-y-4">
                    <h1 className="text-2xl font-bold">{company.title}</h1>
                    <p className="text-gray-700">{company.description}</p>
                    <p className="text-gray-600 italic">{company.review}</p>
                    <button
                        onClick={() => setIsEditing(true)}
                        className="bg-blue-600 text-white font-medium py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
                    >
                        Edit Company
                    </button>
                </div>
            ) : (
                <form onSubmit={handleUpdate} className="space-y-4">
                    <h2 className="text-xl font-bold text-gray-800 mb-4">Edit Company</h2>

                    <div className="flex flex-col">
                        <label htmlFor="title" className="mb-2 font-medium text-gray-700">Title:</label>
                        <input
                            type="text"
                            id="title"
                            name="title"
                            value={formData.title}
                            onChange={handleInputChange}
                            className="border rounded-md p-2 focus:ring-2 focus:ring-blue-500 outline-none"
                        />
                    </div>

                    <div className="flex flex-col">
                        <label htmlFor="description" className="mb-2 font-medium text-gray-700">Description:</label>
                        <textarea
                            id="description"
                            name="description"
                            value={formData.description}
                            onChange={handleInputChange}
                            className="border rounded-md p-2 focus:ring-2 focus:ring-blue-500 outline-none"
                            rows="3"
                        />
                    </div>

                    <div className="flex flex-col">
                        <label htmlFor="review" className="mb-2 font-medium text-gray-700">Review:</label>
                        <textarea
                            id="review"
                            name="review"
                            value={formData.review}
                            onChange={handleInputChange}
                            className="border rounded-md p-2 focus:ring-2 focus:ring-blue-500 outline-none"
                            rows="3"
                        />
                    </div>

                    <div className="flex gap-2">
                        <button
                            type="submit"
                            className="bg-green-600 text-white font-medium py-2 px-4 rounded-md hover:bg-green-700 transition-colors"
                        >
                            Save Changes
                        </button>
                        <button
                            type="button"
                            onClick={() => {
                                setIsEditing(false);
                                loadCompany();
                            }}
                            className="bg-gray-600 text-white font-medium py-2 px-4 rounded-md hover:bg-gray-700 transition-colors"
                        >
                            Cancel
                        </button>
                    </div>
                </form>
            )}
        </div>
    );
}

export default CompanyDetail;