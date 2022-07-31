import React, { useEffect } from "react";
import postsApi from "../api/post";
import Button from "../components/Button";
import PostFrame from "../components/PostFrame";
//전체 포스트 불러오기
//유저네임 검색
//제목 검색
//
const Main = () => {
    useEffect(()=>{
        const getAllPost = async() => {
            await postsApi.getAllPosts()
                .then((result) => {
                    console.log('모든 포스트', result.data);
                })
        }
        getAllPost();
    })
    return(
        <div>
            Mainpage
            <PostFrame />
            <Button />
        </div>
    )
}

export default Main;