import axios from 'axios';

const request = axios.create({
  baseURL: 'https://be-dsk-nc-news.herokuapp.com/api'
});

export const getTopics = () => {
  return request.get('/topics').then(({ data }) => {
    return data.topics;
  });
};

export const getArticles = (topic, sort_by, order) => {
  return request
    .get('/articles', { params: { topic, sort_by, order } })
    .then(({ data }) => {
      return data.articles;
    });
};

export const getSingleArticle = article_id => {
  return request.get(`/articles/${article_id}`).then(({ data }) => {
    return data.article;
  });
};

export const getComments = article_id => {
  return request.get(`/articles/${article_id}/comments`).then(({ data }) => {
    return data.comments;
  });
};

export const postComment = (article_id, commentObj) => {
  return request
    .post(`/articles/${article_id}/comments`, commentObj)
    .then(({ data }) => {
      return data.comment;
    });
};

export const deleteComment = comment_id => {
  return request.delete(`/comments/${comment_id}`);
};

export const updateArticleVotes = (article_id, votes) => {
  return request.patch(`/articles/${article_id}`, { inc_votes: votes });
};

export const updateCommentVotes = (comment_id, votes) => {
  return request.patch(`/comments/${comment_id}`, { inc_votes: votes });
};
