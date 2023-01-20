import {useState} from 'react';
import React from 'react';





function Modal() {
    const   [modal, setModal] = useState(false);
    const toggleModal = () => {
        setModal(!modal);
    }

    return (



        
        <div>
            <button 
            onClick={toggleModal}
             className="btn-modal">
                hello
                </button>
              
              { Modal && (
              <div className="modal">
              <div onClick={toggleModal} 
              className="overlay"></div>
              <div className="modal-content">
                  <h2>Allano tech</h2>
                  <p>Thank yo for contacting us,we shall get back to you soon.</p>
                      <button
                      className='close-modal'
                      onClick={toggleModal} >close</button>
              </div>

          </div>
              
              
              )}

        </div>
    );
}

export default Modal;
