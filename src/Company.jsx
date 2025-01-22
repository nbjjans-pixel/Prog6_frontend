import React from "react";
import { Link } from "react-router";

function Company({ company, companyDeleted }) {
    const deleteCompany = async (id) => {
        try {
            const result = await fetch(`http://145.24.223.176:3000/companys/${id}`, {
                headers: {
                    Accept: "application/json",
                },
                method: "DELETE",
            });

            if (result.status === 204) {
                companyDeleted();
            }
        } catch (e) {
            console.log(e);
        }
    };

    return (
        <article>
            <h1 className="text-3xl">{company.title}</h1>
            <Link to={`/companys/${company.id}`} className="font-bold text-green-800">
                Read more
            </Link>
            <button onClick={() => deleteCompany(company.id)} className="text-red-600">
                Delete Company
            </button>

        </article>
    );
}

export default Company;