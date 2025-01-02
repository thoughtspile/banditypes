export interface Data {
  array: string[];
  boolean: boolean;
  func: Function;
  date: Date;
  tuple: [number, number];
  nullableEnums: "EU" | "US" | null;
  optionalLiteral?: "HELLO";
  set: Set<string>;
  map: Map<string, boolean>;
  extras: {
    form: Record<string, unknown>;
  };
}

export const sample: Data = {
  array: ["tag", "date"],
  boolean: true,
  func: () => {},
  date: new Date(2022, 1, 12),
  tuple: [73, 15],
  nullableEnums: "EU",
  set: new Set(["tag", "gato"]),
  map: new Map([["key", true]]),
  extras: {
    form: {
      field: { gadbage: false },
    },
  },
};
