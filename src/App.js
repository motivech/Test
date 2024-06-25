import React from "react";
import {Route, Routes} from "react-router-dom";
import HomeRouter from "./components/Quest4/HomeRouter";
import HelloWorld from "./components/Quest1/HelloWorld";
import TodoList from "./components/Quest2/TodoList";
import UserList from "./components/Quest3/UserList";

function App() {
    return (
        <Routes>
            <Route path='/' element={<HomeRouter/>}/>
            <Route path='/quest1' element={<HelloWorld/>}/>
            <Route path='/quest2' element={<TodoList/>}/>
            <Route path='/quest4' element={<UserList/>}/>
        </Routes>
    );
}

export default App;
