export const saveToStorage = <T>(key: string, value: T) => {
    localStorage.setItem(key, JSON.stringify(value));
};

export const loadFromStorage = <T>(key: string): T | null => {
    const data = localStorage.getItem(key);
    
    if(!data) return null;

    return JSON.parse(data) as T;
}; 