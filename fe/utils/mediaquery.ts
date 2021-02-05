/* eslint-disable import/prefer-default-export */
const breakpoints:number[] = [760, 1000, 1300];
export const mq: string[] = breakpoints.map((bp:number) => `@media (min-width: ${bp}px)`);
