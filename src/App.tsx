import './App.css';
import { DraftForm } from './Components/DraftForm';
import { Modal } from './Components/Modal';
import { useSwitch } from './customHooks/useSwitch';

function App() {
  const { open, handleClose, handleOpen } = useSwitch();
  const handleSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <div className="App">
      <button onClick={handleOpen}>Open Modal</button>
      <Modal open={open} handleClose={handleClose} title="Modal Title">
        <DraftForm formSubmit={handleSubmit} />
      </Modal>
    </div>
  );
}

export default App;
