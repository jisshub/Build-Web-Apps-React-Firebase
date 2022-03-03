import '../components/Modal.css';
import ReactDOM from 'react-dom';

export default function Modal({children, handleShowModal}) {
  return (ReactDOM.createPortal((
    <div>
      <div className="modal-backdrop">
          <div className="modal">
              {children}
            <button onClick={handleShowModal}>Close</button>
          </div>
      </div>
    </div>
  ), document.body))
}
