import {useState} from 'react';
import React from 'react';





function Modal() {
    const   [model, setModal] = useState(false);
    const toggleModal = () => {
        setModal(!model);
    }
    console.log(model);
    return (



        
        <div>
            <button 
            onClick={toggleModal}
             className="btn-modal">
                Click here!
                </button>
              
              { model && (
              <div className="modal">
              <div onClick={toggleModal} 
              className="overlay"></div>
              <div className="modal-content">
                  <h2>Allano tech</h2>
                  <p>Thank you for contacting us,we shall get back to you soon.</p>
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
