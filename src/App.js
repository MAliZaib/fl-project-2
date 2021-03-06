import logo from './logo.svg';
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

function App() {
    const digits_only = string => [...string].every(c => '0123456789'.includes(c));
    const checkValue = () => {
        let val = document.getElementById("valid-amount").value;

        if (!digits_only(val) || !val) {
            // document.getElementById("error-message").classList.remove("hidden")
            toast.error("Enter Valid Amount", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }
        else {
            document.getElementById("error-message").classList.add("hidden")
        }
    }
    const CopyLink = () => {
        toast.success('Copied!', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
    }
    const toggleMenu = () => {
        document.getElementById("menu").classList.toggle("hidden")
    }
    const toggleList = () => {
        document.getElementById("curr-menu").classList.toggle("hidden")
    }
    const setToOption1 = () => {
        document.getElementById("currency-value").textContent = "BUSD";
        document.getElementById("curr-menu").classList.add("hidden")
    }
    const setToOption2 = () => {
        document.getElementById("currency-value").textContent = "BNB";
        document.getElementById("curr-menu").classList.add("hidden")
    }
    const hideModal = () => {
        document.getElementById("newsletter").classList.add("hidden")
    }

    return (
        <div onClick={hideModal} className="relative">
            <ToastContainer />
            <div id="newsletter" className="modal w-full h-full relative flex justify-center items-center">
                <div className="modalbox-height modal-box bg-gray-900 shadow-lg w-9/12 sm:w-7/12 md:w-8/12 lg:w-5/12  absolute z-30 top-24 px-4 xl:px-10  py-8 flex flex-col justify-center items-center">
                    <h1 className="text-xl sm:text-2xl md:text-3xl text-white font-medium text-center">Connect to a wallet</h1>
                    <div className="rounded-2xl w-full mt-8 md:mt-16">
                        <button className="modal-button1 flex items-center justify-between md:px-4 px-2 py-2 md:py-4 w-full">
                            <p className="text-xl sm:text-2xl md:text-3xl text-white">Metamask</p>
                            <div>
                                <img src="https://bullrock.vip/assets/image%2027.svg" alt="" />
                            </div>
                        </button>
                    </div>
                    <button className="border-4 border-gray-600 flex items-center justify-between px-2 md:px-4 py-2 md:py-4 w-full mt-4 md:mt-8">
                        <p className="text-xl sm:text-2xl md:text-3xl text-gray-100">Trust Wallet</p>
                        <div>
                            <img src="https://bullrock.vip/assets/image%2028.svg" alt="" />
                        </div>
                    </button>
                    <button className="border-4 border-gray-600 flex items-center justify-between px-2 md:px-4 py-2 md:py-4 w-full mt-4 md:mt-8">
                        <p className="text-xl sm:text-2xl md:text-3xl text-gray-100">SafePal</p>
                        <div>
                            <img src="https://bullrock.vip/assets/image%2029.svg" alt="" />
                        </div>
                    </button>
                </div>
            </div>
            <div className="pb-4 sm:pb-8 lg:pb-16 relative">

                <img src="https://i.ibb.co/bQrWLjY/hero-bg.jpg" alt="" className="absolute inset-0 object-fill object-center bg-image" />
                <div className="container mx-auto xl:px-20 relative z-10">
                    <div className="flex items-center justify-between  p-4 bg-gray-50 bg-opacity-5 relative">
                        <div id="menu" className="hidden lg:hidden bg-gray-900 py-8 px-4 absolute z-20 top-12 right-10 w-6/12 md:w-5/12 shadow-2xl">
                            <ul className="flex flex-col space-y-8">
                                <li className="border-b border-gray-600 pb-2">
                                    <a href="javascript:void(0)" className="hover:underline text-base text-white">
                                        Pot
                                    </a>
                                </li>
                                <li className="border-b border-gray-600 pb-2">
                                    <a href="javascript:void(0)" className="hover:underline text-base text-white">
                                        Farm
                                    </a>
                                </li>
                                <li className="border-b border-gray-600 pb-2">
                                    <a href="javascript:void(0)" className="hover:underline text-base text-white">
                                        Swap
                                    </a>
                                </li>
                                <li className="border-b border-gray-600 pb-2">
                                    <a href="javascript:void(0)" className="hover:underline text-base text-white">
                                        Whitepaper
                                    </a>
                                </li>
                                <li className="border-b border-gray-600 pb-2">
                                    <a href="javascript:void(0)" className="hover:underline text-base text-white">
                                        Medium
                                    </a>
                                </li>
                                <li className="border-b border-gray-600 pb-2">
                                    <a href="javascript:void(0)" className="hover:underline text-base text-white">
                                        News
                                    </a>
                                </li>
                            </ul>
                            <div className="flex flex-col space-y-8 mt-8">
                                <button className="rounded-full py-1 px-3 text-white bg-transparent bnb-border">BNB</button>
                                <button className="rounded-full py-1 px-3 text-white bg-transparent button-md-bg">Connect Wallet</button>
                            </div>
                        </div>
                        <div className="w-1/4">
                            <img src="https://www.lokiswap.finance/wp-content/uploads/2021/06/logo.png" alt="" />
                        </div>
                        <div className="w-1/2 flex justify-center hidden lg:block">
                            <ul className="flex items-center space-x-8">
                                <li>
                                    <a href="javascript:void(0)" className="hover:underline text-base text-white">
                                        Pot
                                    </a>
                                </li>
                                <li>
                                    <a href="javascript:void(0)" className="hover:underline text-base text-white">
                                        Farm
                                    </a>
                                </li>
                                <li>
                                    <a href="javascript:void(0)" className="hover:underline text-base text-white">
                                        Swap
                                    </a>
                                </li>
                                <li>
                                    <a href="javascript:void(0)" className="hover:underline text-base text-white">
                                        Whitepaper
                                    </a>
                                </li>
                                <li>
                                    <a href="javascript:void(0)" className="hover:underline text-base text-white">
                                        Medium
                                    </a>
                                </li>
                                <li>
                                    <a href="javascript:void(0)" className="hover:underline text-base text-white">
                                        News
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="flex items-center justify-end space-x-6 w-1/4 hidden lg:block">
                            <a href="javascript:void(0)" className="hover:underline text-white">
                                BNB
                            </a>
                            <button className="rounded-full py-2 px-6 text-white hover:underline" style={{ backgroundColor: "#e21b63" }}>
                                Connect Wallet
                            </button>
                        </div>
                        <div className="lg:hidden">
                            <button onClick={toggleMenu} className="focus:outline-none focus:ring-2 focus:ring-gray-200 rounded">
                                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-menu-2" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                    <line x1="4" y1="6" x2="20" y2="6" />
                                    <line x1="4" y1="12" x2="20" y2="12" />
                                    <line x1="4" y1="18" x2="20" y2="18" />
                                </svg>
                            </button>
                        </div>
                    </div>
                    <div className="flex px-4  md:px-6 lg:px-10 ">
                        <div className="flex flex-col justify-center mt-1 sm:mt-4 md:mt-12 lg:mt-20 ">
                            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl leading-normal font-medium text-white">NO LOSS JACKPOT By LOVEPOT</h1>
                            <p className="text-xm sm:text-base leading-normal text-gray-300 mt-4 lg:w-8/12">The Love Pot Collects The Total Yield (Profits) Accrued Over A Set Period Of Time Based On The Total Stake, And Distributes These Profits To One Of The Pot Participants.</p>
                            <button className="rounded-full py-2 px-8 bg-button-image w-11/12 sm:w-5/12 md:w-4/12 lg:w-3/12 mt-8 text-white hover:underline">Presale Starting Soon</button>
                        </div>
                    </div>
                </div>
            </div>
            <div style={{backgroundColor: "#1e134b"}}>
                <div className="container mx-auto py-14 sm:py-12 flex flex-col justify-center items-center text-center">
                    <h1 className="text-2xl md:text-4xl lg:text-5xl gray-600 text-white">Buy BULLROCK (BLRS)</h1>
                    <p className="text-xs sm:text-base lg:text-lg mt-4 text-white">MIN: ~0.005 BNB / MAX: ~10 BNB (+GAS BNB / BEP20)</p>
                    <div className="px-2">
                    <div className="mt-8 flex flex-col sm:flex-row items-center shadow-css1 py-2 px-4 md:py-2 rounded-full sm:space-x-2">
                        <div className="flex items-center space-x-2">
                            <img src="https://bullrock.vip/assets/Group.svg" alt="" />
                            <p className="text-base lg:text-lg font-black italic" style={{ color: "rgb(116, 63, 229)"}}>
                                Attention:{" "}
                            </p>
                        </div>
                        <p className="text-sm md:text-base font-black italic text-white">For every 1000 BNB of purchases, its price increases</p>
                    </div>
                    </div>
                    <div className="mt-6 md:mt-12 w-11/12 lg:w-5/12 border-rounded-table rounded-3xl content-area p-4 md:p-6 flex flex-col justify-center items-center shadow-css">
                        <div className="flex items-center justify-between w-full">
                            <h2 className="text-xl md:text-2xl text-white font-bold">Swap</h2>
                            <div>
                                <img src="https://bullrock.vip/assets/Setting.svg" alt="" />
                            </div>
                        </div>
                        <div className="mt-4 md:mt-6 pt-4 md:pt-6 px-2 md:px-4 pb-2 md:pb-4 w-full rounded-2xl md:rounded-3xl flex justify-between shadow-css1 ">
                            <div className="flex flex-col justify-start space-y-4 md:space-y-8">
                                <p className="text-gray-600 text-lg text-left">From</p>
                                <input id="valid-amount" type="text" placeholder="0" className="text-3xl focus:outline-none text-white bg-transparent w-40" />
                            </div>
                            <div className="flex flex-col justify-end relative">
                                <button onClick={toggleList} className="content-area-button flex items-center rounded-lg py-2 md:py-3 px-1 md:px-2 space-x-4">
                                    <div>
                                        <img src="https://bullrock.vip/assets/bnb.svg" alt="" />
                                    </div>
                                    <p id="currency-value" className="text-base md:text-xl text-white">
                                        BUSD
                                    </p>
                                    <div>
                                        <img src="https://bullrock.vip/assets/down.svg" alt="" />
                                    </div>
                                </button>

                                <div id="curr-menu" className="hidden absolute z-10 -bottom-28  pt-1 pb-1 w-11/12 rounded flex flex-col bg-gray-900">
                                    <button onClick={setToOption1} className="text-white text-base md:text-xl pb-3 px-2 text-left border-b hover:bg-gray-800 border-gray-300">
                                        BUSD
                                    </button>;
                                    <button onClick={setToOption2} className="text-white text-base md:text-xl pb-3 px-2 text-left border-b border-gray-300 hover:bg-gray-800">
                                        BNB
                                    </button>
                                </div>
                            </div>
                        </div>
                        
                        <div className="mt-4 md:mt-8">
                            <img src="https://bullrock.vip/assets/Arrow%202.svg" alt="" />
                        </div>
                        <div className="mt-4 md:mt-8 bg-gray-900 pt-6 px-4 pb-4 w-full rounded-3xl flex justify-between shadow-2xl shadow-css1">
                            <div className="flex flex-col justify-start space-y-4 md:space-y-8">
                                <p className="text-gray-600 text-lg text-left">To</p>
                                <input type="text" value={0} className="text-3xl focus:outline-none text-white bg-transparent w-10" />
                            </div>
                            <div className="flex flex-col justify-end relative">
                                <button className="content-area-button flex items-center rounded-lg py-2 md:py-3 px-1 md:px-4 space-x-8 w-full">
                                    <div>
                                        <img src="https://bullrock.vip/assets/bull-rock.svg" alt="" className="" />
                                    </div>
                                    <p id="currency-value" className="text-xl text-white">
                                        BLRS
                                    </p>
                                    <div>
                                        <img src="https://bullrock.vip/assets/down.svg" alt="" />
                                    </div>
                                </button>
                            </div>
                        </div>
                        <div className="mt-4 flex items-center justify-between w-full px-4">
                            <p className="text-white">Price</p>
                            <p className="text-white font-medium">1445240000 BLRS per BNB</p>
                        </div>
                        <button onClick={checkValue} className=" mt-6 md:mt-10 lg:mt-6 w-full rounded-full content-area-button shadow-inner py-2 lg:py-4 text-white text-xl sm:text-2xl lg:text-3xl uppercase">
                            Buy Bullrock Swap
                        </button>
                    </div>
                    <div className="mt-7 md:mt-14 flex justify-center">
                        <p className="text-center text-white text-lg w-11/12 md:w-7/12">For every purchase that your referral makes, you will receive an additional 10% token to your wallet.</p>
                    </div>
                    <div className="mt-7 md:mt-14">
                        <p className="text-sm sm:text-base lg:text-lg font-bold text-white">TOKEN ADDRESS: 0xF915E8306028a0F99A548f31317b056A52cfbaC1</p>
                    </div>
                    <div className="mt-8 md:mt-10 lg:mt-20 bg-gray-900 shadow-css1 p-2 flex flex-col sm:flex-row justify-center rounded-xl mx-4 lg:w-5/12">
                        <p className="italic text-sm" style={{ color: "rgb(116, 63, 229)" }}>
                            Attention:
                        </p>
                        <p className="text-white italic text-sm">Remember that Bull Rock Swap is a deflationary token which means that a Fee applies to any purchase, sale and transfer of wallet: from 20% (6% Holder, 5% Brun, 5% Liquidity and 4% Marketing and exchanges.</p>
                    </div>

                    <div className="md:mt-6 lg:mt-10 mx-4">
                        <h2 className="hpRDUw text-center">CLAIM AIRDROP</h2>
                        <p className="text-white text-sm sm:text-lg text-center mt-4">Claim your token now and start buying at the lowest market price.</p>
                        <p className=" text-white mt-4 text-3xl sm:text-4xl" >
                            2,000,000,000 BLRS
                        </p>
                        <button className="uppercase content-area rounded-md text-white text-light text-base md:text-lg py-3 md:py-4 px-3 md:px-6 mt-4 md:mt-8 shadow-2xl focus:outline-none">Claim Airdrop here</button>
                        <p className="uppercase text-base mt-4 md:mt-8 text-white">CLAIM AIRDROP NOW 10,000 BLRS FOR FREE (+GAS BNB / BEP20)</p>
                    </div>

                    <div className="mt-8 md:mt-14 lg:mt-24 border-t-2 border-b-2  border-white px-4 md:px-10 py-6 md:py-10 lg:py-20 lg:w-8/12 flex flex-col items-center">
                        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-white text-center">Invite by</h2>
                        <input type="text" className="focus:outline-none w-11/12 lg:w-10/12 mt-3 lg:mt-6 gradient-border shadow-css1 bg-gray-900 py-2 lg:py-4 px-4 sm:px-8 text-center text-base md:text-xl lg:text-2xl text-gray-600" value={"CONNECT YOUR WALLET"} />
                        <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-white text-center lg:w-11/12 mt-4 md:mt-8">For referring another partner, you automatically receive 5,000 BLRS</p>
                    </div>

                    <div className="mt-8 sm:mt-14 lg:mt-24 w-full lg:w-8/12 flex flex-col items-center px-4 md:px-10">
                        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-white text-center">My referral link</h2>
                        <input type="text" className="w-11/12 lg:w-10/12 mt-3 lg:mt-6 gradient-border bg-gray-900 py-2 shadow-css1 lg:py-4 px-8 text-center text-base md:text-xl lg:text-2xl text-gray-600" value={"CONNECT YOUR WALLET"} />
                        <button onClick={CopyLink} className="uppercase mt-6 lg:mt-12 py-2 content-area-button  md:py-3 shadow-2xl focus:outline-none text-white px-8 content-area rounded-md ">
                            Copy My referral Link
                        </button>
                    </div>
                </div>
            </div>
            <div className="py-8 flex space-x-10 justify-center items-center w-full content-area">
                <a href="javascript:void(0)" className="text-white hover:underline">
                    Chat
                </a>
                <a href="javascript:void(0)" className="text-white hover:underline">
                    Medium
                </a>
                <a href="javascript:void(0)" className="text-white hover:underline">
                    Github
                </a>
            </div>
        </div>
    );
}

export default App;
