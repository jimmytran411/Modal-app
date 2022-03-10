import { useForm } from 'react-hook-form';
import { useDraftFormStyles } from './styles/useDraftFormStyles';

interface DraftFormProps {
  formSubmit: (fields: DraftFormInputs) => void;
}

export interface DraftFormInputs {
  title: string;
  description: string;
}

export const DraftForm = ({ formSubmit }: DraftFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<DraftFormInputs>();

  const { form, label, input, title, description, error, divider, footer, submitBtn } = useDraftFormStyles();

  return (
    <form className={form} onSubmit={handleSubmit((data) => formSubmit(data))}>
      <label className={label} htmlFor="title">
        title
      </label>
      <input
        className={`${input} ${title}`}
        id="title"
        placeholder="Title..."
        {...register('title', {
          required: 'Title is required',
        })}
      />
      {errors.title && (
        <span role="alert" className={error}>
          {errors.title.message}
        </span>
      )}

      <label className={label} htmlFor="description">
        description
      </label>
      <textarea
        className={`${input} ${description}`}
        placeholder="Description..."
        id="description"
        {...register('description', {
          required: 'Description is required',
        })}
      />
      {errors.description && (
        <span role="alert" className={error}>
          {errors.description.message}
        </span>
      )}

      <hr className={divider} />

      <div className={footer}>
        <div />
        <button className={submitBtn} type="submit">
          Submit
        </button>
      </div>
    </form>
  );
};
