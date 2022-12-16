import {Col, Row} from 'antd';

type DoubleColRowProps = {
  leftContent: React.ReactElement;
  rightContent: React.ReactElement;
};

const DoubleColRow: React.FC<DoubleColRowProps> = props => {
  const {leftContent, rightContent} = props;

  return (
    <Row style={{marginBottom: 80}} gutter={[0, 20]}>
      <Col
        md={{
          span: 10,
          push: 1,
        }}
        xs={{span: 24}}
      >
        {leftContent}
      </Col>
      <Col
        md={{
          span: 11,
          push: 2,
        }}
        xs={{span: 24}}
      >
        {rightContent}
      </Col>
    </Row>
  );
};

export default DoubleColRow;
