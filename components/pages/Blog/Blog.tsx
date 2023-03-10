import React from 'react';

import ReadMore from '@atoms/ReadMore';

import {Text, Title} from '@custom-antd';

import BusinessCard from '@molecules/BusinessCard';
import Card from '@molecules/Card';

import ArticleOne from '@assets/blog/article_1.png';
import ArticlTwo from '@assets/blog/article_2.png';
import ArticleTree from '@assets/blog/article_3.png';
import ArticleFour from '@assets/blog/article_4.png';
import ArticleFive from '@assets/blog/article_5.png';
import ArticleSix from '@assets/blog/article_6.png';
import NewsImage from '@assets/blog/image.png';

import Colors from '@styles/Colors';

import {BlogInfo, CardContainer, Container} from './Blog.styled';

const mock = [
  {
    id: 1,
    name: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do ',
    data: 'CARLIE BEBLIN | JULY 9, 2020',
    info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doLorem ipsum dolor sit amet, consectetur adipiscing elit, sed doLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do',
    image: ArticleOne,
  },
  {
    id: 2,
    name: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do ',
    data: 'CARLIE BEBLIN | JULY 9, 2020',
    info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doLorem ipsum dolor sit amet, consectetur adipiscing elit, sed doLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do',
    image: ArticlTwo,
  },
  {
    id: 3,
    name: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do ',
    data: 'CARLIE BEBLIN | JULY 9, 2020',
    info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doLorem ipsum dolor sit amet, consectetur adipiscing elit, sed doLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do',
    image: ArticleTree,
  },
  {
    id: 4,
    name: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do ',
    data: 'CARLIE BEBLIN | JULY 9, 2020',
    info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doLorem ipsum dolor sit amet, consectetur adipiscing elit, sed doLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do',
    image: ArticleFour,
  },
  {
    id: 5,
    name: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do ',
    data: 'CARLIE BEBLIN | JULY 9, 2020',
    info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doLorem ipsum dolor sit amet, consectetur adipiscing elit, sed doLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do',
    image: ArticleFive,
  },
  {
    id: 6,
    name: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do ',
    data: 'CARLIE BEBLIN | JULY 9, 2020',
    info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doLorem ipsum dolor sit amet, consectetur adipiscing elit, sed doLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do',
    image: ArticleSix,
  },
];

const Blog: React.FC = () => {
  return (
    <Container>
      <Title color={Colors.black} fontWeight={800}>
        ????????
      </Title>
      <BlogInfo>
        <Card
          className="leftBlock"
          name={mock[0].name}
          date={mock[0].data}
          image={NewsImage}
          onMore={() => false}
          info={mock[0].info}
        />
        <div className="rightBlock">
          <Text className="title biggest">The most popular articles</Text>
          {mock.map(info => (
            <div key={info.id} className="card">
              <span>
                <Text className="data">{info.data}</Text>
                <Text className="name big semi-bold">{info.name}</Text>
              </span>
              <span className="readMoreContainer">
                <ReadMore type="button" onClick={() => false} />
              </span>
            </div>
          ))}
        </div>
      </BlogInfo>
      <CardContainer>
        {mock.slice(0, 3).map(blog => (
          <Card
            key={blog.id}
            className="card"
            name={blog.name}
            date={blog.data}
            image={blog.image}
            onMore={() => false}
            info={blog.info}
          />
        ))}
      </CardContainer>
      <BusinessCard />
      <CardContainer>
        {mock.slice(3, 6).map(blog => (
          <Card
            key={blog.id}
            className="card"
            name={blog.name}
            date={blog.data}
            image={blog.image}
            onMore={() => false}
            info={blog.info}
          />
        ))}
      </CardContainer>
    </Container>
  );
};

export default Blog;
