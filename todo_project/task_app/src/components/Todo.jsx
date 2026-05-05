import React, { useEffect, useRef, useState } from "react";
import TodoCss from "./todo.module.css";
import toast from "react-hot-toast";

const Todo = () => {
  const taskData = JSON.parse(localStorage.getItem("todo_task")) || [];

  const [allData, setAllData] = useState(taskData);
  const [todoTask, setTodoTask] = useState("");
  const [search, setSearch] = useState("");
  const [CTask, setCtask] = useState(0);
  const [RTask, setRtask] = useState(0);
  const BgColor = useRef()

  function handleForm(e) {
    e.preventDefault();
    const myTask = todoTask.trim();
    if (!myTask) {
      toast.error("Please add Task 👋");
    } else {
      const isVerified = allData.some((value) => {
        return value.task.toLowerCase() === todoTask.toLowerCase();
      });

      if (isVerified) {
        toast.error("Task Already Added..🙄");
        setTodoTask("");
      } else {
        setAllData([...allData, { task: todoTask, complete: false }]);
        toast.success("Task added..😀");
        setTodoTask("");
      }
    }
  }

  function handleDelete(id) {
    const copyOfAllData = [...allData];
    const filteredValue = copyOfAllData.filter((value, index) => {
      return index !== id;
    });

    if (filteredValue) {
      const taskDelete = window.confirm(
        "Are You sure you want to delete this task..🥺",
      );

      if (taskDelete) {
        setAllData(filteredValue);
      } else {
        setAllData(copyOfAllData);
      }
    }
  }

  function handleCheckbox(id) {
    const copyOfAllData = [...allData];
    copyOfAllData[id].complete = !copyOfAllData[id].complete;
    setAllData(copyOfAllData);
  }

  function handleUpdate(id) {
    const copyOfAllData = [...allData];
    const oldTask = copyOfAllData[id].task;
    const newTask = prompt(`Update Task :- ${oldTask}`, oldTask);

    if (newTask === null) {
      toast("Update Cancelled..❌");
      return;
    }

    let trimmedTask = newTask.trim();

    if (trimmedTask.toLowerCase() === oldTask.toLowerCase()) {
      toast("No changes Detected..😅");
      return;
    }

    const newTaskObj = { task: trimmedTask, complete: false };
    copyOfAllData.splice(id, 1, newTaskObj);
    setAllData(copyOfAllData);
  }

  const filterTask = allData.filter((items) => {
    return items.task.toLowerCase().includes(search.toLowerCase());
  });

  useEffect(() => {
    const copyOfAllData = [...allData];
    const completedTasks = copyOfAllData.filter((value) => {
      return value.complete;
    });

    const remainingTasks = copyOfAllData.filter((value) => {
      return !value.complete;
    });

    setCtask(completedTasks.length);
    setRtask(remainingTasks.length);

    localStorage.setItem("todo_task", JSON.stringify(copyOfAllData));
  }, [allData]);

  function handleDarkMode(){
    const bodyBg = BgColor.current.style.backgroundColor 

    if(bodyBg==="" || bodyBg==="white"){
        BgColor.current.style.backgroundColor = "black"
        BgColor.current.style.color = "white"
       
    }else{
      BgColor.current.style.backgroundColor = "white"
      BgColor.current.style.color = "black"
      
    }

  }

  return (
    <div className={TodoCss.main} ref={BgColor}>
      <div>
        <h1 className="text-danger">My Todo App 📋</h1>
        <div className="d-flex justify-content-center">
          
          <i className={`bi bi-0-circle fs-2 ${TodoCss.darkIcon}`}
           onClick={handleDarkMode}
          ></i>
        </div>

        <div className={TodoCss.task}>
          <form action="" onSubmit={handleForm}>
            {/* Task Add */}
            <input
              type="text"
              name=""
              id=""
              placeholder="Add Task Here..📃"
              className="form-control border-4 border-success"
              value={todoTask}
              onChange={(e) => {
                setTodoTask(e.target.value);
              }}
            />
            <button type="submit" className="form-control btn btn-danger mt-2">
              Add Task ➕
            </button>
            {/* Search Bar */}
            <input
              type="search"
              name=""
              id=""
              placeholder="Search Task Here..🔍"
              className="form-control mt-2 mb-2"
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
              }}
            />
          </form>
          {filterTask.length === 0 ? (
            <p className="text-center text-danger">No Matching Result..🔍</p>
          ) : (
            filterTask.map((items, index) => (
              <div className={TodoCss.alltask} key={index}>
                <input
                  type="checkbox"
                  name=""
                  id=""
                  className={TodoCss.checkBox}
                  checked={items.complete}
                  onClick={() => {
                    handleCheckbox(index);
                  }}
                />
                <span
                  style={{
                    textDecoration: items.complete ? "line-through red" : "",
                  }}
                >
                  {items.task}
                </span>
                <i
                  className={`bi bi-trash3-fill text-danger float-end mx-2 ${TodoCss.icons}`}
                  title={"Delete"}
                  onClick={() => {
                    handleDelete(index);
                  }}
                ></i>
                <i
                  className={`bi bi-pencil-square text-dark float-end mx-2 ${TodoCss.icons}`}
                  title={"Update"}
                  onClick={() => {
                    handleUpdate(index);
                  }}
                ></i>
              </div>
            ))
          )}
        </div>
        <span className="fw-bold mt-1 d-block text-center">
          Completed Task:- {CTask}
        </span>
        <span className="fw-bold mt-1 d-block text-center">
          Remaining Task:- {RTask}
        </span>
      </div>
    </div>
  );
};

export default Todo;
