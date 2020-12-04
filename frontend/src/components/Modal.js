import React, { useCallback } from 'react';
import { Button, Modal as ModalBts } from 'react-bootstrap'

const Modal = ({
  id, title, children, buttonModal, btnFooter, onHide, show, onSubmit, onlySubmit, onClickCancel, textCancel, // btnFooter -    Caso precise criar um botão com algum padrão específico
}) => {
  const onClickSubmit = useCallback(() => {
    if (onSubmit) {
      onSubmit();
      if (onlySubmit) return;
    }
    if (onHide) onHide();
  }, [onHide, onSubmit, onlySubmit]);

  return (
    <ModalBts
      style={{ opacity: 1 }}
      show={show}
      onHide={onHide}
      backdrop="static"
      keyboard={false}
    >

      <ModalBts.Header closeButton>
        <ModalBts.Title>{title}</ModalBts.Title>
      </ModalBts.Header>
      <ModalBts.Body>{children}</ModalBts.Body>
      <ModalBts.Footer>
        {btnFooter ? (
          <div>
            {btnFooter}
          </div>
        ) : (
          <>
            {onClickCancel && (
              <Button variant="danger" onClick={onClickCancel}>
                {textCancel}
              </Button>
            )}
            <Button variant="primary" onClick={onClickSubmit}>
              {buttonModal}
            </Button>
          </>
        )}
      </ModalBts.Footer>
    </ModalBts>
  );
}


export default Modal;
