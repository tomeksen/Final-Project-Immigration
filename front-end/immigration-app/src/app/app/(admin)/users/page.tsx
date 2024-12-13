"use client";

import HeaderBreadCrumbs from "@/components/common/HeaderBreadCrumbs";
import LottieLoading from "@/components/common/LottieLoading";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { UserDialog } from "@/components/users/UsersDialog";
import PaginationTemplate from "@/components/users/UsersPaginationTemplate";
import { UserTableTemplate } from "@/components/users/UsersTableTemplate";
import { BASEURL } from "@/config/apiClient";
import { ERROR_MESSAGES } from "@/config/ErrorMessage";
import { QUERY_KEYS } from "@/config/query";
import { FilteredInvitation, InvitationList } from "@/type/Invitation.type";
import { FilteredUser, UserList } from "@/type/Users.type";
import { filteredInvitations, filteredUsers } from "@/utils/users";
import { Plus, User } from "lucide-react";
import { useSearchParams } from "next/navigation";
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

  // Delete users handler
  const handleUsersDelete = async (id: string) => {
    try {
      const response = await fetch(`${BASEURL}/users/${id}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error(ERROR_MESSAGES.USERS.DELETE_FAILED);
      }

      // Remove the deleted invitation from state
      setUsers((prev) => prev?.filter((user) => user.id !== id) || null);

      toast.success("Successfully deleted the use");
    } catch (error) {
      if (error instanceof Error) {
        setInvitationsError(error.message);
        toast.error(error.message);
      } else {
        setInvitationsError(ERROR_MESSAGES.GENERAL.UNEXPECTED);
        toast.error(ERROR_MESSAGES.GENERAL.UNEXPECTED);
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
        throw new Error(ERROR_MESSAGES.USERS.INVITATION_DELETE_FAILED);
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
        setInvitationsError(ERROR_MESSAGES.GENERAL.UNEXPECTED);
        toast.error(ERROR_MESSAGES.GENERAL.UNEXPECTED);
      }
    }
  };

  const handleInvitationPost = async (email: string) => {
    try {
      if (!email) return toast.error(ERROR_MESSAGES.USERS.VALID_EMAIL);
      const response = await fetch(
        `${BASEURL}/invitations/${encodeURIComponent(email)}`,
        {
          method: "POST",
        }
      );

      if (!response.ok) {
        throw new Error(ERROR_MESSAGES.USERS.INVITATION_SEND_FAILED);
      }

      setIsFetchInvitation(true);
      toast.success("Successfully send the invitation");
    } catch (error) {
      if (error instanceof Error) {
        setInvitationsError(error.message);
        toast.error(error.message);
      } else {
        setInvitationsError(ERROR_MESSAGES.GENERAL.UNEXPECTED);
        toast.error(ERROR_MESSAGES.GENERAL.UNEXPECTED);
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

        if (!response.ok)
          throw new Error(ERROR_MESSAGES.USERS.FETCH_USERS_FAILED);
        const data: UserList = await response.json();

        // filter out necessary data and format it
        const filteredUser = filteredUsers(data.users.data);
        setUsers(filteredUser);
      } catch (error) {
        if (error instanceof Error) {
          setUsersError(error.message);
          toast.error(error.message);
        } else {
          setUsersError(ERROR_MESSAGES.GENERAL.UNEXPECTED);
          toast.error(ERROR_MESSAGES.GENERAL.UNEXPECTED);
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

        if (!response.ok)
          throw new Error(ERROR_MESSAGES.USERS.FETCH_INVITATIONS_FAILED);
        const data: InvitationList = await response.json();

        // filter out necessary data and format it
        const filteredInvitation = filteredInvitations(data.invitation.data);
        setInvitations(filteredInvitation);
      } catch (error) {
        if (error instanceof Error) {
          setInvitationsError(error.message);
        } else {
          setInvitationsError(ERROR_MESSAGES.GENERAL.UNEXPECTED);
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
      <section className="h-full max-w-screen flex flex-1 flex-col bg-gray-100">
        <div className="container mx-auto p-1 w-full ">
          <div className="">
            {/* User Table section */}
            {/* Loading state */}
            {isUsersLoading && (
              <div className="flex items-center justify-center h-[400px]">
                <LottieLoading />
              </div>
            )}

            {/* Error state */}
            {usersError && (
              <div className="flex items-center justify-center text-red-500 h-[400px]">
                <p>Error: {usersError}</p>
              </div>
            )}

            {!isUsersLoading && !usersError && users && (
              <div className="flex flex-col justify-center py-2">
                {/* Title */}
                <Card>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div>
                        <HeaderBreadCrumbs rootName="Users" className="py-0"/>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
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
                </CardContent>
                </Card>
              </div>
            )}

            {/* Invitation table */}
            {/* Loading state */}
            {isInvitationLoading && (
              <div className="flex items-center justify-center h-[400px]">
                <LottieLoading />
              </div>
            )}

            {/* Error state */}
            {invitationsError && (
              <div className="flex items-center justify-center text-red-500 h-[400px]">
                <p>Error: {usersError}</p>
              </div>
            )}

            {/* Invitations table */}
            {!isInvitationLoading && !invitationsError && invitations && (
              <div className="flex flex-col justify-center">
                  {/* title */}
                  <Card>
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <div>
                        <HeaderBreadCrumbs rootName="Invitations" />
                        </div>
                        <UserDialog
                                onClick={handleInvitationPost}
                                invitations={invitations}
                              />
                      </div>
                    </CardHeader>
                    <CardContent>
                  {/* add button */}
                  
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
                </CardContent>
                </Card>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default UsersPage;
