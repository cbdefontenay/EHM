import BodyPage from "./components/body-page/BodyPage";
import Greetings from "./routes/Greetings/Greetings";
import { Route, Routes } from "react-router-dom";
import Anfang from "./routes/Anfang/Anfang";
import NameForm from "./components/name-form/NameForm";
import SpielStart from "./routes/Spiel-Start/SpielStart";
import UserNameContext from "./components/Context/UserNameContext ";
import { useState } from "react";

import "./App.scss";
import FirstRound from "./routes/Round1/FirstRound";

const App = () => {
  const [userName, setUserName] = useState("");

  return (
    <>
      <UserNameContext.Provider value={userName}>
        <Routes>
          <Route index element={<BodyPage />} />
          <Route path="greetings" element={<Greetings />}></Route>
          <Route path="anfang" element={<Anfang />} />
          <Route
            path="name-form"
            element={<NameForm setUserName={setUserName} />}
          />
          <Route path="spiel" element={<SpielStart />} />
          <Route path="erste" element={<FirstRound />} />
        </Routes>
      </UserNameContext.Provider>
    </>
  );
};

export default App;
