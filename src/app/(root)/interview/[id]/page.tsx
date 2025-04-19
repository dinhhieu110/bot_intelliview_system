import DisplayTechIcon from "@/src/components/custom/DisplayTechIcon";
import Agent from "@/src/components/sections/Agent";
import { getCurrentUser } from "@/src/lib/actions/auth.action";
import { getInterviewDetailsById } from "@/src/lib/actions/interview.action";
import { getRandomInterviewCover } from "@/src/lib/utils";
import Image from "next/image";
import { redirect } from "next/navigation";
import React from "react";

const page = async ({ params }: RouteParams) => {
  const { id } = await params;
  const interview = await getInterviewDetailsById(id);
  const user = await getCurrentUser();

  if (!interview) redirect("/");
  return (
    <>
      <div className="flex flex-row gap-4 justify-between">
        {/* Left */}
        <div className="flex flex-row gap-4 items-center max-sm:flex-col">
          <div className="flex flex-row gap-4 items-center">
            <Image
              src={getRandomInterviewCover()}
              alt="cover-image"
              width={40}
              height={40}
              className="rounded-full object-cover size-[40px]"
            />
            <h3 className="capitalize">{interview.role}</h3>
          </div>
          <DisplayTechIcon techStack={interview.techstack} />
        </div>
        {/* Right */}
        <p className="bg-dark-200 h-fit px-4 py-2 rounded-lg capitalize">
          {interview.type}
        </p>
      </div>
      <Agent
        userName={user?.name}
        type="interview"
        interviewId={id}
        userId={user?.id}
        questions={interview.questions}
      />
    </>
  );
};

export default page;
