import React from "react";

/* Post
    Structure digested when rendering a blog post
*/
interface Post {
    title: string; // A short sentence describing the posts content
    tag: string; // A single, single word tag. Not used for any present implementation, but for future proofing purposes
    utc: number; // The DateTime of when the post was submitted, described as a UTC timestamp
    content: Array<string>; // The meat of the article, structured as an a array of paragraphs, which are in turn structured as a single, mutlisentence string
}

class Blog extends React.Component {
    /* Assemble Content
        Takes an array of paragraphs, and returns each wrapped in a div

        PARAMS
            content - Array of paragraphs
        
        RETURN
            JSX - one or more divs containing the paragraphs from `content`
    */
    assembleContent(content: Array<string>) {
        let output = [];

        for (let i = 0; i < content.length; i++) {
            output.push(
                <div className="pg" key={i}>
                    {content[i]}
                </div>
            );
        }

        return output;
    }

    /* Assemble Post
        Create a single Post div from data

        PARAMS
            post - The blog post structured as a Post object

        RETURNS
            JSX - A Post div wrapping the blog post
    */
    assemblePost(post: Post) {
        return (
            <div className="post" key={post.utc}>
                <div className="title">{post.title}</div>
                <div
                    className="tag"
                    style={{ visibility: "hidden", display: "inline" }}
                >
                    {post.tag}
                </div>
                {this.assembleStamp(post.utc)}
                {this.assembleContent(post.content)}
            </div>
        );
    }

    /* Assemble Stamp
        Process a UTC timestamp into a human-friendly format
        At the moment, this function may be overkill. However, I am not a fan of the default Date.toString() representation, so I will likely change this later.

        PARAMS
            stamp - A UTC timestamp
        
        RETURNS
            JSX - A div wrapping the DateTime string
    */
    assembleStamp(stamp: number) {
        let dt = new Date(stamp).toString();
        return <div className="timestamp">{dt}</div>;
    }

    /* Assemble Feed
        Converts the feed data into JSX, sorted newest to oldest

        RETURNS
            JSX
    */
    assembleFeed() {
        let input = blogData.slice().sort((a, b) => b.utc - a.utc);
        let posts = [];

        for (let i = 0; i < input.length; i++) {
            posts.push(this.assemblePost(input[i]));
        }

        return posts;
    }

    render() {
        return <div id="blog">{this.assembleFeed()}</div>;
    }
}

/* Blog Data
    At the present, the blog articles are an array of Post objects.
    I am considering writing a Python API, a simple Flask API would be easy, however GraphQL is hip at the moment.
    If the number of articles I reaches a critical mass, I will move them to their own system.
*/
const blogData = [
    {
        title: "First Post",
        tag: "meta",
        utc: 1589053340492,
        content: [
            "Welcome to my personal website, there are many like it, but this one is mine. The purpose of this website, at the time of writing this, is to serve as an mildly interactive resume, covering my work and other experiences in more depth than a resume and cover letter can, while also having a wider scope. The website is exteremely barebones at the moment, however you can view my plans and progress for this website from the README on my Gitlab account.",
        ],
    },
];

export default Blog;
