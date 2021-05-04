import React from "react";

const StatusForm = () => {
return ( 
    <div>
        <form>
            <textarea
                type="text"
                value="value"
                placeholder="what's on your mind?"
            ></textarea>
            <button>Post</button>
        </form>
      </div>
    )
}

export default StatusForm;