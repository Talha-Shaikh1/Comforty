import React, { useState } from 'react';

interface CustomerInfo {
  name: string;
  email: string;
  phone: string;
  address: string;
}

interface CustomerInfoFormProps {
  onSubmit: (info: CustomerInfo) => void;
}

const CustomerInfoForm: React.FC<CustomerInfoFormProps> = ({ onSubmit }) => {
  const [info, setInfo] = useState<CustomerInfo>({
    name: '',
    email: '',
    phone: '',
    address: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInfo({ ...info, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(info);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="text"
        name="name"
        placeholder="Full Name"
        value={info.name}
        onChange={handleChange}
        required
        className="w-full p-2 border rounded"
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={info.email}
        onChange={handleChange}
        required
        className="w-full p-2 border rounded"
      />
      <input
        type="tel"
        name="phone"
        placeholder="Phone Number"
        value={info.phone}
        onChange={handleChange}
        required
        className="w-full p-2 border rounded"
      />
      <input
        type="text"
        name="address"
        placeholder="Address"
        value={info.address}
        onChange={handleChange}
        required
        className="w-full p-2 border rounded"
      />
      <button
        type="submit"
        className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600"
      >
        Submit
      </button>
    </form>
  );
};

export default CustomerInfoForm;