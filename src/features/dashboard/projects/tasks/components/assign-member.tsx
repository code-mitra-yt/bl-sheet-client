import { Plus } from "lucide-react";

const AssignMember = () => {
  const handleAssignMember = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    e.stopPropagation();
  };
  return (
    <>
      <button
        onClick={handleAssignMember}
        className="bg-primary text-card size-6 flex items-center justify-center rounded-full"
      >
        <Plus size={15} />
      </button>
    </>
  );
};

export default AssignMember;
