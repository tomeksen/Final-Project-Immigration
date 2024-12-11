export const ERROR_MESSAGES = {
  GENERAL: {
    UNEXPECTED: "An unexpected error occurred.",
    SERVER_ERROR: "A server error occurred.",
    NETWORK_ERROR: "Network error. Please check your connection.",
  },
  USERS: {
    NOT_FOUND: "User not found.",
    DELETE_FAILED: "Failed to delete the user.",
    FETCH_USERS_FAILED: "Failed to fetch user data.",
    FETCH_INVITATIONS_FAILED: "Failed to fetch invitations data.",
    INVITATION_SEND_FAILED: "Failed to send the invitation.",
    INVITATION_DELETE_FAILED: "Failed to delete the invitation.",
    VALID_EMAIL: "Please enter a valid email.",
  },
  VALIDATION: {
    REQUIRED: (fieldName: string) => `${fieldName} is required.`,
    INVALID: (fieldName: string) => `${fieldName} is invalid.`,
  },
  DATABASE: {
    CONNECTION_FAILED: "Failed to connect to the database.",
    SAVE_FAILED: "Failed to save data to the database.",
  },
} as const;
