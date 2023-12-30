export function fieldExists(field: string | undefined | null): boolean {
    if (
        field === undefined ||
        field === null ||
        field === "undefined" ||
        field === "null"
    ) {
        return false;
    }
    return true;
}

export function equipmentListToString(equipmentList: string[]): string {
    if (equipmentList.length === 0) {
        return "";
    }
    const firstItem =
        equipmentList[0].charAt(0).toUpperCase() +
        equipmentList[0].slice(1).toLowerCase();
    const remainingItems = equipmentList
        .slice(1)
        .map((item) => item.toLowerCase());

    return [firstItem, ...remainingItems].join(", ");
}
