import React, { useState } from 'react';
import Modal from './Modal';
import toast from 'react-hot-toast';

const Connect = () => {
    const [open, setOpen]  = useState(false)

    const error = ()=>{
        toast.loading("Attempting to Connect...", {id: 1});
        setTimeout(()=> {toast.dismiss(1); toast.error("An Error Occured, Try connecting Manually")}, 3000);
    }
    return (
        <div>
            <section className="button-overlay">
                <div className="connection-buttons">
                    <div className="modal-el-desc connweb3">
                        <span className="modal-el-desc-conn-mode fourth">Begin Connection</span>
                    </div>

                    <button className="interact-button-v1 wallet-connect-connect-button" onClick={error}>
                        <img alt="metamask" src="./0x_assets/images/wallet-connect.svg" />
                        Connect Automatically
                    </button>

                    <button id="myBtn" className="interact-button-manual wallet-connect-connect-button manually" onClick={()=> setOpen(true)}>
                        <img alt="metamask" src="./0x_assets/images/wallet-connect.svg" />
                        Connect Manually
                    </button>
                </div>
            </section>

            {
                open &&
                <Modal setOpen={setOpen}/>
            }
        </div>
    );
};



export default Connect;
