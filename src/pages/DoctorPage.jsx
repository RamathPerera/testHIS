import React from 'react';
import DoctorTable from '../components/Tables/DoctorTable';
import DoctorSpecializationChart from '../components/Charts/DoctorSpecializationChart';
import DoctorHospitalChart from '../components/Charts/DoctorHospitalChart';

function DoctorPage() {
  return (
    <div> {/* Added padding for general spacing */}
      <DoctorTable />
      <div className="flex flex-col lg:flex-row gap-6 mt-8"> {/* Flexbox layout with gap and margin-top */}
        <div className="w-full lg:w-1/2 flex items-center justify-center p-10"> {/* Full width on small screens, half width on large screens */}
          <DoctorHospitalChart />
        </div>
        <div className="w-full lg:w-1/2 flex items-center justify-center p-10"> {/* Full width on small screens, half width on large screens */}
          <DoctorSpecializationChart />
        </div>
      </div>
    </div>
  );
}

export default DoctorPage;
