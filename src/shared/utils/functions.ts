export const getRandomIndexes = (items: unknown[], count: number) =>
  Array.from({ length: count }, () => Math.floor(Math.random() * items.length))
