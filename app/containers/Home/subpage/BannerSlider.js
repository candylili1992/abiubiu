//core核心依赖
import React from 'react';
import { Icon } from 'antd';

//框架依赖



//css 依赖
import './subpage.less';


class BannerSlider extends React.Component{
	constructor(props) {
	    super(props);
	   
	}
	
	render(){
		
		return(
			<div>
				<ul className="navLeft">
					<li>热门</li>
					<li>明星</li>
					<li>搞笑</li>
					<li>社会</li>
					<li>视频</li>
					<li>头部</li>
					<li>情感</li>
					<li>时尚</li>
					<li>军事</li>
					<li>榜单</li>
				</ul>
				<div className="contentRight"></div>
			</div>
		)
		
	}
}
export default BannerSlider;