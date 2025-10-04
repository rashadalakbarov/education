"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function Home() {
  const [userId, setuserId] = useState(false);
  return (
    <div className="flex flex-col items-center justify-center h-screen p-6">
      <div className="flex-1 flex flex-col items-center justify-center">
        <div className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-center">
            Welcome to <br />
            <span className="text-blue-700 text-5xl md:text-6xl">
              Edura EMS
            </span>
          </h1>
        </div>

        <div className="text-center max-w-xl flex flex-col items-center justify-center">
          <p className="mb-8">
            Manage your education operations, student records, and more with our
            powerful education management system.
          </p>

          <div className="flex gap-4">
            {userId ? (
              <>
                <Link href="/dashboard">
                  <Button>View Dashboard</Button>
                </Link>
              </>
            ) : (
              <>
                <Link href="/sign-up">
                  <Button className="md:text-base font-light">
                    New Patient
                  </Button>
                </Link>

                <Link href="/sign-in">
                  <Button
                    variant="outline"
                    className="md:text-base underline hover:text-blue-600"
                  >
                    Login to account
                  </Button>
                </Link>
              </>
            )}
          </div>
        </div>
      </div>

      <footer className="mt-8">
        <p className="text-center text-sm">
          &copy; 2024 Edura Education Management System. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
