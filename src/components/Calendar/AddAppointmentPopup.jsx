// AddAppointmentPopup.js
import React, { useState } from "react";
import mailService from "../../services/mailService";
import Swal from 'sweetalert2';

function AddAppointmentPopup({ onClose }) {
  const [formData, setFormData] = useState({
    email: "",
    content: "",
    date: "",
    time: "",
    disease:"",
    hospital:"",
    doctor:"",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleAddCourse(formData);
    onClose();
  };

  const handleAddCourse = async (mail) => {
    console.log("Sending Mail with data:", mail);
    try {
        await mailService.sendMail(mail);
        await Swal.fire('Success!', 'Mail Send Successfully');
    } catch (error) {
        console.error('Error sending mail:', error);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 p-5">
      <div className="bg-white p-5 rounded-lg shadow-lg w-96">
        <h2 className="text-xl font-semibold mb-4">Add Appointment</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="text-sm">Disease</label>
            <select className="mt-1 p-2 border w-full rounded-md">
              <option>Select Disease</option>
              <option>Flu</option>
              <option>Cold</option>
              <option>Diabetes</option>
              <option>Hypertension</option>
              <option>Asthma</option>
            </select>
          </div>
          <div className="mb-4">
            <label className="text-sm">Hospital</label>
            <select className="mt-1 p-2 border w-full rounded-md">
              <option>Select Hospital</option>
              <option>General Hospital A</option>
              <option>City Hospital B</option>
              <option>Specialist Clinic C</option>
            </select>
          </div>
          <div className="mb-4">
            <label className="text-sm">Doctor</label>
            <select className="mt-1 p-2 border w-full rounded-md">
              <option>Select Doctor</option>
              <option>Doctor A</option>
              <option>Doctor B</option>
            </select>
          </div>
          <div className="mb-4">
            <label className="text-sm">Doctor</label>
            <input
              name="email"
              placeholder="Email"
              onChange={handleChange}
              required
              className="w-full mb-2 p-2 border"
              value={formData.email}
            />
            <input
              name="content"
              placeholder="Content"
              onChange={handleChange}
              required
              className="w-full mb-2 p-2 border"
              value={formData.content}
            />
          </div>
          <div className="flex justify-end">
            <button
              type="button"
              onClick={onClose}
              className="mr-2 px-4 py-2 bg-gray-300 rounded-md"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-purple-600 text-white rounded-md"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddAppointmentPopup;
