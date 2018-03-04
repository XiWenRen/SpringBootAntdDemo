import {Button, Layout} from 'antd';
const {Header, Footer, Sider, Content} = Layout;

const CountApp = ({count, dispatch}) => {
  function increment() {
    dispatch({
      type: 'count/add',
    });
  }

  return (
    <div>
      <Layout>
        <Header>小玩具</Header>
        <Content>
          <div>最高纪录: {count.record}</div>
          <div>当前分数：{count.current}</div>
          <Button type="default" onClick={increment}>+</Button>
        </Content>ª
      </Layout>
    </div>
  );
};ª

export default CountApp;
