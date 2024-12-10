// Invitation
export type Invitation = {
  id: string; // invitationId
  emailAddress: string; // invitation email
  publicMetadata: Record<string, any>;
  createdAt: number;
  updatedAt: number;
  status: "pending" | "accepted" | "declined";
  url: string;
};

// List
export type InvitationList = {
  invitation: {
    data: Invitation[];
    totalCount: number;
  };
};

// Filtered Invitation List
export type FilteredInvitation = {
  id: string; // Invitation ID
  number: string; // Zero-padded sequential number
  email: string; // Email address of the invitee
  expiryDate: string; // Formatted expiry date
  actions: JSX.Element | string; // Action elements (e.g., Delete button)
};
