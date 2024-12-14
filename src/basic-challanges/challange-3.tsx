import { motion } from "framer-motion";

export const Challange = () => {
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
