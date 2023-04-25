// 备份文件，无实际用处
import { Button, Result } from 'ant-design-vue';
import { history } from 'valita';
import { type FunctionalComponent } from 'vue';

const NoFoundPage: FunctionalComponent = () => (
  <Result
    status="404"
    title="404"
    subTitle="Sorry, the page you visited does not exist."
    extra={
      <Button type="primary" onClick={() => history.push('/')}>
        Back Home
      </Button>
    }
  />
);

NoFoundPage.displayName = 'NoFoundPage';

export default NoFoundPage;
