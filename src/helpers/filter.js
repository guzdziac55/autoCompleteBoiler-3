export function filterList(suggestions, input) {
  const filtered = suggestions.filter((name) =>
    name.toLowerCase().includes(input.toLowerCase())
  );

  return filtered;
}
