export type ClassValue =
  | string
  | number
  | null
  | undefined
  | false
  | ClassDictionary
  | ClassValue[];

export type ClassDictionary = Record<string, boolean | undefined | null>;

function toClassName(value: ClassValue): string {
  if (!value) return "";
  if (typeof value === "string" || typeof value === "number") return String(value);
  if (Array.isArray(value)) return value.map(toClassName).filter(Boolean).join(" ");
  if (typeof value === "object") {
    return Object.keys(value)
      .filter((key) => (value as ClassDictionary)[key])
      .join(" ");
  }
  return "";
}

export function cn(...classes: ClassValue[]): string {
  return classes
    .map(toClassName)
    .filter(Boolean)
    .join(" ");
}
