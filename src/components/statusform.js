import React from 'react'

const StatusForm = () => {
return (
    <div className="wrapper">
      <form>
        <textarea
          type="text"
          value="What's on your mind?"
        ></textarea>
        <button>Post</button>
      </form>
    </div>
    )
}

export default StatusForm;