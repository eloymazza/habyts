
import { initializeApp } from "firebase/app";
import { firebaseConfig } from './config/firebase.config'

initializeApp(firebaseConfig)

interface Props {

}

const App: React.FunctionComponent<Props> = (props) => {

  return (
    <div className="App">
      <h1>Habyts</h1>
    </div>
  )
}

export default App;
