"use client";

import Image from "next/image";
import { useUser } from "@clerk/clerk-react";
import { Button } from "@/components/ui/button";
import { PlusCircle } from "lucide-react";

const DocumentsPage = () => {

    const { user } = useUser();
    return ( 
        <div className="h-full flex flex-col
        items-center justify-center space-y-4">
        <Image 
        src="/empty.png"
        height="300"
        width="300"
        alt="Пусто"
        className="dark:hidden"
        />
        <Image 
        src="/empty-dark.png"
        height="300"
        width="300"
        alt="Пусто"
        className="hidden dark:block"
        />
        <h2 className="text-lg font-bold">
            Добро пожаловать, {user?.firstName}, в Murion!
            </h2>
            <Button className="">
                <PlusCircle className="h-5 w-5 mr-2" />
                Создать заметку
            </Button>


        </div>
     );
}
 
export default DocumentsPage;