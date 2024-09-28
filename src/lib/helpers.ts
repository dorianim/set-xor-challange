export const hexToBytes = (hex: string): Uint8Array => {
    let bytes: Uint8Array = new Uint8Array(Math.ceil(hex.length / 2));
    for (let c = 0; c < hex.length; c += 2)
        bytes[c / 2] = parseInt(hex.substring(c, c+2), 16);

    return bytes;
};

export const bytesToHex = (bytes: Uint8Array): string => {
    let hex = "";
    for (const b of bytes)
        hex += b.toString(16).padStart(2, "0");

    return hex;
}