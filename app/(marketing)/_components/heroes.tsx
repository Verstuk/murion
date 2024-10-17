import Image from "next/image";

const Heroes = () => {
    return ( 
        <div className="flex flex-col items-center justify-center max-w-5xl">
            <div className="flex items-center">
                <div className="relative w-[300px] h-[300px] sm:w-[350px]
                sm:h-[350px] md:h-[400px] md:w-[400px]">
                    <Image 
                    src="/table.svg"
                    fill
                    alt="Дерзай"
                    className="object-contain dark:hidden"
                    />
                    <Image 
                    src="/table-dark.svg"
                    fill
                    alt="Дерзай"
                    className="object-contain hidden dark:block"
                    />

                </div>
            </div>
            
        </div>
     );
}
 
export default Heroes;