import { motion } from "framer-motion";
import { useState } from "react";

export const Challange = () => {
  const [hidden, setHidden] = useState(false);

  return (
    <div className="h-full flex gap-4 flex-col justify-center items-center">
      <motion.div
        className="aspect-square w-48 bg-[coral]"
        initial={{ opacity: 0 }}
        animate={{ opacity: hidden ? 0 : 1 }}
        transition={{ ease: "easeInOut", duration: 0.3 }}
      />
      <button className="btn" onClick={() => setHidden((curr) => !curr)}>
        {hidden ? "Show" : "Hide"}
      </button>
    </div>
  );
};
