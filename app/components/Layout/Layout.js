import React from 'react';
import { Link } from 'react-router';
//框架依赖
import { Layout, Menu,Button, Breadcrumb,Affix } from 'antd';
import { Input } from 'antd';
const { Header, Content, Footer } = Layout;


import './layout.less';
const Search = Input.Search;

class HomeLayout extends React.Component {

  render () {
    const {children} = this.props;
    return (
      <Layout  className="layout bg"  >
        <Header className="head">
          <div className="headwrap">
            <div className="logo" >
              <img  className="logoimg" src={require('../../static/imgs/headerlogo.png')} alt="logo"/>
            </div>
            <div className="searchwrap" style={styles.search}>
              <Search  placeholder="大家都在搜全明星"  style={{ width: 200 }} onSearch={value => console.log(value)}
  />
            </div>
            <div className="menu">
              <ul>
                  <li className="active"><Link to={'/'}>首页</Link></li>
                  <li><Link to={'/cate/12'}>视频</Link></li>
                  <li><Link to={'/products'}>发现</Link></li>
              </ul>
            </div>
            <div className="loginwrap">
                <div className="login">
                  <button className="loginbtn" >登录</button>
                  <button className="loginbtn" >注册</button>
                </div>

                <div className="logout">
                  <a href=""><img src="http://image.diyidan.net/user/2017/4/24/U8hklQfLuTDsw6dR.jpg!tiny" alt="" /></a>
                  <button className="loginbtn" >退出</button>
                </div>
            </div>
          </div>
        </Header>
        <Content className="content">
              {children}
        </Content>
        <Footer className="footer" style={{ textAlign: 'center' }}>
          aibiubiu.com ©2017 Created by candy
        </Footer>
      </Layout>
    );
  }
}

export default HomeLayout;
const styles={
  search:{
    float:"left"
  }
}