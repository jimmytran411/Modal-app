import { useState } from 'react';
import { v4 } from 'uuid';

import { DraftForm, DraftFormInputs } from './Components/DraftForm';
import { Modal } from './Components/Modal';
import { useSwitch } from './customHooks/useSwitch';
import './App.css';
import { useAppStyles } from './Components/styles/useAppStyles';
import { DraftCard } from './Components/DraftCard';

interface Draft extends DraftFormInputs {
  id: string;
}

function App() {
  const [drafts, setDrafts] = useState<Draft[]>([]);

  const { open, handleClose, handleOpen } = useSwitch();
  const { newDraftBtn, cardGroup } = useAppStyles();

  const handleSubmit = (data: DraftFormInputs) => {
    setDrafts((prev) => [...prev, { ...data, id: v4() }]);
    handleClose();
  };

  const handleRemove = (id: string) => {
    setDrafts((prev) => prev.filter((draft) => draft.id !== id));
  };

  return (
    <div className="App">
      <button className={newDraftBtn} onClick={handleOpen}>
        New Draft +
      </button>
      <Modal open={open} handleClose={handleClose} title="Modal Title">
        <DraftForm formSubmit={handleSubmit} />
      </Modal>
      <div className={cardGroup}>
        {drafts.length > 0 &&
          drafts.map(({ id, title, description }) => (
            <DraftCard key={id} id={id} title={title} description={description} handleRemove={handleRemove} />
          ))}
      </div>
    </div>
  );
}

export default App;
