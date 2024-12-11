"use client";

import { UserDialog } from "@/components/users/UsersDialog";
import PaginationTemplate from "@/components/users/UsersPaginationTemplate";
import { UserTableTemplate } from "@/components/users/UsersTableTemplate";
import { BASEURL } from "@/config/apiClient";
import { QUERY_KEYS } from "@/config/query";
import { FilteredInvitation, InvitationList } from "@/type/Invitation.type";
import { FilteredUser, UserList } from "@/type/Users.type";
import { filteredInvitations, filteredUsers } from "@/utils/users";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
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

  // pagination
  // Use query for sort or filter
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const itemsPerPage = 4;
  const userTotalPage = Math.ceil(users ? users.length / itemsPerPage : 1);
  const invitationTotalPage = Math.ceil(
    invitations ? invitations!.length / itemsPerPage : 1
  );
  const userCurrentPage = Number(
    searchParams.get(QUERY_KEYS.ADMIN.USERS.PAGINATION.USERS) || 1
  );
  const invitationCurrentPage = Number(
    searchParams.get(QUERY_KEYS.ADMIN.USERS.PAGINATION.INVITATIONS) || 1
  );
  // Calculate paginated users and invitations
  const paginatedUsers = users
    ? users.slice(
        (userCurrentPage - 1) * itemsPerPage,
        userCurrentPage * itemsPerPage
      )
    : [];

  const paginatedInvitations = invitations
    ? invitations.slice(
        (invitationCurrentPage - 1) * itemsPerPage,
        invitationCurrentPage * itemsPerPage
      )
    : [];

  // Delete invitation handler
  const handleUsersDelete = async (id: string) => {
    try {
      const response = await fetch(`${BASEURL}/users/${id}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error("Failed to delete the invitation.");
      }

      // Remove the deleted invitation from state
      setUsers((prev) => prev?.filter((user) => user.id !== id) || null);

      toast.success("Successfully deleted the use");
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
      <section className="h-screen max-w-screen flex flex-1 flex-col">
        <div className="container mx-auto p-4 w-full h-full">
          <div className=" h-full">
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
              <div className="flex flex-col justify-center gap-3">
                <h2 className="text-2xl font-bold mb-4">Users</h2>
                {/* filter */}

                {/* UserTable */}
                <UserTableTemplate
                  className="h-[350px] overflow-x-auto"
                  columns={userColumns}
                  data={users}
                  onDelete={handleUsersDelete}
                />
                {/* pagination */}
                <PaginationTemplate
                  queryKey={QUERY_KEYS.ADMIN.USERS.PAGINATION.USERS}
                  totalPage={userTotalPage || 1}
                  currentPage={userCurrentPage}
                />
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
              <div className="flex flex-col justify-center gap-3">
                <div className="flex items-center justify-between">
                  <h2 className="text-2xl font-bold mb-4">Invitations</h2>
                  <UserDialog
                    onClick={handleInvitationPost}
                    invitations={invitations}
                  />
                </div>
                <UserTableTemplate
                  className="h-[350px] overflow-x-auto"
                  columns={invitationColumns}
                  data={paginatedInvitations}
                  onDelete={handleInvitationDelete}
                />
                {/* pagination */}
                <PaginationTemplate
                  queryKey={QUERY_KEYS.ADMIN.USERS.PAGINATION.INVITATIONS}
                  totalPage={invitationTotalPage || 1}
                  currentPage={invitationCurrentPage}
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
