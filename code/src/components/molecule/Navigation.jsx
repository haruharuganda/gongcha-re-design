import NavMenu from './NavMenu';

const Navigation = () => {
  const listItems = {
    hasLinkTag: true,
    items: new Map([
      [
        'Brand',
        {
          path: '/brand',
          sub: [
            '브랜드 소개',
            '공차의 약속',
            '브랜드 아이덴티티',
            '세계속의 공차'
          ]
        }
      ],
      [
        'Menu',
        {
          path: '/menu',
          sub: [
            '주문방법',
            '신메뉴',
            '음료',
            '디저트',
            'MD상품',
            '티스토리',
            '티레시피'
          ]
        }
      ]
    ])
  };

  return (
    <nav>
      <NavMenu listItems={listItems} />
    </nav>
  );
};

export default Navigation;
