export const KEY_ACCESS_TOKEN = "local_books"

export function getItem(key:string) {
    return localStorage.getItem(key)
}



export function setItem(key: string, value: object): void {
    const serializedValue = JSON.stringify(value);
    localStorage.setItem(key, serializedValue);
}


