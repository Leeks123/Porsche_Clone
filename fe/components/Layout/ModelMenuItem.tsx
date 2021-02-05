/* eslint-disable react/jsx-filename-extension */
import Link from 'next/link';
import { Menu } from 'antd';
import { menuDataProp } from '../../interfaces';

const { Item, SubMenu } = Menu;

interface Props extends Array<typeof Item | typeof SubMenu> {
  data: menuDataProp,
}
const ModelMenuItem = (props:Props) => {
  const { data } = props;
  const { title, imgSrc, subMenu } = data;
  return (
    <SubMenu
      key={title}
      title={title}
      icon={
        <img src={imgSrc} alt={title} style={{ width: '89px', height: '55px', display: 'block' }} crossOrigin="anonymous" />
        }
      style={{ textAlign: 'center', height: '100%', marginRight: '0' }}
      {...props}
    >
      {subMenu && subMenu.map((v) => (
        <Menu.Item key={v.title}>{v.title}</Menu.Item>
      ))}
    </SubMenu>
  );
};

export default ModelMenuItem;
