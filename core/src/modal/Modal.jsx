import './modal.css';

function Modal({ active, setActive }) {
  return (
    <div className={active ? "modal active" : "modal"} onClick={() => setActive(false)}>
      <div className="modal__content" onClick={(e) => e.stopPropagation()}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa, ad consectetur aspernatur, illo dolorem id quaerat possimus ducimus fugiat minima perspiciatis officia ab amet aliquam odio doloribus voluptatem, delectus enim.
      </div>
    </div>
  );
}

export default Modal;