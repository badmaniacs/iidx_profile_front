import React, { useState, ChangeEvent } from 'react';

const useSearchForm = () => {
  const [formValues, setFormValues] = useState({
    playtype: 'SP',
    difficulty: 'N',
    level: 1,
    title: '',
  });

  const handleInputChange = (
    event: ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value } = event.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  return { formValues, handleInputChange };
};

export default useSearchForm;
