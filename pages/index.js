import Master from '../src/components/master'
import { Layout, Menu, Icon } from 'antd'
const { SubMenu } = Menu
const { Content, Sider, Footer } = Layout
import commonStyle from '../static/styles/common/index.js'

export default () => (
  <Master>
    <Layout style={{minHeight: '100vh', paddingTop: '56px'}}>
      <style jsx global>{commonStyle}</style>
      <Sider width={200} style={{ }} breakpoint='md' collapsedWidth={0} collapsible>
        <Menu
          mode='inline'
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          style={{ height: '100%', borderRight: 0 }}
          theme='dark'
        >
          <SubMenu key='sub1' title={<span><Icon type='user' />subnav 1</span>}>
            <Menu.Item key='1'>option1</Menu.Item>
            <Menu.Item key='2'>option2</Menu.Item>
            <Menu.Item key='3'>option3</Menu.Item>
            <Menu.Item key='4'>option4</Menu.Item>
          </SubMenu>
          <SubMenu key='sub2' title={<span><Icon type='laptop' />subnav 2</span>}>
            <Menu.Item key='5'>option5</Menu.Item>
            <Menu.Item key='6'>option6</Menu.Item>
            <Menu.Item key='7'>option7</Menu.Item>
            <Menu.Item key='8'>option8</Menu.Item>
          </SubMenu>
          <SubMenu key='sub3' title={<span><Icon type='notification' />subnav 3</span>}>
            <Menu.Item key='9'>option9</Menu.Item>
            <Menu.Item key='10'>option10</Menu.Item>
            <Menu.Item key='11'>option11</Menu.Item>
            <Menu.Item key='12'>option12</Menu.Item>
          </SubMenu>
        </Menu>
      </Sider>
      <Layout style={{ padding: '24px' }}>
        <Content style={{ background: '#fff', margin: 0, minHeight: 280, padding: 20}}>
          Content
        </Content>
        <Footer>Footer</Footer>
      </Layout>
    </Layout>
  </Master>
)
