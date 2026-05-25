import React, { useState } from "react";
import { Card, Steps } from "antd";

import FormWizard from "../components/FormWizard";
import InformationResult from "../components/InformationResult";

function WizardFormPage() {
  const [formData, setFormData] = useState(null);

  const handleFormFinish = (values) => {
    setFormData(values);
  };

  const handleReset = () => {
    setFormData(null);
  };

  const currentStep = formData ? 1 : 0;

  return (
    <Card style={{ minHeight: 500 }}>
      <Steps
        current={currentStep}
        style={{ maxWidth: 600, margin: "0 auto 40px auto" }}
        items={[{ title: "Заповнення форми" }, { title: "Підсумок" }]}
      />

      {!formData ? (
        <FormWizard onFinish={handleFormFinish} />
      ) : (
        <InformationResult data={formData} onReset={handleReset} />
      )}
    </Card>
  );
}

export default WizardFormPage;
