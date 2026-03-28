import type { JSONValue } from "@/types/util"

export function fromJson<T extends JSONValue>(json: string): T {
    return JSON.parse(json) as T
}

export function toJson(json: unknown): string {
    return JSON.stringify(json)
}
