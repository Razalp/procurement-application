import React, { useState } from 'react';
import axios from 'axios';

const AddSupplierModal = () => {
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    supplierName: '',
    address: '',
    taxNo: '',
    country: '',
    mobileNo: '',
    email: '',
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    // Reset errors for the changed field
    setErrors({
      ...errors,
      [name]: '',
    });
  };

  const validate = () => {
    const newErrors = {};
    for (const key in formData) {
      if (!formData[key]) {
        newErrors[key] = `${key.replace(/([A-Z])/g, ' $1')} is required.`;
      }
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // Return true if there are no errors
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) {
      return;
    }

    try {
      await axios.post('http://localhost:3000/api/suppliers/createSupplier', formData);
      setFormData({
        supplierName: '',
        address: '',
        taxNo: '',
        country: '',
        mobileNo: '',
        email: '',
      });
      setShowModal(false);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <button
        className="btn btn-primary fixed top-4 right-4"
        onClick={() => setShowModal(true)}
      >
        Add Supplier
      </button>
      <input
        className="modal-state"
        id="add-supplier-modal"
        type="checkbox"
        checked={showModal}
        readOnly
      />
      <div className="modal">
        <label
          className="modal-overlay"
          htmlFor="add-supplier-modal"
          onClick={() => setShowModal(false)}
        ></label>
        <div className="modal-content flex flex-col gap-5">
          <label
            htmlFor="add-supplier-modal"
            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            onClick={() => setShowModal(false)}
          >
            ✕
          </label>
          <h2 className="text-xl">Add New Supplier</h2>
          <form onSubmit={onSubmit} className="flex flex-col gap-4">
            <label>
              Supplier Name:
              <input
                type="text"
                name="supplierName"
                className="input input-bordered w-full"
                value={formData.supplierName}
                onChange={handleChange}
              />
              {errors.supplierName && <span className="text-red-500">{errors.supplierName}</span>}
            </label>
            <label>
              Address:
              <input
                type="text"
                name="address"
                className="input input-bordered w-full"
                value={formData.address}
                onChange={handleChange}
              />
              {errors.address && <span className="text-red-500">{errors.address}</span>}
            </label>
            <label>
              Tax No:
              <input
                type="text"
                name="taxNo"
                className="input input-bordered w-full"
                value={formData.taxNo}
                onChange={handleChange}
              />
              {errors.taxNo && <span className="text-red-500">{errors.taxNo}</span>}
            </label>
            <label>
              Country:
              <input
                type="text"
                name="country"
                className="input input-bordered w-full"
                value={formData.country}
                onChange={handleChange}
              />
              {errors.country && <span className="text-red-500">{errors.country}</span>}
            </label>
            <label>
              Mobile No:
              <input
                type="tel"
                name="mobileNo"
                className="input input-bordered w-full"
                value={formData.mobileNo}
                onChange={handleChange}
              />
              {errors.mobileNo && <span className="text-red-500">{errors.mobileNo}</span>}
            </label>
            <label>
              Email:
              <input
                type="email"
                name="email"
                className="input input-bordered w-full"
                value={formData.email}
                onChange={handleChange}
              />
              {errors.email && <span className="text-red-500">{errors.email}</span>}
            </label>
            <div className="flex gap-3">
              <button type="submit" className="btn btn-primary btn-block">
                Save
              </button>
              <button
                type="button"
                className="btn btn-error btn-block"
                onClick={() => setShowModal(false)}
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddSupplierModal;