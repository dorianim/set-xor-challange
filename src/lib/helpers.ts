export const hexToBytes = (hex: string): Uint8Array => {
    if(!hex) return new Uint8Array(0);
    
    let bytes: Uint8Array = new Uint8Array(Math.ceil(hex.length / 2));
    for (let c = 0; c < hex.length; c += 2)
        bytes[c / 2] = parseInt(hex.substring(c, c+2), 16);

    return bytes;
};

export const bytesToHex = (bytes: Uint8Array): string => {
    if(!bytes) return "";

    let hex = "";
    for (const b of bytes)
        hex += b.toString(16).padStart(2, "0");

    return hex;
}

// Source: https://github.com/ghostdevv/svelte-copy/blob/main/src/lib/copy.ts
export const copyText = async (text: string) => {
	if ('clipboard' in navigator) {
		await navigator.clipboard.writeText(text);
	} else {
		/**
		 * This is the fallback deprecated way of copying text to the clipboard. Only runs if it can't find the clipboard API.
		 */
		const element = document.createElement('input');

		element.type = 'text';
		element.disabled = true;

		element.style.setProperty('position', 'fixed');
		element.style.setProperty('z-index', '-100');
		element.style.setProperty('pointer-events', 'none');
		element.style.setProperty('opacity', '0');

		element.value = text;

		document.body.appendChild(element);

		element.click();
		element.select();
		document.execCommand('copy');

		document.body.removeChild(element);
	}
}