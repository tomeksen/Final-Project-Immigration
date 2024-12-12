export type User = {
  id: string;
  passwordEnabled: boolean;
  totpEnabled: boolean;
  backupCodeEnabled: boolean;
  twoFactorEnabled: boolean;
  banned: boolean;
  locked: boolean;
  createdAt: number;
  updatedAt: number;
  imageUrl: string;
  hasImage: boolean;
  primaryEmailAddressId: string | null;
  primaryPhoneNumberId: string | null;
  primaryWeb3WalletId: string | null;
  lastSignInAt: number | null;
  externalId: string | null;
  username: string;
  firstName: string;
  lastName: string | null;
  publicMetadata: Record<string, any>;
  privateMetadata: Record<string, any>;
  unsafeMetadata: Record<string, any>;
  emailAddresses: EmailAddress[];
  phoneNumbers: string[];
  web3Wallets: string[];
  externalAccounts: string[];
  samlAccounts: string[];
  lastActiveAt: number | null;
  createOrganizationEnabled: boolean;
  createOrganizationsLimit: number | null;
  deleteSelfEnabled: boolean;
  legalAcceptedAt: number | null;
};

export type EmailAddress = {
  id: string;
  emailAddress: string;
  verification: {
    status: string;
    strategy: string;
    externalVerificationRedirectURL: string | null;
    attempts: number | null;
    expireAt: number | null;
    nonce: string | null;
    message: string | null;
  };
  linkedTo: string[];
};

export type UserList = {
  users: {
    data: User[];
    totalCount: number;
  };
};

// Filtered User List
export type FilteredUser = {
  id: string; // User ID
  number: string; // Zero-padded sequential number
  name: string; // Full name
  joinDate: string; // Formatted join date
  type: string; // Type of user (e.g., "Student", "Work permit")
};
