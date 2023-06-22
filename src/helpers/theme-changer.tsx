import { prefix } from "tailwind.config";

const HOUR = 9;

export const theme = new Date().getHours() < HOUR ? "light" : "dark";
export const themeWithPrefix = prefix + theme;
