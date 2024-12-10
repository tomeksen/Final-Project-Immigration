"use client";

import { UserTableTemplate } from "@/components/users/UsersTableTemplate";
import { BASEURL } from "@/config/apiClient";
import { FilteredInvitation, InvitationList } from "@/type/Invitation.type";
import { FilteredUser, User, UserList } from "@/type/Users.type";
import { filteredInvitations, filteredUsers } from "@/utils/users";
import { Invitation } from "@clerk/nextjs/server";
import { useEffect, useState } from "react";

// the users data has to be reflected when a user push delete or add button
// In this case, should be used Client component
const UsersPage = () => {
  const [users, setUsers] = useState<FilteredUser[] | null>(null);
  const [invitations, setInvitations] = useState<FilteredInvitation[] | null>(
    null
  );

  // Delete invitation handler
  const handleDelete = async (id: string) => {
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
    } catch (error) {
      if (error instanceof Error) {
        console.error(error.message);
      } else {
        console.error("An unexpected error happened");
      }
    }
  };

  // fetch users
  useEffect(() => {
    const fetchUsers = async () => {
      try {
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
          console.error(error.message);
        } else {
          console.error("An unexpected error happened");
        }
      }
    };
    fetchUsers();
  }, []);

  // fetch invitations
  useEffect(() => {
    console.log(BASEURL);

    const fetchInvitations = async () => {
      try {
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
          console.error(error.message);
        } else {
          console.error("An unexpected error happened");
        }
      }
    };
    fetchInvitations();
  }, []);

  // the definition of user props
  const userColumns = [
    { header: "NUMBER", accessorKey: "number" },
    { header: "NAME", accessorKey: "name" },
    { header: "JOIN DATE", accessorKey: "joinDate" },
    { header: "TYPE", accessorKey: "type" },
  ];

  // the definition of invitation props
  const invitationColumns = [
    { header: "NUMBER", accessorKey: "number" },
    { header: "EMAIL", accessorKey: "email" },
    { header: "EXPIRY DATE", accessorKey: "expiryDate" },
    { header: "ACTION", accessorKey: "actions" },
  ];

  if (!users)
    return (
      <div className="flex items-center justify-center w-full h-full">
        Not found users
      </div>
    );
  if (!invitations)
    return (
      <div className="flex items-center justify-center w-full h-full">
        Not found users
      </div>
    );

  return (
    <>
      <section className="h-screen max-w-screen flex flex-1 flex-col bg-slate-100">
        <div className="container mx-auto p-4 w-full h-full">
          <div className="h-full grid grid-rows-2">
            {/* Users table */}
            <div className="flex flex-col justify-center">
              <h2 className="text-2xl font-bold mb-4">Users</h2>
              {/* filter */}

              {/* UserTable */}
              <UserTableTemplate columns={userColumns} data={users} />
            </div>

            {/* Invitation table */}
            <div className="flex flex-col justify-center">
              <h2 className="text-2xl font-bold mb-4">Invitations</h2>
              <UserTableTemplate
                columns={invitationColumns}
                data={invitations}
                onDelete={handleDelete}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default UsersPage;
