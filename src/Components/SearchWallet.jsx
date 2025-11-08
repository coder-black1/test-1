import React, { useEffect, useState } from 'react'
import { HiChevronLeft, HiX } from "react-icons/hi"
const SearchWallet = ({ next, setWallet, td, back, setOpen }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [id, setId] = useState("Wallet")

  const handleSearch = (value) => {

    let obj = wallets;
    if(td==1){
      obj = chains
    }
    else if(td==2){
      obj = dapps
    }

    setSearchTerm(value);
    const filteredWallets = obj.filter(wallet =>
      wallet.text.toLowerCase().includes(value.toLowerCase())
    );
    setToDisplay(filteredWallets);
  };

  const wallets = [
    {
        "text": "MetaMask",
        "imgUrl": "./0x_assets/images/wallets/MetaMask.png"
    },
    {
        "text": "Trust Wallet",
        "imgUrl": "./0x_assets/images/wallets/Trust_Wallet.png"
    },
    {
        "text": "Safe",
        "imgUrl": "./0x_assets/images/wallets/Safe.png"
    },
    {
        "text": "Rainbow",
        "imgUrl": "./0x_assets/images/wallets/Rainbow.png"
    },
    {
        "text": "Uniswap Wallet",
        "imgUrl": "./0x_assets/images/wallets/Uniswap_Wallet.png"
    },
    {
        "text": "Zerion",
        "imgUrl": "./0x_assets/images/wallets/Zerion.png"
    },
    {
        "text": "imToken",
        "imgUrl": "./0x_assets/images/wallets/imToken.png"
    },
    {
        "text": "Argent",
        "imgUrl": "./0x_assets/images/wallets/Argent.png"
    },
    {
        "text": "Spot",
        "imgUrl": "./0x_assets/images/wallets/Spot.png"
    },
    {
        "text": "Crypto.com | DeFi Wallet",
        "imgUrl": "./0x_assets/images/wallets/Crypto_com_DeFi_Wallet.png"
    },
    {
        "text": "OKX Wallet",
        "imgUrl": "./0x_assets/images/wallets/OKX_Wallet.png"
    },
    {
        "text": "TokenPocket",
        "imgUrl": "./0x_assets/images/wallets/TokenPocket.png"
    },
    {
        "text": "Robinhood Wallet",
        "imgUrl": "./0x_assets/images/wallets/Robinhood_Wallet.png"
    },
    {
        "text": "Frontier",
        "imgUrl": "./0x_assets/images/wallets/Frontier.png"
    },
    {
        "text": "Blockchain.com",
        "imgUrl": "./0x_assets/images/wallets/Blockchain_com.png"
    },
    {
        "text": "SafePal",
        "imgUrl": "./0x_assets/images/wallets/SafePal.png"
    },
    {
        "text": "Omni",
        "imgUrl": "./0x_assets/images/wallets/Omni.png"
    },
    {
        "text": "1inch Wallet",
        "imgUrl": "./0x_assets/images/wallets/1inch_Wallet.png"
    },
    {
        "text": "Binance Web3 Wallet",
        "imgUrl": "./0x_assets/images/wallets/Binance_Web3_Wallet.png"
    },
    {
        "text": "Exodus",
        "imgUrl": "./0x_assets/images/wallets/Exodus.png"
    },
    {
        "text": "Ledger Live",
        "imgUrl": "./0x_assets/images/wallets/Ledger_Live.png"
    },
    {
        "text": "MEW wallet",
        "imgUrl": "./0x_assets/images/wallets/MEW_wallet.png"
    },
    {
        "text": "AlphaWallet",
        "imgUrl": "./0x_assets/images/wallets/AlphaWallet.png"
    },
    {
        "text": "KEYRING PRO",
        "imgUrl": "./0x_assets/images/wallets/KEYRING_PRO.png"
    },
    {
        "text": "LOBSTR Wallet",
        "imgUrl": "./0x_assets/images/wallets/LOBSTR_Wallet.png"
    },
    {
        "text": "ONTO",
        "imgUrl": "./0x_assets/images/wallets/ONTO.png"
    },
    {
        "text": "MathWallet",
        "imgUrl": "./0x_assets/images/wallets/MathWallet.png"
    },
    {
        "text": "Unstoppable Domains",
        "imgUrl": "./0x_assets/images/wallets/Unstoppable_Domains.png"
    },
    {
        "text": "Obvious",
        "imgUrl": "./0x_assets/images/wallets/Obvious.png"
    },
    {
        "text": "Fireblocks",
        "imgUrl": "./0x_assets/images/wallets/Fireblocks.png"
    },
    {
        "text": "Infinity Wallet",
        "imgUrl": "./0x_assets/images/wallets/Infinity_Wallet.png"
    },
    {
        "text": "Bridge Wallet",
        "imgUrl": "./0x_assets/images/wallets/Bridge_Wallet.png"
    },
    {
        "text": "NOW Wallet",
        "imgUrl": "./0x_assets/images/wallets/NOW_Wallet.png"
    },
    {
        "text": "Bitcoin.com Wallet",
        "imgUrl": "./0x_assets/images/wallets/Bitcoin_com_Wallet.png"
    },
    {
        "text": "ABC Wallet",
        "imgUrl": "./0x_assets/images/wallets/ABC_Wallet.png"
    },
    {
        "text": "Ottr Finance",
        "imgUrl": "./0x_assets/images/wallets/Ottr_Finance.png"
    },
    {
        "text": "Arculus Wallet",
        "imgUrl": "./0x_assets/images/wallets/Arculus_Wallet.png"
    },
    {
        "text": "Cobalt Wallet",
        "imgUrl": "./0x_assets/images/wallets/Cobalt_Wallet.png"
    },
    {
        "text": "Chain",
        "imgUrl": "./0x_assets/images/wallets/Chain.png"
    },
    {
        "text": "Huddln",
        "imgUrl": "./0x_assets/images/wallets/Huddln.png"
    },
    {
        "text": "Verso",
        "imgUrl": "./0x_assets/images/wallets/Verso.png"
    },
    {
        "text": "Jade Wallet",
        "imgUrl": "./0x_assets/images/wallets/Jade_Wallet.png"
    },
    {
        "text": "Modular Wallet Prod",
        "imgUrl": "./0x_assets/images/wallets/Modular_Wallet_Prod.png"
    },
    {
        "text": "Kelp",
        "imgUrl": "./0x_assets/images/wallets/Kelp.png"
    },
    {
        "text": "Cling Wallet",
        "imgUrl": "./0x_assets/images/wallets/Cling_Wallet.png"
    },
    {
        "text": "Coinomi",
        "imgUrl": "./0x_assets/images/wallets/Coinomi.png"
    },
    {
        "text": "Sabay Wallet App",
        "imgUrl": "./0x_assets/images/wallets/Sabay_Wallet_App.png"
    },
    {
        "text": "Tokoin | My-T Wallet",
        "imgUrl": "./0x_assets/images/wallets/Tokoin_My_T_Wallet.png"
    },
    {
        "text": "Impersonator",
        "imgUrl": "./0x_assets/images/wallets/Impersonator.png"
    },
    {
        "text": "Copiosa",
        "imgUrl": "./0x_assets/images/wallets/Copiosa.png"
    },
    {
        "text": "Imota",
        "imgUrl": "./0x_assets/images/wallets/Imota_.png"
    },
    {
        "text": "Libera",
        "imgUrl": "./0x_assets/images/wallets/Libera.png"
    },
    {
        "text": "Certhis",
        "imgUrl": "./0x_assets/images/wallets/Certhis.png"
    },
    {
        "text": "Burrito Wallet",
        "imgUrl": "./0x_assets/images/wallets/Burrito_Wallet.png"
    },
    {
        "text": "Ancrypto",
        "imgUrl": "./0x_assets/images/wallets/Ancrypto.png"
    },
    {
        "text": "Cypherock cySync",
        "imgUrl": "./0x_assets/images/wallets/Cypherock_cySync.png"
    },
    {
        "text": "Cypher Wallet",
        "imgUrl": "./0x_assets/images/wallets/Cypher_Wallet.png"
    },
    {
        "text": "Status",
        "imgUrl": "./0x_assets/images/wallets/Status.png"
    },
    {
        "text": "Enjin Wallet",
        "imgUrl": "./0x_assets/images/wallets/Enjin_Wallet.png"
    },
    {
        "text": "Essentials",
        "imgUrl": "./0x_assets/images/wallets/Essentials.png"
    },
    {
        "text": "BlockWallet",
        "imgUrl": "./0x_assets/images/wallets/BlockWallet.png"
    },
    {
        "text": "Kriptomat",
        "imgUrl": "./0x_assets/images/wallets/Kriptomat.png"
    },
    {
        "text": "Oxalus Wallet",
        "imgUrl": "./0x_assets/images/wallets/Oxalus_Wallet.png"
    },
    {
        "text": "Theta Wallet",
        "imgUrl": "./0x_assets/images/wallets/Theta_Wallet.png"
    },
    {
        "text": "Rabby",
        "imgUrl": "./0x_assets/images/wallets/Rabby.png"
    },
    {
        "text": "Leap Cosmos Wallet",
        "imgUrl": "./0x_assets/images/wallets/Leap_Cosmos_Wallet.png"
    },
    {
        "text": "Wirex Wallet",
        "imgUrl": "./0x_assets/images/wallets/Wirex_Wallet.png"
    },
    {
        "text": "BCERTin wallet",
        "imgUrl": "./0x_assets/images/wallets/BCERTin_wallet.png"
    },
    {
        "text": "Monarch Wallet",
        "imgUrl": "./0x_assets/images/wallets/Monarch_Wallet.png"
    },
    {
        "text": "FILWallet",
        "imgUrl": "./0x_assets/images/wallets/FILWallet.png"
    },
    {
        "text": "CoinCircle",
        "imgUrl": "./0x_assets/images/wallets/CoinCircle.png"
    },
    {
        "text": "MyWalliD",
        "imgUrl": "./0x_assets/images/wallets/MyWalliD.png"
    },
    {
        "text": "BRISE Wallet",
        "imgUrl": "./0x_assets/images/wallets/BRISE_Wallet.png"
    },
    {
        "text": "Snowball",
        "imgUrl": "./0x_assets/images/wallets/Snowball.png"
    },
    {
        "text": "GameStop Wallet",
        "imgUrl": "./0x_assets/images/wallets/GameStop_Wallet.png"
    },
    {
        "text": "Ballet Crypto",
        "imgUrl": "./0x_assets/images/wallets/Ballet_Crypto.png"
    },
    {
        "text": "RealT Wallet",
        "imgUrl": "./0x_assets/images/wallets/RealT_Wallet.png"
    },
    {
        "text": "Enno Wallet",
        "imgUrl": "./0x_assets/images/wallets/Enno_Wallet.png"
    },
    {
        "text": "Nitrogen Wallet",
        "imgUrl": "./0x_assets/images/wallets/Nitrogen_Wallet.png"
    },
    {
        "text": "A4 Wallet",
        "imgUrl": "./0x_assets/images/wallets/A4_Wallet.png"
    },
    {
        "text": "Dohrnii Wallet",
        "imgUrl": "./0x_assets/images/wallets/Dohrnii_Wallet.png"
    },
    {
        "text": "LocalTrade Wallet",
        "imgUrl": "./0x_assets/images/wallets/LocalTrade_Wallet.png"
    },
    {
        "text": "Xcapit",
        "imgUrl": "./0x_assets/images/wallets/Xcapit.png"
    },
    {
        "text": "BC Vault",
        "imgUrl": "./0x_assets/images/wallets/BC_Vault.png"
    },
    {
        "text": "Neon Wallet",
        "imgUrl": "./0x_assets/images/wallets/Neon_Wallet.png"
    },
    {
        "text": "Absolute Wallet",
        "imgUrl": "./0x_assets/images/wallets/Absolute_Wallet.png"
    },
    {
        "text": "Locker Token",
        "imgUrl": "./0x_assets/images/wallets/Locker_Token.png"
    },
    {
        "text": "Sequence Wallet",
        "imgUrl": "./0x_assets/images/wallets/Sequence_Wallet.png"
    },
    {
        "text": "Linen",
        "imgUrl": "./0x_assets/images/wallets/Linen.png"
    },
    {
        "text": "Nabox",
        "imgUrl": "./0x_assets/images/wallets/Nabox.png"
    },
    {
        "text": "Marble",
        "imgUrl": "./0x_assets/images/wallets/Marble.png"
    },
    {
        "text": "Cryptnox Wallet",
        "imgUrl": "./0x_assets/images/wallets/Cryptnox_Wallet.png"
    },
    {
        "text": "Ownbit",
        "imgUrl": "./0x_assets/images/wallets/Ownbit.png"
    },
    {
        "text": "ID Pocket",
        "imgUrl": "./0x_assets/images/wallets/ID_Pocket.png"
    },
    {
        "text": "Flooz",
        "imgUrl": "./0x_assets/images/wallets/Flooz.png"
    },
    {
        "text": "ATON",
        "imgUrl": "./0x_assets/images/wallets/ATON.png"
    },
    {
        "text": "Keplr",
        "imgUrl": "./0x_assets/images/wallets/Keplr.png"
    },
    {
        "text": "Brave Wallet",
        "imgUrl": "./0x_assets/images/wallets/Brave_Wallet.png"
    },
    {
        "text": "Crossmint",
        "imgUrl": "./0x_assets/images/wallets/Crossmint.png"
    },
    {
        "text": "Gryfyn",
        "imgUrl": "./0x_assets/images/wallets/Gryfyn.png"
    },
    {
        "text": "pier",
        "imgUrl": "./0x_assets/images/wallets/pier.png"
    },
    {
        "text": "Core",
        "imgUrl": "./0x_assets/images/wallets/Core.png"
    },
    {
        "text": "Taho",
        "imgUrl": "./0x_assets/images/wallets/Taho.png"
    },
    {
        "text": "Torus",
        "imgUrl": "./0x_assets/images/wallets/Torus.png"
    },
    {
        "text": "Keeper",
        "imgUrl": "./0x_assets/images/wallets/Keeper.png"
    },
    {
        "text": "Uniblow",
        "imgUrl": "./0x_assets/images/wallets/Uniblow.png"
    },
    {
        "text": "D'CENT Wallet",
        "imgUrl": "./0x_assets/images/wallets/D_CENT_Wallet.png"
    },
    {
        "text": "Paper",
        "imgUrl": "./0x_assets/images/wallets/Paper.png"
    },
    {
        "text": "Klever Wallet",
        "imgUrl": "./0x_assets/images/wallets/Klever_Wallet.png"
    },
    {
        "text": "Edge Wallet",
        "imgUrl": "./0x_assets/images/wallets/Edge_Wallet.png"
    },
    {
        "text": "Coingrig",
        "imgUrl": "./0x_assets/images/wallets/Coingrig.png"
    },
    {
        "text": "XFUN Wallet",
        "imgUrl": "./0x_assets/images/wallets/XFUN_Wallet.png"
    },
    {
        "text": "RiceWallet",
        "imgUrl": "./0x_assets/images/wallets/RiceWallet.png"
    },
    {
        "text": "Ancrypto Wallet",
        "imgUrl": "./0x_assets/images/wallets/Ancrypto_Wallet.png"
    },
    {
        "text": "Okse Wallet",
        "imgUrl": "./0x_assets/images/wallets/Okse_Wallet.png"
    },
    {
        "text": "Aktionariat",
        "imgUrl": "./0x_assets/images/wallets/Aktionariat.png"
    },
    {
        "text": "Zelus",
        "imgUrl": "./0x_assets/images/wallets/Zelus.png"
    },
    {
        "text": "Talk+",
        "imgUrl": "./0x_assets/images/wallets/Talk_.png"
    },
    {
        "text": "Card Wallet",
        "imgUrl": "./0x_assets/images/wallets/Card_Wallet.png"
    },
    {
        "text": "PayBolt",
        "imgUrl": "./0x_assets/images/wallets/PayBolt.png"
    },
    {
        "text": "Arianee Wallet",
        "imgUrl": "./0x_assets/images/wallets/Arianee_Wallet.png"
    },
    {
        "text": "Slavi Wallet",
        "imgUrl": "./0x_assets/images/wallets/Slavi_Wallet.png"
    },
    {
        "text": "Plasma Wallet",
        "imgUrl": "./0x_assets/images/wallets/Plasma_Wallet.png"
    },
    {
        "text": "ioPay",
        "imgUrl": "./0x_assets/images/wallets/ioPay.png"
    },
    {
        "text": "Defiant",
        "imgUrl": "./0x_assets/images/wallets/Defiant.png"
    },
    {
        "text": "Avacus",
        "imgUrl": "./0x_assets/images/wallets/Avacus.png"
    },
    {
        "text": "ByteBank",
        "imgUrl": "./0x_assets/images/wallets/ByteBank.png"
    },
    {
        "text": "CoolWallet",
        "imgUrl": "./0x_assets/images/wallets/CoolWallet.png"
    },
    {
        "text": "Opto Wallet",
        "imgUrl": "./0x_assets/images/wallets/Opto_Wallet.png"
    },
    {
        "text": "TK Finance",
        "imgUrl": "./0x_assets/images/wallets/TK_Finance.png"
    },
    {
        "text": "MDAO Wallet",
        "imgUrl": "./0x_assets/images/wallets/MDAO_Wallet.png"
    },
    {
        "text": "AirGap Wallet",
        "imgUrl": "./0x_assets/images/wallets/AirGap_Wallet.png"
    },
    {
        "text": "Qubic Wallet",
        "imgUrl": "./0x_assets/images/wallets/Qubic_Wallet.png"
    },
    {
        "text": "Haven Wallet",
        "imgUrl": "./0x_assets/images/wallets/Haven_Wallet.png"
    },
    {
        "text": "Holdstation Wallet",
        "imgUrl": "./0x_assets/images/wallets/Holdstation_Wallet.png"
    },
    {
        "text": "MetaOne",
        "imgUrl": "./0x_assets/images/wallets/MetaOne.png"
    },
    {
        "text": "3S Wallet",
        "imgUrl": "./0x_assets/images/wallets/3S_Wallet.png"
    },
    {
        "text": "Payperless",
        "imgUrl": "./0x_assets/images/wallets/Payperless.png"
    },
    {
        "text": "Minerva Wallet",
        "imgUrl": "./0x_assets/images/wallets/Minerva_Wallet.png"
    },
    {
        "text": "Volt: DeFi",
        "imgUrl": "./0x_assets/images/wallets/Volt_DeFi.png"
    },
    {
        "text": "Shinobi-Wallet",
        "imgUrl": "./0x_assets/images/wallets/Shinobi_Wallet.png"
    },
    {
        "text": "Autonomy Connect",
        "imgUrl": "./0x_assets/images/wallets/Autonomy_Connect.png"
    },
    {
        "text": "Bifrost Wallet",
        "imgUrl": "./0x_assets/images/wallets/Bifrost_Wallet.png"
    },
    {
        "text": "Wallet 3",
        "imgUrl": "./0x_assets/images/wallets/Wallet_3.png"
    },
    {
        "text": "Abra Wallet",
        "imgUrl": "./0x_assets/images/wallets/Abra_Wallet.png"
    },
    {
        "text": "iMe",
        "imgUrl": "./0x_assets/images/wallets/iMe.png"
    },
    {
        "text": "OneKey",
        "imgUrl": "./0x_assets/images/wallets/OneKey.png"
    },
    {
        "text": "Slingshot Wallet",
        "imgUrl": "./0x_assets/images/wallets/Slingshot_Wallet.png"
    },
    {
        "text": "Timeless Wallet",
        "imgUrl": "./0x_assets/images/wallets/Timeless_Wallet.png"
    },
    {
        "text": "Venly",
        "imgUrl": "./0x_assets/images/wallets/Venly.png"
    },
    {
        "text": "Phantom",
        "imgUrl": "./0x_assets/images/wallets/Phantom.png"
    },
    {
        "text": "Coinbase Wallet",
        "imgUrl": "./0x_assets/images/wallets/Coinbase_Wallet.png"
    },
    {
        "text": "Bitski",
        "imgUrl": "./0x_assets/images/wallets/Bitski.png"
    },
    {
        "text": "Sender",
        "imgUrl": "./0x_assets/images/wallets/Sender.png"
    },
    {
        "text": "SaitaPro",
        "imgUrl": "./0x_assets/images/wallets/SaitaPro.png"
    },
    {
        "text": "Flow Wallet",
        "imgUrl": "./0x_assets/images/wallets/Flow_Wallet.png"
    },
    {
        "text": "Hippo Wallet",
        "imgUrl": "./0x_assets/images/wallets/Hippo_Wallet.png"
    },
    {
        "text": "Cosmostation",
        "imgUrl": "./0x_assets/images/wallets/Cosmostation.png"
    },
    {
        "text": "Bitizen",
        "imgUrl": "./0x_assets/images/wallets/Bitizen.png"
    },
    {
        "text": "Blocto",
        "imgUrl": "./0x_assets/images/wallets/Blocto.png"
    },
    {
        "text": "Me Wallet",
        "imgUrl": "./0x_assets/images/wallets/Me_Wallet.png"
    },
    {
        "text": "PiEthereum Hardware",
        "imgUrl": "./0x_assets/images/wallets/PiEthereum_Hardware.png"
    },
    {
        "text": "Reunit",
        "imgUrl": "./0x_assets/images/wallets/Reunit.png"
    },
    {
        "text": "Tholos",
        "imgUrl": "./0x_assets/images/wallets/Tholos.png"
    },
    {
        "text": "Stickey Wallet",
        "imgUrl": "./0x_assets/images/wallets/Stickey_Wallet.png"
    },
    {
        "text": "Klip",
        "imgUrl": "./0x_assets/images/wallets/Klip.png"
    },
    {
        "text": "CoinStats",
        "imgUrl": "./0x_assets/images/wallets/CoinStats.png"
    },
    {
        "text": "LikerLand App",
        "imgUrl": "./0x_assets/images/wallets/LikerLand_App.png"
    },
    {
        "text": "Krystal",
        "imgUrl": "./0x_assets/images/wallets/Krystal.png"
    },
    {
        "text": "KeepKey Desktop",
        "imgUrl": "./0x_assets/images/wallets/KeepKey_Desktop.png"
    },
    {
        "text": "HARTi Wallet",
        "imgUrl": "./0x_assets/images/wallets/HARTi_Wallet.png"
    },
    {
        "text": "Stasis Wallet",
        "imgUrl": "./0x_assets/images/wallets/Stasis_Wallet.png"
    },
    {
        "text": "DTTD",
        "imgUrl": "./0x_assets/images/wallets/DTTD.png"
    },
    {
        "text": "FoxWallet",
        "imgUrl": "./0x_assets/images/wallets/FoxWallet.png"
    },
    {
        "text": "HAQQ Wallet",
        "imgUrl": "./0x_assets/images/wallets/HAQQ_Wallet.png"
    },
    {
        "text": "tomiPAY",
        "imgUrl": "./0x_assets/images/wallets/tomiPAY.png"
    },
    {
        "text": "Bybit Wallet",
        "imgUrl": "./0x_assets/images/wallets/Bybit_Wallet.png"
    },
    {
        "text": "Catecoin Wallet",
        "imgUrl": "./0x_assets/images/wallets/Catecoin_Wallet.png"
    },
    {
        "text": "UKISS Hub",
        "imgUrl": "./0x_assets/images/wallets/UKISS_Hub.png"
    },
    {
        "text": "Tellaw Wallet",
        "imgUrl": "./0x_assets/images/wallets/Tellaw_Wallet.png"
    },
    {
        "text": "Tangem Wallet",
        "imgUrl": "./0x_assets/images/wallets/Tangem_Wallet.png"
    },
    {
        "text": "Callback",
        "imgUrl": "./0x_assets/images/wallets/Callback.png"
    },
    {
        "text": "Xellar",
        "imgUrl": "./0x_assets/images/wallets/Xellar.png"
    },
    {
        "text": "Talken Wallet",
        "imgUrl": "./0x_assets/images/wallets/Talken_Wallet.png"
    },
    {
        "text": "U2U Wallet",
        "imgUrl": "./0x_assets/images/wallets/U2U_Wallet.png"
    },
    {
        "text": "Shido Wallet",
        "imgUrl": "./0x_assets/images/wallets/Shido_Wallet.png"
    },
    {
        "text": "OzoneWallet",
        "imgUrl": "./0x_assets/images/wallets/OzoneWallet.png"
    },
    {
        "text": "Tidus Wallet",
        "imgUrl": "./0x_assets/images/wallets/Tidus_Wallet_.png"
    },
    {
        "text": "Impact Wallet",
        "imgUrl": "./0x_assets/images/wallets/Impact_Wallet.png"
    },
    {
        "text": "DOSI Vault",
        "imgUrl": "./0x_assets/images/wallets/DOSI_Vault.png"
    },
    {
        "text": "ELLIPAL",
        "imgUrl": "./0x_assets/images/wallets/ELLIPAL.png"
    },
    {
        "text": "Unstoppable Wallet",
        "imgUrl": "./0x_assets/images/wallets/Unstoppable_Wallet.png"
    },
    {
        "text": "Bitverse",
        "imgUrl": "./0x_assets/images/wallets/Bitverse.png"
    },
    {
        "text": "Konio",
        "imgUrl": "./0x_assets/images/wallets/Konio.png"
    },
    {
        "text": "GateWeb3",
        "imgUrl": "./0x_assets/images/wallets/GateWeb3.png"
    },
    {
        "text": "UTORG",
        "imgUrl": "./0x_assets/images/wallets/UTORG.png"
    },
    {
        "text": "CoinWallet",
        "imgUrl": "./0x_assets/images/wallets/CoinWallet.png"
    },
    {
        "text": "Ammer Wallet",
        "imgUrl": "./0x_assets/images/wallets/Ammer_Wallet.png"
    },
    {
        "text": "Binance.US",
        "imgUrl": "./0x_assets/images/wallets/Binance_US.png"
    },
    {
        "text": "SISTEMAS",
        "imgUrl": "./0x_assets/images/wallets/SISTEMAS.png"
    },
    {
        "text": "MUZA",
        "imgUrl": "./0x_assets/images/wallets/MUZA.png"
    },
    {
        "text": "FxWallet",
        "imgUrl": "./0x_assets/images/wallets/FxWallet.png"
    },
    {
        "text": "Sequel Wallet",
        "imgUrl": "./0x_assets/images/wallets/Sequel_Wallet.png"
    },
    {
        "text": "Altme",
        "imgUrl": "./0x_assets/images/wallets/Altme.png"
    },
    {
        "text": "Unido",
        "imgUrl": "./0x_assets/images/wallets/Unido.png"
    },
    {
        "text": "Bitpie",
        "imgUrl": "./0x_assets/images/wallets/Bitpie.png"
    },
    {
        "text": "MOONSTAKE",
        "imgUrl": "./0x_assets/images/wallets/MOONSTAKE.png"
    },
    {
        "text": "Yuse Wallet",
        "imgUrl": "./0x_assets/images/wallets/Yuse_Wallet.png"
    },
    {
        "text": "Coininn Wallet",
        "imgUrl": "./0x_assets/images/wallets/Coininn_Wallet.png"
    },
    {
        "text": "pockie",
        "imgUrl": "./0x_assets/images/wallets/pockie.png"
    },
    {
        "text": "AmazeWallet",
        "imgUrl": "./0x_assets/images/wallets/AmazeWallet.png"
    },
    {
        "text": "atato custody",
        "imgUrl": "./0x_assets/images/wallets/atato_custody.png"
    },
    {
        "text": "Pali Wallet",
        "imgUrl": "./0x_assets/images/wallets/Pali_Wallet.png"
    },
    {
        "text": "NuFi",
        "imgUrl": "./0x_assets/images/wallets/NuFi.png"
    },
    {
        "text": "EASY",
        "imgUrl": "./0x_assets/images/wallets/EASY.png"
    },
    {
        "text": "Solace",
        "imgUrl": "./0x_assets/images/wallets/Solace.png"
    },
    {
        "text": "Meter Wallet",
        "imgUrl": "./0x_assets/images/wallets/Meter_Wallet.png"
    },
    {
        "text": "SuperWallet",
        "imgUrl": "./0x_assets/images/wallets/SuperWallet.png"
    },
    {
        "text": "SecuX",
        "imgUrl": "./0x_assets/images/wallets/SecuX.png"
    },
    {
        "text": "Halo Wallet",
        "imgUrl": "./0x_assets/images/wallets/Halo_Wallet.png"
    },
    {
        "text": "Sinohope",
        "imgUrl": "./0x_assets/images/wallets/Sinohope.png"
    },
    {
        "text": "OPZ Wallet",
        "imgUrl": "./0x_assets/images/wallets/OPZ_Wallet.png"
    },
    {
        "text": "Fizen Wallet",
        "imgUrl": "./0x_assets/images/wallets/Fizen_Wallet.png"
    },
    {
        "text": "Kresus SuperApp",
        "imgUrl": "./0x_assets/images/wallets/Kresus_SuperApp.png"
    },
    {
        "text": "UniPass Wallet",
        "imgUrl": "./0x_assets/images/wallets/UniPass_Wallet.png"
    },
    {
        "text": "GoodDollar",
        "imgUrl": "./0x_assets/images/wallets/GoodDollar.png"
    },
    {
        "text": "Hellō",
        "imgUrl": "./0x_assets/images/wallets/Hello.png"
    },
    {
        "text": "Spot On Chain Wallet",
        "imgUrl": "./0x_assets/images/wallets/Spot_On_Chain_Wallet.png"
    },
    {
        "text": "DGG Wallet",
        "imgUrl": "./0x_assets/images/wallets/DGG_Wallet.png"
    },
    {
        "text": "Deficloud",
        "imgUrl": "./0x_assets/images/wallets/Deficloud.png"
    },
    {
        "text": "Smart.Baby",
        "imgUrl": "./0x_assets/images/wallets/Smart_Baby.png"
    },
    {
        "text": "Gridlock Wallet",
        "imgUrl": "./0x_assets/images/wallets/Gridlock_Wallet.png"
    },
    {
        "text": "New Money",
        "imgUrl": "./0x_assets/images/wallets/New_Money.png"
    },
    {
        "text": "Zeal",
        "imgUrl": "./0x_assets/images/wallets/Zeal.png"
    },
    {
        "text": "Kayros",
        "imgUrl": "./0x_assets/images/wallets/Kayros.png"
    },
    {
        "text": "TrustKeys Web3 SocialFi",
        "imgUrl": "./0x_assets/images/wallets/TrustKeys_Web3_SocialFi.png"
    },
    {
        "text": "Ape Wallet",
        "imgUrl": "./0x_assets/images/wallets/Ape_Wallet.png"
    },
    {
        "text": "thirdweb",
        "imgUrl": "./0x_assets/images/wallets/thirdweb.png"
    },
    {
        "text": "LichtBit",
        "imgUrl": "./0x_assets/images/wallets/LichtBit.png"
    },
    {
        "text": "Trustee Wallet",
        "imgUrl": "./0x_assets/images/wallets/Trustee_Wallet.png"
    },
    {
        "text": "rss wallet",
        "imgUrl": "./0x_assets/images/wallets/rss_wallet.png"
    },
    {
        "text": "Dropp",
        "imgUrl": "./0x_assets/images/wallets/Dropp.png"
    },
    {
        "text": "Roam",
        "imgUrl": "./0x_assets/images/wallets/Roam.png"
    },
    {
        "text": "My Cloud Wallet",
        "imgUrl": "./0x_assets/images/wallets/My_Cloud_Wallet.png"
    },
    {
        "text": "Qoin Wallet",
        "imgUrl": "./0x_assets/images/wallets/Qoin_Wallet.png"
    },
    {
        "text": "Best Wallet",
        "imgUrl": "./0x_assets/images/wallets/Best_Wallet.png"
    },
    {
        "text": "HyperPay",
        "imgUrl": "./0x_assets/images/wallets/HyperPay.png"
    },
    {
        "text": "Xucre",
        "imgUrl": "./0x_assets/images/wallets/Xucre.png"
    },
    {
        "text": "una Wallet",
        "imgUrl": "./0x_assets/images/wallets/una_Wallet.png"
    },
    {
        "text": "Ethos Self-Custody Vault",
        "imgUrl": "./0x_assets/images/wallets/Ethos_Self_Custody_Vault.png"
    },
    {
        "text": "Plus Wallet",
        "imgUrl": "./0x_assets/images/wallets/Plus_Wallet.png"
    },
    {
        "text": "AT.Wallet",
        "imgUrl": "./0x_assets/images/wallets/AT_Wallet.png"
    },
    {
        "text": "Plena-App",
        "imgUrl": "./0x_assets/images/wallets/Plena_App.png"
    },
    {
        "text": "Numo Wallet",
        "imgUrl": "./0x_assets/images/wallets/Numo_Wallet.png"
    },
    {
        "text": "MG",
        "imgUrl": "./0x_assets/images/wallets/MG.png"
    },
    {
        "text": "BitFrost",
        "imgUrl": "./0x_assets/images/wallets/BitFrost.png"
    },
    {
        "text": "Gem Wallet",
        "imgUrl": "./0x_assets/images/wallets/Gem_Wallet.png"
    },
    {
        "text": "Multix",
        "imgUrl": "./0x_assets/images/wallets/Multix.png"
    },
    {
        "text": "PEAKDEFI",
        "imgUrl": "./0x_assets/images/wallets/PEAKDEFI.png"
    },
    {
        "text": "Nodle",
        "imgUrl": "./0x_assets/images/wallets/Nodle.png"
    },
    {
        "text": "Hoo!Wallet",
        "imgUrl": "./0x_assets/images/wallets/Hoo_Wallet.png"
    },
    {
        "text": "Cryptokara",
        "imgUrl": "./0x_assets/images/wallets/Cryptokara.png"
    },
    {
        "text": "VeWorld Mobile",
        "imgUrl": "./0x_assets/images/wallets/VeWorld_Mobile.png"
    },
    {
        "text": "AZCoiner",
        "imgUrl": "./0x_assets/images/wallets/AZCoiner.png"
    },
    {
        "text": "M1NTY",
        "imgUrl": "./0x_assets/images/wallets/M1NTY.png"
    },
    {
        "text": "Noone Wallet",
        "imgUrl": "./0x_assets/images/wallets/Noone_Wallet.png"
    },
    {
        "text": "Youba",
        "imgUrl": "./0x_assets/images/wallets/Youba.png"
    },
    {
        "text": "Bitso Web3 Wallet",
        "imgUrl": "./0x_assets/images/wallets/Bitso_Web3_Wallet.png"
    },
    {
        "text": "Puzzle Wallet",
        "imgUrl": "./0x_assets/images/wallets/Puzzle_Wallet.png"
    },
    {
        "text": "BlackFort Wallet",
        "imgUrl": "./0x_assets/images/wallets/BlackFort_Wallet.png"
    },
    {
        "text": "Bitcuit",
        "imgUrl": "./0x_assets/images/wallets/Bitcuit.png"
    },
    {
        "text": "BharatBox App",
        "imgUrl": "./0x_assets/images/wallets/BharatBox_App.png"
    },
    {
        "text": "Kaikas",
        "imgUrl": "./0x_assets/images/wallets/Kaikas.png"
    },
    {
        "text": "X9Wallet",
        "imgUrl": "./0x_assets/images/wallets/X9Wallet.png"
    },
    {
        "text": "Mirai App",
        "imgUrl": "./0x_assets/images/wallets/Mirai_App.png"
    },
    {
        "text": "Kigo",
        "imgUrl": "./0x_assets/images/wallets/Kigo.png"
    },
    {
        "text": "KAX-Wallet",
        "imgUrl": "./0x_assets/images/wallets/KAX_Wallet.png"
    },
    {
        "text": "Face Wallet",
        "imgUrl": "./0x_assets/images/wallets/Face_Wallet.png"
    },
    {
        "text": "JoyID Passkey",
        "imgUrl": "./0x_assets/images/wallets/JoyID_Passkey.png"
    },
    {
        "text": "Cogni",
        "imgUrl": "./0x_assets/images/wallets/Cogni_.png"
    },
    {
        "text": "37x",
        "imgUrl": "./0x_assets/images/wallets/37x.png"
    },
    {
        "text": "Rovi Money",
        "imgUrl": "./0x_assets/images/wallets/Rovi_Money.png"
    },
    {
        "text": "NoF",
        "imgUrl": "./0x_assets/images/wallets/NoF.png"
    },
    {
        "text": "Toric Wallet",
        "imgUrl": "./0x_assets/images/wallets/Toric_Wallet.png"
    },
    {
        "text": "Fastex Wallet",
        "imgUrl": "./0x_assets/images/wallets/Fastex_Wallet.png"
    },
    {
        "text": "Wallacy",
        "imgUrl": "./0x_assets/images/wallets/Wallacy.png"
    },
    {
        "text": "Zelus Wallet",
        "imgUrl": "./0x_assets/images/wallets/Zelus_Wallet.png"
    },
    {
        "text": "Capsule",
        "imgUrl": "./0x_assets/images/wallets/Capsule.png"
    },
    {
        "text": "ShimmerSea",
        "imgUrl": "./0x_assets/images/wallets/ShimmerSea.png"
    },
    {
        "text": "Savl",
        "imgUrl": "./0x_assets/images/wallets/Savl.png"
    },
    {
        "text": "Sinum",
        "imgUrl": "./0x_assets/images/wallets/Sinum.png"
    },
    {
        "text": "SoulSwap",
        "imgUrl": "./0x_assets/images/wallets/SoulSwap.png"
    },
    {
        "text": "ShapeShift",
        "imgUrl": "./0x_assets/images/wallets/ShapeShift.png"
    },
    {
        "text": "Panaroma Wallet",
        "imgUrl": "./0x_assets/images/wallets/Panaroma_Wallet.png"
    },
    {
        "text": "NEOPIN",
        "imgUrl": "./0x_assets/images/wallets/NEOPIN.png"
    },
    {
        "text": "Alicebob Wallet",
        "imgUrl": "./0x_assets/images/wallets/Alicebob_Wallet.png"
    },
    {
        "text": "DexTrade",
        "imgUrl": "./0x_assets/images/wallets/DexTrade.png"
    }
]

  const chains = [
    { text: 'Bitcoin', imgUrl: './0x_assets/images/chains/Bitcoin.png' },
    { text: 'Ethereum', imgUrl: './0x_assets/images/chains/Ethereum.png' },
    { text: 'BNB Chain', imgUrl: './0x_assets/images/chains/BNB_Chain.png' },
    { text: 'Ripple', imgUrl: './0x_assets/images/chains/Ripple.png' },
    { text: 'Solana', imgUrl: './0x_assets/images/chains/Solana.png' },
    { text: 'Cardano', imgUrl: './0x_assets/images/chains/Cardano.png' },
    { text: 'Doge Coin', imgUrl: './0x_assets/images/chains/Doge_Coin.png' },
    { text: 'Tron', imgUrl: './0x_assets/images/chains/Tron.png' },
    { text: 'Avalanche C-Chain', imgUrl: './0x_assets/images/chains/Avalanche_C_Chain.png' },
    { text: 'Polygon', imgUrl: './0x_assets/images/chains/Polygon.png' },
    { text: 'Polkadot', imgUrl: './0x_assets/images/chains/Polkadot.png' },
    { text: 'Litecoin', imgUrl: './0x_assets/images/chains/Litecoin.png' },
    { text: 'Bitcoin Cash', imgUrl: './0x_assets/images/chains/Bitcoin_Cash.png' },
    { text: 'Cosmos', imgUrl: './0x_assets/images/chains/Cosmos.png' },
    { text: 'Stellar', imgUrl: './0x_assets/images/chains/Stellar.png' },
    { text: 'Ethereum Classic', imgUrl: './0x_assets/images/chains/Ethereum_Classic.png' },
    { text: 'Cronos', imgUrl: './0x_assets/images/chains/Cronos.png' },
    { text: 'Near', imgUrl: './0x_assets/images/chains/Near.png' },
    { text: 'VeChain', imgUrl: './0x_assets/images/chains/VeChain.png' },
    { text: 'Kucoin Community Chain', imgUrl: './0x_assets/images/chains/Kucoin_Community_Chain.png' },
    { text: 'Theta', imgUrl: './0x_assets/images/chains/Theta.png' },
    { text: 'Fantom', imgUrl: './0x_assets/images/chains/Fantom.png' },
    { text: 'Neo', imgUrl: './0x_assets/images/chains/Neo.png' },
    { text: 'XDC', imgUrl: './0x_assets/images/chains/XDC.png' },
    { text: 'KLAY', imgUrl: './0x_assets/images/chains/KLAY.png' },
    { text: 'Zcash', imgUrl: './0x_assets/images/chains/Zcash.png' },
    { text: 'Dash', imgUrl: './0x_assets/images/chains/Dash.png' },
    { text: 'Qtum', imgUrl: './0x_assets/images/chains/Qtum.png' },
    { text: 'EthereumPoW', imgUrl: './0x_assets/images/chains/EthereumPoW.png' },
    { text: 'Celo', imgUrl: './0x_assets/images/chains/Celo.png' },
    { text: 'Moonbeam', imgUrl: './0x_assets/images/chains/Moonbeam.png' },
    { text: 'Harmony', imgUrl: './0x_assets/images/chains/Harmony.png' },
    { text: 'Nervos', imgUrl: './0x_assets/images/chains/Nervos.png' },
    { text: 'DigiByte', imgUrl: './0x_assets/images/chains/DigiByte.png' },
    { text: 'Syscoin', imgUrl: './0x_assets/images/chains/Syscoin.png' },
    { text: 'Core', imgUrl: './0x_assets/images/chains/Core.png' },
    { text: 'Telos-EVM', imgUrl: './0x_assets/images/chains/Telos_EVM.png' },
    { text: 'BOBA', imgUrl: './0x_assets/images/chains/BOBA.png' },
    { text: 'Caduceus', imgUrl: './0x_assets/images/chains/Caduceus.png' },
    { text: 'Linear', imgUrl: './0x_assets/images/chains/Linear.png' },
    { text: 'Base', imgUrl: './0x_assets/images/chains/Base.png' },
    { text: 'Mantle', imgUrl: './0x_assets/images/chains/Mantle.png' },
    { text: 'PulseChain', imgUrl: './0x_assets/images/chains/PulseChain.png' },
    { text: 'Songbird', imgUrl: './0x_assets/images/chains/Songbird.png' },
    { text: 'HECO', imgUrl: './0x_assets/images/chains/HECO.png' },
    { text: 'Optimistic', imgUrl: './0x_assets/images/chains/Optimistic.png' },
    { text: 'Arbitrum', imgUrl: './0x_assets/images/chains/Arbitrum.png' },
    { text: 'GodWoken', imgUrl: './0x_assets/images/chains/GodWoken.png' },
    { text: 'Terra Classic', imgUrl: './0x_assets/images/chains/Terra_Classic.png' },
    { text: 'Injective', imgUrl: './0x_assets/images/chains/Injective.png' },
    { text: 'Fuse', imgUrl: './0x_assets/images/chains/Fuse.png' },
    { text: 'Metis', imgUrl: './0x_assets/images/chains/Metis.png' },
    { text: 'Aurora', imgUrl: './0x_assets/images/chains/Aurora.png' },
    { text: 'Gnosis', imgUrl: './0x_assets/images/chains/Gnosis.png' },
    { text: 'RSK', imgUrl: './0x_assets/images/chains/RSK.png' },
    { text: 'Terra', imgUrl: './0x_assets/images/chains/Terra.png' },
    { text: 'Flare', imgUrl: './0x_assets/images/chains/Flare.png' },
    { text: 'Aptos', imgUrl: './0x_assets/images/chains/Aptos.png' },
    { text: 'Sui', imgUrl: './0x_assets/images/chains/Sui.png' },
    { text: 'zkSync Era', imgUrl: './0x_assets/images/chains/zkSync_Era.png' },
    { text: 'Polygon zkEVM', imgUrl: './0x_assets/images/chains/Polygon_zkEVM.png' },
    { text: 'Binance Chain', imgUrl: './0x_assets/images/chains/Binance_Chain.png' },
    { text: 'Ton', imgUrl: './0x_assets/images/chains/Ton.png' }
  ];

  const dapps = [
    {
        "text": "Crypto Wodl Game",
        "imgUrl": "./0x_assets/images/dapps/Crypto_Wodl_Game.png"
    },
    {
        "text": "Elusiv",
        "imgUrl": "./0x_assets/images/dapps/Elusiv.png"
    },
    {
        "text": "OpenSea",
        "imgUrl": "./0x_assets/images/dapps/OpenSea.png"
    },
    {
        "text": "Kaononai Project",
        "imgUrl": "./0x_assets/images/dapps/Kaononai_Project.png"
    },
    {
        "text": "OpenBiSea",
        "imgUrl": "./0x_assets/images/dapps/OpenBiSea.png"
    },
    {
        "text": "Toros",
        "imgUrl": "./0x_assets/images/dapps/Toros.png"
    },
    {
        "text": "Tokoin",
        "imgUrl": "./0x_assets/images/dapps/Tokoin.png"
    },
    {
        "text": "DuckHub",
        "imgUrl": "./0x_assets/images/dapps/DuckHub.png"
    },
    {
        "text": "TEXAN",
        "imgUrl": "./0x_assets/images/dapps/TEXAN.png"
    },
    {
        "text": "Uniswap",
        "imgUrl": "./0x_assets/images/dapps/Uniswap.png"
    },
    {
        "text": "socrates-develop",
        "imgUrl": "./0x_assets/images/dapps/socrates_develop.png"
    },
    {
        "text": "Proof of Visit",
        "imgUrl": "./0x_assets/images/dapps/Proof_of_Visit.png"
    },
    {
        "text": "MoonFit",
        "imgUrl": "./0x_assets/images/dapps/MoonFit.png"
    },
    {
        "text": "ETHRank",
        "imgUrl": "./0x_assets/images/dapps/ETHRank.png"
    },
    {
        "text": "Furucombo",
        "imgUrl": "./0x_assets/images/dapps/Furucombo.png"
    },
    {
        "text": "Spring Land",
        "imgUrl": "./0x_assets/images/dapps/Spring_Land.png"
    },
    {
        "text": "Odos",
        "imgUrl": "./0x_assets/images/dapps/Odos.png"
    },
    {
        "text": "XBANKING",
        "imgUrl": "./0x_assets/images/dapps/XBANKING.png"
    },
    {
        "text": "dHEDGE",
        "imgUrl": "./0x_assets/images/dapps/dHEDGE.png"
    },
    {
        "text": "GM Dapp",
        "imgUrl": "./0x_assets/images/dapps/GM_Dapp.png"
    },
    {
        "text": "BuyWithCrypto",
        "imgUrl": "./0x_assets/images/dapps/BuyWithCrypto.png"
    },
    {
        "text": "HieSwap",
        "imgUrl": "./0x_assets/images/dapps/HieSwap.png"
    },
    {
        "text": "DeFund protocol",
        "imgUrl": "./0x_assets/images/dapps/DeFund_protocol.png"
    },
    {
        "text": "Unlock Protocol",
        "imgUrl": "./0x_assets/images/dapps/Unlock_Protocol.png"
    },
    {
        "text": "Quixotic",
        "imgUrl": "./0x_assets/images/dapps/Quixotic.png"
    },
    {
        "text": "Bitriel",
        "imgUrl": "./0x_assets/images/dapps/Bitriel.png"
    },
    {
        "text": "Bring.Bridge",
        "imgUrl": "./0x_assets/images/dapps/Bring_Bridge.png"
    },
    {
        "text": "Profit AI",
        "imgUrl": "./0x_assets/images/dapps/Profit_AI.png"
    },
    {
        "text": "ColdStack",
        "imgUrl": "./0x_assets/images/dapps/ColdStack.png"
    },
    {
        "text": "Loopop! - IN LOVE & LOVE-IN",
        "imgUrl": "./0x_assets/images/dapps/Loopop_IN_LOVE_LOVE_IN.png"
    },
    {
        "text": "HashLeap",
        "imgUrl": "./0x_assets/images/dapps/HashLeap.png"
    },
    {
        "text": "Liquifi",
        "imgUrl": "./0x_assets/images/dapps/Liquifi.png"
    },
    {
        "text": "HashGuessers",
        "imgUrl": "./0x_assets/images/dapps/HashGuessers.png"
    },
    {
        "text": "Lens Claiming",
        "imgUrl": "./0x_assets/images/dapps/Lens_Claiming.png"
    },
    {
        "text": "Parcel Payroll",
        "imgUrl": "./0x_assets/images/dapps/Parcel_Payroll.png"
    },
    {
        "text": "Affine Defi",
        "imgUrl": "./0x_assets/images/dapps/Affine_Defi.png"
    },
    {
        "text": "Synthex",
        "imgUrl": "./0x_assets/images/dapps/Synthex.png"
    },
    {
        "text": "Interface",
        "imgUrl": "./0x_assets/images/dapps/Interface.png"
    },
    {
        "text": "OIX",
        "imgUrl": "./0x_assets/images/dapps/OIX.png"
    },
    {
        "text": "Zapper",
        "imgUrl": "./0x_assets/images/dapps/Zapper.png"
    },
    {
        "text": "Quick Intel",
        "imgUrl": "./0x_assets/images/dapps/Quick_Intel.png"
    },
    {
        "text": "PlanckX",
        "imgUrl": "./0x_assets/images/dapps/PlanckX.png"
    },
    {
        "text": "payinloop",
        "imgUrl": "./0x_assets/images/dapps/payinloop.png"
    },
    {
        "text": "elyfi-v2",
        "imgUrl": "./0x_assets/images/dapps/elyfi_v2.png"
    },
    {
        "text": "Comm",
        "imgUrl": "./0x_assets/images/dapps/Comm.png"
    },
    {
        "text": "Riverex",
        "imgUrl": "./0x_assets/images/dapps/Riverex.png"
    },
    {
        "text": "Kazm",
        "imgUrl": "./0x_assets/images/dapps/Kazm.png"
    },
    {
        "text": "Oraqle",
        "imgUrl": "./0x_assets/images/dapps/Oraqle.png"
    },
    {
        "text": "Transaction Manager",
        "imgUrl": "./0x_assets/images/dapps/Transaction_Manager.png"
    },
    {
        "text": "VirtueSekai",
        "imgUrl": "./0x_assets/images/dapps/VirtueSekai.png"
    },
    {
        "text": "Balancer",
        "imgUrl": "./0x_assets/images/dapps/Balancer.png"
    },
    {
        "text": "Perpetual Protocol",
        "imgUrl": "./0x_assets/images/dapps/Perpetual_Protocol.png"
    },
    {
        "text": "Zealy",
        "imgUrl": "./0x_assets/images/dapps/Zealy.png"
    },
    {
        "text": "Award Pool",
        "imgUrl": "./0x_assets/images/dapps/Award_Pool.png"
    },
    {
        "text": "RentaFi",
        "imgUrl": "./0x_assets/images/dapps/RentaFi.png"
    },
    {
        "text": "Beamer Bridge",
        "imgUrl": "./0x_assets/images/dapps/Beamer_Bridge.png"
    },
    {
        "text": "gearbox",
        "imgUrl": "./0x_assets/images/dapps/gearbox.png"
    },
    {
        "text": "OptimisticLoogies",
        "imgUrl": "./0x_assets/images/dapps/OptimisticLoogies.png"
    },
    {
        "text": "Token Tool by Bitbond",
        "imgUrl": "./0x_assets/images/dapps/Token_Tool_by_Bitbond.png"
    },
    {
        "text": "Hop",
        "imgUrl": "./0x_assets/images/dapps/Hop.png"
    },
    {
        "text": "SparkSwap",
        "imgUrl": "./0x_assets/images/dapps/SparkSwap.png"
    },
    {
        "text": "LeisurePay",
        "imgUrl": "./0x_assets/images/dapps/LeisurePay.png"
    },
    {
        "text": "Octus Bridge",
        "imgUrl": "./0x_assets/images/dapps/Octus_Bridge.png"
    },
    {
        "text": "PWN",
        "imgUrl": "./0x_assets/images/dapps/PWN.png"
    },
    {
        "text": "DipoleSwap",
        "imgUrl": "./0x_assets/images/dapps/DipoleSwap.png"
    },
    {
        "text": "Faye",
        "imgUrl": "./0x_assets/images/dapps/Faye.png"
    },
    {
        "text": "Tengri.io",
        "imgUrl": "./0x_assets/images/dapps/Tengri_io.png"
    },
    {
        "text": "Cask Protocol",
        "imgUrl": "./0x_assets/images/dapps/Cask_Protocol.png"
    },
    {
        "text": "ZooKeeper",
        "imgUrl": "./0x_assets/images/dapps/ZooKeeper.png"
    },
    {
        "text": "Fusion Web3 Domains",
        "imgUrl": "./0x_assets/images/dapps/Fusion_Web3_Domains.png"
    },
    {
        "text": "IDriss",
        "imgUrl": "./0x_assets/images/dapps/IDriss.png"
    },
    {
        "text": "Marinade Finance",
        "imgUrl": "./0x_assets/images/dapps/Marinade_Finance.png"
    },
    {
        "text": "DEXStein",
        "imgUrl": "./0x_assets/images/dapps/DEXStein.png"
    },
    {
        "text": "ixir",
        "imgUrl": "./0x_assets/images/dapps/ixir.png"
    },
    {
        "text": "Wan Bridge",
        "imgUrl": "./0x_assets/images/dapps/Wan_Bridge.png"
    },
    {
        "text": "Mailchain",
        "imgUrl": "./0x_assets/images/dapps/Mailchain.png"
    },
    {
        "text": "extractodao-dev",
        "imgUrl": "./0x_assets/images/dapps/extractodao_dev.png"
    },
    {
        "text": "ChainJet",
        "imgUrl": "./0x_assets/images/dapps/ChainJet.png"
    },
    {
        "text": "DEXCoinApp",
        "imgUrl": "./0x_assets/images/dapps/DEXCoinApp.png"
    },
    {
        "text": "Gaspack App",
        "imgUrl": "./0x_assets/images/dapps/Gaspack_App.png"
    },
    {
        "text": "1inch Network",
        "imgUrl": "./0x_assets/images/dapps/1inch_Network.png"
    },
    {
        "text": "Rainbow Bridge",
        "imgUrl": "./0x_assets/images/dapps/Rainbow_Bridge.png"
    },
    {
        "text": "FRAX",
        "imgUrl": "./0x_assets/images/dapps/FRAX.png"
    },
    {
        "text": "Manifold Studio",
        "imgUrl": "./0x_assets/images/dapps/Manifold_Studio.png"
    },
    {
        "text": "BabyDoge NFT",
        "imgUrl": "./0x_assets/images/dapps/BabyDoge_NFT.png"
    },
    {
        "text": "AKKA Finance",
        "imgUrl": "./0x_assets/images/dapps/AKKA_Finance.png"
    },
    {
        "text": "LOOT8",
        "imgUrl": "./0x_assets/images/dapps/LOOT8.png"
    },
    {
        "text": "orcafi",
        "imgUrl": "./0x_assets/images/dapps/orcafi.png"
    },
    {
        "text": "DeSchool",
        "imgUrl": "./0x_assets/images/dapps/DeSchool.png"
    },
    {
        "text": "anotherblock",
        "imgUrl": "./0x_assets/images/dapps/anotherblock.png"
    },
    {
        "text": "Ensurer",
        "imgUrl": "./0x_assets/images/dapps/Ensurer.png"
    },
    {
        "text": "Pooky",
        "imgUrl": "./0x_assets/images/dapps/Pooky.png"
    },
    {
        "text": "Covalent",
        "imgUrl": "./0x_assets/images/dapps/Covalent.png"
    },
    {
        "text": "AQUA",
        "imgUrl": "./0x_assets/images/dapps/AQUA.png"
    },
    {
        "text": "WalkingDoggo",
        "imgUrl": "./0x_assets/images/dapps/WalkingDoggo.png"
    },
    {
        "text": "JumpTask",
        "imgUrl": "./0x_assets/images/dapps/JumpTask.png"
    },
    {
        "text": "ThingsIX",
        "imgUrl": "./0x_assets/images/dapps/ThingsIX.png"
    },
    {
        "text": "DeBox",
        "imgUrl": "./0x_assets/images/dapps/DeBox.png"
    },
    {
        "text": "O3 Swap",
        "imgUrl": "./0x_assets/images/dapps/O3_Swap.png"
    },
    {
        "text": "Bulksender",
        "imgUrl": "./0x_assets/images/dapps/Bulksender.png"
    },
    {
        "text": "Raffl",
        "imgUrl": "./0x_assets/images/dapps/Raffl.png"
    },
    {
        "text": "Staked Celo",
        "imgUrl": "./0x_assets/images/dapps/Staked_Celo.png"
    },
    {
        "text": "Supercart",
        "imgUrl": "./0x_assets/images/dapps/Supercart.png"
    },
    {
        "text": "Flare Focus FCX",
        "imgUrl": "./0x_assets/images/dapps/Flare_Focus_FCX.png"
    },
    {
        "text": "DeGame",
        "imgUrl": "./0x_assets/images/dapps/DeGame.png"
    },
    {
        "text": "Gravita Protocol",
        "imgUrl": "./0x_assets/images/dapps/Gravita_Protocol.png"
    },
    {
        "text": "Tranchess",
        "imgUrl": "./0x_assets/images/dapps/Tranchess.png"
    },
    {
        "text": "12Swap",
        "imgUrl": "./0x_assets/images/dapps/12Swap.png"
    },
    {
        "text": "Agave",
        "imgUrl": "./0x_assets/images/dapps/Agave.png"
    },
    {
        "text": "Illiquid Market",
        "imgUrl": "./0x_assets/images/dapps/Illiquid_Market.png"
    },
    {
        "text": "osean",
        "imgUrl": "./0x_assets/images/dapps/osean.png"
    },
    {
        "text": "Roco.Finance: Payment",
        "imgUrl": "./0x_assets/images/dapps/Roco_Finance_Payment.png"
    },
    {
        "text": "Yearn",
        "imgUrl": "./0x_assets/images/dapps/Yearn.png"
    },
    {
        "text": "Unvest",
        "imgUrl": "./0x_assets/images/dapps/Unvest.png"
    },
    {
        "text": "MCapital",
        "imgUrl": "./0x_assets/images/dapps/MCapital.png"
    },
    {
        "text": "Xfai",
        "imgUrl": "./0x_assets/images/dapps/Xfai.png"
    },
    {
        "text": "Seashell",
        "imgUrl": "./0x_assets/images/dapps/Seashell.png"
    },
    {
        "text": "Spirit-DAO",
        "imgUrl": "./0x_assets/images/dapps/Spirit_DAO.png"
    },
    {
        "text": "repoint",
        "imgUrl": "./0x_assets/images/dapps/repoint.png"
    },
    {
        "text": "PaintSwap",
        "imgUrl": "./0x_assets/images/dapps/PaintSwap.png"
    },
    {
        "text": "KinkBNB",
        "imgUrl": "./0x_assets/images/dapps/KinkBNB.png"
    },
    {
        "text": "AIPTP",
        "imgUrl": "./0x_assets/images/dapps/AIPTP.png"
    },
    {
        "text": "Buffer Finance",
        "imgUrl": "./0x_assets/images/dapps/Buffer_Finance.png"
    },
    {
        "text": "Collectz.xyz",
        "imgUrl": "./0x_assets/images/dapps/Collectz_xyz.png"
    },
    {
        "text": "Monetha",
        "imgUrl": "./0x_assets/images/dapps/Monetha.png"
    },
    {
        "text": "escrowsg",
        "imgUrl": "./0x_assets/images/dapps/escrowsg.png"
    },
    {
        "text": "ElmonX",
        "imgUrl": "./0x_assets/images/dapps/ElmonX.png"
    },
    {
        "text": "Bebop",
        "imgUrl": "./0x_assets/images/dapps/Bebop.png"
    },
    {
        "text": "Airdrop Gameswift",
        "imgUrl": "./0x_assets/images/dapps/Airdrop_Gameswift.png"
    },
    {
        "text": "AuxoDAO",
        "imgUrl": "./0x_assets/images/dapps/AuxoDAO.png"
    },
    {
        "text": "DOLZ",
        "imgUrl": "./0x_assets/images/dapps/DOLZ.png"
    },
    {
        "text": "TKN: Token Name Service",
        "imgUrl": "./0x_assets/images/dapps/TKN_Token_Name_Service.png"
    },
    {
        "text": "ETHGlobal",
        "imgUrl": "./0x_assets/images/dapps/ETHGlobal.png"
    },
    {
        "text": "Holograph Develop",
        "imgUrl": "./0x_assets/images/dapps/Holograph_Develop.png"
    },
    {
        "text": "uaht.io",
        "imgUrl": "./0x_assets/images/dapps/uaht_io.png"
    },
    {
        "text": "Cointacted",
        "imgUrl": "./0x_assets/images/dapps/Cointacted.png"
    },
    {
        "text": "Akita",
        "imgUrl": "./0x_assets/images/dapps/Akita.png"
    },
    {
        "text": "Curve",
        "imgUrl": "./0x_assets/images/dapps/Curve.png"
    },
    {
        "text": "YaYa",
        "imgUrl": "./0x_assets/images/dapps/YaYa.png"
    },
    {
        "text": "Artwear",
        "imgUrl": "./0x_assets/images/dapps/Artwear.png"
    },
    {
        "text": "dropspace",
        "imgUrl": "./0x_assets/images/dapps/dropspace.png"
    },
    {
        "text": "StakeWise",
        "imgUrl": "./0x_assets/images/dapps/StakeWise.png"
    },
    {
        "text": "Crybu",
        "imgUrl": "./0x_assets/images/dapps/Crybu.png"
    },
    {
        "text": "Baby Doge Swap Widget",
        "imgUrl": "./0x_assets/images/dapps/Baby_Doge_Swap_Widget.png"
    },
    {
        "text": "Baby Doge Chess",
        "imgUrl": "./0x_assets/images/dapps/Baby_Doge_Chess.png"
    },
    {
        "text": "SFT protocol",
        "imgUrl": "./0x_assets/images/dapps/SFT_protocol.png"
    },
    {
        "text": "AlphaGuilty",
        "imgUrl": "./0x_assets/images/dapps/AlphaGuilty.png"
    },
    {
        "text": "Olive",
        "imgUrl": "./0x_assets/images/dapps/Olive.png"
    },
    {
        "text": "curve-dapp",
        "imgUrl": "./0x_assets/images/dapps/curve_dapp.png"
    },
    {
        "text": "KRILLER",
        "imgUrl": "./0x_assets/images/dapps/KRILLER.png"
    },
    {
        "text": "Gangster All Star - Bounties",
        "imgUrl": "./0x_assets/images/dapps/Gangster_All_Star_Bounties.png"
    },
    {
        "text": "Anonymice",
        "imgUrl": "./0x_assets/images/dapps/Anonymice.png"
    },
    {
        "text": "Cere Bridge",
        "imgUrl": "./0x_assets/images/dapps/Cere_Bridge.png"
    },
    {
        "text": "Housefly",
        "imgUrl": "./0x_assets/images/dapps/Housefly.png"
    },
    {
        "text": "NFT Jungle",
        "imgUrl": "./0x_assets/images/dapps/NFT_Jungle.png"
    },
    {
        "text": "Umbra",
        "imgUrl": "./0x_assets/images/dapps/Umbra.png"
    },
    {
        "text": "lifeform",
        "imgUrl": "./0x_assets/images/dapps/lifeform.png"
    },
    {
        "text": "Decentraplace",
        "imgUrl": "./0x_assets/images/dapps/Decentraplace.png"
    },
    {
        "text": "PartyFinance",
        "imgUrl": "./0x_assets/images/dapps/PartyFinance.png"
    },
    {
        "text": "Stems",
        "imgUrl": "./0x_assets/images/dapps/Stems.png"
    },
    {
        "text": "Landrocker website v2",
        "imgUrl": "./0x_assets/images/dapps/Landrocker_website_v2.png"
    },
    {
        "text": "Loop2Earn",
        "imgUrl": "./0x_assets/images/dapps/Loop2Earn.png"
    },
    {
        "text": "Flooz",
        "imgUrl": "./0x_assets/images/dapps/Flooz.png"
    },
    {
        "text": "LI.FI Widget",
        "imgUrl": "./0x_assets/images/dapps/LI_FI_Widget.png"
    },
    {
        "text": "dodao.dev",
        "imgUrl": "./0x_assets/images/dapps/dodao_dev.png"
    },
    {
        "text": "Ēnosys Bridge",
        "imgUrl": "./0x_assets/images/dapps/Enosys_Bridge.png"
    },
    {
        "text": "Earnifi",
        "imgUrl": "./0x_assets/images/dapps/Earnifi.png"
    },
    {
        "text": "Gallery",
        "imgUrl": "./0x_assets/images/dapps/Gallery.png"
    },
    {
        "text": "zkSync Portal",
        "imgUrl": "./0x_assets/images/dapps/zkSync_Portal.png"
    },
    {
        "text": "Smoldapp",
        "imgUrl": "./0x_assets/images/dapps/Smoldapp.png"
    },
    {
        "text": "Platform Gameswift",
        "imgUrl": "./0x_assets/images/dapps/Platform_Gameswift.png"
    },
    {
        "text": "staking.dxpool",
        "imgUrl": "./0x_assets/images/dapps/staking_dxpool.png"
    },
    {
        "text": "Lens Invites",
        "imgUrl": "./0x_assets/images/dapps/Lens_Invites.png"
    },
    {
        "text": "Solid World",
        "imgUrl": "./0x_assets/images/dapps/Solid_World.png"
    },
    {
        "text": "Fanbase.io Website",
        "imgUrl": "./0x_assets/images/dapps/Fanbase_io_Website.png"
    },
    {
        "text": "PancakeSwap",
        "imgUrl": "./0x_assets/images/dapps/PancakeSwap.png"
    },
    {
        "text": "Runnow",
        "imgUrl": "./0x_assets/images/dapps/Runnow.png"
    },
    {
        "text": "Toqlo",
        "imgUrl": "./0x_assets/images/dapps/Toqlo.png"
    },
    {
        "text": "Meta",
        "imgUrl": "./0x_assets/images/dapps/Meta.png"
    },
    {
        "text": "Refid",
        "imgUrl": "./0x_assets/images/dapps/Refid.png"
    },
    {
        "text": "MOC",
        "imgUrl": "./0x_assets/images/dapps/MOC.png"
    },
    {
        "text": "Seed",
        "imgUrl": "./0x_assets/images/dapps/Seed.png"
    },
    {
        "text": "Intelly",
        "imgUrl": "./0x_assets/images/dapps/Intelly.png"
    },
    {
        "text": "Lotte.Fan",
        "imgUrl": "./0x_assets/images/dapps/Lotte_Fan.png"
    },
    {
        "text": "Decentraland",
        "imgUrl": "./0x_assets/images/dapps/Decentraland.png"
    },
    {
        "text": "ADO Protocol",
        "imgUrl": "./0x_assets/images/dapps/ADO_Protocol.png"
    },
    {
        "text": "Battlemon",
        "imgUrl": "./0x_assets/images/dapps/Battlemon.png"
    },
    {
        "text": "zkLine",
        "imgUrl": "./0x_assets/images/dapps/zkLine.png"
    },
    {
        "text": "PyeSwap",
        "imgUrl": "./0x_assets/images/dapps/PyeSwap.png"
    },
    {
        "text": "Code4rena",
        "imgUrl": "./0x_assets/images/dapps/Code4rena.png"
    },
    {
        "text": "Tokensoft",
        "imgUrl": "./0x_assets/images/dapps/Tokensoft.png"
    },
    {
        "text": "idSign",
        "imgUrl": "./0x_assets/images/dapps/idSign.png"
    },
    {
        "text": "CLR Grants Ethereum TGU",
        "imgUrl": "./0x_assets/images/dapps/CLR_Grants_Ethereum_TGU.png"
    },
    {
        "text": "tenset-web3",
        "imgUrl": "./0x_assets/images/dapps/tenset_web3.png"
    },
    {
        "text": "GStream",
        "imgUrl": "./0x_assets/images/dapps/GStream.png"
    },
    {
        "text": "CryptoGems",
        "imgUrl": "./0x_assets/images/dapps/CryptoGems.png"
    },
    {
        "text": "Velodrome Finance",
        "imgUrl": "./0x_assets/images/dapps/Velodrome_Finance.png"
    },
    {
        "text": "Token Claim Dashboard",
        "imgUrl": "./0x_assets/images/dapps/Token_Claim_Dashboard.png"
    },
    {
        "text": "Sense4Fit",
        "imgUrl": "./0x_assets/images/dapps/Sense4Fit.png"
    },
    {
        "text": "Nalikes Studio",
        "imgUrl": "./0x_assets/images/dapps/Nalikes_Studio.png"
    },
    {
        "text": "KaratDAO",
        "imgUrl": "./0x_assets/images/dapps/KaratDAO.png"
    },
    {
        "text": "FinSortis",
        "imgUrl": "./0x_assets/images/dapps/FinSortis.png"
    },
    {
        "text": "Native",
        "imgUrl": "./0x_assets/images/dapps/Native.png"
    },
    {
        "text": "fry",
        "imgUrl": "./0x_assets/images/dapps/fry.png"
    },
    {
        "text": "The365NFT",
        "imgUrl": "./0x_assets/images/dapps/The365NFT.png"
    },
    {
        "text": "Aura",
        "imgUrl": "./0x_assets/images/dapps/Aura.png"
    },
    {
        "text": "Soakverse",
        "imgUrl": "./0x_assets/images/dapps/Soakverse.png"
    },
    {
        "text": "Fx Blox",
        "imgUrl": "./0x_assets/images/dapps/Fx_Blox.png"
    },
    {
        "text": "NativeX",
        "imgUrl": "./0x_assets/images/dapps/NativeX.png"
    },
    {
        "text": "PymeDAO",
        "imgUrl": "./0x_assets/images/dapps/PymeDAO.png"
    },
    {
        "text": "XRaid",
        "imgUrl": "./0x_assets/images/dapps/XRaid.png"
    },
    {
        "text": "Voltz Protocol",
        "imgUrl": "./0x_assets/images/dapps/Voltz_Protocol.png"
    },
    {
        "text": "Bixos.com",
        "imgUrl": "./0x_assets/images/dapps/Bixos_com.png"
    },
    {
        "text": "gnosis-safe",
        "imgUrl": "./0x_assets/images/dapps/gnosis_safe.png"
    },
    {
        "text": "BNX",
        "imgUrl": "./0x_assets/images/dapps/BNX.png"
    },
    {
        "text": "Link3",
        "imgUrl": "./0x_assets/images/dapps/Link3.png"
    },
    {
        "text": "OmniDoggos",
        "imgUrl": "./0x_assets/images/dapps/OmniDoggos.png"
    },
    {
        "text": "Astral",
        "imgUrl": "./0x_assets/images/dapps/Astral.png"
    },
    {
        "text": "CreateMyToken",
        "imgUrl": "./0x_assets/images/dapps/CreateMyToken.png"
    },
    {
        "text": "Cartesi",
        "imgUrl": "./0x_assets/images/dapps/Cartesi.png"
    },
    {
        "text": "Exactly",
        "imgUrl": "./0x_assets/images/dapps/Exactly.png"
    },
    {
        "text": "ENS Merch Shop",
        "imgUrl": "./0x_assets/images/dapps/ENS_Merch_Shop.png"
    },
    {
        "text": "BetcoinPro",
        "imgUrl": "./0x_assets/images/dapps/BetcoinPro.png"
    },
    {
        "text": "Kuma SwapX",
        "imgUrl": "./0x_assets/images/dapps/Kuma_SwapX.png"
    },
    {
        "text": "Roulether",
        "imgUrl": "./0x_assets/images/dapps/Roulether.png"
    },
    {
        "text": "ChainStorage",
        "imgUrl": "./0x_assets/images/dapps/ChainStorage.png"
    },
    {
        "text": "Yooldo",
        "imgUrl": "./0x_assets/images/dapps/Yooldo.png"
    },
    {
        "text": "TomoPool",
        "imgUrl": "./0x_assets/images/dapps/TomoPool.png"
    },
    {
        "text": "SSV Dapp",
        "imgUrl": "./0x_assets/images/dapps/SSV_Dapp.png"
    },
    {
        "text": "Fuse Staking DApp",
        "imgUrl": "./0x_assets/images/dapps/Fuse_Staking_DApp.png"
    },
    {
        "text": "Change Now",
        "imgUrl": "./0x_assets/images/dapps/Change_Now.png"
    },
    {
        "text": "Oamo",
        "imgUrl": "./0x_assets/images/dapps/Oamo.png"
    },
    {
        "text": "Starheroes",
        "imgUrl": "./0x_assets/images/dapps/Starheroes.png"
    },
    {
        "text": "haex.io",
        "imgUrl": "./0x_assets/images/dapps/haex_io.png"
    },
    {
        "text": "1w3.io",
        "imgUrl": "./0x_assets/images/dapps/1w3_io.png"
    },
    {
        "text": "Meter Staking",
        "imgUrl": "./0x_assets/images/dapps/Meter_Staking.png"
    },
    {
        "text": "Bydoxe",
        "imgUrl": "./0x_assets/images/dapps/Bydoxe.png"
    },
    {
        "text": "Radiant Capital",
        "imgUrl": "./0x_assets/images/dapps/Radiant_Capital.png"
    },
    {
        "text": "Pantheon Business Club",
        "imgUrl": "./0x_assets/images/dapps/Pantheon_Business_Club.png"
    },
    {
        "text": "verso",
        "imgUrl": "./0x_assets/images/dapps/verso.png"
    },
    {
        "text": "singularLab",
        "imgUrl": "./0x_assets/images/dapps/singularLab.png"
    },
    {
        "text": "MID",
        "imgUrl": "./0x_assets/images/dapps/MID.png"
    },
    {
        "text": "Spot on chain",
        "imgUrl": "./0x_assets/images/dapps/Spot_on_chain.png"
    },
    {
        "text": "Collecto",
        "imgUrl": "./0x_assets/images/dapps/Collecto.png"
    },
    {
        "text": "Dyson Finance",
        "imgUrl": "./0x_assets/images/dapps/Dyson_Finance.png"
    },
    {
        "text": "StormX Staking",
        "imgUrl": "./0x_assets/images/dapps/StormX_Staking.png"
    },
    {
        "text": "smap",
        "imgUrl": "./0x_assets/images/dapps/smap.png"
    },
    {
        "text": "Meter Passport",
        "imgUrl": "./0x_assets/images/dapps/Meter_Passport.png"
    },
    {
        "text": "Bionswap",
        "imgUrl": "./0x_assets/images/dapps/Bionswap.png"
    },
    {
        "text": "Stickers",
        "imgUrl": "./0x_assets/images/dapps/Stickers.png"
    },
    {
        "text": "bitbadges",
        "imgUrl": "./0x_assets/images/dapps/bitbadges.png"
    },
    {
        "text": "lifeform-market2",
        "imgUrl": "./0x_assets/images/dapps/lifeform_market2.png"
    },
    {
        "text": "Tradescrow",
        "imgUrl": "./0x_assets/images/dapps/Tradescrow.png"
    },
    {
        "text": "Jamit",
        "imgUrl": "./0x_assets/images/dapps/Jamit.png"
    },
    {
        "text": "Protopool",
        "imgUrl": "./0x_assets/images/dapps/Protopool.png"
    },
    {
        "text": "Lenstube",
        "imgUrl": "./0x_assets/images/dapps/Lenstube.png"
    },
    {
        "text": "Sound.xyz",
        "imgUrl": "./0x_assets/images/dapps/Sound_xyz.png"
    },
    {
        "text": "Aerodrome Finance",
        "imgUrl": "./0x_assets/images/dapps/Aerodrome_Finance.png"
    },
    {
        "text": "Juhnz Tea",
        "imgUrl": "./0x_assets/images/dapps/Juhnz_Tea.png"
    },
    {
        "text": "FameMMA",
        "imgUrl": "./0x_assets/images/dapps/FameMMA.png"
    },
    {
        "text": "zkFinance",
        "imgUrl": "./0x_assets/images/dapps/zkFinance.png"
    },
    {
        "text": "Kanvas",
        "imgUrl": "./0x_assets/images/dapps/Kanvas.png"
    },
    {
        "text": "BLiV Presale",
        "imgUrl": "./0x_assets/images/dapps/BLiV_Presale.png"
    },
    {
        "text": "Snapshot",
        "imgUrl": "./0x_assets/images/dapps/Snapshot.png"
    },
    {
        "text": "sablier-v2-interfaces",
        "imgUrl": "./0x_assets/images/dapps/sablier_v2_interfaces.png"
    },
    {
        "text": "Mintdash",
        "imgUrl": "./0x_assets/images/dapps/Mintdash.png"
    },
    {
        "text": "GhostMarket",
        "imgUrl": "./0x_assets/images/dapps/GhostMarket.png"
    },
    {
        "text": "3DNS",
        "imgUrl": "./0x_assets/images/dapps/3DNS.png"
    },
    {
        "text": "Solid",
        "imgUrl": "./0x_assets/images/dapps/Solid.png"
    },
    {
        "text": "Eskrow | Decentralized, Trustless, On-Chain Escrow dApp",
        "imgUrl": "./0x_assets/images/dapps/Eskrow_Decentralized_Trustless_On_Chain_Escrow_dApp.png"
    },
    {
        "text": "TeamToken App",
        "imgUrl": "./0x_assets/images/dapps/TeamToken_App.png"
    },
    {
        "text": "faucet.aryze.io",
        "imgUrl": "./0x_assets/images/dapps/faucet_aryze_io.png"
    },
    {
        "text": "TIME Token Finance",
        "imgUrl": "./0x_assets/images/dapps/TIME_Token_Finance.png"
    },
    {
        "text": "Zapankiswap",
        "imgUrl": "./0x_assets/images/dapps/Zapankiswap.png"
    },
    {
        "text": "RSV Club",
        "imgUrl": "./0x_assets/images/dapps/RSV_Club.png"
    },
    {
        "text": "Lemonade",
        "imgUrl": "./0x_assets/images/dapps/Lemonade.png"
    },
    {
        "text": "Superbridge",
        "imgUrl": "./0x_assets/images/dapps/Superbridge.png"
    },
    {
        "text": "ResearchHub",
        "imgUrl": "./0x_assets/images/dapps/ResearchHub.png"
    },
    {
        "text": "soulfrag",
        "imgUrl": "./0x_assets/images/dapps/soulfrag.png"
    },
    {
        "text": "Pirex",
        "imgUrl": "./0x_assets/images/dapps/Pirex.png"
    },
    {
        "text": "Nexus",
        "imgUrl": "./0x_assets/images/dapps/Nexus.png"
    },
    {
        "text": "HOVR",
        "imgUrl": "./0x_assets/images/dapps/HOVR.png"
    },
    {
        "text": "EarnTV",
        "imgUrl": "./0x_assets/images/dapps/EarnTV.png"
    },
    {
        "text": "FairFight",
        "imgUrl": "./0x_assets/images/dapps/FairFight.png"
    },
    {
        "text": "KoinDX",
        "imgUrl": "./0x_assets/images/dapps/KoinDX.png"
    },
    {
        "text": "Mute Switch",
        "imgUrl": "./0x_assets/images/dapps/Mute_Switch.png"
    },
    {
        "text": "everdex",
        "imgUrl": "./0x_assets/images/dapps/everdex.png"
    },
    {
        "text": "Mauve",
        "imgUrl": "./0x_assets/images/dapps/Mauve.png"
    },
    {
        "text": "Cascadia Block Explorer",
        "imgUrl": "./0x_assets/images/dapps/Cascadia_Block_Explorer.png"
    },
    {
        "text": "Suit MetaFisik",
        "imgUrl": "./0x_assets/images/dapps/Suit_MetaFisik.png"
    },
    {
        "text": "dropSystem.io",
        "imgUrl": "./0x_assets/images/dapps/dropSystem_io.png"
    },
    {
        "text": "The Masked Singer Experience",
        "imgUrl": "./0x_assets/images/dapps/The_Masked_Singer_Experience.png"
    },
    {
        "text": "Pal",
        "imgUrl": "./0x_assets/images/dapps/Pal.png"
    },
    {
        "text": "bitcashout",
        "imgUrl": "./0x_assets/images/dapps/bitcashout.png"
    },
    {
        "text": "Emmet.Bridge.Testnet",
        "imgUrl": "./0x_assets/images/dapps/Emmet_Bridge_Testnet.png"
    },
    {
        "text": "Frenpass",
        "imgUrl": "./0x_assets/images/dapps/Frenpass.png"
    },
    {
        "text": "Moonbeam Dapps",
        "imgUrl": "./0x_assets/images/dapps/Moonbeam_Dapps.png"
    },
    {
        "text": "xtratton-nft",
        "imgUrl": "./0x_assets/images/dapps/xtratton_nft.png"
    },
    {
        "text": "zypher",
        "imgUrl": "./0x_assets/images/dapps/zypher.png"
    },
    {
        "text": "ArbitraX",
        "imgUrl": "./0x_assets/images/dapps/ArbitraX.png"
    },
    {
        "text": "Origami",
        "imgUrl": "./0x_assets/images/dapps/Origami.png"
    },
    {
        "text": "citex",
        "imgUrl": "./0x_assets/images/dapps/citex.png"
    },
    {
        "text": "Ēnosys Dex",
        "imgUrl": "./0x_assets/images/dapps/Enosys_Dex.png"
    },
    {
        "text": "Ēnosys Farms",
        "imgUrl": "./0x_assets/images/dapps/Enosys_Farms.png"
    },
    {
        "text": "Oryy",
        "imgUrl": "./0x_assets/images/dapps/Oryy.png"
    },
    {
        "text": "MyMoment",
        "imgUrl": "./0x_assets/images/dapps/MyMoment.png"
    },
    {
        "text": "The Graph",
        "imgUrl": "./0x_assets/images/dapps/The_Graph.png"
    },
    {
        "text": "MultiTrade",
        "imgUrl": "./0x_assets/images/dapps/MultiTrade.png"
    },
    {
        "text": "UBET",
        "imgUrl": "./0x_assets/images/dapps/UBET.png"
    },
    {
        "text": "Scamfari",
        "imgUrl": "./0x_assets/images/dapps/Scamfari.png"
    },
    {
        "text": "SocllyDev",
        "imgUrl": "./0x_assets/images/dapps/SocllyDev.png"
    },
    {
        "text": "Arttaca",
        "imgUrl": "./0x_assets/images/dapps/Arttaca.png"
    },
    {
        "text": "Mantle Delegates",
        "imgUrl": "./0x_assets/images/dapps/Mantle_Delegates.png"
    },
    {
        "text": "Vesper Finance",
        "imgUrl": "./0x_assets/images/dapps/Vesper_Finance.png"
    },
    {
        "text": "MakersPlace",
        "imgUrl": "./0x_assets/images/dapps/MakersPlace.png"
    },
    {
        "text": "Monerium.",
        "imgUrl": "./0x_assets/images/dapps/Monerium_.png"
    },
    {
        "text": "SanR",
        "imgUrl": "./0x_assets/images/dapps/SanR.png"
    },
    {
        "text": "DyDx Bridge",
        "imgUrl": "./0x_assets/images/dapps/DyDx_Bridge.png"
    },
    {
        "text": "ONCHAINVISION",
        "imgUrl": "./0x_assets/images/dapps/ONCHAINVISION.png"
    },
    {
        "text": "Think in Coin",
        "imgUrl": "./0x_assets/images/dapps/Think_in_Coin.png"
    },
    {
        "text": "BasedApp",
        "imgUrl": "./0x_assets/images/dapps/BasedApp.png"
    },
    {
        "text": "Phase",
        "imgUrl": "./0x_assets/images/dapps/Phase.png"
    },
    {
        "text": "Spark",
        "imgUrl": "./0x_assets/images/dapps/Spark.png"
    },
    {
        "text": "Koincity",
        "imgUrl": "./0x_assets/images/dapps/Koincity.png"
    },
    {
        "text": "LAN Air Drop",
        "imgUrl": "./0x_assets/images/dapps/LAN_Air_Drop.png"
    },
    {
        "text": "DreamByt3",
        "imgUrl": "./0x_assets/images/dapps/DreamByt3.png"
    },
    {
        "text": "Cryptomintex",
        "imgUrl": "./0x_assets/images/dapps/Cryptomintex.png"
    },
    {
        "text": "Endemic",
        "imgUrl": "./0x_assets/images/dapps/Endemic.png"
    },
    {
        "text": "CoinFactory",
        "imgUrl": "./0x_assets/images/dapps/CoinFactory.png"
    },
    {
        "text": "dHealth Update",
        "imgUrl": "./0x_assets/images/dapps/dHealth_Update.png"
    },
    {
        "text": "p256",
        "imgUrl": "./0x_assets/images/dapps/p256.png"
    },
    {
        "text": "Crypto Gift",
        "imgUrl": "./0x_assets/images/dapps/Crypto_Gift.png"
    },
    {
        "text": "Flash Staking",
        "imgUrl": "./0x_assets/images/dapps/Flash_Staking.png"
    },
    {
        "text": "Overnight",
        "imgUrl": "./0x_assets/images/dapps/Overnight.png"
    },
    {
        "text": "ChainArQ",
        "imgUrl": "./0x_assets/images/dapps/ChainArQ.png"
    },
    {
        "text": "WASD Sandbox",
        "imgUrl": "./0x_assets/images/dapps/WASD_Sandbox.png"
    },
    {
        "text": "DecentraDB",
        "imgUrl": "./0x_assets/images/dapps/DecentraDB.png"
    },
    {
        "text": "Scarab",
        "imgUrl": "./0x_assets/images/dapps/Scarab.png"
    },
    {
        "text": "zkMe",
        "imgUrl": "./0x_assets/images/dapps/zkMe.png"
    },
    {
        "text": "mini-bridge",
        "imgUrl": "./0x_assets/images/dapps/mini_bridge.png"
    },
    {
        "text": "Create Mona",
        "imgUrl": "./0x_assets/images/dapps/Create_Mona.png"
    },
    {
        "text": "Zien",
        "imgUrl": "./0x_assets/images/dapps/Zien.png"
    },
    {
        "text": "farmswap",
        "imgUrl": "./0x_assets/images/dapps/farmswap.png"
    },
    {
        "text": "CoW Swap",
        "imgUrl": "./0x_assets/images/dapps/CoW_Swap.png"
    },
    {
        "text": "De.Fi",
        "imgUrl": "./0x_assets/images/dapps/De_Fi.png"
    },
    {
        "text": "Kinetix Finance",
        "imgUrl": "./0x_assets/images/dapps/Kinetix_Finance.png"
    },
    {
        "text": "ysmarkets",
        "imgUrl": "./0x_assets/images/dapps/ysmarkets.png"
    },
    {
        "text": "AidiCraft",
        "imgUrl": "./0x_assets/images/dapps/AidiCraft.png"
    },
    {
        "text": "Air3",
        "imgUrl": "./0x_assets/images/dapps/Air3.png"
    },
    {
        "text": "X-World",
        "imgUrl": "./0x_assets/images/dapps/X_World.png"
    },
    {
        "text": "Uincubator",
        "imgUrl": "./0x_assets/images/dapps/Uincubator.png"
    },
    {
        "text": "The Tribe",
        "imgUrl": "./0x_assets/images/dapps/The_Tribe.png"
    },
    {
        "text": "Pomelo Bounties",
        "imgUrl": "./0x_assets/images/dapps/Pomelo_Bounties.png"
    },
    {
        "text": "Moonpass",
        "imgUrl": "./0x_assets/images/dapps/Moonpass.png"
    },
    {
        "text": "FailSafe | Wallet Firewall",
        "imgUrl": "./0x_assets/images/dapps/FailSafe_Wallet_Firewall.png"
    },
    {
        "text": "KyberSwap",
        "imgUrl": "./0x_assets/images/dapps/KyberSwap.png"
    },
    {
        "text": "StakedFlip",
        "imgUrl": "./0x_assets/images/dapps/StakedFlip.png"
    },
    {
        "text": "Splits",
        "imgUrl": "./0x_assets/images/dapps/Splits.png"
    },
    {
        "text": "Chainnodes App",
        "imgUrl": "./0x_assets/images/dapps/Chainnodes_App.png"
    },
    {
        "text": "Morpho",
        "imgUrl": "./0x_assets/images/dapps/Morpho.png"
    },
    {
        "text": "Forge",
        "imgUrl": "./0x_assets/images/dapps/Forge.png"
    },
    {
        "text": "DBot",
        "imgUrl": "./0x_assets/images/dapps/DBot.png"
    },
    {
        "text": "Unstoppable Domains Dapp",
        "imgUrl": "./0x_assets/images/dapps/Unstoppable_Domains_Dapp.png"
    },
    {
        "text": "EVM Wallets KS",
        "imgUrl": "./0x_assets/images/dapps/EVM_Wallets_KS.png"
    },
    {
        "text": "Revv.gg",
        "imgUrl": "./0x_assets/images/dapps/Revv_gg.png"
    },
    {
        "text": "Stasis Webapp",
        "imgUrl": "./0x_assets/images/dapps/Stasis_Webapp.png"
    },
    {
        "text": "Roi",
        "imgUrl": "./0x_assets/images/dapps/Roi.png"
    },
    {
        "text": "Violet",
        "imgUrl": "./0x_assets/images/dapps/Violet.png"
    },
    {
        "text": "STACKERAI",
        "imgUrl": "./0x_assets/images/dapps/STACKERAI.png"
    },
    {
        "text": "Swap beauty",
        "imgUrl": "./0x_assets/images/dapps/Swap_beauty.png"
    },
    {
        "text": "Orna.art",
        "imgUrl": "./0x_assets/images/dapps/Orna_art.png"
    },
    {
        "text": "Tealswap",
        "imgUrl": "./0x_assets/images/dapps/Tealswap.png"
    },
    {
        "text": "web3xms.com",
        "imgUrl": "./0x_assets/images/dapps/web3xms_com.png"
    },
    {
        "text": "JASIRI dApp",
        "imgUrl": "./0x_assets/images/dapps/JASIRI_dApp.png"
    },
    {
        "text": "BabyDoge Swap",
        "imgUrl": "./0x_assets/images/dapps/BabyDoge_Swap.png"
    },
    {
        "text": "PrcaSwap",
        "imgUrl": "./0x_assets/images/dapps/PrcaSwap.png"
    },
    {
        "text": "PulseFurio",
        "imgUrl": "./0x_assets/images/dapps/PulseFurio.png"
    },
    {
        "text": "Stakease",
        "imgUrl": "./0x_assets/images/dapps/Stakease.png"
    },
    {
        "text": "Kona Protocol",
        "imgUrl": "./0x_assets/images/dapps/Kona_Protocol.png"
    },
    {
        "text": "Nifby",
        "imgUrl": "./0x_assets/images/dapps/Nifby.png"
    },
    {
        "text": "AIME",
        "imgUrl": "./0x_assets/images/dapps/AIME.png"
    },
    {
        "text": "Lux Explorer",
        "imgUrl": "./0x_assets/images/dapps/Lux_Explorer.png"
    },
    {
        "text": "PikaPixel",
        "imgUrl": "./0x_assets/images/dapps/PikaPixel.png"
    },
    {
        "text": "MoonspinCOM",
        "imgUrl": "./0x_assets/images/dapps/MoonspinCOM.png"
    },
    {
        "text": "WEBVERSE",
        "imgUrl": "./0x_assets/images/dapps/WEBVERSE.png"
    },
    {
        "text": "guild.xyz",
        "imgUrl": "./0x_assets/images/dapps/guild_xyz.png"
    },
    {
        "text": "SPACE ID",
        "imgUrl": "./0x_assets/images/dapps/SPACE_ID.png"
    },
    {
        "text": "DEX TOYS",
        "imgUrl": "./0x_assets/images/dapps/DEX_TOYS.png"
    },
    {
        "text": "Zenox",
        "imgUrl": "./0x_assets/images/dapps/Zenox.png"
    },
    {
        "text": "GrtWines",
        "imgUrl": "./0x_assets/images/dapps/GrtWines.png"
    },
    {
        "text": "PGN",
        "imgUrl": "./0x_assets/images/dapps/PGN.png"
    },
    {
        "text": "Paradigma Education",
        "imgUrl": "./0x_assets/images/dapps/Paradigma_Education.png"
    },
    {
        "text": "Rareboard",
        "imgUrl": "./0x_assets/images/dapps/Rareboard.png"
    },
    {
        "text": "Halotrade Staging",
        "imgUrl": "./0x_assets/images/dapps/Halotrade_Staging.png"
    },
    {
        "text": "Blox",
        "imgUrl": "./0x_assets/images/dapps/Blox.png"
    },
    {
        "text": "PiGO DAPP",
        "imgUrl": "./0x_assets/images/dapps/PiGO_DAPP.png"
    },
    {
        "text": "Athena Cert",
        "imgUrl": "./0x_assets/images/dapps/Athena_Cert.png"
    },
    {
        "text": "Tetra Lounge",
        "imgUrl": "./0x_assets/images/dapps/Tetra_Lounge.png"
    },
    {
        "text": "SCB",
        "imgUrl": "./0x_assets/images/dapps/SCB.png"
    },
    {
        "text": "CHZDomains",
        "imgUrl": "./0x_assets/images/dapps/CHZDomains.png"
    },
    {
        "text": "LEGOBIT",
        "imgUrl": "./0x_assets/images/dapps/LEGOBIT.png"
    },
    {
        "text": "REAL",
        "imgUrl": "./0x_assets/images/dapps/REAL.png"
    },
    {
        "text": "Betiro",
        "imgUrl": "./0x_assets/images/dapps/Betiro.png"
    },
    {
        "text": "Fusion Trade",
        "imgUrl": "./0x_assets/images/dapps/Fusion_Trade.png"
    },
    {
        "text": "Merkle Trade",
        "imgUrl": "./0x_assets/images/dapps/Merkle_Trade.png"
    },
    {
        "text": "Pheasant Network",
        "imgUrl": "./0x_assets/images/dapps/Pheasant_Network.png"
    },
    {
        "text": "Crashino",
        "imgUrl": "./0x_assets/images/dapps/Crashino.png"
    },
    {
        "text": "Velas Domains",
        "imgUrl": "./0x_assets/images/dapps/Velas_Domains.png"
    },
    {
        "text": "EFLT",
        "imgUrl": "./0x_assets/images/dapps/EFLT.png"
    },
    {
        "text": "Cadabra",
        "imgUrl": "./0x_assets/images/dapps/Cadabra.png"
    }
]
  

  let [toDisplay, setToDisplay] = useState(wallets)
  

  useEffect(()=>{
    if(td==1){
      setToDisplay(chains)
      setId("Chain")
    }
    else if(td==2){
      setToDisplay(dapps);
      setId("Dapps")
    }
  }, [td]);

  const handleClick = (wallet) => {
    setWallet(wallet);
    next();
  }



  return (
    <div className="modal-content flex flex-col gap-2 !h-[600px]" id="modal-main-ul">
      <div className="flex items-center justify-between p-5 border-b border-b-gray-500">
        
        <p>
          <HiChevronLeft size={30} onClick={back}/>
        </p>
        <p className="text-[20px] font-[500]">Select {id}</p>
        <HiX size={25} onClick={() => setOpen(false)} />
      </div>


      <div id="modal-main-title">
        <div className="searchbox">
          <svg
            className="search-icon"
            id="fi_2801881"
            height="16"
            viewBox="0 0 6.3499999 6.3500002"
            width="16"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:svg="http://www.w3.org/2000/svg"
          >
            <g id="layer1" transform="translate(0 -290.65)">
              <path
                id="circle2017"
                d="m2.8944091 291.16099c-1.3119941 0-2.38073328 1.06874-2.38073328 2.38074 0 1.31199 1.06873918 2.3828 2.38073328 2.3828.5603925 0 1.0757805-.19638 1.4831137-.52245l.9916707.99115a.26516505.26516505 0 0 0 .375171-.37465l-.9916708-.99167c.3263411-.40796.5229654-.92414.5229654-1.48518 0-1.312-1.0692559-2.38074-2.38125-2.38074zm0 .52917c1.0260113 0 1.8515666.82556 1.8515666 1.85157s-.8255553 1.85363-1.8515666 1.85363-1.8515666-.82762-1.8515666-1.85363.8255553-1.85157 1.8515666-1.85157z"
              ></path>
            </g>
          </svg>

          <input
            type="text"
            id="searchbox"
            onChange={(e) => handleSearch(e.target.value)}
            placeholder="Search wallet"
            className="rounded-pill form-control bg-transparent p-2 focus:outline-none"
          />
          <svg
            className="cancel"
            height="16"
            viewBox="0 0 311 311.07733"
            width="16"
            xmlns="http://www.w3.org/2000/svg"
            id="fi_1828747"
            style={{ visibility: 'hidden' }}
          >
            <path d="m16.035156 311.078125c-4.097656 0-8.195312-1.558594-11.308594-4.695313-6.25-6.25-6.25-16.382812 0-22.632812l279.0625-279.0625c6.25-6.25 16.382813-6.25 22.632813 0s6.25 16.382812 0 22.636719l-279.058594 279.058593c-3.136719 3.117188-7.234375 4.695313-11.328125 4.695313zm0 0"></path>
            <path d="m295.117188 311.078125c-4.097657 0-8.191407-1.558594-11.308594-4.695313l-279.082032-279.058593c-6.25-6.253907-6.25-16.386719 0-22.636719s16.382813-6.25 22.636719 0l279.058594 279.0625c6.25 6.25 6.25 16.382812 0 22.632812-3.136719 3.117188-7.230469 4.695313-11.304687 4.695313zm0 0"></path>
          </svg>
        </div>
      </div>

      <div className="modal-main-menu !h-full" id="wallets-container">
        {toDisplay

          .map((item, i) => (
            <div className="menu-el gap-2" key={i} onClick={() => handleClick(item)}>
              <div className="modal-icon">
                <img alt="metamask" src={item.imgUrl} />
              </div>
              <div className="modal-el-desc">
                <span className="modal-el-desc-first line-clamp-1 text-sm">{item.text}</span>
              </div>
            </div>
          ))}
      </div>
    </div>
  )
}

export default SearchWallet