import { cn } from "@/lib/utils";
import { Project } from "@/types";
import { MEMBER_ROLE_COLORS } from "@/constants";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Link } from "react-router-dom";

interface TableViewProps {
  projects: Project[];
}

const TableView = ({ projects }: TableViewProps) => {
  return (
    <div className="border rounded-tl-lg rounded-tr-lg overflow-auto w-full">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="min-w-[200px] text-active">Name</TableHead>
            <TableHead className="min-w-[200px] text-active">
              Description
            </TableHead>
            <TableHead className="min-w-[250px] text-active">Owner</TableHead>
            <TableHead className="text-center text-active">Role</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {projects.map((project) => (
            <TableRow key={project.projectId}>
              <TableCell className="font-medium">
                <Link
                  to={`/dashboard/projects/${project.projectId}/details`}
                  className="text-active hover:text-active/80"
                >
                  {project.name}
                </Link>
              </TableCell>
              <TableCell>{project.description}</TableCell>
              <TableCell>
                <div className="flex items-center space-x-2">
                  <Avatar className="size-7">
                    <AvatarImage
                      src={project?.owner?.avatar?.url}
                      alt="profile-picture"
                    />
                    <AvatarFallback className="bg-active text-white">
                      {project.owner.fullName[0].toUpperCase()}
                    </AvatarFallback>
                  </Avatar>
                  <span>{project.owner.fullName}</span>
                </div>
              </TableCell>
              <TableCell className="text-center">
                <Badge className={cn(MEMBER_ROLE_COLORS[project.role])}>
                  {project.role}
                </Badge>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default TableView;