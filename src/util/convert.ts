export function titleCase(str: string): string {
    return str
        .split(/(?<=[a-z])(?=[A-Z])/gu)
        .map(x => x[0].toUpperCase() + x.slice(1))
        .join(" ")
}
