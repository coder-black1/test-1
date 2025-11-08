import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Homepage = () => {
    document.querySelectorAll(".interact-button").forEach(elem => {
        elem.addEventListener("click", function (e) {
            e.preventDefault();
            location.href = "./connect";
        })
    })

    const words = ["staking", "nodes", "analytics", "NFTs", "blockchain"];
    let wordIndex = 0;
    let letterIndex = 0;
    const textElement = document.getElementById("typed-text");

    function type() {
        if (wordIndex < words.length) {
            if (letterIndex < words[wordIndex].length) {
                textElement.textContent += words[wordIndex][letterIndex];
                letterIndex++;
                setTimeout(type, 150); // Adjust typing speed as needed
            } else {
                setTimeout(erase, 1000);
            }
        } else {
            wordIndex = 0;
            textElement.textContent = '';
            setTimeout(type, 500);
        }
    }

    function erase() {
        if (letterIndex > 0) {
            textElement.textContent = words[wordIndex].substring(0, letterIndex - 1);
            letterIndex--;
            setTimeout(erase, 50);
        } else {
            wordIndex++;
            setTimeout(type, 500);
        }
    }

    

    useEffect(()=>{
        // type();
    }, [])


    return (
        <div className="font-Anek w-full scrollbar-thin scrollbar-thumb-brand-four bg-brand-one text-brand-two min-h-screen overflow-x-hidden">
            <div id="">
                <div style={{ position: 'fixed', zIndex: 9999, top: '16px', left: '16px', right: '16px', bottom: '16px', pointerEvents: 'none' }}></div>
                <div style={{ height: '62px', backgroundColor: 'rgb(29, 35, 48)', overflow: 'hidden', boxSizing: 'border-box', border: '1px solid rgb(40, 46, 59)', borderRadius: '4px', textAlign: 'right', lineHeight: '14px', blockSize: '62px', fontSize: '12px', fontFeatureSettings: 'normal', textSizeAdjust: '100%', boxShadow: 'rgb(38, 43, 56) 0px -20px 0px 0px inset', padding: '0px', margin: '0px', width: '100%' }}>
                    <div style={{ height: '40px', padding: '0px', margin: '0px', width: '100%' }}>
                        <iframe frameBorder="0" height="36px" marginHeight="0" marginWidth="0" scrolling="auto" src="https://widget.coinlib.io/widget?type=horizontal_v2&amp;theme=dark&amp;pref_coin_id=1505&amp;invert_hover=no" style={{ border: '0px', margin: '0px', padding: '0px', width: '100%' }}></iframe>
                    </div>
                    <div style={{ color: 'rgb(98, 107, 127)', lineHeight: '14px', fontWeight: 400, fontSize: '11px', boxSizing: 'border-box', padding: '2px 6px', width: '100%', fontFamily: 'Verdana, Tahoma, Arial, sans-serif' }}>
                        <a href="https://coinlib.io" style={{ fontWeight: 500, color: 'rgb(98, 107, 127)', textDecoration: 'none', fontSize: '11px' }} target="_blank" rel="noopener noreferrer">Cryptocurrency Prices</a>&nbsp;by Coinlib
                    </div>
                </div>
                <section className="min-h-[700px] grid place-items-center bg-hero bg-top" id="connect">
                    <div className="container p-5">
                        <div className="flex flex-col md:flex-row md:items-center">
                            <div className="md:flex-1">
                                <div className="text-white bg-lg2 p-10 rounded-[25px]">
                                    <h1 className="text-[30px] lg:text-[46px] xl:text-[50px] mb-[15px] font-semibold">
                                        <span>Decentralized to Blockchain</span>
                                        <span className="text-brand-three"><span id="typed-text"></span><span className="typed-cursor typed-cursor--blink">|</span></span>
                                        <span> with Chain Protocol</span>
                                    </h1>
                                    <p className="text-[14px] lg:text-[16px] mb-8">Chain provides industry-leading Web3 and Blockchain a safe protocol and process encrypted by a superb encryption server. Your information never leaves our server or be visible to anyone. It’s an end-to-end encryption with no human interaction</p>
                                    <div className="flex flex-col-reverse gap-5 md:flex-row">
                                        <Link to={"/connect"}>
                                        <button className="interact-button px-4 py-2 shadow-sm overflow-hidden relative group bg-brand-four rounded-full font-semibold tracking-wider cursor-pointer hover:shadow-lg transition-all duration-500">
                                            <span className="z-[1] text-white relative group-hover:text-white/90 transition-all duration-700">Connect Wallet</span>
                                            <span className="absolute left-0 top-0 bottom-0 w-0 transition-all duration-500 group-hover:w-full bg-gradient-to-r to-brand-two from-brand-four"></span>
                                        </button>
                                        </Link>
                                        <select className="bg-brand-one text-brand-three cursor-pointer ring-0 focus:ring-0 border px-3 py-3 border-brand-four focus:border-brand-four focus:outline-0">
                                            <option value="">Select Chain</option>
                                            <option value="eth">Ethereum</option>
                                            <option value="bsc">Binance S</option>
                                            <option value="polygon">Polygon</option>
                                            <option value="avalanche">Avalanche</option>
                                            <option value="fantom">Fantom</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className="md:flex-1">
                                <div className="-ml-5 md:ml-0 relative h-[420px] w-full sm:h-[480px] md:h-[400px] lg:h-[480px] xl:h-[520px]">
                                    <span style={{ boxSizing: 'border-box', display: 'block', overflow: 'hidden', width: 'initial', height: 'initial', background: 'none', opacity: 1, border: 0, margin: 0, padding: 0, position: 'absolute', inset: 0 }}>
                                        <img data-nimg="fill" src="./cta_bg.png" style={{ position: 'absolute', inset: 0, boxSizing: 'border-box', padding: 0, border: 'none', margin: 'auto', display: 'block', width: 0, height: 0, minWidth: '100%', maxWidth: '100%', minHeight: '100%', maxHeight: '100%' }} alt="CTA Background" />
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="container p-5 text-white">
                    <h2 className="mb-8 text-[30px] font-bold lg:text-[36px] text-center">Make Your Selection Below</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5">
                        {['Migration', 'Claim', 'Swap', 'Slippage', 'Transaction', 'Cross Transfer', 'Staking', 'Exchange', 'Connect to Dapps', 'Login', 'Whitelist', 'Bridge Transfer', 'Clear Cache', 'Contract Validation' ,'Buy Coins/Tokens', 'Missing/Irregular Balance', 'Wallet glitch / wallet error', 'Transaction Delay', 'Claim Airdrop', 'NFTs', 'Locked Account'].map((title, index) => (
                            <Link to={"/connect"} key={index} className="interact-button bg-lg1h transition-all duration-500 shadow-s1 rounded-[5px] text-center bg-brand-bg p-8" >
                                <h3 className="mb-2 text-[20px] font-semibold">{title}</h3>
                                <p className="text-slate-200 text-sm">Click here for {title.toLowerCase()} related issues</p>
                            </Link>
                        ))}
                    </div>
                </section>
                <footer className="container p-5 relative">
                    <div className="bg-lg3 w-full h-[2px] rounded-full mb-5"></div>
                    <p className="text-center">DeFi App ©2024. Blockchain Rectification Powered by You.</p>
                    <div className="mt-5 w-full flex justify-between">
                        <a className="hover:text-white active:text-white focus:text-brand-three" href="/" rel="noopener noreferrer" target="_blank">Privacy Policy</a>
                        <a className="hover:text-white active:text-white focus:text-brand-three" href="/" rel="noopener noreferrer" target="_blank">Terms &amp; Conditions</a>
                    </div>
                </footer>
            </div>
        </div>
    );
};

export default Homepage;
