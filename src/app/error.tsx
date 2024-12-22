"use client";

import { Button } from "@/shared/Button";
import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="py-12">
      <div className="container">
        <div className="flex flex-col items-center gap-7">
          <div className="text-background font-semibold text-center text-3xl">
            Something went wrong!
          </div>

          <pre className="rounded-lg bg-gray-900 text-gray-100 p-4 overflow-x-auto text-sm font-mono shadow-lg border border-gray-700 mx-6 max-w-full">
            <code>{error.message}</code>
          </pre>

          <Button
            variant="secondary"
            onClick={() => {
              reset();
            }}
          >
            Try again
          </Button>
        </div>
      </div>
    </div>
  );
}
