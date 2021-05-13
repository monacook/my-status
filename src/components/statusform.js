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
  };

return (
    <div className="wrapper">
      <form onSubmit={HandleFormSubmit}>
        <textarea
          type="text"
          value={message}
          name="q"
          onChange={(e) => setMessage(e.target.value)}
        required></textarea>
        <button name="submit">Post</button>
      </form>
      <ul>
        {statusLists.map((statusList) => (
          <li key={statusList.index}>
            <p>
              {statusList.status}
              <span>{statusList.createdAt}</span>
            </p>
          </li>
        ))}
      </ul>
    </div>
    )
}

export default StatusForm;