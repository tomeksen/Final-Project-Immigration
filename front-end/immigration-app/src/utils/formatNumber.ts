/**
 * Formats a number into the "1,000.00" format.
 *
 * @param num - The number to be formatted.
 * @returns The formatted string.
 */
export function formatNumber(num: number): string {
  return num.toLocaleString("en-US", {
    minimumFractionDigits: 2, // Ensures two decimal places
    maximumFractionDigits: 2, // Limits to two decimal places
  });
}
