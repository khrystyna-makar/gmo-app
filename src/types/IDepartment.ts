export default interface IDepartment {
    id: number;
    department: string;
    parentId: number;
    checked: boolean;
    expanded?: boolean;
    subDepartments?: IDepartment[];
}