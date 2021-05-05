import React, {useState} from 'react'

const StatusForm = () => {
    const [message, setMessage] = useState("");
    const [statusLists, setStatusLists] = useState([
    {
      status: "This is an example post.",
      createdAt: new Date().toLocaleTimeString()
    },
    {
      status: "Cool. Cool cool cool.",
      createdAt: new Date().toLocaleTimeString()
    },
    {
      status: "Good Luck!",
      createdAt: new Date().toLocaleTimeString()
    }
]);

 const AddPost = (message) => {
    const addPost = [
      ...statusLists,
      { status: message, createdAt: new Date().toLocaleTimeString() }
    ];
    setStatusLists(addPost);
  };

const HandleFormSubmit = (e) => {
    e.preventDefault();
    AddPost(message)
    setMessage("");
    console.log([statusLists]);
  };

return (
    <div className="wrapper">
      <form onSubmit={HandleFormSubmit}>
        <textarea
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>
        <button>Post</button>
      </form>
    </div>
    )
}

export default StatusForm;