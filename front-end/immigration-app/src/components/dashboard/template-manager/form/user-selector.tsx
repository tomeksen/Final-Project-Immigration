"use client";

import { Check, ChevronsUpDown } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useEffect, useState } from "react";
import { FormControl } from "@/components/ui/form";
import { CommandList } from "cmdk";

type UserSelectorProps = {
  onSelect: (value: string) => void;
};

export function UserSelector({ onSelect }: UserSelectorProps) {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");
  const [users, setUsers] = useState<any>([]);
  
  useEffect(() => {
      const fetchUsers = async() => {
        try {
          const response = await fetch(
            `https://immigrationapi.tomytrt.workers.dev/api/users`,
            {
              method: "GET",
            }
          );
  
          if (!response.ok) {
            throw new Error("Failed to fetch applications");
          }
  
          const userJson = await response.json();
          setUsers(userJson.users.data);
        } catch (e: any) {
          throw new Error("Failed to fetch applications");
        }
      };
        
    fetchUsers()
  }, []);
  

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <FormControl>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-full justify-between"
        >
          {value
            ? users.find((user: any) => user.id === value)?.firstName
            : "Select user..."}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
        </FormControl>
      </PopoverTrigger>
      <PopoverContent className="w-[600px] p-0">
        <Command>
          <CommandInput placeholder="Search users..." />
          <CommandList>
          <CommandEmpty>No user found.</CommandEmpty>
            <CommandGroup>
              {users.map((user : any) => (
                <CommandItem
                  key={user.id}
                  onSelect={() => {
                    setValue(user.id);
                    onSelect(user.id);
                    setOpen(false);
                  }}
                >
                    {user.firstName} {user.lastName}
                  <Check
                    className={cn(
                      "mr-2 h-4 w-4",
                      value === user.id ? "opacity-100" : "opacity-0"
                    )}
                  />
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}