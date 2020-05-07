import React from "react";

const sample = {
    entries: [
        {
            title: "Lorem ipsum dolor sit amet.",
            date: {
                year: 2020,
                month: 1,
                day: 10,
                hour: 8,
                minute: 10,
                seconds: 20.01,
            },
            content:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, nostrum cumque. Error similique quae molestias consequuntur iusto, eius a soluta minus cupiditate tempora totam atque fugit distinctio ipsam. Cum natus harum odio. Nulla assumenda atque, sed maiores reprehenderit quibusdam quia odio aspernatur voluptatum doloremque error ipsam minima laborum aut cumque consequatur id ducimus alias iusto nesciunt sit placeat facere eaque. Unde, maiores hic. Reprehenderit officia nisi, ipsum neque reiciendis veniam cupiditate incidunt praesentium sequi commodi. Quibusdam vel qui incidunt est fuga, obcaecati soluta ab eligendi tempora minus at error cupiditate expedita quia et similique dicta quo nihil exercitationem eius ducimus?",
        },
        // {
        //     'content': 'Changed the background to off-white and content area to white. Had to use "90vh" instead of "100%" for "min-height" value to get the background to be full screen. 100vh allwed for too much scrolling, and 80vh allowed for too little (just enough to trigger nav-bar flicker)'
        // },
    ],
};

class Blog extends React.Component {
    render() {
        let temp = sample.entries[0];
        return (
            <div id="blog">
                <h3>{temp.title}</h3>
                <div className="dtstamp">
                    {temp.date.year}/{temp.date.month}/{temp.date.day}{" "}
                    {temp.date.hour}:{temp.date.minute}:{temp.date.seconds}
                </div>
                <p>{temp.content}</p>
            </div>
        );
    }
}

export default Blog;
