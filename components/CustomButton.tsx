"use client";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
type CustomButtonProps = {
  title: string;
  url?: string;
};

const CustomButton = ({ title, url }: CustomButtonProps) => {
  const router = useRouter();
  const handleClick = () => {
    if (url) router.push(url);
  };
  return (
    <div>
      <Button
        className="bg-lime-700 cursor-pointer hidden md:block"
        onClick={handleClick}
      >
        {title}
      </Button>
    </div>
  );
};

export default CustomButton;
