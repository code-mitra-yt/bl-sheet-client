import { Member } from "@/types";
import { cn } from "@/lib/utils";
import { Loader } from "@/components";
import { INVITATION_STATUS_COLORS, MEMBER_ROLE_COLORS } from "@/constants";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface MemberTableProps {
  members: Member[];
  isLoading: boolean;
}

const MemberTable = ({ members, isLoading }: MemberTableProps) => {
  if (isLoading) return <Loader />;

  return (
    <div className="border rounded-tl-lg rounded-tr-lg overflow-auto w-full">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="min-w-[250px] text-foreground">
              Name
            </TableHead>
            <TableHead className="min-w-[200px] text-foreground">
              Email
            </TableHead>
            <TableHead className="min-w-[200px] text-foreground">
              Role
            </TableHead>
            <TableHead className="text-foreground">Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {members.map((member: Member) => (
            <TableRow key={member._id}>
              <TableCell>
                <div className="flex items-center space-x-2">
                  <Avatar className="size-7">
                    <AvatarImage
                      src={member?.user?.avatar?.url}
                      alt="profile-picture"
                    />
                    <AvatarFallback className="bg-active text-white">
                      {member.user.fullName[0].toUpperCase()}
                    </AvatarFallback>
                  </Avatar>
                  <span>{member.user.fullName}</span>
                </div>
              </TableCell>
              <TableCell>{member.email}</TableCell>
              <TableCell>
                <Badge
                  className={cn(
                    MEMBER_ROLE_COLORS[member.role],
                    "w-[100px] flex items-center justify-center"
                  )}
                >
                  {member.role}
                </Badge>
              </TableCell>
              <TableCell>
                <Badge
                  className={cn(
                    INVITATION_STATUS_COLORS[member.invitationStatus!],
                    "w-[110px] flex items-center justify-center"
                  )}
                >
                  {member.invitationStatus}
                </Badge>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default MemberTable;
