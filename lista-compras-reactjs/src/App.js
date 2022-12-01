import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
import logo from '../src/assets/logo.png';

function App() {

  //ARRAYS UTILIZADAS NO CÓDIGO
  const [codigo, setCodigo] = useState();
  const [descricao, setDescricao] = useState('');
  const [listaTarefa, setListaTarefa] = useState([]);

  useEffect(() => {
      buscar();
  }, []);


  //FAZ A FUNÇÃO DE BUSCAR O ITEM NA LISTA /TAREFA
  function buscar(){
    axios.get('http://localhost:3100/tarefa').then(resultado => {
      console.log(resultado.data);
      setListaTarefa(resultado.data);
  })
  }


  //FAZ A FUNÇÃO DE SALVAR UM ITEM NA LISTA, COM CÓDIGO E NOME
  function salvar(event){
    event.preventDefault();

    let tarefa = {
      codigo: codigo,
      descricao: descricao
    };
    //APÓS SALVAR O ITEM, ELE MANDA PRA LISTA
    axios.put('http://localhost:3100/tarefa', tarefa).then(() => {
      buscar();

      setCodigo();
      setDescricao('');
    })
  }


  //A FUNÇÃO EDITAR PUXA O ITEM SELECIONADO PELO CÓDIGO, E COM ISSO VOLTA PARA CAIXA DE TEXTO PRONTA
  function editar (tarefa){
axios.get(`http://localhost:3100/tarefa/${tarefa.codigo}`).then((result) => {
  setCodigo(result.data.codigo)
  setDescricao(result.data.descricao)
});
  } 


  //A FUNÇÃO EXCLUIR APAGA O ITEM NA LISTA PELO CÓDIGO
  function excluir(tarefa){
    axios.delete(`http://localhost:3100/tarefa/${tarefa.codigo}`).then((result) => {
    buscar();
    });
  }

  //HTML
  return (
    <div className="container">
    <form onSubmit={(event) => salvar (event)} >
      <div className="mb-3">
      <h1 className="mercado-fema"><img src={logo} className="logo"></img>MERCADO FEMA</h1>
        <label className="form-label">Adicione um item a sua lista de compras: </label>
        <input type="text" className="form-control" value={descricao} onChange={(event) => setDescricao(event.target.value)}/>
      </div>
      <div className="button-add">
      <button type="submit" className='btn btn-primary'>Adicionar</button>
      </div>
    </form>
    <br/>
      <h3 className="itens-add">Itens adicionados:</h3>

      <table className='table'>
        <thead> 
          <tr className="tables">
            <td> Nome do Item: </td> 
            <td className="config"> Concluídas &nbsp;&nbsp;/ &nbsp;&nbsp;Configurações do Item: </td>
          </tr> 
        </thead> 
        <tbody> 
          {
            listaTarefa.map((tarefa, index) => (
              <tr key={index}> 
                <td>{tarefa.descricao}</td>
                <td className="buttons"> 
                    <input type="checkbox" className="checkbox"/>
                    <button type="button" className="btn btn-warning" onClick={(event) => editar(tarefa)}>Editar</button>
                    <button type="button" className="btn btn-danger" onClick={(event) => excluir(tarefa)}>Excluir</button>     
                  </td>             
              </tr>
            ))
          }
        </tbody>
      </table>

    </div>
  );
}

export default App;