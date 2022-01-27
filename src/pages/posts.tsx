/* eslint-disable react/jsx-key */
import React, { useState } from "react";
import CardItem from "@/components/CardItem"
import InfiniteScroll from 'react-infinite-scroll-component';
import { baseUrl } from "@/constants";

function Posts({ d }: any) {
    const [News, setNews] = useState(d.data);
    const [pageUrl, setPage] = useState(d.pagination.next_url);

    const getMorePost = async () => {
        if (pageUrl) {
            try {
                const res = await fetch(pageUrl);
                const newPosts = await res.json();
                setNews((News: any) => [...News, ...newPosts.data]);
                setPage(newPosts.pagination.next_url);
            } catch {
                return;
            }
        }
    };


    return (
        <>
            <InfiniteScroll
                dataLength={d.pagination.total}
                next={getMorePost}
                hasMore={pageUrl ? true : false}
                loader={<h3> Loading...</h3>}
                endMessage={<h4>Nothing more to show</h4>}
            >

                <div className="row row-cols-1 row-cols-md-4 g-4">
                    {News.map((element: any, i: number) => {
                        return (<div key={i} className="col">
                            <CardItem props={element} />
                        </div>
                        )
                    })}
                </div>
            </InfiniteScroll>
        </>
    )
}

// This also gets called at build time
// This gets called on every request
export async function getServerSideProps({ params }: any) {
    // Fetch data from external API
    const res = await fetch(`${baseUrl}exhibitions?limit=20&page=1`)
    const d = await res.json()
    return { props: { d } }
}

export default Posts