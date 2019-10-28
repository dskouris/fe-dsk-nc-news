import axios from 'axios';

const request = axios.create({
  baseURL: 'https://be-dsk-nc-news.herokuapp.com/api'
});

export const getTopics = () => {
  return request
    .get('/topics')
    .then(({ data }) => {
      return data.topics;
    })
    .catch(console.log);
};

export const getArticles = () => {
  return request
    .get('/articles')
    .then(({ data }) => {
      return data.articles;
    })
    .catch(console.log);
};

export const getSingleArticle = article_id => {
  return request
    .get(`/articles/${article_id}`)
    .then(({ data }) => {
      return data.article;
    })
    .catch(console.log);
};
