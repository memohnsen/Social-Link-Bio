import { motion } from "framer-motion";
import { useMutation } from "@tanstack/react-query";
import { ReactNode } from "react";

interface LinkCardProps {
  title: string;
  url: string;
  icon: ReactNode;
  color: string;
}

export default function LinkCard({ title, url, icon, color }: LinkCardProps) {
  const trackClick = useMutation({
    mutationFn: async () => {
      const response = await fetch("/api/track-click", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          link: title,
          url,
        }),
      });
      return response.json();
    },
  });

  const handleClick = () => {
    trackClick.mutate();
    window.open(url, "_blank");
  };

  return (
    <motion.button
      variants={{
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 }
      }}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`w-full p-4 rounded-lg border border-gray-200 flex items-center gap-3 transition-colors ${color}`}
      onClick={handleClick}
    >
      {icon}
      <span className="font-medium">{title}</span>
    </motion.button>
  );
}
