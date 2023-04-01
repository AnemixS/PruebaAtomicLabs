import React, { useCallback, useState } from "react";
import BreadcrumbIndicator from "./BreadcrumbIndicator";
import { BsChevronLeft } from "react-icons/bs";

const Breadcrumb = ({ stepList, currentStep }) => {
  return (
    <div className="w-100 custom-breadcrumb mb-5">
      <div className="w-100 d-flex justify-content-evenly mb-3">
        {stepList.map((step) => (
          <BreadcrumbIndicator
            {...step}
            current={step.step === currentStep.step}
          />
        ))}
      </div>

      <div
        className="progress"
        role="progressbar"
        aria-label="Register Progress"
        aria-valuenow="100"
        aria-valuemin="0"
        aria-valuemax="100"
      >
        <div
          className="progress-bar bg-main-red rounded"
          style={{ width: currentStep.progress }}
        ></div>
      </div>

      <div className="mt-4 cursor-pointer">
        <BsChevronLeft />
        <span className="text-white ms-1">Regresar</span>
      </div>
    </div>
  );
};

export default Breadcrumb;
