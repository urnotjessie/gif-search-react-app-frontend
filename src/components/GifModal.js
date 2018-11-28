import React from 'react';
import Modal from 'react-modal';

const GifModal = (props) => {

  if (!props.selectedGif) {
    return <div></div>;
  }

  let source;
  if (props.selectedGif.source) {
    source = <p><strong>Source: </strong><a href={props.selectedGif.source}>{props.selectedGif.source}</a></p>;
  }

  return (
    <Modal isOpen={props.modalIsOpen} onRequestClose={() => props.onRequestClose()}>
      <div className="modal">
        <img src={props.selectedGif.images.original.url} /><br></br>
        {source}
        <button onClick={() => props.onRequestClose()}>close</button>
      </div>
    </Modal>
  )
};

export default GifModal;
