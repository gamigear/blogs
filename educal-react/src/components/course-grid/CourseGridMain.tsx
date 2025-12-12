import React from "react";
import Breadcrumb from "../common/breadcrumb/Breadcrumb";
import CourseGridTab from "../Elements/Tabs/CourseGridTab";
import CtaSection from "../home/CtaSection";

const CourseGridMain = () => {
  return (
    <>
      <Breadcrumb title="Sự kiện Game" subTitle="Sự kiện" />
      <CourseGridTab />
      <CtaSection />
    </>
  );
};

export default CourseGridMain;
