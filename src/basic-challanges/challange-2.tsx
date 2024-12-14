import { motion } from "framer-motion";
import { useState } from "react";

const Challange = () => {
  const [moved, setMoved] = useState(false);

  return (
    <div className="flex flex-col h-full justify-center gap-4">
      <motion.div
        className="w-1/2 h-48 bg-[coral] rounded-md"
        initial={false}
        animate={{ x: moved ? "100%" : 0 }}
        transition={{ ease: "easeInOut", duration: 0.3 }}
      />
      <button className="btn self-center" onClick={() => setMoved((curr) => !curr)}>
        {moved ? "Move Left" : "Move Right"}
      </button>
    </div>
  );
};

export const Challange_2 = {
  id: "2",
  name: "Toggle a Box's Position",
  description: "Create a box which toggles it's position in left or right when a button is clicked.",
  Component: Challange,
};
