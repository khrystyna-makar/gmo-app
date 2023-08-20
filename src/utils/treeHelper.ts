import IDepartment from '../types/IDepartment';

export function search(array: IDepartment[] = [], id: number): IDepartment | undefined {
    if (!array) return;
    for (const node of array) {
        if (node.id === id) return node;

        const sub = search(node.subDepartments, id);
        if (sub) return sub;
    }
}

let counter = 0;

export function mapDepartments(items: any[], parentId: number): IDepartment[] {
    return items.map(item => (
        {
            id: counter++,
            department: item.department ?? item,
            parentId: parentId,
            checked: false,
            expanded: item.sub_departments ? true : false,
            subDepartments: item.sub_departments ? mapDepartments(item.sub_departments, counter - 1) : null
        } as IDepartment));
}