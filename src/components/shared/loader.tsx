import { LoaderCircle } from "lucide-react";

const Loader = () => {
  return (
    <div className="flex items-center justify-center p-6">
      <LoaderCircle size={20} color="blue" className="animate-spin" />
    </div>
  );
};

export default Loader;
