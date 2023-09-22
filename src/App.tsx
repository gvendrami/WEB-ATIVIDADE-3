import './App.css'
import ButtonFatec from './components/ButtonFatec'
import InputFatec from './components/InputFatec'

function App() {
 

  return (
    <>
      <p>
          Entre em contato:
        </p>
        <InputFatec placeholder='Nome' type='text' value='Bruna' />
        <br></br>
        <InputFatec placeholder='E-mail' type='text' value='' />
        <br></br>
        <InputFatec placeholder='Telefone' type='text' value='' />
        <br></br><br></br>
        <ButtonFatec type='submit' label='Enviar Informações' />
    </>
        )
}

export default App
