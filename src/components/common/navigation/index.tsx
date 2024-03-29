import styled from '@emotion/styled'
import React, { memo, useCallback, useEffect, useState } from 'react'
import Link from 'next/link'
import Form from './Form'
import { useRouter } from 'next/dist/client/router'

enum Menu {
  'MEMBER',
  'RANKING',
  'GENERATE',
}

function Navigation() {
  const [showSubMenu, setShowSubMenu] = useState<Menu | null>(null)
  const [activeMenu, setActiveMenu] = useState<Menu | null>(null)
  const { asPath } = useRouter()

  useEffect(() => {
    if (asPath.indexOf('member') >= 0) {
      setActiveMenu(Menu.MEMBER)
    } else if (asPath.indexOf('ranking') >= 0) {
      setActiveMenu(Menu.RANKING)
    } else if (asPath.indexOf('generate') >= 0) {
      setActiveMenu(Menu.GENERATE)
    }
  }, [asPath])

  const onClickMenu = useCallback(
    (menu: Menu) => () => {
      setShowSubMenu((prevState) => (prevState === menu ? null : menu))
    },
    []
  )

  return (
    <NavigationContainer>
      <Form />
      <MenuList>
        <Link href="/member">
          <li className={activeMenu === Menu.MEMBER ? 'active' : ''}>클럽원</li>
        </Link>
        <li
          onClick={onClickMenu(Menu.RANKING)}
          aria-hidden="true"
          className={activeMenu === Menu.RANKING ? 'active' : ''}
        >
          <h2>로즈샤론정보</h2>
          <SubMenu showSubMenu={showSubMenu === Menu.RANKING}>
            <Link href={`/ranking/trophy`}>
              <li>· 트로피 순위</li>
            </Link>
            <Link href={`/ranking/medal`}>
              <li>· 메달 순위</li>
            </Link>
            <Link href={`/ranking/friendly-match`}>
              <li>· 친선 경기 군 기록표</li>
            </Link>
          </SubMenu>
        </li>
        <Link href="/generate">
          <li className={activeMenu === Menu.GENERATE ? 'active' : ''}>닉네임 생성</li>
        </Link>
      </MenuList>
    </NavigationContainer>
  )
}

export default memo(Navigation)

const NavigationContainer = styled.nav`
  position: relative;
  width: 100%;
  height: 180px;
  background-color: #eeeeee;
`

const MenuList = styled.ul`
  position: absolute;
  bottom: 20px;
  width: 100%;
  text-align: center;
  z-index: 10;

  & > li {
    position: relative;
    display: inline-block;
    margin: 0 5px;
    padding: 0.8em 0;
    width: 95px;
    color: #666666;
    border: 1px solid #000000;
    border-radius: 5px;
    font-size: 12px;
    background-color: #fefefe;
    cursor: pointer;
    transition: all 0.8s;
  }

  & > li.active {
    color: #fefefe;
    background-color: #666666;
  }
`
const SubMenu = styled.ul<{ showSubMenu: boolean }>`
  visibility: ${({ showSubMenu }) => (showSubMenu ? 'visible' : 'hidden')};
  opacity: ${({ showSubMenu }) => (showSubMenu ? 1 : 0)};
  position: absolute;
  left: -25px;
  top: 40px;
  padding: 0 9px;
  width: 140px;
  color: #666666;
  text-align: left;
  border: 1px solid #000000;
  background-color: #ffffff;
  transition: all 0.5s;

  & > li {
    margin: 11px 0;
    padding: 4px 2px;
    cursor: pointer;
  }

  & > li:hover {
    color: white;
    background-color: #666666;
  }
`
