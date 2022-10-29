
import './App.css';
import Products from "./Products";
import Rating from "./Rating";
import JumboTronComponent from "./JumboTronComponent";
import UserForm from "./UserForm";
import GitHub from "./GitHub";


function formatName(user) {
    return user.firstName + ' ' + user.lastName;
}

function App() {
    const isValid = false;
    const user = {
        firstName: 'Eugene',
        lastName: 'Heynike'
    };

  return (
    <div className="App">
      {/*<Products/>*/}
      {/*  <UserForm/>*/}
        <GitHub />

        {/*<JumboTronComponent>*/}
        {/*    This is a long sentence, and I want to insert content into the*/}
        {/*    jumbotron component from the outside.*/}
        {/*</JumboTronComponent>*/}

    </div>
  );
}

export default App;
