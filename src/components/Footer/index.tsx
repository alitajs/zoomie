import { CopyrightOutlined, GithubOutlined } from '@ant-design/icons-vue';
import { Layout } from 'ant-design-vue';
import { useI18n } from 'valita';
import {
  defineComponent,
  type CSSProperties,
  type FunctionalComponent,
  type PropType,
} from 'vue';
import './index.less';

const { Footer } = Layout;
interface LinkItem {
  key: string;
  title: any;
  href: string;
  blankTarget: boolean;
}

const DefaultFooter = defineComponent({
  name: 'DefaultFooter',
  props: {
    className: String,
    copyright: String,
    style: Object as PropType<CSSProperties>,
    links: [] as PropType<LinkItem[]>,
  },
  setup({ links, copyright, style, className }) {
    const { t } = useI18n();
    const currentYear = new Date().getFullYear();
    return () => (
      <Footer class={className} style={{ padding: 0, ...style }}>
        <div class="zoomie-footer" style={style}>
          {links && (
            <div class="zoomie-footer-links">
              {links.map((link: any) => (
                <a
                  key={link.key}
                  title={link.key}
                  target={link.blankTarget ? '_blank' : '_self'}
                  href={link.href}
                  rel="noreferrer"
                >
                  {link.title}
                </a>
              ))}
            </div>
          )}
          {copyright && (
            <div class="zoomie-footer-copyright">
              <CopyrightOutlined /> {currentYear} {t(copyright)}
            </div>
          )}
        </div>
      </Footer>
    );
  },
});

const ZoomieFooter: FunctionalComponent = () => {
  const copyright = 'app.copyright.produced';
  return (
    <DefaultFooter
      copyright={`${copyright}`}
      links={[
        {
          key: 'Ant Design Pro',
          title: 'Ant Design Pro',
          href: 'https://pro.ant.design',
          blankTarget: true,
        },
        {
          key: 'github',
          title: <GithubOutlined />,
          href: 'https://github.com/ant-design/ant-design-pro',
          blankTarget: true,
        },
        {
          key: 'Ant Design',
          title: 'Ant Design',
          href: 'https://ant.design',
          blankTarget: true,
        },
      ]}
    />
  );
};

ZoomieFooter.displayName = 'ZoomieFooter';

export default ZoomieFooter;
