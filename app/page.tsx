import HeaderProfile from './components/HeaderProfile'
import Education from './components/Education'
import CareerProfile from './components/CareerProfile'
import Publications from './components/Publications'
import Awards from './components/Awards'
import Skills from './components/Skills'
import AdminRoles from './components/AdminRoles'
import Teaching from './components/Teaching'
import ProfessionalMemberships from './components/ProfessionalMemberships'
import Projects from './components/Projects'
import Supervision from './components/Supervision'
import Footer from './components/Footer'
import Background from './components/Background'
import { Headernav } from './components/Headernav'
import { HeroParallaxDemo } from './components/parallax'
import { FloatingNav } from '@/components/ui/floating-navbar'
import {IconUserScan, IconMapHeart, IconAward, IconBooks, IconPlayVolleyball, IconMathFunction, IconUsers, IconPresentation, IconBuildingLighthouse} from "@tabler/icons-react";

const navItems = [
  {
    name: "Intro",
    link: "#intro",
    icon: <IconUserScan className="h-4 w-4 text-neutral-500 dark:text-white" />,
  },
  {
    name: "Career",
    link: "#career",
    icon: <IconMapHeart className="h-4 w-4 text-neutral-500 dark:text-white" />,
  },
  {
    name: "Publications",
    link: "#publications",
    icon: <IconBooks className="h-4 w-4 text-neutral-500 dark:text-white" />,
  },
  {
    name: "Awards",
    link: "#awards",
    icon: (
      <IconAward className="h-4 w-4 text-neutral-500 dark:text-white" />
    ),
  },
  {
    name: "Roles",
    link: "#adminroles",
    icon: (
      <IconPlayVolleyball className="h-4 w-4 text-neutral-500 dark:text-white" />
    ),
  },
  {
    name: "Teach",
    link: "#teaching",
    icon: (
      <IconMathFunction className="h-4 w-4 text-neutral-500 dark:text-white" />
    ),
  },
  {
    name: "Membership",
    link: "#professionalmemberships",
    icon: (
      <IconUsers className="h-4 w-4 text-neutral-500 dark:text-white" />
    ),
  },
  {
    name: "Projects",
    link: "#projects",
    icon: (
      <IconPresentation className="h-4 w-4 text-neutral-500 dark:text-white" />
    ),
  },
  {
    name: "Supervision",
    link: "#supervision",
    icon: (
      <IconBuildingLighthouse className="h-4 w-4 text-neutral-500 dark:text-white" />
    ),
  },
];

export default function Home() {
  return (
    <main className="min-h-screen p-4 md:p-8 lg:p-12 relative overflow-hidden">
      <Background />
      {/* <Headernav /> */}
      {/* Added margin-top to account for the height of the navigation bar */}
      <div className="max-w-6xl mx-auto mt-auto space-y-12 relative z-10 pt-[64px]">
        <FloatingNav navItems={navItems} />
        <HeaderProfile />
        <Education />
        <CareerProfile />
        <Skills />
        <Publications />
        <Awards />
        <AdminRoles />
        <Teaching />
        <HeroParallaxDemo />
        <ProfessionalMemberships />
        <Projects />
        <Supervision />
        <Footer />
      </div>
    </main>
  );
}



// export default function Home() {
//   return (
//     <main className="min-h-screen p-4 md:p-8 lg:p-12 relative overflow-hidden">
//       <Background />
//       <div className="max-w-6xl mx-auto mt-auto space-y-12 relative z-10 pt-[64px]">
//         <HeaderProfile />
//         <Education />
//         <CareerProfile />
//         <Skills />
//         <Publications />
//         <Awards />
//         <AdminRoles />
//         <Teaching />
//       </div>
//       {/* Ensure full-width HeroParallaxDemo */}
//       <div className="w-screen relative -mx-4 md:-mx-8 lg:-mx-12">
//       <HeroParallaxDemo />
//       </div>
//       <div className="max-w-6xl mx-auto space-y-12 relative z-10">
//         <ProfessionalMemberships />
//         <Projects />
//         <Supervision />
//         <Footer />
//       </div>
//     </main>
//   );
// }
