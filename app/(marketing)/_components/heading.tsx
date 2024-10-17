"use client";

import { Spinner } from "@/components/spinner";
import { Button } from "@/components/ui/button";
import { SignInButton } from "@clerk/clerk-react";
import { useConvexAuth } from "convex/react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const Heading = () => {
const { isAuthenticated, isLoading } = useConvexAuth()

    return ( 
        <div className="max-w-3xl space-y-4" >
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold">
                    Ваши идеи, документы и планы в одном месте. 
                    Добро пожаловать в <span 
                    className="underline"> Murion</span>
            </h1>
            <h3 className="text-base sm:text-xl md:text-2xl font-medium">
        Murion - это подключенное рабочее пространство, <br />
         где все происходит лучше и быстрее
        </h3>
        {isLoading && (
          <div className="w-full flex items-center justify-center">
          <Spinner size="lg"/>
          </div>
        )}
        {isAuthenticated && !isLoading && (
          <Button className="font-bold" asChild>
            <Link href="/documents">
            Войти в Murion
          <ArrowRight className="h-4 w-4 ml-2"/>
            </Link>
           </Button>
        )}
        {!isAuthenticated && !isLoading && (
          <SignInButton mode="modal">
            <Button>
              Получить Murion
              <ArrowRight className="h-4 w-4 ml-2"/>
            </Button>
          </SignInButton>
        )}
        

        </div>
     );
}
 
export default Heading;