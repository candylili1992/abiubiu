//core核心依赖
import React from 'react';


import { Link } from 'react-router';
//引入antd-mobile
import { Tabs } from 'antd';
const TabPane = Tabs.TabPane;
import { Form, Icon, Input, Button, Checkbox } from 'antd';
const FormItem = Form.Item;


//框架依赖
//css 依赖
import './subpage.less';


class RightZone extends React.Component{
	constructor(props) {
		super(props);
		this.handleSubmit=this.handleSubmit.bind(this);
		
	}
	handleSubmit(e){
	       e.preventDefault();
	      this.props.form.validateFields((err, values) => {
		      if (!err) {
		        console.log('Received values of form: ', values);
		      }
    })}
   
	render(){
		
        const { getFieldDecorator } = this.props.form;
		return(
			<div className='RightZone'>
				 <div>
					  <Tabs defaultActiveKey="1">
					    <TabPane tab="账号登陆" key="1">
					    	<Form onSubmit={this.handleSubmit} className="login-form">
						        <FormItem>
						          {getFieldDecorator('userName', {
						            rules: [{ required: true, message: 'Please input your username!' }],
						          })(
						            <Input prefix={<Icon type="user" style={{ fontSize: 13 }} />} placeholder="Username" />
						          )}
						        </FormItem>
						        <FormItem>
						          {getFieldDecorator('password', {
						            rules: [{ required: true, message: 'Please input your Password!' }],
						          })(
						            <Input prefix={<Icon type="lock" style={{ fontSize: 13 }} />} type="password" placeholder="Password" />
						          )}
						        </FormItem>
						        <FormItem>
						          {getFieldDecorator('remember', {
						            valuePropName: 'checked',
						            initialValue: true,
						          })(
						            <Checkbox>记住我</Checkbox>
						          )}
						          <a className="login-form-forgot" href="">忘记密码</a>
						          <div>
							          <Button type="primary" htmlType="submit" className="login-form-button">
							            登录
							          </Button>
							          <div className="register_des">
								          <span>还没有微博？</span>
								          <a href="">立即注册</a>
							          </div>
						          </div>
                                </FormItem>
                         </Form>
					    </TabPane>
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
// const RightZone = Form.create()(RightZone);

export default Form.create()(RightZone);
