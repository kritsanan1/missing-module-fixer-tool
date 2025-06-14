
import React from "react";
import { MainLayout } from "@/components/layout/MainLayout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <MainLayout>
      <div className="flex flex-col items-center justify-center min-h-[60vh] px-4">
        <h1 className="text-6xl font-bold text-amber-400">404</h1>
        <h2 className="text-2xl font-semibold mt-4 mb-6">Page Not Found</h2>
        <p className="text-gray-400 max-w-md text-center mb-8">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>
        <Link to="/">
          <Button className="bg-amber-400 hover:bg-amber-500 text-black">
            Return to Homepage
          </Button>
        </Link>
      </div>
    </MainLayout>
  );
}
