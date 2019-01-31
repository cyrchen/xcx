// components/Dialog/dialog.js
Component({
	options: {
		multipleSlots: true // 在组件定义时的选项中启用多slot支持
	},
	/**
	 * 组件的属性列表
	 * 用于组件自定义设置
	 */
	properties: {
		navList: {
			type: Array,
			value: []
		},
		naverBarCurrent: {
			type: Number,
			value: 0
		}
	},
	data: {},
	methods: {
		_bindNavItem: function (e) {
			let index = e.currentTarget.dataset.index;
			if (this.data.naverBarCurrent === index) {
				return
			}
			this.setData({
				naverBarCurrent: index
			})
		},
		_changeNavBarIndex(e) {
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
		_scrollBottomToLoadMore(e){
			let index = e.currentTarget.dataset.index;
			this.triggerEvent("listLoadMore", {index});
		},
	}
})