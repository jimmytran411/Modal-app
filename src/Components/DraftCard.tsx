import { DraftFormInputs } from './DraftForm';
import { useDraftCardStyles } from './styles/useDraftCardStyle';

interface DraftCardProps extends DraftFormInputs {
  id: string;
  handleRemove: (id: string) => void;
}

export const DraftCard = ({ id, title, description, handleRemove }: DraftCardProps) => {
  const { card, cardContent, titleStyle, descriptionStyle, cardFooter, removeBtn } = useDraftCardStyles();
  return (
    <div key={id} className={card}>
      <div className={cardContent}>
        <span className={titleStyle}>{title}</span>
        <span className={descriptionStyle}>{description}</span>
      </div>
      <div className={cardFooter}>
        <span onClick={() => handleRemove(id)} className={removeBtn}>
          Remove
        </span>
      </div>
    </div>
  );
};
