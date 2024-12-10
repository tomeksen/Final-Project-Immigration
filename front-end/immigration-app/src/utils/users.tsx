import { Button } from "@/components/ui/button";
import { FilteredInvitation, Invitation } from "@/type/Invitation.type";
import { User } from "@/type/Users.type";
import { X } from "lucide-react";

/**
 * Formats a UNIX timestamp (in milliseconds) into a readable date string.
 *
 * @param {number} timestamp - The UNIX timestamp in milliseconds to format.
 * @returns {string} The formatted date string in the format "[DD MMM YYYY]".
 * @example
 * const formattedDate = formatTimestampToDate(1730912789509);
 * console.log(formattedDate); // Outputs: "[04 Apr 2023]"
 */

export const formatTimestampToDate = (timestamp: number): string => {
  const date = new Date(timestamp);
  const day = String(date.getDate()).padStart(2, "0");
  const month = date.toLocaleString("en-US", { month: "short" });
  const year = date.getFullYear();

  return `${day} ${month} ${year}`;
};

/**
 * Converts a number to a 3-digit string with zero padding.
 * @param {number} num - The input number to format.
 * @returns {string} A 3-digit string with zero padding.
 */
const toThreeDigitNumber = (num: number): string => {
  return num.toString().padStart(3, "0");
};

/**
 * filter out the necessary data in a user table
 * @param {users} User[]
 * @returns {id:"" , number: "001", name: "Jon Due", joinDate: "04 Apr 2024", type: "Student" | "Work permit" etc...}
 */
export const filteredUsers = (users: User[]) => {
  return users.map((user, index) => ({
    id: user.id,
    number: toThreeDigitNumber(index + 1),
    name: user.firstName + (user.lastName ? ` ${user.lastName}` : ""),
    joinDate: formatTimestampToDate(user.createdAt),
    type: "Student", // hard-coded
  }));
};

/**
 * filter out column data for user table
 * @param Invitation[]
 */
export const filteredInvitations = (invitations: Invitation[]) => {
  return invitations.map((invitation, index) => ({
    id: invitation.id,
    number: toThreeDigitNumber(index + 1),
    email: invitation.emailAddress,
    expiryDate: formatTimestampToDate(
      new Date(invitation.createdAt).getTime() + 31 * 24 * 60 * 60 * 1000 // 31 days after createdAt
    ),
    actions: "",
  }));
};
