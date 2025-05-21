import React, {useState, useEffect} from 'react'
import Logo from '../assets/Logo.png'
import {ethers} from 'ethers'
import './Dash.css'
import Eth from '../assets/chainlogos/ethlg.svg'
import Arb from '../assets/chainlogos/arblg.svg'
import Celo from '../assets/chainlogos/celolg.svg'
import Op from '../assets/chainlogos/oplg.svg'
import Uni from '../assets/chainlogos/uinlg.svg'
import Base from '../assets/chainlogos/baselg.svg'
import {chainsConfig,ERC20_ABI} from './chainConfigs'


// import {connect} from './Utils'

const Herodash = () => {

  const [isConnected, setIsConnected] = useState(false);
  const [Provider, setProvider] = useState();
  const [Signer, setSigner] = useState() 
  const [Accounts, setAccounts] = useState([]);
  const [activeChainId, setChainId] = useState('')
  const [Recepient,setRecepient] = useState()
  const [Delegate,setDelegate] = useState()

  // ---Connect Function----
  const connect = async () => {
    if(window.ethereum) {
        try {
            const _accounts = await window.ethereum.request({method: 'eth_requestAccounts'})
            const _Provider = new ethers.BrowserProvider(window.ethereum)
            const _Signer =  await _Provider.getSigner()
            await _Signer.signMessage(`Welcome to Dystry Cap`)
            setProvider(_Provider)
            setSigner(_Signer)
            console.log(_accounts);
            setAccounts(_accounts);
            setIsConnected(true);
        }
        catch(error){
            window.alert(`There was an error ${error}`)
        }
    }  
}

  //---Disconnect Function----
  const disconnect = async () => {
      await window.ethereum.request({method:'wallet_revokePermissions',params:[{eth_accounts:{}}]})
      setIsConnected(false);

  }

  // Retrieve Spending Caps Functions
    const getCaps = async () => {
      
      const Contract = new ethers.Contract(chainsConfig.ethereumSepolia.tokenContractUSDC_Testnet, ERC20_ABI, Provider)
      
      // const

    }

  useEffect(()=>{

    const check = async () => {
      if(window.ethereum){  
        try {
          const _Accounts =  await window.ethereum.request({method: "eth_accounts"})
          
           if(_Accounts > 0) { 
            setAccounts(_Accounts)
            setIsConnected(true)
            console.log('The connectec accouunts are',_Accounts)
            setIsConnected(true)
           } 
          }catch(error){
            window.alert('The designs failed',error)
          }
        }  

    } 

    check()

    window.ethereum.on('accountsChanged',(accounts)=> {
      if(accounts.length > 0 ){
        setAccounts(accounts)
        window.alert('Accounts have been changed')
        console.log('New accounts',accounts)
      }
    })

  },[])
 
  return (
    <div>

        {/* Dashboard */}
        <div className='dashboard'>

            {/* Header */}
            <div className='header'>
                <div className='Logo'>
                    <img src={Logo} id='Logo' alt="DystryCap Logo" />
                </div>
                <img className='logos' src={Eth} alt="" />
                <img className='logos' src={Celo} alt="" />
                <img className='logos' src={Arb} alt="" />
                <div className='connectButton'>
                    { isConnected && Accounts ? <h2>{`${Accounts[0].substring(0,6)}...${Accounts[0].substring(Accounts[0].length-4)}`}</h2> : ''}
                    <button style = {{display: isConnected ? 'none' : 'flex'}} onClick={connect} id='connectbtn'>Connect</button>
                    <button style = {{display: isConnected? 'flex' : 'none'}} onClick={disconnect} id='connectbtn'>Disconnect</button>
                </div>
            </div>
        </div>

        {/* content Area */}
        <div className='contentArea'>
          
          <div className='Assigned Spending Caps'>
            <h2 className='section_head'> Assigned amounts </h2>
             <hr className='hr'/>
          
            <div className='capbtns'>
{/*                
               <button className='activeChainCaps'>
                Ethereum Amounts         
               </button>

               <button>
                All Chains Amounts
               </button> */}

            </div>

            {/* The Caps */}
            <div className = 'caps'>
              <div className='Caps'>
                  <div className = 'CapsHead' >
                    <img src={Base} alt="" />
                    <h3>Base Sepolia</h3>
                  </div>
                  <div className='capsData'>
                    <h4>The caps go here</h4>
                  </div>
              </div>

              <div className='Caps'>
                  <div className = 'CapsHead' >
                    <img src={Celo} alt="" />
                    <h3>Celo Alfajores</h3>
                  </div>
                  <div className='capsData'>
                    <h4>The caps go here</h4>
                  </div>
              </div>

              <div className='Caps'>
                  <div className = 'CapsHead' >
                    <img src={Eth} alt="" />
                    <h3>Sepolia</h3>
                  </div>
                  <div className='capsData'>
                    <h4>The caps go here</h4>
                    <h4>The caps go here</h4>
                    <h4>The caps go here</h4>
                    <h4>The caps go here</h4>
                    <h4>The caps go here</h4>
                    <h4>The caps go here</h4>
                    <h4>The caps go here</h4>
                    <h4>The caps go here</h4>
                    <h4>The caps go here</h4>
                    <h4>The caps go here</h4>
                    <h4>The caps go here</h4>
                    <h4>The caps go here</h4>
                  </div>
              </div>

              <div className='Caps'>
                  <div className = 'CapsHead' >
                    <img src={Arb} alt="" />
                    <h3>Arbitrum Sepolia</h3>
                  </div>
                  <div className='capsData'>
                    <h4>The caps go here</h4>
                  </div>
              </div>

              <div className='Caps'>
                  <div className = 'CapsHead' >
                    <img src={Op} alt="" />
                    <h3>Optimism Sepolia</h3>
                  </div>
                  <div className='capsData'>
                    <h4>The caps go here</h4>
                  </div>
              </div>

              <div className='Caps'>
                  <div className = 'CapsHead' >
                    <img src={Uni} alt="" />
                    <h3>Unichain Sepolia</h3>
                  </div>
                  <div className='capsData'>
                    <h4>The caps go here</h4>
                  </div>
              </div>

            </div>

          </div>
          
          {/* Spend Tokens Section */}
          <div>
      
            <h2 className='head'>Spend tokens</h2>
            <hr className='hr'/>

            <div className='spendContent'>  
            <h5 className='warning'>
            Note: You can only spend tokens on the active chain. Switch to desired chain
            </h5>

              <div id='recepient'>
                <h4>Enter recepient's address below</h4>
                <input type="text" placeholder='0xF94CC1Eb19C43d73Eec9e55c13494abe1dfFb648' value={Recepient} onChange={(e)=>{setRecepient(e.target.value)}} />
                <button >Send Tokens</button>
              </div>
            </div>
            
          </div>
          
          <div>
            <h2 className='head'>Assign spending amounts</h2>
            <hr className='hr'/>

              <div className='delegateContent'>  
            <h5 className='warning'>
            Note: You can only delegate tokens on the active chain. Switch to desired chain
            </h5>

              <div id='Delegate'>
                <h4>Enter delegate's address below</h4>
                <input type="text" placeholder='0xF94CC1Eb19C43d73Eec9e55c13494abe1dfFb648' value={Delegate} onChange={(e)=>{setDelegate(e.target.value)}} />
                <button >Delegate</button>
              </div>
            </div>

          </div>
        </div>

    </div>


  )
}

export default Herodash