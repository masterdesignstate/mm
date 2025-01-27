import React from 'react';
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout.jsx";
import PageHead from "@/Components/Shared/PageHead.jsx";

const Chat = () => {
    return (
        <AuthenticatedLayout>
            <PageHead heading="Chat"></PageHead>
        </AuthenticatedLayout>
    );
};

export default Chat;
