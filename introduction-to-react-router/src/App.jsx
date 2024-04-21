import { Outlet, useNavigation } from "react-router-dom";
import Header from "./Header/Header";
const App = () => {
  const navigation = useNavigation()
  return (
    <>
      <div id="detail">
        <Header/>
        {
          navigation.state === "loading" ? <span className="loading loading-ring loading-lg h-screen flex items-center justify-center mx-auto"></span> :<Outlet />
        }
        
      </div>
    </>
  );
};

export default App;