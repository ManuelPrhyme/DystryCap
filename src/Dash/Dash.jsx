import React, {useState, useEffect} from 'react'
import Logo from '../assets/Logo.png'
import './Dash.css'
// import {connect} from './Utils'

const Herodash = () => {

  const [isConnected, setIsConnected] = useState(false);
  const [Provider, setProvider] = useState();
  const [Signer, setSigner] = useState() 
  const [Accounts, setAccounts] = useState([]);

  // ---Connect Function----
  const connect = async () => {
    if(window.ethereum) {
        try {
            const _accounts = await window.ethereum.request({method: 'eth_requestAccounts'})
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
            <div className='header'>
                <div className='Logo'>
                    <img src={Logo} id='Logo' alt="DystryCap Logo" />
                </div>
                <div className='connectButton'>
                    { isConnected && Accounts ? <h2>{`${Accounts[0].substring(0,6)}...${Accounts[0].substring(Accounts[0].length-4)}`}</h2> : ''}
                    <button style = {{display: isConnected ? 'none' : 'flex'}} onClick={connect} id='connectbtn'>Connect</button>
                    <button style = {{display: isConnected? 'flex' : 'none'}} onClick={disconnect} id='connectbtn'>Disconnect</button>
                </div>
            </div>
        </div>

    </div>


  )
}

export default Herodash