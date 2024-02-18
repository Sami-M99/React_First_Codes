import MyFirstComponent from "./component1/MyFirstComponent";
import TermizComponent from "./component2Termiz/TermizComponent";
import ListState from "./component3State/ListState";
import ArrayState from "./component4Array/ArrayState"
import RequestCard from './component5Requesting/RequestCard'
import RouterComponent from "./component6Router/RouterComponent";

const App = () => {
  return (
    <div>
      <MyFirstComponent />
      <TermizComponent />
      <ListState />
      <ArrayState />
      <RequestCard />
      <RouterComponent />
    </div>
  )
}


export default App;



