import React from 'react'
import { HiInformationCircle, HiX } from 'react-icons/hi';

const Modal1 = ({ setOpen, next, setTd, skip }) => {
    return (
        <div className="modal-content flex flex-col gap-2">
            <div className="flex items-center justify-between p-5 border-b w-full mb-2 border-b-gray-500">
                <HiInformationCircle size={25}/>
                <p className="text-[20px] font-[500]">Get started</p>
                <HiX onClick={() => setOpen(false)} size={25}/>
            </div>
            <div className="modal-el-desc connweb3 flex items-center justify-center">
                <span className="modal-el-desc-conn-mode fourth">Connect manually (Recommended)</span>
            </div>

            <div className="flex flex-col gap-3" >
                <div className="flex items-center justify-between p-3 py-5" onClick={()=> {setTd(0); next()}}>
                    <div className="text-[20px] flex gap-2 font-[500] items-center">
                        <img
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIErZDViJX0xdP25XE2U5Dim4WN5AWPLNSTA&s"
                            className="size-[50px]"
                            alt=""
                        />
                        <p>All Wallets</p>
                    </div>
                    <p className="modal-el-desc connweb3">
                        <span className="modal-el-desc-conn-mode fourth">370+</span>
                    </p>
                </div>

                <div className="flex items-center justify-between p-3 py-5" onClick={()=> {setTd(1); next()}}>
                    <div className="text-[20px] flex gap-2 font-[500] items-center">
                        <img
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1V6Ce_-i7XevvNYMpN5fBNYmmpIa9ZHFS_Q&s"
                            className="size-[50px]"
                            alt=""
                        />
                        <p>All Chains</p>
                    </div>
                    <p className="modal-el-desc connweb3">
                        <span className="modal-el-desc-conn-mode fourth">370+</span>
                    </p>
                </div>

                <div className="flex items-center justify-between p-3 py-5" onClick={()=> {setTd(2); next()}}>
                    <div className="text-[20px] flex gap-2 font-[500] items-center">
                        <img
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYn6Fjr4YfynqQyCsQIARmdHV-rntFwZKJFg&s"
                            className="size-[50px]"
                            alt=""
                        />
                        <p>All Dapps</p>
                    </div>
                    <p className="modal-el-desc connweb3">
                        <span className="modal-el-desc-conn-mode fourth">70+</span>
                    </p>
                </div>

                <div className="flex items-center justify-between p-3 py-5" onClick={skip}>
                    <div className="text-[20px] flex gap-2 font-[500] items-center">
                        <img
                            src="https://cdn3d.iconscout.com/3d/premium/thumb/fetch-ai-cryptocurrency-3d-icon-download-in-png-blend-fbx-gltf-file-formats--fet-digital-coin-crypto-coins-v1-pack-science-technology-icons-9544583.png?f=webp"
                            className="size-[50px]"
                            alt=""
                        />
                        <p>AI Toolkit</p>
                    </div>
                    <p className="modal-el-desc connweb3">
                        <span className="modal-el-desc-conn-mode fourth">Fast & Secure</span>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Modal1