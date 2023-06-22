import { prefix } from "tailwind.config";

const HOUR = 15;

export const theme = new Date().getHours() < HOUR ? "light" : "dark";
export const themeWithPrefix = prefix + theme;
