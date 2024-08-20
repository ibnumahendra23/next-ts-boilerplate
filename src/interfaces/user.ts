/**
 * Example of interfaces
 * 
 * Give "Interface" suffix to the name of the interface
 * You also can import type, if you need it in the interface
 */
import { CompanyI } from "@/enums/company";
import { UserNameT } from "@/types/user";

export interface UserI {
    first_name: UserNameT;
    last_name: string | null;
    email: string;
    role: UserRoleI;
    companies: CompanyI[];
}

export interface UserRoleI {
    id: number;
    name: string;
    description: string;
}
