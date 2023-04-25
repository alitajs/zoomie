import Footer from '@/components/Footer';
import {
  LaptopOutlined,
  NotificationOutlined,
  UserOutlined,
} from '@ant-design/icons-vue';
import './index.css';

export default () => {
  const selectedKeys = ref<string[]>(['1']);
  const openKeys = ref<string[]>(['sub1']);
  return (
    <a-layout class="zoomie-layout">
      <a-layout-header class="header">
        <div class="zoomie-header">
          <div class="logo">
            <a>
              <img
                src="https://www.antdv.com/assets/logo.1ef800a8.svg"
                alt="logo"
              />
              <h1>Zoomie</h1>
            </a>
          </div>
          <div style={{ flex: '1 1 0%' }}></div>
          <a-space>
            Space
            <a-button type="primary">Button</a-button>
          </a-space>
        </div>
      </a-layout-header>
      <a-layout>
        <a-layout-sider width="200" style={{ background: '#fff' }}>
          <a-menu
            v-model={[openKeys]}
            mode="inline"
            style={{ height: '100%', borderRight: 0 }}
          >
            <a-sub-menu
              key="sub1"
              v-model={[selectedKeys]}
              title={
                <span>
                  <UserOutlined />
                  subnav 1
                </span>
              }
            >
              <a-menu-item key="1">option1</a-menu-item>
              <a-menu-item key="2">option2</a-menu-item>
              <a-menu-item key="3">option3</a-menu-item>
              <a-menu-item key="4">option4</a-menu-item>
            </a-sub-menu>
            <a-sub-menu
              key="sub2"
              title={
                <span>
                  <LaptopOutlined />
                  subnav 2
                </span>
              }
            >
              <a-menu-item key="5">option5</a-menu-item>
              <a-menu-item key="6">option6</a-menu-item>
              <a-menu-item key="7">option7</a-menu-item>
              <a-menu-item key="8">option8</a-menu-item>
            </a-sub-menu>
            <a-sub-menu
              key="sub3"
              title={
                <span>
                  <NotificationOutlined />
                  subnav 3
                </span>
              }
            >
              <a-menu-item key="9">option9</a-menu-item>
              <a-menu-item key="10">option10</a-menu-item>
              <a-menu-item key="11">option11</a-menu-item>
              <a-menu-item key="12">option12</a-menu-item>
            </a-sub-menu>
          </a-menu>
        </a-layout-sider>
        <a-layout style="padding: 0 24px 24px">
          <a-breadcrumb style="margin: 16px 0">
            <a-breadcrumb-item>Home</a-breadcrumb-item>
            <a-breadcrumb-item>List</a-breadcrumb-item>
            <a-breadcrumb-item>App</a-breadcrumb-item>
          </a-breadcrumb>
          <a-layout-content
            style={{
              background: '#fff',
              padding: '24px',
              margin: 0,
              minHeight: '280px',
            }}
          >
            <router-view></router-view>
          </a-layout-content>
          <Footer />
        </a-layout>
      </a-layout>
    </a-layout>
  );
};
