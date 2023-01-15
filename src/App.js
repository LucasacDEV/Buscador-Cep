import React, {useState} from 'react';
import './App.css';
const App = () => {

  const [buscar, setBuscar] = useState('')
  const [cep, setCep] = useState('')
  const [ddd, setDdd] = useState('')
  const [local, setLocal] = useState('')
  const [rua, setRua] = useState('')
  const [estado, setEstado] = useState('')
  const url = 'https://viacep.com.br/ws/'
  const ur = '/json/'

  const fetchData = async () =>{
   const res = await fetch(url + buscar + ur)
  const data= await res.json()
  setLocal(data.localidade)
  setCep(data.cep)
  setDdd(data.ddd)
  setRua(data.logradouro)
  setEstado(data.uf)
  
  }


  const handleSubmit = (e) => {
    console.log(buscar)
    e.preventDefault()
    fetchData()
    setBuscar('')
   
  }
  return(
      <div className='box'>
        
        <form onSubmit={handleSubmit} className='box'>
        <h1 >Buscador CEP :</h1>
        <input className='input' value={buscar} onChange={(e) => {setBuscar(e.target.value)}} placeholder='Digite seu cep ...'  />
        
        <input className='input'  type='submit' value='ENVIAR' />
        </form>
        <p> CEP : {cep}</p>
        {local}
        <br/>
        {rua}
        <br/>
        {ddd}
        <br/>
        {estado}
        
        
       
      </div>
  )
}

export default App