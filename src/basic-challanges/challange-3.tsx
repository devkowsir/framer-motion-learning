import { motion } from "framer-motion";

const Challange = () => {
  return (
    <div className="h-full flex gap-4 flex-col justify-center items-center">
      <motion.div
        className="aspect-square w-48"
        style={{ backgroundColor: "#5f9ea0" }}
        whileHover={{ backgroundColor: "#6495ed" }}
        whileTap={{ scale: 1.2 }}
      />
    </div>
  );
};

export const Challange_3 = {
  id: "3",
  name: "Hover, Tap Animation",
  description: "On hover change box background color and on tap box will scale up.",
  Component: Challange,
};
