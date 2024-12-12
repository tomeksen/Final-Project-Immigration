// query.ts

/**
 * This file defines and centralizes all query keys used throughout the application.
 *
 * Purpose:
 * - To ensure consistent and reusable query keys for API calls and state management.
 * - To provide a single source of truth for managing query keys, reducing the risk of duplication or naming inconsistencies.
 *
 * Structure:
 * - `QUERY_KEYS` is an object that organizes query keys in a hierarchical manner for better readability and maintainability.
 * - Keys are grouped by feature or domain (e.g., "ADMIN", "USERS") and further categorized for specific use cases (e.g., "PAGINATION").
 *
 * Example:
 * - `QUERY_KEYS.ADMIN.USERS.PAGINATION.USERS` is used to manage pagination for user data in the admin panel.
 * - `QUERY_KEYS.ADMIN.USERS.PAGINATION.INVITATIONS` is used to manage pagination for invitation data in the admin panel.
 *
 * Usage:
 * Import the necessary query key from this file wherever needed, e.g.:
 *
 * ```typescript
 * import { QUERY_KEYS } from "@/config/query";
 *
 * const fetchUsers = async () => {
 *   const response = await fetch(`/api/${QUERY_KEYS.ADMIN.USERS.PAGINATION.USERS}`);
 *   // Handle the response...
 * };
 * ```
 *
 * Benefits:
 * - Ensures consistent query key usage across the application.
 * - Simplifies updates if query keys need to change in the future.
 * - Makes the codebase more maintainable and easier to understand.
 */

// Users
export const QUERY_KEYS = {
  ADMIN: {
    USERS: { PAGINATION: { USERS: "userPage", INVITATIONS: "invitationPage" } },
  },
};
