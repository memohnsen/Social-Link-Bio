import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import LinkCard from "@/components/LinkCard";
import { motion } from "framer-motion";
import { 
  SiGithub, 
  SiX,
  SiLinkedin, 
  SiInstagram 
} from "react-icons/si";

const links = [
  {
    title: "GitHub",
    url: "https://github.com/yourusername",
    icon: <SiGithub className="w-5 h-5" />,
    color: "hover:bg-gray-900 hover:text-white"
  },
  {
    title: "X (Twitter)",
    url: "https://x.com/yourusername",
    icon: <SiX className="w-5 h-5" />,
    color: "hover:bg-black hover:text-white"
  },
  {
    title: "LinkedIn",
    url: "https://linkedin.com/in/yourusername",
    icon: <SiLinkedin className="w-5 h-5" />,
    color: "hover:bg-blue-600 hover:text-white"
  },
  {
    title: "Instagram",
    url: "https://instagram.com/yourusername",
    icon: <SiInstagram className="w-5 h-5" />,
    color: "hover:bg-pink-500 hover:text-white"
  }
];

export default function Home() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 animate-gradient" />

      {/* Floating orbs animation */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000" />
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
                duration: 0.8 
              }}
              className="flex justify-center mb-6"
            >
              <Avatar className="w-24 h-24 border-4 border-white shadow-lg ring-2 ring-purple-500/20">
                <AvatarImage src="/IMG_0080.JPG" alt="Profile" />
                <AvatarFallback>ME</AvatarFallback>
              </Avatar>
            </motion.div>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-center mb-8"
            >
              <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent mb-2">
                Your Name
              </h1>
              <p className="text-gray-600 mt-2">
                Digital creator & developer
              </p>
            </motion.div>

            <motion.div
              variants={container}
              initial="hidden"
              animate="show"
              className="space-y-4"
            >
              {links.map((link) => (
                <LinkCard 
                  key={link.title}
                  title={link.title}
                  url={link.url}
                  icon={link.icon}
                  color={link.color}
                />
              ))}
            </motion.div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}