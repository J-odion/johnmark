"use client";
import { useState } from "react";
import CardComp from "./card";
import ProfileCard from "./profileCard";

export default function CastsCrew() {
  const casts = [
    { 
      name: "Dr Ali Garba ", 
      title: "Executive Producer" 
    },
    { 
      name: "Dr Agbainya John Agba", 
      title: "Associate Producer" 
    },
    { 
      name: "Mr Ahmed Saleh Sarduan", 
      title: "Associate Producer" 
    },
    { 
      name: "Johnmark Mhenga Iyoo ", 
      title: ["Director | ", "Producer | ", "Screenplay"]
    },
    { 
      name: "Jude Zungwe", 
      title: "Assist Director" 
    },
    { 
      name: "Maaj Sambe", 
      title: "Editor" 
    },
    {
      name: "Sophie Erdoo Dzever",
      title: "Screenplay"
    },
    { 
      name: "Chike Nwoffiah", 
      title: "Consulting Producer" 
    },
    { 
      name: "Sadiq Abubakar", 
      title: "Production Manager" 
    },
    { 
      name: "Paulens  Chia", 
      title: "Director Of Photography" 
    },
    { 
      name: "Slo H", 
      title: " Editor/Colorist" 
    },
    { 
      name: " Erdoo Sophie Dzever", 
      title: "Script Supervisor" 
    },
    { 
      name: "Mercy Modom", 
      title: "Make Up" 
    },
  ];
  return (
    <section className="px-10 py-[60px] gap-4 gap-y-10 w-full justify-center flex flex-col ">
      <div id="about-us" className=" w-[80%] grid gap-2 grid-cols-4 mx-auto">
        {casts.map((cast) => (
          <ProfileCard name={cast.name} title={cast.title} />
        ))

        }
      </div>
    </section>
  );
}
