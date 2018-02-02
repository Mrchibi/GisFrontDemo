/*
	the navbar data code that will dynamic generation
 */
$(function(){
	/*
		Json style data
	 */
	var rightList={
		menus:[
			{id:'m_PersonInfoId',name:'m_PersonInfo',label:'人员信息',childens:[
				{id:'m_Person_Edit_Id',name:'m_Person_Edit',label:'人员编辑',childens:[]},
				{id:'m_Person_Query_Id',name:'m_Person_Query',label:'人员查询',childens:[]},
				{id:'m_Person_ADVQuery_Id',name:'m_Person_ADVQuery',label:'高级查询',childens:[]},
				{id:'m_Person_Relation_Id',name:'m_Person_Relation',label:'人员关系',childens:[]}
			]},
			{id:'m_HouseInfoId',name:'m_HouseInfo',label:'房屋信息',childens:[
				{id:'m_House_Edit_Id',name:'m_House_Edit',label:'房屋录入',childens:[]},
				{id:'m_Build_Edit_Id',name:'m_Build_Edit',label:'楼房录入',childens:[]},
				{id:'m_House_Query_Id',name:'m_House_Query',label:'房屋查询',childens:[]},
				{id:'m_House_Show_Id',name:'m_House_Show',label:'房屋显示',childens:[]}
			]},
			{id:'m_HouseInfoId',name:'m_HouseInfo',label:'标绘管理',childens:[
				{id:'m_House_Edit_Id',name:'m_House_Edit',label:'标绘工具',childens:[]},
				{id:'m_Build_Edit_Id',name:'m_Build_Edit',label:'清除',childens:[]},
			]},
			{id:'m_HouseInfoId',name:'m_HouseInfo',label:'电子围栏',childens:[
				{id:'m_House_Edit_Id',name:'m_House_Edit',label:'电子围栏',childens:[]},
				{id:'m_Build_Edit_Id',name:'m_Build_Edit',label:'告警记录',childens:[]},
			]},
			{id:'m_HouseInfoId',name:'m_HouseInfo',label:'防控信息',childens:[
				{id:'m_House_Edit_Id',name:'m_House_Edit',label:'事件管理',childens:[]},
			]},
			{id:'m_HouseInfoId',name:'m_HouseInfo',label:'走访入户',childens:[
				{id:'m_House_Edit_Id',name:'m_House_Edit',label:'走访记录',childens:[]},
				{id:'m_Build_Edit_Id',name:'m_Build_Edit',label:'走访管理',childens:[]},
			]},
			{id:'m_HouseInfoId',name:'m_HouseInfo',label:'系统设置',childens:[
				{id:'m_House_Edit_Id',name:'m_House_Edit',label:'特殊人员信息管理',childens:[]},
				{id:'m_Build_Edit_Id',name:'m_Build_Edit',label:'位置配置',childens:[
					{id:'m_Build_Edit_Id',name:'m_Build_Edit',label:'位置配置1',childens:[]},
					{id:'m_Build_Edit_Id',name:'m_Build_Edit',label:'位置配置2',childens:[]},
				]},
				{id:'m_Build_Edit_Id',name:'m_Build_Edit',label:'数据更新状态',childens:[]},
				{id:'m_Build_Edit_Id',name:'m_Build_Edit',label:'账户管理',childens:[]},
				{id:'m_Build_Edit_Id',name:'m_Build_Edit',label:'地址维护',childens:[]},
				{id:'m_Build_Edit_Id',name:'m_Build_Edit',label:'修改密码',childens:[]},
				{id:'m_Build_Edit_Id',name:'m_Build_Edit',label:'数据整理',childens:[]},
				{id:'m_Build_Edit_Id',name:'m_Build_Edit',label:'关于',childens:[]},
			]},

		],
		layers:[
			{id:'l_BaseInfoId',name:'l_BaseInfo',label:'基本情况',image:'\img.png',childens:[
				{id:'l_KeyPoint_ID',name:'l_KeyPoint',label:'重点目标',image:'\img.png',childens:[
					{id:'l_XIANG_ID',name:'l_XIANG',label:'乡政府',image:'\img.png',childens:[]},
					{id:'l_CUN_ID',name:'m_House_Query',label:'村委会',image:'\img.png',childens:[]},
					{id:'l_ZHONGXUE_Id',name:'m_House_Show',label:'中学',image:'\img.png',childens:[]}
				]}
				
			]}
		],
		tools:[
			{id:'t_Measure_Lenght_ID',name:'t_Measure_Lenght',label:'测量长度',image:'\img.png',childens:[]},
			{id:'t_Measure_Area_ID',name:'t_Measure_Area',label:'测量面积',image:'\img.png',childens:[]},
			{id:'t_Measure_Clear_ID',name:'t_Measure_Clear',label:'清除测量结果',image:'\img.png',childens:[]},
			{id:'t_Editable_ID',name:'t_Editable',label:'编辑状态',image:'\img.png',childens:[]},
			{id:'t_Fullview_ID',name:'t_Fullview',label:'初始位置',image:'\img.png',childens:[]}
		]
	};

	/*
		The navbar data dynamic generation
	 */
	
	createFirstMenu( rightList,'menus' );

	
});
function createFirstMenu( dataPara,catagory ){

	var objData = dataPara[ catagory ];

	for (var i = 0; i < objData.length; i++) {
		var item = objData[i];
		var $objHtml = $('<li class="dropdown"><a href="#" class="dropdown-toggle" data-toggle="dropdown" >'
						 +  item['label'] + '<b class="caret"></b></li>');

		$(".navbar-data").append( $objHtml );
		/*
			Check the second level menu
		 */
		if( item['childens'].length !== 0 ){

			var ul = $('<ul></ul>');
			ul.addClass('dropdown-menu');

			for (var j = 0; j < item['childens'].length; j++) {
				if (item['childens'][j]['label']=='人员编辑'){
					var $objSecondLi = $('<li><a href="#" data-toggle="modal" data-target="#myModal">'+item['childens'][j]['label']+'</a>'+' </li>');
				}/*创建弹出模态框链接*/
				else if( item['childens'][j]['childens'].length == 0 ){
					var $objSecondLi = $('<li class="dropdown"><a href="#" class="dropdown-toggle navbar-link" data-toggle="dropdown" >'
							 +  item['childens'][j]['label'] + '</li>');
				}else{
					var $objSecondLi = $('<li class="dropdown-submenu"><a href="#" >'
							 +  item['childens'][j]['label'] + '<b class="glyphicon glyphicon-triangle-right" style="display:inline-block;margin-left:50px;"></b></li>'); 
				}
				ul.append( $objSecondLi );
				

				if( item['childens'][j]['childens'].length !== 0 ){
					// 判断是否有三级菜单的数据
					var thirdData = item['childens'][j]['childens'];
					// 创建一个ul
					var $thirdUl = $('<ul></ul>');
					$thirdUl.addClass('dropdown-menu');

					for ( var z = 0; z < thirdData.length; z++ ) {
						var $thirdLi =  $( '<li><a href="#"  >'
						 +  thirdData[z]['label'] + '</li>' );
						$thirdUl.append( $thirdLi );
					}
					$objSecondLi.append($thirdUl);



				}
			}
		}
		$objHtml.append(ul);
		
	}
}

function loadStyle(url){
	var link = document.createElement('link');
	link.type = 'text/css';
	link.rel = 'stylesheet';
	link.href = url;
	var head = document.getElementsByTagName('head')[0];
	head.appendChild(link);
}
loadStyle('../css/submenu.css');