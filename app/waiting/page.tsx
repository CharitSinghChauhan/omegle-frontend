"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useState } from "react";
import Webcam from "react-webcam";

// TODO : make website responsive
export default function WaitingPage() {
  const [rotate, setRotate] = useState(true);

  return (
    <div className="flex min-h-screen w-full items-center justify-center bg-background p-4">
      {/* Outer container */}
      <Card className="w-full max-w-5xl p-6 rounded-[22px]">
        <div className="grid h-150 grid-cols-1 gap-6 md:grid-cols-2">
          <div className="relative ">
            <Webcam
              audio={false}
              className={`h-full w-full object-cover rounded-md ${rotate ? "rotate-y-180" : "rotate-0"}`}
            />
            <div className="absolute z-10 h-10 bottom-5 w-full flex justify-center items-center">
              <button
                className="bg-black flex justify-center items-center w-[95%] h-10 rounded-md text-white text-lg"
                onClick={() => setRotate(!rotate)}
              >
                Rotate
              </button>
            </div>
          </div>
          <div className="flex h-full w-full flex-col justify-end rounded-md border-2 border-border bg-card p-6">
            <Button size="lg" className="h-16 w-full text-xl">
              Start
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
}
