"use client"
import TopNav from "@/components/navbar/TopNav";
import { Button } from "@nextui-org/react";
import { p } from "framer-motion/client";
import Image from "next/image";
import Link from "next/link";
import { GoSmiley } from "react-icons/go";

export default function Home() {
  return (
    <div >
      
      <Button as={Link} href="/members" color="danger" variant="bordered" startContent={
       <GoSmiley/>
      }>ClickMe</Button>
    </div>
  );
}
