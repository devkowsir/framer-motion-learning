import { motion } from "framer-motion";
import { useState } from "react";

const Challange = () => {
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

export const Challange_1 = {
  id: "1",
  name: "Fade In and Fade Out",
  description: "Create a box that fades in when the page loads and fades out when you click a button.",
  Component: Challange,
};
