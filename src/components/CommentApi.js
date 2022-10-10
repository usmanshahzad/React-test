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
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>NAME</th>
                            <th>EMAIL</th>
                            <th>BODY</th>
                        </tr>
                    </thead>
                    <tbody>
            {commentList.map(cdata => {
                return(
                <tr key={cdata.id} className='commentlist'>
                    <td>{cdata.id}:</td>
                    <td>{cdata.name}</td>
                    <td>{cdata.email}</td>
                    <td>{cdata.body}</td>
                </tr>
                )
            })
        }
        </tbody>
        </table>
        </div>
        <button onClick={() => {setOpen(false)}}>Close</button>
        </div>
        </div>,
        document.getElementById('modal-portal')
    )

}

export default CommentApi