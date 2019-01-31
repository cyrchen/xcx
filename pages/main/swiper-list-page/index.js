Page({
  
  data:{
	  naverBarCurrent: 0,
	  navList:[{name:'1'},{name:'2'},{name:'3'},]
  },
	
	/**
	 * navbar
	 */
	bindTab: function (e) {
		let index = e.currentTarget.dataset.id;
		if (this.data.naverBarCurrent === index) {
			return
		}
		this.setData({
			naverBarCurrent: index
		})
	},
	changeNavBarIndex(e) {
		var index = e.detail.current;
		let navList = this.data.navList;
		let focusNav = navList[index];
		if (!focusNav.List || focusNav.List.length === 0) {
			//this._getList(index)
		}
		this.setData({
			naverBarCurrent: index
		})
	},
  
  
  onLoad: function () {
	  this.setData({
		  navList: this.tabBar
	  })
  },
	scrollBottomToLoadMore(e){
	  console.log('scrollBottomToLoadMore')
  },
	tabBar: [
		{
			name: '进行中',
			getUrl: '/otc-publish/my-publish',
			params: {
				pageNum: 1,
				pageSize: 10
			},
			state: {
				reflesh: false,
				isLastPage: false,
				loadMore: false
			},
			List: []
		},
		{
			name: '历史发布',
			getUrl: '/otc-publish/history-publish',
			params: {
				pageNum: 1,
				pageSize: 10
			},
			state: {
				reflesh: false,
				isLastPage: false,
				loadMore: false
			},
			List: []
		}
	],
 
  
})