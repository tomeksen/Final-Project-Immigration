"use client";

import { UserDialog } from "@/components/users/UsersDialog";
import { UserTableTemplate } from "@/components/users/UsersTableTemplate";
import { BASEURL } from "@/config/apiClient";
import {
  FilteredInvitation,
  Invitation,
  InvitationList,
} from "@/type/Invitation.type";
import { FilteredUser, User, UserList } from "@/type/Users.type";
import { filteredInvitations, filteredUsers } from "@/utils/users";
import { useEffect, useState } from "react";
import { toast } from "sonner";

// the users data has to be reflected when a user push delete or add button
// In this case, should be used Client component
const UsersPage = () => {
  const [isUsersLoading, setIsUsersLoading] = useState<boolean>(false);
  const [isInvitationLoading, setIsInvitationLoading] =
    useState<boolean>(false);

  const [usersError, setUsersError] = useState<string | null>(null);
  const [invitationsError, setInvitationsError] = useState<string | null>(null);
  const [isFetchInvitation, setIsFetchInvitation] = useState<boolean>(false);
  const [users, setUsers] = useState<FilteredUser[] | null>(null);
  const [invitations, setInvitations] = useState<FilteredInvitation[] | null>(
    null
  );

  // Delete invitation handler
  const handleUsersDelete = async (id: string) => {
    try {
      const response = await fetch(`${BASEURL}/invitations/${id}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error("Failed to delete the invitation.");
      }

      // Remove the deleted invitation from state
      setInvitations(
        (prev) => prev?.filter((invitation) => invitation.id !== id) || null
      );

      toast.success("Successfully deleted the invitation");
    } catch (error) {
      if (error instanceof Error) {
        setInvitationsError(error.message);
        toast.error(error.message);
      } else {
        setInvitationsError("An unexpected error happened");
        toast.error("An unexpected error happened");
      }
    }
  };

  // Delete invitation handler
  const handleInvitationDelete = async (id: string) => {
    console.log(`Delete invitation with id: ${id}`);
    try {
      const response = await fetch(`${BASEURL}/invitations/${id}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error("Failed to delete the invitation.");
      }

      // Remove the deleted invitation from state
      setInvitations(
        (prev) => prev?.filter((invitation) => invitation.id !== id) || null
      );

      toast.success("Successfully deleted the invitation");
    } catch (error) {
      if (error instanceof Error) {
        setInvitationsError(error.message);
        toast.error(error.message);
      } else {
        setInvitationsError("An unexpected error happened");
        toast.error("An unexpected error happened");
      }
    }
  };

  const handleInvitationPost = async (email: string) => {
    try {
      if (!email) return toast.error("Please enter a valid email");
      const response = await fetch(
        `${BASEURL}/invitations/${encodeURIComponent(email)}`,
        {
          method: "POST",
        }
      );

      if (!response.ok) {
        throw new Error("Failed to send the invitation.");
      }

      setIsFetchInvitation(true);
      toast.success("Successfully send the invitation");
    } catch (error) {
      if (error instanceof Error) {
        setInvitationsError(error.message);
        toast.error(error.message);
      } else {
        setInvitationsError("An unexpected error happened");
        toast.error("An unexpected error happened");
      }
    }
  };

  // fetch users
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setIsUsersLoading(true);
        const response = await fetch(`${BASEURL}/users`, {
          method: "GET",
        });

        if (!response.ok) throw new Error("Failed to fetch the users data");
        const data: UserList = await response.json();

        // filter out necessary data and format it
        const filteredUser = filteredUsers(data.users.data);
        setUsers(filteredUser);
      } catch (error) {
        if (error instanceof Error) {
          setUsersError(error.message);
          toast.error(error.message);
        } else {
          setUsersError("An unexpected error happened");
          toast.error("An unexpected error happened");
        }
      } finally {
        setIsUsersLoading(false);
      }
    };
    fetchUsers();
  }, []);

  // fetch invitations
  useEffect(() => {
    const fetchInvitations = async () => {
      try {
        setIsInvitationLoading(true);
        const response = await fetch(`${BASEURL}/invitations`, {
          method: "GET",
        });

        if (!response.ok) throw new Error("Failed to fetch the users data");
        const data: InvitationList = await response.json();

        // filter out necessary data and format it
        const filteredInvitation = filteredInvitations(data.invitation.data);
        setInvitations(filteredInvitation);
      } catch (error) {
        if (error instanceof Error) {
          setInvitationsError(error.message);
        } else {
          setInvitationsError("An unexpected error happened");
        }
      } finally {
        setIsFetchInvitation(false);
        setIsInvitationLoading(false);
      }
    };
    fetchInvitations();
  }, [isFetchInvitation]);

  // the definition of user props
  const userColumns = [
    { header: "NUMBER", accessorKey: "number" },
    { header: "NAME", accessorKey: "name" },
    { header: "JOIN DATE", accessorKey: "joinDate" },
    { header: "TYPE", accessorKey: "type" },
    { header: "ACTION", accessorKey: "actions" },
  ];

  // the definition of invitation props
  const invitationColumns = [
    { header: "NUMBER", accessorKey: "number" },
    { header: "EMAIL", accessorKey: "email" },
    { header: "EXPIRY DATE", accessorKey: "expiryDate" },
    { header: "ACTION", accessorKey: "actions" },
  ];

  return (
    <>
      <section className="h-screen max-w-screen flex flex-1 flex-col bg-slate-100">
        <div className="container mx-auto p-4 w-full h-full">
          <div className="h-full grid grid-rows-2">
            {/* User Table section */}

            {/* Loading state */}
            {isUsersLoading && (
              <div className="flex items-center justify-center">
                <p>Loading users...</p>
              </div>
            )}

            {/* Error state */}
            {usersError && (
              <div className="flex items-center justify-center text-red-500">
                <p>Error: {usersError}</p>
              </div>
            )}

            {!isUsersLoading && !usersError && users && (
              <div className="flex flex-col justify-center">
                <h2 className="text-2xl font-bold mb-4">Users</h2>
                {/* filter */}

                {/* UserTable */}
                <UserTableTemplate columns={userColumns} data={users} />
              </div>
            )}

            {/* Invitation table */}
            {/* Loading state */}
            {isInvitationLoading && (
              <div className="flex items-center justify-center">
                <p>Loading users...</p>
              </div>
            )}

            {/* Error state */}
            {invitationsError && (
              <div className="flex items-center justify-center text-red-500">
                <p>Error: {usersError}</p>
              </div>
            )}

            {/* Invitations table */}
            {!isInvitationLoading && !invitationsError && invitations && (
              <div className="flex flex-col justify-center">
                <div className="flex items-center justify-between">
                  <h2 className="text-2xl font-bold mb-4">Invitations</h2>
                  <UserDialog
                    onClick={handleInvitationPost}
                    invitations={invitations}
                  />
                </div>
                <UserTableTemplate
                  columns={invitationColumns}
                  data={invitations}
                  onDelete={handleInvitationDelete}
                />
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default UsersPage;
