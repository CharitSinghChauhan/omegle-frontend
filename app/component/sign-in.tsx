"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { signIn } from "@/lib/auth";

export default function SignInComponent() {
  const [loading, setLoading] = useState(false);

  return (
    <Card className="max-w-md">
      <CardHeader>
        <CardTitle className="text-lg md:text-xl">Sign In</CardTitle>
        <CardDescription className="text-xs md:text-sm">
          Choose your Google Account
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4">
          <div
            className={cn(
              "w-full gap-2 flex items-center",
              "justify-between flex-col",
            )}
          >
            <Button
              variant="outline"
              className="w-full gap-2"
              disabled={loading}
              onClick={async () => {
                await signIn.social({
                  provider: "google",
                  callbackURL: "http://localhost:3000/waiting",
                  fetchOptions: {
                    onRequest: () => {
                      setLoading(true);
                    },
                    onResponse: () => {
                      setLoading(false);
                    },
                  },
                });
              }}
            >
              Sign in with Google
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
