const Task = ({ tasks , click }) => {

  

    return (
        <div>
            {tasks.length == 0 ? <p>There no Tasks</p> : tasks.map((tesk ) => (
                <div key={tesk.id}>
                    <h3  > ID {tesk.id} name : {tesk.text} time :{tesk.day}</h3>
                    <button onClick={() => click(tesk)}>click</button>

                </div>

            ))}
        </div>
    );
}

export default Task;