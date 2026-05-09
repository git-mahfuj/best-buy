import { ModeToggle } from "@/components/mode-toggle";
import NavBar from "@/components/navbar/NavBar";
import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      <NavBar />
      <ModeToggle />
    </div>
  );
}
