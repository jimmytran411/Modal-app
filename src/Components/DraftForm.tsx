import React from 'react';
import { useForm } from 'react-hook-form';

interface DraftFormProps {
  formSubmit: (fields: DraftFormInputs) => void;
}

interface DraftFormInputs {
  title: string;
  description: string;
  option: string;
}

export const DraftForm = ({ formSubmit }: DraftFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<DraftFormInputs>();

  return (
    <form onSubmit={handleSubmit((data) => formSubmit(data))}>
      <label htmlFor="title">title</label>
      <input
        id="title"
        {...register('title', {
          required: 'Title is required',
        })}
      />
      {errors.title && <span role="alert">{errors.title.message}</span>}

      <label htmlFor="description">description</label>
      <input
        id="description"
        {...register('description', {
          required: 'Description is required',
        })}
        type="description"
      />
      {errors.description && <span role="alert">{errors.description.message}</span>}

      <select data-testid="draft-form-option" {...register('option')}>
        <option value="option 1">option 1</option>
        <option value="option 2">option 2</option>
        <option value="option 3">option 3</option>
      </select>
      <button type="submit">Submit</button>
    </form>
  );
};
