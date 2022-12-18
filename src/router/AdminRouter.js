import React from 'react';
import { Routes, Route } from "react-router-dom";
import { AdminLayout } from "../layouts"
import { Auth, Users, Videos, Menu } from "../pages/admin";
import { useAuth } from "../hooks"




export function AdminRouter() {


    const { user } = useAuth();


    const loadLayout = (Layout, Page) => {
        return (
            <Layout>
                <Page />
            </Layout>
        );

    };

    return (

        <Routes>
            {!user ? (
                <Route path="/admin/*" element={<Auth />} />
            ) : (
                <>
                    {["/admin", "/admin/videos"].map((path) => (
                        <Route
                            key={path}
                            path={path}
                            element={loadLayout(AdminLayout, Videos)}
                        />

                    ))}

                    <Route path="/admin/users" element={loadLayout(AdminLayout, Users)} />
                    <Route path="/admin/menu" element={loadLayout(AdminLayout, Menu)} />
                </>
            )}


        </Routes>
    );
}
