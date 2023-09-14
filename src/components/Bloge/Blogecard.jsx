/* eslint-disable react/prop-types */


const Blogecard = ({Blog,handelAddBookmark}) => {
    const{title,cover, author_img, reading_time, author,posted_date} =Blog
    return (
        <div>
            <img className="w-[80%]" src={cover}  alt={`cover picture of the title ${title}`}/>
            <div className="flex justify-between">
                <div className="flex ">
                     <img className="w-14" src={author_img} alt="" />
                     <div className="ml-4">
                        <h3> {author}</h3>
                        <p> {posted_date}</p>
                     </div>
                </div>
                <div>
                    <h1> {reading_time} min read <span> 
                        <button onClick={handelAddBookmark} className=" bg-slate-500 p-2"> book</button> </span></h1>

                </div>


            </div>
            <h3 className="text-4xl">{title}</h3>
        </div>
    );
};

export default Blogecard;