//core核心依赖
import React from 'react';


import { Link } from 'react-router';
//引入antd-mobile
import { Tabs } from 'antd';
const TabPane = Tabs.TabPane;


//框架依赖
//css 依赖
import './subpage.less';


class RightZone extends React.Component{
	constructor(props) {
		super(props);
		
	}
   
	render(){
		

		return(
			<div className='RightZone'>
				 <div>
					  <Tabs defaultActiveKey="1">
					    <TabPane tab="账号登陆" key="1">Content of Tab Pane 1</TabPane>
					    <TabPane tab="安全登录" key="2">
					    	<div className="login_content">
                          	    <img src="http://v2.qr.weibo.cn/inf/gen?api_key=a0241ed0d922e7286303ea5818292a76&amp;data=https%3A%2F%2Fpassport.weibo.cn%2Fsignin%2Fqrcode%2Fscan%3Fqr%3DQRID-yf-1Dgk2S-1FfW1-bRDTbE3lbKp0QEd0a7vnpYcf05a3%26sinainternalbrowser%3Dtopnav%26showmenu%3D0&amp;datetime=1496300242&amp;deadline=0&amp;level=M&amp;logo=http%3A%2F%2Fimg.t.sinajs.cn%2Ft6%2Fstyle%2Fimages%2Findex%2Fweibo-logo.png&amp;output_type=img&amp;redirect=0&amp;sign=8618f8a9741fdda7618752ea91c371c4&amp;size=180&amp;start_time=0&amp;title=sso&amp;type=url" />
		                    </div>
					    </TabPane>
					  </Tabs>
				  </div>
			</div>
		)
		
	}
}
export default RightZone;
