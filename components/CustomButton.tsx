"use client";
import { Button } from "@/components/ui/button";
type CustomButtonProps = {
  title: string;
};

const CustomButton = ({ title }: CustomButtonProps) => {
  return (
    <div>
      <Button
        className="bg-lime-700 cursor-pointer hidden md:block"
        onClick={() => alert("Donating")}
      >
        {title}
      </Button>
    </div>
  );
};

export default CustomButton;
