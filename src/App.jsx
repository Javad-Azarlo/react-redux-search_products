import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import ProductPages from "./pages/ProductPages";
import ProductDetailsPage from "./pages/ProductDetailsPage";
import NotFound from "./pages/NotFound";
import Layout from "./layout/Layout";
import CheckOut from "./pages/CheckOut"
function App() {
  return (
    <Layout>
      <Routes>
        <Route index element={<Navigate replace to="products" />} />
        <Route path="products" element={<ProductPages />} />
        <Route path="products/:id" element={<ProductDetailsPage />} />
        <Route path="checkOut" element={<CheckOut />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  );
}

export default App;
