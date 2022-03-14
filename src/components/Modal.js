import '../components/Modal.css';
import ReactDOM from 'react-dom';

export default function Modal({children, handleShowModal, isShowModal}) {
  return (ReactDOM.createPortal((
    <div>
      <div className="modal-backdrop">
          <div className="modal" 
          style={{
            border: "4px solid black",
            borderColor: isShowModal ? "#ff4500" : "#555",
            textAlign: "center",
          }}>
              {children}
            <button onClick={handleShowModal}
            className={isShowModal ? "sales-btn": ""}

            >Close</button>
          </div>
      </div>
    </div>
  ), document.body))
}
