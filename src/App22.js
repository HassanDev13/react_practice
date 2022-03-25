import logo from './logo.svg';
import Header from './components/header';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { useState, useEffect } from 'react';
import Button from './components/button';
import AddTask from './components/AddTask';
import Tesk from './components/tasks';
import Footer from './components/Footer';
import About from './components/About';
import './App.css';



function App() {
    const [showAddTask, setShowAddTask] = useState(false);
    const onClick = (e) => {
        console.log(e);
        setShowAddTask(!showAddTask)
    }
    const [tasks, setTasks] = useState([]);
    useEffect(() => {
        const getTask = async () => {
            const taskFetchFromServer = await fetchTasks();
            setTasks(taskFetchFromServer)
        }
        getTask()

    }, []);
    // fetch data 
    const fetchTasks = async () => {

        const res = await fetch('http://localhost:5000/tasks', { method: 'GET' });
        const data = await res.json();

        return data;
    }
    const clickDelete = async (taskP) => {
        await fetch(`http://localhost:5000/tasks/${taskP.id}`, {
            method: 'DELETE'
        })
        setTasks(tasks.filter((task) => task.id !== taskP.id));
    }
    const clickAddTask = async (taskP) => {
        const newTask = await fetch(
            'http://localhost:5000/tasks', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(taskP)
        }
        )
        const data = await newTask.json()
        console.log("Click add " + data.id)
        setTasks([...tasks, data]);
    }

    return (

        <div className='container'>
            <BrowserRouter>
                <Header />
                <Routes>

                    <Route path="/" element={
                        <>
                            {showAddTask && <AddTask clickAddTask={clickAddTask} />}
                            <Tesk tasks={tasks} click={clickDelete} />
                            <Button onClick={onClick} />



                            <Footer />
                        </>
                    }> </Route>
                    <Route path="/about" element={<About />}>  </Route>

                </Routes>
            </BrowserRouter>

        </div>



    );
}

Header.defaultProps = {
    title: "Cademia HGHG",
    level: 'Computer sience'
}

export default App;
