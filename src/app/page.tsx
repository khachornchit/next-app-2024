import React from 'react';

interface Post {
    id: number;
    title: string;
    body: string;
}

async function fetchPosts(): Promise<Post[]> {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    if (!res.ok) {
        throw new Error('Failed to fetch posts');
    }
    return res.json();
}

const Home: React.FC = async () => {
    const posts = await fetchPosts();

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold">Next.js v14 with TypeScript</h1>
            <ul>
                {posts.map((post) => (
                    <li key={post.id} className="mb-4">
                        <h2 className="text-xl font-semibold">{post.title}</h2>
                        <p>{post.body}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Home;