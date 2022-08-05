import React, { useEffect, useState } from "react";
import styled from "styled-components";
import media from "styled-media-query";
import postsApi from "../api/post";
import Button from "../components/Button";
import PostFrame from "../components/PostFrame";
//전체 포스트 불러오기
//유저네임 검색
//제목 검색
//
const MainWrapper = styled.div`
    border: 1px solid plum;
    padding: 4rem;
    ${media.lessThan('medium')`
        padding: 4rem 1rem 4rem;
    `}
`;
const PostsWrapper = styled.div`
    margin-top: 2rem;
    display: grid;
    gap: 1.5rem;
    grid-template-columns: repeat( auto-fit, minmax( 20rem, auto ));

    ${media.lessThan('medium')`
        grid-template-columns: repeat( auto-fit, minmax( 15rem, auto ));
    `}
`;

const Main = () => {
    //전체 포스트를 저장할 배열
    const [ posts, setPosts ] = useState([]);
    //로딩 상태
    const [ loading, setLoading ] = useState([]);
    //현재 페이지
    const [ currentPage, setCurrentPage ] = useState(1);
    //한페이지에 불러올 포스트 수
    const [ postPerPage, setPostPerPage ] = useState(10)
    useEffect(()=>{
        const getAllPost = async() => {
            setLoading(true);
            await postsApi.getAllPosts()
                .then((result) => {
                    // console.log('모든 포스트', result.data);
                    setPosts(result.data);
                });
            setLoading(false);
        }
        getAllPost();
    }, [])
    
    return(
        <MainWrapper>
            검색기능
            <hr/>
            <PostsWrapper>
                {
                    posts.map((el) => (
                        
                        <PostFrame 
                            {...el} 
                            key={el.id}
                        />
                    ))
                }
                <Button />
            </PostsWrapper>
        </MainWrapper>
    )
}

export default Main;