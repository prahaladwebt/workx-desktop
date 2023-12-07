export interface Permission {
    name: string;
    allowed: boolean;
}

export interface PermissionCategory {
    categoryName: string;
    permissions: Permission[];
}

export interface Member {
    id: number;
    name: string;
    designation: string;
    image: string;
}

export interface Permission {
    name: string;
    allowed: boolean;
}

export interface PermissionCategory {
    categoryName: string;
    permissions: Permission[];
}
