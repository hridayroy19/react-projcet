import { data } from "autoprefixer";
import { useEffect } from "react";
import { useState } from "react";
import Blogecard from "../Bloge/Blogecard";


const Bloge = ({handelAddBookmark}) => {
    const [Bloge,setBloge]=useState([]);
    useEffect(()=>{
        fetch ('BlogesData.json')
        .then(res =>res.json())
        .then(data =>setBloge(data));
        console.log(data);

    },[])
    return (
        <div>
            <h2 className="text-4xl"> bloges:{Bloge.length} </h2>

        {
            Bloge.map(Blog => <Blogecard
                 key={Blog.id} 
                 Blog ={Blog}
                 handelAddBookmark={handelAddBookmark}

                 > 
                 
                 </Blogecard>)
        }
        </div>
    );
};

export default Bloge;