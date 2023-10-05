// Limits
export const MAXDPINT: number = 2 ** 53 - 1;
export const MINDPINT: number = -(2 ** 53) + 1;
export const MAXSPINT: number = 2 ** 31 - 1;
export const MINSPINT: number = -(2 ** 31) + 1;

// GAM scaling constants
export const GAM: number = 4096;
export const GAMSQ: number = 4096 ** 2;
export const RGAMSQ: number = 1 / (4096 ** 2);

// Blue's scaling constants
export const MAXN: number = 2 ** 128;
export const TSML: number = 2 ** -63;
export const TBIG: number = 2 ** 52;
export const SSML: number = 2 ** 75;
export const SBIG: number = 2 ** -76;
