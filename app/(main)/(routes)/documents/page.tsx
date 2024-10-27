"use client";

import Image from "next/image";
import { useUser } from "@clerk/clerk-react";
import { Button } from "@/components/ui/button";
import { PlusCircle } from "lucide-react";
import { useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";
import { toast } from "sonner";

const DocumentsPage = () => {

    const { user } = useUser();
    const create = useMutation(api.documents.create);

    const onCreate = () => {
        const promise = create({ title: "Без названия"});

        toast.promise(promise, {
            loading: "Создание нового документа...",
            success: "Новый документ создан",
            error: "Ошибка создания ннового документа"
        })
    }

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
            <Button className="" onClick={onCreate}>
                <PlusCircle className="h-5 w-5 mr-2" />
                Создать документ
            </Button>


        </div>
     );
}
 
export default DocumentsPage;