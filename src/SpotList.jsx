import React, { useEffect, useState } from "react";
import Company from "./Company.jsx";


function CompanyList({spot}){
    const [companys, setCompanys] = useState([]);

    async function fetchCompany() {
        try {
            const response = await fetch("http://145.24.223.176:3000/companys/", {
                method: 'GET',
                headers: {
                    'Accept': 'application/json'
                }
            });

            const data = await response.json();
            setCompanys(data.items);
            console.log(data);
        } catch (error) {
            console.error('Er is een fout opgetreden:', error);
        }
    }


    useEffect(() => {
        fetchCompany();
    }, []);

    return (
        <div className="min-h-screen bg-blue-300 py-12 px-6">
            <h1 className="text-4xl font-semibold text-center text-gray-900 mb-8">
                Schaak dingen laden
            </h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-2xl">
                {companys.map((company) => (
                    <Company key={company.id} company={company} companyDeleted={fetchCompany}/>
                ))}
            </div>
        </div>
    );
}

export default CompanyList;