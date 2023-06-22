const HOUR = 15;

export const theme = new Date().getHours() < HOUR ? "light" : "dark";
