import React from 'react';
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout.jsx";
import PageHead from "@/Components/Shared/PageHead.jsx";

const PotentialMatches = () => {
    return (
        <AuthenticatedLayout>
            <PageHead heading="Potential Matches"></PageHead>
        </AuthenticatedLayout>
    );
};

export default PotentialMatches;
