import React from "react";
import { PageSection } from "@atoms";
import { Text, Title } from "@custom-antd";
import ReadMore from "@atoms/ReadMore";
import NewsImage from '@assets/blog/image.png';
import Card from "@molecules/Card";
import BusinessCard from "@molecules/BusinessCard";
import { BlogInfo, CardContainer } from "./Blog.styled";

const mock = [
  {
    id: 1,
    name: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do ',
    data: 'CARLIE BEBLIN | JULY 9, 2020',
    info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doLorem ipsum dolor sit amet, consectetur adipiscing elit, sed doLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do',
    image: NewsImage
  },
  {
    id: 2,
    name: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do ',
    data: 'CARLIE BEBLIN | JULY 9, 2020',
    info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doLorem ipsum dolor sit amet, consectetur adipiscing elit, sed doLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do',
    image: NewsImage
  },
  {
    id: 3,
    name: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do ',
    data: 'CARLIE BEBLIN | JULY 9, 2020',
    info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doLorem ipsum dolor sit amet, consectetur adipiscing elit, sed doLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do',
    image: NewsImage
  },
];

const Blog: React.FC = () => {
  return (
     <PageSection>
      <Title color="#000000" fontWeight={800}>Блог</Title>
      <BlogInfo>
        <Card className='leftBlock' 
          name={mock[0].name}
          date={mock[0].data} 
          image={mock[0].image} 
          onMore={() => false} 
          info={mock[0].info} 
        />
        <div className="rightBlock">
          <Text className="title biggest">The most popular articles</Text>
          {
            mock.map((info) => (
              <div key={info.id} className='card'>
                <span>
                  <Text className="data">{info.data}</Text>
                  <Text className="name big semi-bold">{info.name}</Text>
                </span>
                <span className="readMoreContainer">
                  <ReadMore type="button" onClick={() => false}/>
                </span>
              </div>
            ))
          }
        </div>
      </BlogInfo>
      <CardContainer>
        {
          mock.map(blog => (
            <Card key={blog.id} 
              className='card' 
              name={blog.name}
              date={blog.data}
              image={blog.image} 
              onMore={() => false} 
              info={blog.info} />
          ))
        }
      </CardContainer>
      <BusinessCard />
      <CardContainer>
        {
          mock.map(blog => (
            <Card key={blog.id} 
              className='card' 
              name={blog.name}
              date={blog.data}
              image={blog.image} 
              onMore={() => false} 
              info={blog.info} />
          ))
        }
      </CardContainer>
     </PageSection>
  );
};

export default Blog;
