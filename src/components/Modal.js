import '../components/Modal.css';

export default function Modal({children, handleShowModal}) {
  return (
    <div>
      <div className="modal-backdrop">
          <div className="modal">
              {children}
            <button onClick={handleShowModal}>Close</button>
          </div>
      </div>
    </div>
  )
}
