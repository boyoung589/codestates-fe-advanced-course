import React, { useEffect, useState } from "react";
import styled from "styled-components";
import media from "styled-media-query";
import postsApi from "../api/post";
import { Pagination } from "../components/Pagination";
import PostFrame from "../components/PostFrame";

const MainWrapper = styled.div`
    padding: 4rem;
    ${media.lessThan('medium')`
        padding: 4rem 1rem 4rem;
    `}
`;
const PostsWrapper = styled.div`
    margin-top: 2rem;
    display: grid;
    gap: 1.5rem;
    justify-content: center;
    grid-template-columns: repeat( auto-fill, minmax( 18rem, auto ));

    ${media.lessThan('medium')`
        grid-template-columns: repeat( auto-fill, minmax( 15rem, auto ));
    `}
`;
const Page = styled.div`
    display: flex;
`; 
const Main = () => {
    //전체 포스트를 저장할 배열
    const [ posts, setPosts ] = useState([]);
    //로딩 상태
    const [ loading, setLoading ] = useState([]);
    //현재 페이지
    const [ currentPage, setCurrentPage ] = useState(1);
    //한페이지에 불러 올 포스트 수(10)
    const [ postPerPage ] = useState(10)
    useEffect(()=>{
        const getAllPost = async() => {
            setLoading(true);
            await postsApi.getAllPosts()
                .then((result) => {
                    setPosts(result.data);
                });
            setLoading(false);
        }
        getAllPost();
    }, [])

    //현재 포스트
    const indexOfLastPost = currentPage * postPerPage;
    const indexOfFirstPost = indexOfLastPost - postPerPage;
    const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

    //change page
    const paginate = (pageNumber) => setCurrentPage(pageNumber);
    
    return(
        <div>
            <MainWrapper>
                <hr/>
                <PostsWrapper>
                    {
                        currentPosts.length === 0 ? '포스트가 없습니다' : (
                            currentPosts.map((el) => (                            
                                <PostFrame 
                                    {...el} 
                                    key={el.id}
                                    loading={loading}
                                />
                            ))
                        )
                    }
                </PostsWrapper>
            </MainWrapper>
            <Page>
                <Pagination 
                    postPerPage={postPerPage}
                    totalPosts={posts.length}
                    paginate={paginate}
                />
            </Page>
        </div>
    )
}

export default Main;