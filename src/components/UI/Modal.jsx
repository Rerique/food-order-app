import ReactDOM from 'react-dom';
import styles from './Modal.module.css';

function Backdrop({ onHideCart }) {
  return (
    // eslint-disable-next-line jsx-a11y/no-static-element-interactions
    <div className={styles.backdrop} onClick={onHideCart} aria-hidden='true' />
  );
}

function ModalOverlay({ children }) {
  return (
    <div className={styles.modal}>
      <div className={styles.content}>{children}</div>
    </div>
  );
}

const portalElement = document.getElementById('overlay');

export default function Modal({ children, onHideCart }) {
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop onHideCart={onHideCart} />,
        portalElement,
      )}
      {ReactDOM.createPortal(
        <ModalOverlay>{children}</ModalOverlay>,
        portalElement,
      )}
    </>
  );
}
