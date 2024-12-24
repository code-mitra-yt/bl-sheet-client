import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface BackButtonProps {
  url: null | string;
  title: string;
}
const BackButton = ({ url, title }: BackButtonProps) => {
  const navigate = useNavigate();
  const handleOnClick = () => {
    if (!url) return navigate(-1);
    else navigate(url);
  };

  return (
    <button
      className="text-active hover:text-active/80 transition-all space-x-2 text-sm flex items-center justify-center"
      onClick={handleOnClick}
    >
      <ArrowLeft size={15} />
      <span>{title}</span>
    </button>
  );
};

export default BackButton;
