export interface Data {
  array: string[];
  count: number | null;
  boolean?: boolean;
}

export const sample: Data = {
  boolean: true,
  array: ["tag", "date"],
  count: 10,
};
