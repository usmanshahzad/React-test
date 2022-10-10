import React, {useState, useEffect} from 'react';
import CommentApi from './CommentApi';

function FirstApi() {

    const [dataList, setDataList] = useState([]);
    const [open, setOpen] = useState(false);
    const [id, setId] = useState(null);

    const getApi = async() => {
        let data = await fetch('https://jsonplaceholder.typicode.com/posts');
        let response = await data.json();
        setDataList(response.slice(0, 100));
    }

    useEffect(() => {
        getApi();
    }, []);

    const buttonHandler = (id) =>{
        setOpen(true);
        setId(id);
    }


    return (
        <div className='row'>
            {dataList.map(item => {
                return(
                    <div key={item.id} className='datalist'>
                        <h4>User ID: {item.userId}</h4>
                        <h3>{item.title}</h3>
                        <p>{item.body}</p>
                        <button onClick={() => {buttonHandler(item.userId)}}>Click</button>
                    </div>
                )
            })}
            {
                open && (
                    <>
                    <CommentApi id={id} setOpen={setOpen} />
                    </>
                )
            }
        </div>
    )

}

export default FirstApi