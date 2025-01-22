import { useParams } from "react-router";
import { useEffect, useState } from "react";

function CompanyDetail() {
    const { id } = useParams();
    const [companys, setCompanys] = useState(null);

    useEffect(() => {
        loadCompany();
    }, []);

    async function loadCompany() {
        try {
            const response = await fetch(`http://145.24.223.176:3000/companys/${id}`, {
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            });

            const data = await response.json();
            setCompanys(data);
        } catch (error) {
            console.error('Er is een fout opgetreden:', error);
        }
    }

    return (
        <div>
            {companys ? (
                <div>
                    <h1>{companys.title}</h1>
                    <p>{companys.description}</p>
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
}

export default CompanyDetail;
