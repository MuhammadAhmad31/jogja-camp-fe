import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Layout } from "./layouts/Layout";
import { TestLayout } from "./pages/TestLayout";
import { TestLayoutForm } from "./pages/TestLayoutForm";
import { TestSelect } from "./pages/TestSelect";

const queryClient = new QueryClient();

const App: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Layout>
          <Routes>
            <Route path="/test-layout" element={<TestLayout />} />
            <Route path="/test-layout-form" element={<TestLayoutForm />} />
            <Route path="/test-select" element={<TestSelect />} />
          </Routes>
        </Layout>
      </Router>
    </QueryClientProvider>
  );
};

export default App;
