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
