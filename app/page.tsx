"use client"

import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import SignInComponent from "./component/sign-in";
import { Button } from "@/components/ui/button";

export default function Page() {
  
  return (
    <div>
      <Dialog>
        <DialogTrigger render={<Button>LogIn</Button>}></DialogTrigger>
        <DialogContent className="p-0">
          <SignInComponent />
        </DialogContent>
      </Dialog>
    </div>
  );
}
