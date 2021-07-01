import logo from './logo.svg';
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

function App() {
  const digits_only = string => [...string].every(c => '0123456789'.includes(c));
  const checkValue = () => {
    let val = document.getElementById("valid-amount").value ;
    
    if(!digits_only(val) || !val){
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
    else{
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
const toggleList = () =>{
  document.getElementById("curr-menu").classList.toggle("hidden")
} 
const setToOption1 = () => {
  document.getElementById("currency-value").textContent = "BUSD" ; 
  document.getElementById("curr-menu").classList.add("hidden")
}
const setToOption2 = () => {
  document.getElementById("currency-value").textContent = "BNB" ;
  document.getElementById("curr-menu").classList.add("hidden")
}
const hideModal = () => {
  document.getElementById("newsletter").classList.add("hidden")
}

  return (
      <div onClick={hideModal} className="relative">
          <ToastContainer />
          <div id="newsletter" className="modal w-full h-full relative flex justify-center items-center">
              <div className="modal-box bg-gray-900 shadow-lg w-8/12 lg:w-5/12  absolute z-30 top-24 px-10  py-8 flex flex-col justify-center items-center">
                  <h1 className="text-3xl text-white font-medium text-center">Connect to a wallet</h1>
                  <div className="rounded-2xl w-full mt-16">
                      <button className="modal-button1 flex items-center justify-between px-4 py-4 w-full">
                          <p className="text-3xl text-white">Metamask</p>
                          <div>
                              <img src="https://bullrock.vip/assets/image%2027.svg" alt="" />
                          </div>
                      </button>
                  </div>
                  <button className="border-4 border-gray-600 flex items-center justify-between px-4 py-4 w-full mt-8">
                      <p className="text-3xl text-gray-100">Trust Wallet</p>
                      <div>
                          <img src="https://bullrock.vip/assets/image%2028.svg" alt="" />
                      </div>
                  </button>
                  <button className="border-4 border-gray-600 flex items-center justify-between px-4 py-4 w-full mt-8">
                      <p className="text-3xl text-gray-100">SafePal</p>
                      <div>
                          <img src="https://bullrock.vip/assets/image%2029.svg" alt="" />
                      </div>
                  </button>
              </div>
          </div>
          <div className=" pb-16 sm:pb-40 md:pb-48 lg:pb-20 relative">
              <div id="menu" className="hidden lg:hidden bg-gray-900 py-8 px-4 absolute z-20 top-12 right-16 md:right-32 w-4/12 shadow-2xl">
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
              <img src="https://i.ibb.co/bQrWLjY/hero-bg.jpg" alt="" className="absolute inset-0 object-fill object-center bg-image" />
              <div className="container mx-auto xl:px-20 relative z-10">
                  <div className="flex items-center justify-between  p-4 bg-gray-50 bg-opacity-5">
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
                  <div className="flex flex-col space-y-8 lg:space-y-0 lg:flex-row items-strech justify-center px-14 lg:-mt-4 ">
                      <div className="flex flex-col justify-center lg:w-3/5">
                          <h1 className="text-4xl leading-normal font-medium text-white">NO LOSS JACKPOT By LOVEPOT</h1>
                          <p className="text-base leading-normal text-gray-300 mt-4 lg:w-8/12">The Love Pot Collects The Total Yield (Profits) Accrued Over A Set Period Of Time Based On The Total Stake, And Distributes These Profits To One Of The Pot Participants.</p>
                          <button className="rounded-full py-2 px-8 bg-button-image w-10/12 lg:w-6/12 mt-8 text-white hover:underline">Presale Starting Soon</button>
                      </div>
                      <div className="lg:w-2/5 h-full ">
                          <div className="w-full h-full rounded-lg shadow-2xl bg-gradient-to-b from-indigo-500 via-indigo-500 to-purple-500 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105 hover-bg">
                              <div className="flex items-center justify-between p-4">
                                  <p>Farming</p>
                                  <p className="mr-6">7 Days Locked</p>
                              </div>
                              <h2 className="text-center text-xl font-medium mt-10 ">Goal To Rise $100,000</h2>
                              <h3 className="text-4xl mt-4 text-white font-semibold text-center">Prestale Start In</h3>
                              <div className="border-b border-t border-gray-500 mt-4 py-4 flex justify-center space-x-2">
                                  <div className="flex flex-col space-y-2 items-center">
                                      <p className="font-light  text-6xl">00</p>
                                      <p className="uppercase  text-xl">Days</p>
                                  </div>
                                  <p className="font-light  text-6xl -mt-1">:</p>
                                  <div className="flex flex-col space-y-2 items-center">
                                      <p className="font-light  text-6xl">00</p>
                                      <p className="uppercase  text-xl">Hours</p>
                                  </div>
                                  <p className="font-light  text-6xl -mt-1">:</p>
                                  <div className="flex flex-col space-y-2 items-center">
                                      <p className="font-light  text-6xl">00</p>
                                      <p className="uppercase  text-xl">Min</p>
                                  </div>
                                  <p className="font-light  text-6xl -mt-1">:</p>
                                  <div className="flex flex-col space-y-2 items-center">
                                      <p className="font-light  text-6xl">00</p>
                                      <p className="uppercase  text-xl">Sec</p>
                                  </div>
                              </div>
                              <div className="pt-6 pb-3 flex items-center justify-between px-4">
                                  <p className="text-base uppercase">Total Sale</p>
                                  <p className="text-base"> 100,000.000 BUNNY</p>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
          <div className="content-area">
              <div className="container mx-auto py-12 flex flex-col justify-center items-center text-center">
                  <h1 className="text-5xl gray-600 text-white">Buy BULLROCK (BLRS)</h1>
                  <p className="text-lg mt-4 text-white">MIN: ~0.005 BNB / MAX: ~10 BNB (+GAS BNB / BEP20)</p>
                  <div className="mt-8 flex items-center bg-gray-900 p-2 rounded-full space-x-2">
                      <div className="flex items-center space-x-2">
                          <img src="https://bullrock.vip/assets/Group.svg" alt="" />
                          <p className="text-lg font-black italic" style={{ color: "rgb(116, 63, 229)" }}>
                              Attention:{" "}
                          </p>
                      </div>
                      <p className="text-base font-black italic text-white">For every 1000 BNB of purchases, its price increases</p>
                  </div>
                  <div className="mt-12 border-4 lg:w-5/12 border-black rounded-3xl content-area p-6 flex flex-col justify-center items-center">
                      <div className="flex items-center justify-between w-full">
                          <h2 className="text-2xl text-white font-bold">Swap</h2>
                          <div>
                              <img src="https://bullrock.vip/assets/Setting.svg" alt="" />
                          </div>
                      </div>
                      <div className="mt-6 bg-gray-900 pt-6 px-4 pb-4 w-full rounded-3xl flex justify-between shadow-2xl ">
                          <div className="flex flex-col justify-start space-y-8">
                              <p className="text-gray-600 text-lg text-left">From</p>
                              <input id="valid-amount" type="text" placeholder="0" className="text-3xl focus:outline-none text-white bg-transparent w-40" />
                          </div>
                          <div className="flex flex-col justify-end relative">
                              <button onClick={toggleList} className="content-area flex items-center rounded-lg py-3 px-2 space-x-4">
                                  <div>
                                      <img src="https://bullrock.vip/assets/bnb.svg" alt="" />
                                  </div>
                                  <p id="currency-value" className="text-xl text-white">
                                      BUSD
                                  </p>
                                  <div>
                                      <img src="https://bullrock.vip/assets/down.svg" alt="" />
                                  </div>
                              </button>

                              <div id="curr-menu" className="hidden absolute z-10 -bottom-20 pt-1 pb-1 w-11/12 rounded flex flex-col bg-gray-900">
                                  <button onClick={setToOption1} className="text-white text-xl pb-3 px-2 text-left border-b hover:bg-gray-800 border-gray-300">
                                      BUSD
                                  </button>
                                  <button onClick={setToOption2} className="text-white text-xl pb-3 px-2 text-left border-b border-gray-300 hover:bg-gray-800">
                                      BNB
                                  </button>
                              </div>
                          </div>
                      </div>
                      <div>
                          <p id="error-message" className="text-red-500 font-bold text-3xl hidden">
                              Enter Valid Amount
                          </p>
                      </div>
                      <div className="mt-8">
                          <img src="https://bullrock.vip/assets/Arrow%202.svg" alt="" />
                      </div>
                      <div className="mt-8 bg-gray-900 pt-6 px-4 pb-4 w-full rounded-3xl flex justify-between shadow-2xl ">
                          <div className="flex flex-col justify-start space-y-8">
                              <p className="text-gray-600 text-lg text-left">To</p>
                              <input type="text" value={0} className="text-3xl focus:outline-none text-white bg-transparent w-40" />
                          </div>
                          <div className="flex flex-col justify-end relative">
                              <button className="content-area flex items-center rounded-lg py-3 px-4 space-x-8">
                                  <div>
                                      <img src="https://bullrock.vip/assets/bull-rock.svg" alt="" />
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
                      <button onClick={checkValue} className="hover:bg-transparent mt-6 w-full rounded-full bg-black shadow-inner py-4 text-white text-3xl uppercase">
                          Buy Bullrock Swap
                      </button>
                  </div>
                  <div className="mt-14 flex justify-center">
                      <p className="text-center text-white text-lg w-7/12">For every purchase that your referral makes, you will receive an additional 10% token to your wallet.</p>
                  </div>
                  <div className="mt-14">
                      <p className="text-lg font-bold text-white">TOKEN ADDRESS: 0xF915E8306028a0F99A548f31317b056A52cfbaC1</p>
                  </div>
                  <div className="mt-20 bg-gray-900 p-2 flex justify-center rounded-xl mx-4 lg:w-5/12">
                      <p className="italic text-sm" style={{ color: "rgb(116, 63, 229)" }}>
                          Attention:
                      </p>
                      <p className="text-white italic text-sm">Remember that Bull Rock Swap is a deflationary token which means that a Fee applies to any purchase, sale and transfer of wallet: from 20% (6% Holder, 5% Brun, 5% Liquidity and 4% Marketing and exchanges.</p>
                  </div>

                  <div className="mt-10">
                      <h2 className="hpRDUw">CLAIM AIRDROP</h2>
                      <p className="text-white text-lg text-center mt-4">Claim your token now and start buying at the lowest market price.</p>
                      <p className=" text-white mt-4" style={{ fontSize: "38px" }}>
                          2,000,000,000 BLRS
                      </p>
                      <button className="uppercase content-area rounded-md text-white text-light text-lg py-4 px-6 mt-8 shadow-2xl focus:outline-none">Claim Airdrop here</button>
                      <p className="uppercase text-base mt-8 text-white">CLAIM AIRDROP NOW 10,000 BLRS FOR FREE (+GAS BNB / BEP20)</p>
                  </div>

                  <div className="mt-24 border-t-2 border-b-2  border-white px-10 py-20 w-8/12 flex flex-col items-center">
                      <h2 className="text-4xl text-white text-center">Invite by</h2>
                      <input type="text" className="focus:outline-none lg:w-10/12 mt-6 gradient-border bg-gray-900 py-4 px-8 text-center text-2xl text-gray-600" value={"CONNECT YOUR WALLET"} />
                      <p className="text-4xl text-white text-center w-11/12 mt-8">For referring another partner, you automatically receive 5,000 BLRS</p>
                  </div>

                  <div className="mt-24 w-8/12 flex flex-col items-center px-10">
                      <h2 className="text-4xl text-white text-center">My referral link</h2>
                      <input type="text" className="lg:w-10/12 mt-6 gradient-border bg-gray-900 py-4 px-8 text-center text-2xl text-gray-600" value={"CONNECT YOUR WALLET"} />
                      <button onClick={CopyLink} className="uppercase mt-12 py-3 shadow-2xl focus:outline-none text-white px-8 content-area rounded-md ">
                          Copy My referral Link
                      </button>
                  </div>
              </div>
          </div>
          <div className="py-8 flex space-x-10 justify-center items-center w-full bg-gray-900">
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
