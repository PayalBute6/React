export const formatNumber = (value: string) => {
    if(!value) return "";

    const num = Number(value);

    if (isNaN(num)) return value;

    return num.toLocaleString();
    
};