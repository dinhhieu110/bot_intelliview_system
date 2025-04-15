import InterviewCard from "@/src/components/custom/InterviewCard";
import Hero from "@/src/components/sections/Hero";
import { dummyInterviews } from "@/src/constants";
import React from "react";

type Props = {};

const page = (props: Props) => {
  return (
    <>
      <Hero />
      <section className="flex flex-col gap-6 mt-8 ">
        <h2>Your Interviews</h2>
        <div className="interviews-section">
          {dummyInterviews.map((interview) => (
            <InterviewCard {...interview} key={interview.id} />
          ))}
          {/* <p>You haven&apos;t taken any interviews yet</p> */}
        </div>
      </section>

      <section className="flex flex-col gap-6 mt-8 ">
        <h2>Take an Interview</h2>
        <div className="interviews-section">
          {dummyInterviews.map((interview) => (
            <InterviewCard {...interview} key={interview.id} />
          ))}
        </div>
      </section>
    </>
  );
};

export default page;
