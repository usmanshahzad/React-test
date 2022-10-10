import React, {useState, useEffect} from 'react';
import ReactDom from 'react-dom';

function CommentApi({id, setOpen}) {

    const [commentList, setCommentList] = useState([]);

    const getCommentApi = async() => {
        let dataComment = await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${id}`);
        let res = await dataComment.json();
        // console.log(res);
        setCommentList(res);
    }

    useEffect(() => {
        getCommentApi();
    }, [id]);


    return ReactDom.createPortal(
        <div className= {setOpen ? 'model-box' : ''}>
            <div className='wrapper'>
            <div className='inner'>
            {commentList.map(cdata => {
                return(
                <div key={cdata.id} className='commentlist'>
                    <h3>{cdata.id}: {cdata.name}</h3>
                    <h4>{cdata.email}</h4>
                    <p>{cdata.body}</p>
                </div>
                )
            })
        }
        </div>
        <button onClick={() => {setOpen(false)}}>Close</button>
        </div>
        </div>,
        document.getElementById('modal-portal')
    )

}

export default CommentApi