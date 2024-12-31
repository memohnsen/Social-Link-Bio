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
        staggerChildren: 0.1
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-12 px-4">
      <Card className="max-w-md mx-auto bg-white/80 backdrop-blur-sm">
        <CardContent className="pt-6">
          <motion.div 
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
            className="flex justify-center mb-6"
          >
            <Avatar className="w-24 h-24 border-4 border-white shadow-lg">
              <AvatarImage src="https://i.pravatar.cc/200" alt="Profile" />
              <AvatarFallback>ME</AvatarFallback>
            </Avatar>
          </motion.div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-center mb-8"
          >
            <h1 className="text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
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
            className="space-y-3"
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
  );
}