import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';

function App() {

  //ARRAYS UTILIZADAS NO CÓDIGO
  const [codigo, setCodigo] = useState();
  const [descricao, setDescricao] = useState('');
  const [listaTarefa, setListaTarefa] = useState([]);

  useEffect(() => {
      buscar();
  }, []);

  function buscar(){
    axios.get('http://localhost:3100/tarefa').then(resultado => {
      console.log(resultado.data);
      setListaTarefa(resultado.data);
  })
  }

  function salvar(event){
    event.preventDefault();

    let tarefa = {
      codigo: codigo,
      descricao: descricao
    };
    axios.put('http://localhost:3100/tarefa', tarefa).then(() => {
      buscar();

      setCodigo();
      setDescricao('');
    })
  }

  function editar (tarefa){
axios.get(`http://localhost:3100/tarefa/${tarefa.codigo}`).then((result) => {
  setCodigo(result.data.codigo)
  setDescricao(result.data.descricao)
});
  } 

  function excluir(tarefa){
    axios.delete(`http://localhost:3100/tarefa/${tarefa.codigo}`).then((result) => {
    buscar();
    });
  }
  //<input type="checkbox" id="topping" name="topping" value="Paneer"/>
  //            <td> Concluída </td>

  return (
    <div className="container">
    
      
    <form onSubmit={(event) => salvar (event)} >
      <div className="mb-3">
        <h1>LISTA DE COMPRAS</h1>
        <label className="form-label">Adicione um item a sua lista de compras: </label>
        <input type="text" className="form-control" value={descricao} onChange={(event) => setDescricao(event.target.value)}/>
      </div>
      <button type="submit" className='btn btn-primary'>Adicionar</button>

    </form>
    <br/>
      <h3>Itens adicionados:</h3>

      <table className='table'>
        <thead> 
          <tr className="tables">
            <td> Nome do Item: </td> 
            <td className="config"> Concluído &nbsp;&nbsp;/ &nbsp;&nbsp;Configurações do Item: </td>
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