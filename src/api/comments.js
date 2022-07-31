import api from "./index"

const commentsApi = {
    getAllCommentOnPost: (id) => {
        return api.get(`/comments?postId=${id}`)
    },
}

export default commentsApi;