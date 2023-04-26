import ProLayout, { PageContainer } from '@ant-design-vue/pro-layout';
import Antd from 'ant-design-vue';

export function onMounted({ app }: any) {
  app.use(Antd).use(Antd).use(ProLayout).use(PageContainer);
}
