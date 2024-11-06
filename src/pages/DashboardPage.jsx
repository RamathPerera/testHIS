import React from "react";
import Card from "../components/Card";
import PatientChart from "../components/PatientChart";
import DoctorChart from "../components/DoctorChart";
import { faHospital } from '@fortawesome/free-solid-svg-icons';
import { faUserDoctor } from '@fortawesome/free-solid-svg-icons';
import { faHospitalUser } from '@fortawesome/free-solid-svg-icons';
import { faUserNurse } from '@fortawesome/free-solid-svg-icons';
import { faCalendarCheck } from '@fortawesome/free-solid-svg-icons';
import LogoutButton from "../components/LogoutButton";

function DashboardPage() {
    return(
        <div>
            <LogoutButton />
            <div className="p-4 w-full flex flex-col lg:flex-row gap-2 items-center justify-center">
                <Card icon={faHospital} title="Hospitals" count={15} link={'/hospital'} />
                <Card icon={faUserDoctor} title="Doctors" count={15} link={'/doctors'} />
                <Card icon={faHospitalUser} title="Patients" count={15} link={'/patients'} />
                <Card icon={faUserNurse} title="Nurses" count={15} link={'/nurses'} />
                <Card icon={faCalendarCheck} title="Appointments" count={15} link={'/appointments'} />
            </div>
            <div className="pt-16 px-10 pb-10 flex flex-col lg:flex-row items-center lg:items-start justify-center gap-10 overflow-x-auto">
                <PatientChart />
                {/* <DoctorChart /> */}
            </div>
        </div>
    );
}

export default DashboardPage;
