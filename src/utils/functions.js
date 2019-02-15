export function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}

export default function formatDate(param) {
    const date = new Date(param)
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

    return {
        date: date.toLocaleDateString("en-US", options),
        time: date.toLocaleTimeString("en-US")
    }
}