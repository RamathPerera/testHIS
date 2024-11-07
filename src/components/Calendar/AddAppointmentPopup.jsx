// AddAppointmentPopup.js
import React from 'react';

function AddAppointmentPopup({ onClose }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 p-5">
      <div className="bg-white p-5 rounded-lg shadow-lg w-96">
        <h2 className="text-xl font-semibold mb-4">Add Appointment</h2>
        <form>
          {/* Disease Dropdown */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Disease</label>
            <select className="mt-1 p-2 border w-full rounded-md">
              <option value="">Select Disease</option>
              <option value="flu">Flu</option>
              <option value="cold">Cold</option>
              <option value="diabetes">Diabetes</option>
              <option value="hypertension">Hypertension</option>
              <option value="asthma">Asthma</option>
              {/* Add more options as needed */}
            </select>
          </div>

          {/* Hospital Dropdown */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Hospital</label>
            <select className="mt-1 p-2 border w-full rounded-md">
              <option value="">Select Hospital</option>
              <option value="hospital-a">General Hospital A</option>
              <option value="hospital-b">City Hospital B</option>
              <option value="hospital-c">Specialist Clinic C</option>
              <option value="hospital-d">Community Health Center D</option>
              {/* Add more options as needed */}
            </select>
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Hospital</label>
            <select className="mt-1 p-2 border w-full rounded-md">
              <option value="">Select Doctor</option>
              <option value="hospital-a">Doctor A</option>
              <option value="hospital-b">Doctor B</option>
              <option value="hospital-c">Doctor C</option>
              <option value="hospital-d">Doctor D</option>
              {/* Add more options as needed */}
            </select>
          </div>

          <div className="flex justify-end">
            <button
              type="button"
              onClick={onClose}
              className="mr-2 px-4 py-2 bg-gray-300 rounded-md"
            >
              Cancel
            </button>
            <button type="submit" className="px-4 py-2 bg-purple-600 text-white rounded-md">
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddAppointmentPopup;
