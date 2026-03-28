import type { Arr, Falsey, Func, KeyOf, Obj, Primitive } from "@/types/util"

export function keysOf<T extends Obj>(obj: T): (KeyOf<T>)[] {
    return Object.keys(obj)
}

export function entriesOf<T extends Obj>(obj: T): [KeyOf<T>, T[KeyOf<T>]][] {
    return Object.entries(obj) as [KeyOf<T>, T[KeyOf<T>]][]
}

export function mapObj<T extends Obj, R>(
    obj: T,
    pred: (value: T[keyof T], key: KeyOf<T>, obj: T) => R,
): Record<keyof T, R> {
    return entriesOf(obj).reduce((acc, [key, value]) => {
        acc[key] = pred(value, key, obj)
        return acc
    }, {} as Record<keyof T, R>)
}

export function isIn<V, T extends object = object, K extends string = string>(
    obj: T | Falsey,
    key: K,
): obj is T & Record<K, V> {
    return !!obj && key in obj && obj[key as never] !== undefined
}

export function isArr<T>(
    value: unknown,
): value is T[] {
    return Array.isArray(value)
}

export function isObj<T>(
    value: unknown,
): value is Obj<T> {
    return !!value && !isArr(value) && typeof value === "object"
}

export function isFunc<R, A extends Arr = []>(
    value: unknown,
): value is Func<R, A> {
    return typeof value === "function"
}

export function isSymbol(
    value: unknown,
): value is symbol {
    return typeof value === "symbol"
}

export function isPrimitive(
    value: unknown,
): value is Primitive {
    return !isObj(value) && !isArr(value) && !isFunc(value) && !isSymbol(value)
}

export function isString(
    value: unknown,
): value is string {
    return typeof value === "string"
}

export function isNumber(
    value: unknown,
): value is number {
    return typeof value === "number"
}
