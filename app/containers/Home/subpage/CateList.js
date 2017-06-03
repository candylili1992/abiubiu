//core核心依赖
import React from 'react';


import { Link } from 'react-router';


//框架依赖
//css 依赖
import './subpage.less';


class CateList extends React.Component{
	constructor(props) {
	    super(props);
	    this.onChange = this.onChange.bind(this);
	}
	onChange(index){
		console.log(index);
	}
	render(){
		var list = new Array(9);
		list.fill(1);
		console.log("list",list)
		return(
           <div className='boxContent clearfix'>
	           {list.map((item,index)=>{
	           	 return(
	           	 	<div className='cateList'>
				<ul className="pt_ul clearfix">
					<li className="pt_li">
						<div className="pic_txt clearfix">
							<div className="info_box">
								<ul className="tv_m3 clearfix">
									<li className="li_tv">
										<div className="tv_pic">
											<img target="_blank" href="http://weibo.com/tv?from=wdlsy" src="http://ww2.sinaimg.cn/orj480/6a23b7e2jw1f3g0xzprcej20a80i80ss.jpg" alt="" className="piccut_v"/>
											<i  className='iconfont icon-play_icon tv_icon'></i>
										</div>
										<div className="intra_a">
											<div className="face_w">
												<img className="face_pho" src="http://tva4.sinaimg.cn/crop.0.0.996.996.50/83991e3ajw8eydrc2cqqej20ro0rpgnt.jpg"/>

											</div>
											<div className="item w_f12 clearfix">
												<div className="item_a W_autocut W_fl"><span className="item_span">搞笑趣闻视频</span></div>
												<div className="item_b W_fr"><em></em>4717万</div>
												<div className="txt_cut">街上遇到一位老爷爷遛狗，狗狗表示，不管你走得再慢，我都等你。更多#搞笑#视频请.关.注 @搞笑趣闻视频    #热门搞笑视频##微博搞笑排行榜# ​​​​</div>
                           
											</div>
										</div>
									</li>
									<li className="li_tv">
										<div className="tv_pic">
											<img target="_blank" href="http://weibo.com/tv?from=wdlsy" src="http://ww1.sinaimg.cn/orj480/c66df276jw1f8660h4a76j20no0dcwfu.jpg" alt="" className="piccut_v"/>
											<i  className='iconfont icon-play_icon tv_icon'></i>
										</div>
										<div className="intra_a">
											<div className="face_w">
												<img className="face_pho" src="http://tva2.sinaimg.cn/crop.0.0.180.180.50/770902acjw1e8qgp5bmzyj2050050aa8.jpg"/>


											</div>
											<div className="item w_f12 clearfix">
												<div className="item_a W_autocut W_fl"><span className="item_span">搞笑趣闻视频</span></div>
												<div className="item_b W_fr"><em></em>4717万</div>
												<div className="txt_cut">街上遇到一位老爷爷遛狗，狗狗表示，不管你走得再慢，我都等你。更多#搞笑#视频请.关.注 @搞笑趣闻视频    #热门搞笑视频##微博搞笑排行榜# ​​​​</div>
                           
											</div>
										</div>
									</li>
									<li className="li_tv">
										<div className="tv_pic">
											<img target="_blank" href="http://weibo.com/tv?from=wdlsy" src="http://ww1.sinaimg.cn/orj480/736f0c7ejw1falje3jfuyj20a00a0dgn.jpg" alt="" className="piccut_v"/>
											<i  className='iconfont icon-play_icon tv_icon'></i>
										</div>
										<div className="intra_a">
											<div className="face_w">
												<img className="face_pho" src="http://tva1.sinaimg.cn/crop.0.0.512.512.50/006A3IzOjw8f8knw0kzunj30e80e8t8w.jpg"/>

											</div>
											<div className="item w_f12 clearfix">
												<div className="item_a W_autocut W_fl"><span className="item_span">搞笑趣闻视频</span></div>
												<div className="item_b W_fr"><em></em>4717万</div>
												<div className="txt_cut">街上遇到一位老爷爷遛狗，狗狗表示，不管你走得再慢，我都等你。更多#搞笑#视频请.关.注 @搞笑趣闻视频    #热门搞笑视频##微博搞笑排行榜# ​​​​</div>
                           
											</div>
										</div>
									</li>
								</ul>
							</div>
						</div>
					</li>
				</ul>	
			</div>
	           	 	)
	           })
			}
		   </div>
		)
		
	}
}
export default CateList;
