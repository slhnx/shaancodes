import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const martianNight = {
  'code[class*="language-"]': {
    color: "#d4d4d4",
    background: "#181822",
    fontFamily: "Fira Code, monospace",
    fontSize: "0.85rem",
  },

  'pre[class*="language-"]': {
    color: "#d4d4d4",
    background: "#181822",
    margin: 0,
    padding: "1rem",
    overflow: "auto",
    borderRadius: "8px",
  },

  comment: {
    color: "#7f848e",
    fontStyle: "italic",
  },

  prolog: { color: "#7f848e" },
  doctype: { color: "#7f848e" },
  cdata: { color: "#7f848e" },

  punctuation: {
    color: "#d4d4d4",
  },

  property: {
    color: "#e09956",
  },

  tag: {
    color: "#ff6196",
  },

  boolean: {
    color: "#e09956",
  },

  number: {
    color: "#e09956",
  },

  constant: {
    color: "#e09956",
  },

  symbol: {
    color: "#56b6c2",
  },

  selector: {
    color: "#cc6be9",
  },

  "attr-name": {
    color: "#e09956",
  },

  string: {
    color: "#A5FF90",
  },

  char: {
    color: "#A5FF90",
  },

  builtin: {
    color: "#e5c07b",
  },

  inserted: {
    color: "#A5FF90",
  },

  deleted: {
    color: "#ff6196",
  },

  operator: {
    color: "#56b6c2",
  },

  entity: {
    color: "#61afef",
    cursor: "help",
  },

  url: {
    color: "#61afef",
  },

  variable: {
    color: "#d3d9e6",
  },

  atrule: {
    color: "#cc6be9",
  },

  "attr-value": {
    color: "#A5FF90",
  },

  function: {
    color: "#61afef",
  },

  "class-name": {
    color: "#e5c07b",
  },

  keyword: {
    color: "#cc6be9",
  },

  regex: {
    color: "#56b6c2",
  },

  important: {
    color: "#cc6be9",
    fontWeight: "bold",
  },

  bold: {
    fontWeight: "bold",
  },

  italic: {
    fontStyle: "italic",
  },
};
