import { Button } from "@/components/ui/button";
import { Logo } from "./logo";

const Footer = () => {
    return ( 
        <div className="flex items-center 
        w-full p-6 bg-background z-50">
            <Logo />
            <div className="md:ml-auto w-full justify-between
            md:justify-end flex items-center gap-x-2
            text-muted-foreground">
                <Button variant="ghost" size="sm">
                    Политика конфиденциальности
                </Button>
                <Button variant="ghost" size="sm">
                Cроки и условия
                </Button>

            </div>
        </div>
     );
}
 
export default Footer;