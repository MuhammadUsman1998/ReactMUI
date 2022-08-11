import "./App.css";
// import { PricigPlan, UserInterface } from "./Components";
import { ContentBox } from "./Components/content/content";
import { Header } from "./Components/header/header";

function App() {
  return (
    <div className='App'>
      <Header />
      <ContentBox />
      {/* <PricigPlan /> */}
      {/* <UserInterface />  */}
    </div>
  );
}

export default App;
