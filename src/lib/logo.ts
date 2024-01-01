export const logo = (w: number, h: number, fill: string) => {
    return `
    <svg width="${w}" height="${h}" viewBox="0 0 181 275" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
        d="M0 130.467V72.2663L181 0V61.1111L65.6855 100.882L67.6317 97.9718V104.762L65.6855 101.852L181 141.623V202.734L0 130.467Z"
        fill="${fill}" />
    <path
        d="M181 202.734L0 275V213.889L115.315 174.118L113.368 177.028V170.238L115.315 173.148L0 133.377V72.2663L181 144.533V202.734Z"
        fill="${fill}" />
    </svg>
    `;
}