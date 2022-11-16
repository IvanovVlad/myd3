export function debounce(func: any, wait: number, immediate: boolean) {
    let timeout: number | undefined;
    return function () {
        // @ts-ignore
        const context = this,
            args = arguments;
        const later = function () {
            timeout = undefined;
            if (!immediate) func.apply(context, args);
        };
        const callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
}

export function wrapText(
    context: CanvasRenderingContext2D,
    text: string,
    maxWidth: number
) {
    const words = text.split(" ");
    let result = [];
    let line = "";

    for (let n = 0; n < words.length; n++) {
        const testLine = line + words[n] + " ";
        const testWidth = context.measureText(testLine).width;
        if (testWidth > maxWidth && n > 0) {
            result.push(testLine);
            line = "";
        } else {
            line = testLine;
        }
    }
    return result;
}
