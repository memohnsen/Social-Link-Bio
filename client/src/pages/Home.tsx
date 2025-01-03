import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import LinkCard from "@/components/LinkCard";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import {
  GiWeightLiftingUp,
  GiTakeMyMoney,
  GiFireworkRocket,
} from "react-icons/gi";
import profileImg from "../assets/IMG_9955.jpg";
import { MdComputer, MdMessage } from "react-icons/md";
import { SiX, SiInstagram } from "react-icons/si";

const links = [
  {
    title: "War Games",
    url: "https://wl-wargames.com",
    icon: <MdComputer className="w-6 h-6" />,
    color: "text-gray-700 hover:text-[#897D27]",
  },
  {
    title: "X (Twitter)",
    url: "https://x.com/maddisenmohnsen",
    icon: <SiX className="w-6 h-6" />,
    color: "text-gray-700 hover:text-black",
  },
  {
    title: "Instagram",
    url: "https://instagram.com/coachmohnsen",
    icon: <SiInstagram className="w-6 h-6" />,
    color: "text-gray-700 hover:text-pink-500",
  },
];

export default function Home() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-gray-100 to-gray-200 animate-gradient" />

      {/* Floating orbs animation */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#897D27]/20 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gray-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-[#897D27]/30 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000" />
      </div>

      {/* Content */}
      <div className="relative py-12 px-4">
        <Card className="max-w-md mx-auto bg-white/80 backdrop-blur-sm border-0 shadow-xl">
          <CardContent className="pt-6">
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{
                type: "spring",
                stiffness: 200,
                damping: 20,
                duration: 0.8,
              }}
              className="flex justify-center mb-6"
            >
              <Avatar className="w-32 h-32 border-4 border-white shadow-lg ring-2 ring-[#897D27]/20">
                <AvatarImage src={profileImg} alt="Profile" />
                <AvatarFallback>ME</AvatarFallback>
              </Avatar>
            </motion.div>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-center mb-8"
            >
              <h1 className="text-3xl font-bold bg-gradient-to-r from-gray-700 via-[#897D27] to-gray-700 bg-clip-text text-transparent mb-2">
                Maddisen Mohnsen
              </h1>
              <p className="text-gray-600 mt-2">
                MBA, CSCS, USAW L3 National Coach
              </p>
            </motion.div>

            <motion.div
              variants={container}
              initial="hidden"
              animate="show"
              className="space-y-6"
            >
              {/* Coaching Section */}
              <div className="space-y-3">
                <h2 className="text-lg font-semibold text-gray-700">
                  Coaching
                </h2>
                <motion.button
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    show: { opacity: 1, y: 0 },
                  }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full p-4 rounded-lg border border-gray-200 flex items-center gap-3 transition-colors hover:bg-[#897D27]/10"
                  onClick={() =>
                    window.open(
                      "https://powerandgraceperformance.com/",
                      "_blank",
                    )
                  }
                >
                  <GiWeightLiftingUp className="w-5 h-5" />
                  <span className="font-medium">Power & Grace Performance</span>
                </motion.button>

                <motion.button
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    show: { opacity: 1, y: 0 },
                  }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full p-4 rounded-lg border border-gray-200 flex items-center gap-3 transition-colors hover:bg-[#897D27]/10"
                  onClick={() =>
                    window.open("https://wa.me/message/LTZ6GYOGBRGPJ1")
                  }
                >
                  <MdMessage className="w-5 h-5" />
                  <span className="font-medium">
                    Learn More About 1-1 Coaching
                  </span>
                </motion.button>
              </div>

              {/* Projects Section */}
              <div className="space-y-3">
                <h2 className="text-lg font-semibold text-gray-700">
                  Projects
                </h2>
                <motion.button
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    show: { opacity: 1, y: 0 },
                  }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full p-4 rounded-lg border border-gray-200 flex items-center gap-3 transition-colors hover:bg-[#897D27]/10"
                  onClick={() =>
                    window.open("https://wl-wargames.com", "_blank")
                  }
                >
                  <MdComputer className="w-5 h-5 rounded" />
                  <span className="font-medium">
                    War Games: Elevate Your Coaching
                  </span>
                </motion.button>
                <motion.button
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    show: { opacity: 1, y: 0 },
                  }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full p-4 rounded-lg border border-gray-200 flex items-center gap-3 transition-colors hover:bg-[#897D27]/10"
                  onClick={() =>
                    window.open("https://wl-wargames.com/wrapped", "_blank")
                  }
                >
                  <GiFireworkRocket className="w-5 h-5 rounded" />
                  <span className="font-medium">
                    2024 Weightlifting Wrapped
                  </span>
                </motion.button>

                {/* Not Ready
                <motion.button
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    show: { opacity: 1, y: 0 }
                  }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full p-4 rounded-lg border border-gray-200 flex items-center gap-3 transition-colors hover:bg-[#897D27]/10"
                  onClick={() => window.open("https://apolytos.co", "_blank")}
                >
                  <GiTakeMyMoney className="w-5 h-5 rounded" />
                  <span className="font-medium">Apolytos: Simple Expense Tracking</span>
                </motion.button>
                 */}
              </div>

              <motion.div className="flex justify-center gap-6 mt-8">
                {links.slice(1).map((link) => (
                  <motion.a
                    key={link.title}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cn(
                      "p-2 rounded-full transition-colors",
                      link.color,
                    )}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {link.icon}
                  </motion.a>
                ))}
              </motion.div>
            </motion.div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
