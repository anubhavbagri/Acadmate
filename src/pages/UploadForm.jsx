import { useEffect, useState } from 'react';
import Navbar from '../Components/Navbar';
import UploadImg from '../assets/upload-01.png';

import '../css/styles.css';
import UploadForm1 from '../Components/UploadForm1';
import UploadForm2 from '../Components/UploadForm2';
import UploadForm3 from '../Components/UploadForm3';

function UploadForm() {
  const [step, setStep] = useState(1);

  const [formData, setFormData] = useState({
    Branch: 'Select Branch',
    Sem: 'Select Semester',
    Subject: 'Select Subject',
    Type: 'Select Type (MTE/ETE)',
    Year: 'Select Year',
    downloadUrl: '',
  });

  console.log(formData.downloadUrl, 'downloadUrl');

  const nextStep = () => {
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  const handleStateChange = (values) => {
    setFormData({
      ...formData,
      ...values,
      step,
    });
  };

  let renderForm;

  switch (step) {
    case 1:
      renderForm = (
        <UploadForm1
          nextStep={nextStep}
          handleStateChange={handleStateChange}
          values={formData}
        />
      );
      break;
    case 2:
      renderForm = (
        <UploadForm2
          prevStep={prevStep}
          nextStep={nextStep}
          handleStateChange={handleStateChange}
          values={formData}
        />
      );
      break;
    case 3:
      renderForm = <UploadForm3 prevStep={prevStep} values={formData} />;
      break;
    default:
      renderForm = <UploadForm1 nextStep={nextStep} />;
      break;
  }

  return (
    <>
      <Navbar />
      <div className="layout">
        <div className="image">
          <img src={UploadImg} alt="image" />
        </div>
        <div className="multistep-form-container">
          <h4 className="text-2xl font-bold mb-1.5">Upload Question Papers</h4>
          <p className="text-gray-500 mb-12">
            Uploading question papers has never been so simple. Enter the
            subject details, upload the correct pdf file then confirm and
            publish.
          </p>
          <form id="file-upload-form">
            <div className="multistep-form-area">{renderForm}</div>
          </form>
        </div>
      </div>
    </>
  );
}

export default UploadForm;
