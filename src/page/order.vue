<template>
	<div class="order">
    <div style="width: 100%;height: auto">
		<div class="top-module flex-row">
			<router-link to="transaction">
				<img class="img-left" src="../../static/images/return.png"/>
			</router-link>
			<div class="top-tab flex-row">
					<h3>订单</h3>
			</div>
			<router-link to="advertising">
				<div class="top-right flex-row">
					<img src="../../static/images/order_01.png" alt="">
					<h3>委托单</h3>
				</div>
			</router-link>
		</div>
		<div class="tab-left flex-col" v-show="showLeft">
			<!-- 购买顶部切换 -->
			<div class="tab-father flex-row">
				<template v-for="(tab,index) in tabsName">
					<div class="tab-btn flex-col" @click="tabsSwitch(tab,index)" v-bind:class="{active:tab.isActive}">
						{{tab.name}}
					</div>
				</template>
			</div>
			<!-- 需要切换的部分 -->
			<div class="tab-card" style="display: block;">
				<!-- 循环列表list -->
				<!-- <router-link to="orderPage"> -->
				<!-- </router-link> -->
				<div class="list flex-col" v-for="list in lists" @click="goDetails(list)">
					<div class="list-top flex-row">
						<div class="list-top-left flex-row">
              <p v-if="list.type==2" style="color: #ed573f; font-weight:600;font-size: .3rem;padding-right: .3rem">购买 <span>{{list.coin}}</span></p>
              <p v-else style="color: #50c165;font-size: .3rem;font-weight:600;padding-right: .3rem">出售 <span>{{list.coin}}</span></p>
						</div>
						<h4 class="h4-blue" v-if="list.status == 1&&list.uid == list.buyer_uid">待付款</h4>
						<h4 class="h4-blue" v-if="list.status == 2&&list.uid == list.buyer_uid">等待放行</h4>
						<h4 class="h4-blue" v-if="list.status == 1&&list.uid == list.seller_uid">等待付款</h4>
						<h4 class="h4-blue" v-if="list.status == 2&&list.uid == list.seller_uid">待放行</h4>
						<h4 class="h4-blue" v-if="list.status == 3">完成</h4>
						<h4 class="h4-gray" v-if="list.status == -1">撤销</h4>
						<h4 class="h4-red" v-if="list.status == 4">申诉中</h4>
					</div>
					<div class="list-bottom flex-col">
						<div class="list-bottom-top flex-row">
							<h4>金额&nbsp;{{list.total|numFilter}}CNY</h4>
							<h5>购买数量:&nbsp;{{list.num|numFilter}}</h5>
						</div>
            <div class="list-bottom-top flex-row">
              <h4 style="font-weight: normal">商家：{{list.nickname}}</h4>
              <h5>购买单价:&nbsp;{{list.num|numFilter}}</h5>
            </div>
						<div class="list-bottom-bottom flex-row">
							<div class="bottom-left flex-row">
								<img src="../../static/images/transaction_03.png" alt="" v-if="list.bank == 1">
								<img src="../../static/images/transaction_04.png" alt="" v-if="list.alipay == 1">
								<img src="../../static/images/transaction_05.png" alt="" v-if="list.wechat == 1">
							</div>
              <h5>{{list.created_at}}</h5>
            </div>
					</div>
				</div>
				<!--没有数据-->
				<div class="no-data flex-row" v-if="!lists.length">
					暂无数据
				</div>
			</div>
			<div class="tab-card">
				<!-- 循环列表list -->
				<div class="list flex-col" v-for="list in lists" @click="goDetails(list)">
          <div class="list-top flex-row">
            <div class="list-top-left flex-row">
              <p v-if="list.type==2" style="color: #ed573f; font-weight:600;font-size: .3rem;padding-right: .3rem">购买 <span>{{list.coin}}</span></p>
              <p v-else style="color: #50c165;font-size: .3rem;font-weight:600;padding-right: .3rem">出售 <span>{{list.coin}}</span></p>
            </div>
            <h4 class="h4-blue" v-if="list.status == 1&&list.uid == list.buyer_uid">待付款</h4>
            <h4 class="h4-blue" v-if="list.status == 2&&list.uid == list.buyer_uid">等待放行</h4>
            <h4 class="h4-blue" v-if="list.status == 1&&list.uid == list.seller_uid">等待付款</h4>
            <h4 class="h4-blue" v-if="list.status == 2&&list.uid == list.seller_uid">待放行</h4>
            <h4 class="h4-blue" v-if="list.status == 3">完成</h4>
            <h4 class="h4-gray" v-if="list.status == -1">撤销</h4>
            <h4 class="h4-red" v-if="list.status == 4">申诉中</h4>
          </div>
          <div class="list-bottom flex-col">
            <div class="list-bottom-top flex-row">
              <h4>金额&nbsp;{{list.total|numFilter}}CNY</h4>
              <h5>购买数量:&nbsp;{{list.num|numFilter}}</h5>
            </div>
            <div class="list-bottom-top flex-row">
              <h4 style="font-weight: normal">商家：{{list.nickname}}</h4>
              <h5>购买单价:&nbsp;{{list.num|numFilter}}</h5>
            </div>
            <div class="list-bottom-bottom flex-row">
              <div class="bottom-left flex-row">
                <img src="../../static/images/transaction_03.png" alt="" v-if="list.bank == 1">
                <img src="../../static/images/transaction_04.png" alt="" v-if="list.alipay == 1">
                <img src="../../static/images/transaction_05.png" alt="" v-if="list.wechat == 1">
              </div>
              <h5>{{list.created_at}}</h5>
            </div>
          </div>
				</div>
				<!--没有数据-->
				<div class="no-data flex-row" v-if="!lists.length">
					暂无数据
				</div>
			</div>
			<div class="tab-card">
				<!-- 循环列表list -->
				<div class="list flex-col" v-for="list in lists" @click="goDetails(list)">
          <div class="list-top flex-row">
            <div class="list-top-left flex-row">
              <p v-if="list.type==2" style="color: #ed573f; font-weight:600;font-size: .3rem;padding-right: .3rem">购买 <span>{{list.coin}}</span></p>
              <p v-else style="color: #50c165;font-size: .3rem;font-weight:600;padding-right: .3rem">出售 <span>{{list.coin}}</span></p>
            </div>
            <h4 class="h4-blue" v-if="list.status == 1&&list.uid == list.buyer_uid">待付款</h4>
            <h4 class="h4-blue" v-if="list.status == 2&&list.uid == list.buyer_uid">等待放行</h4>
            <h4 class="h4-blue" v-if="list.status == 1&&list.uid == list.seller_uid">等待付款</h4>
            <h4 class="h4-blue" v-if="list.status == 2&&list.uid == list.seller_uid">待放行</h4>
            <h4 class="h4-blue" v-if="list.status == 3">完成</h4>
            <h4 class="h4-gray" v-if="list.status == -1">撤销</h4>
            <h4 class="h4-red" v-if="list.status == 4">申诉中</h4>
          </div>
          <div class="list-bottom flex-col">
            <div class="list-bottom-top flex-row">
              <h4>金额&nbsp;{{list.total|numFilter}}CNY</h4>
              <h5>购买数量:&nbsp;{{list.num|numFilter}}</h5>
            </div>
            <div class="list-bottom-top flex-row">
              <h4 style="font-weight: normal">商家：{{list.nickname}}</h4>
              <h5>购买单价:&nbsp;{{list.num|numFilter}}</h5>
            </div>
            <div class="list-bottom-bottom flex-row">
              <div class="bottom-left flex-row">
                <img src="../../static/images/transaction_03.png" alt="" v-if="list.bank == 1">
                <img src="../../static/images/transaction_04.png" alt="" v-if="list.alipay == 1">
                <img src="../../static/images/transaction_05.png" alt="" v-if="list.wechat == 1">
              </div>
              <h5>{{list.created_at}}</h5>
            </div>
          </div>
				</div>
				<!--没有数据-->
				<div class="no-data flex-row" v-if="!lists.length">
					暂无数据
				</div>
			</div>
			<div class="tab-card">
				<!-- 循环列表list -->
				<div class="list flex-col" v-for="list in lists" @click="goDetails(list)">
          <div class="list-top flex-row">
            <div class="list-top-left flex-row">
              <p v-if="list.type==2" style="color: #ed573f; font-weight:600;font-size: .3rem;padding-right: .3rem">购买 <span>{{list.coin}}</span></p>
              <p v-else style="color: #50c165;font-size: .3rem;font-weight:600;padding-right: .3rem">出售 <span>{{list.coin}}</span></p>
            </div>
            <h4 class="h4-blue" v-if="list.status == 1&&list.uid == list.buyer_uid">待付款</h4>
            <h4 class="h4-blue" v-if="list.status == 2&&list.uid == list.buyer_uid">等待放行</h4>
            <h4 class="h4-blue" v-if="list.status == 1&&list.uid == list.seller_uid">等待付款</h4>
            <h4 class="h4-blue" v-if="list.status == 2&&list.uid == list.seller_uid">待放行</h4>
            <h4 class="h4-blue" v-if="list.status == 3">完成</h4>
            <h4 class="h4-gray" v-if="list.status == -1">撤销</h4>
            <h4 class="h4-red" v-if="list.status == 4">申诉中</h4>
          </div>
          <div class="list-bottom flex-col">
            <div class="list-bottom-top flex-row">
              <h4>金额&nbsp;{{list.total|numFilter}}CNY</h4>
              <h5>购买数量:&nbsp;{{list.num|numFilter}}</h5>
            </div>
            <div class="list-bottom-top flex-row">
              <h4 style="font-weight: normal">商家：{{list.nickname}}</h4>
              <h5>购买单价:&nbsp;{{list.num|numFilter}}</h5>
            </div>
            <div class="list-bottom-bottom flex-row">
              <div class="bottom-left flex-row">
                <img src="../../static/images/transaction_03.png" alt="" v-if="list.bank == 1">
                <img src="../../static/images/transaction_04.png" alt="" v-if="list.alipay == 1">
                <img src="../../static/images/transaction_05.png" alt="" v-if="list.wechat == 1">
              </div>
              <h5>{{list.created_at}}</h5>
            </div>
          </div>
				</div>
				<!--没有数据-->
				<div class="no-data flex-row" v-if="!lists.length">
					暂无数据
				</div>
			</div>
			<div class="tab-card">
				<!-- 循环列表list -->
				<div class="list flex-col" v-for="list in lists" @click="goDetails(list)">
          <div class="list-top flex-row">
            <div class="list-top-left flex-row">
              <p v-if="list.type==2" style="color: #ed573f; font-weight:600;font-size: .3rem;padding-right: .3rem">购买 <span>{{list.coin}}</span></p>
              <p v-else style="color: #50c165;font-size: .3rem;font-weight:600;padding-right: .3rem">出售 <span>{{list.coin}}</span></p>
            </div>
            <h4 class="h4-blue" v-if="list.status == 1&&list.uid == list.buyer_uid">待付款</h4>
            <h4 class="h4-blue" v-if="list.status == 2&&list.uid == list.buyer_uid">等待放行</h4>
            <h4 class="h4-blue" v-if="list.status == 1&&list.uid == list.seller_uid">等待付款</h4>
            <h4 class="h4-blue" v-if="list.status == 2&&list.uid == list.seller_uid">待放行</h4>
            <h4 class="h4-blue" v-if="list.status == 3">完成</h4>
            <h4 class="h4-gray" v-if="list.status == -1">撤销</h4>
            <h4 class="h4-red" v-if="list.status == 4">申诉中</h4>
          </div>
          <div class="list-bottom flex-col">
            <div class="list-bottom-top flex-row">
              <h4>金额&nbsp;{{list.total|numFilter}}CNY</h4>
              <h5>购买数量:&nbsp;{{list.num|numFilter}}</h5>
            </div>
            <div class="list-bottom-top flex-row">
              <h4 style="font-weight: normal">商家：{{list.nickname}}</h4>
              <h5>购买单价:&nbsp;{{list.num|numFilter}}</h5>
            </div>
            <div class="list-bottom-bottom flex-row">
              <div class="bottom-left flex-row">
                <img src="../../static/images/transaction_03.png" alt="" v-if="list.bank == 1">
                <img src="../../static/images/transaction_04.png" alt="" v-if="list.alipay == 1">
                <img src="../../static/images/transaction_05.png" alt="" v-if="list.wechat == 1">
              </div>
              <h5>{{list.created_at}}</h5>
            </div>
          </div>
				</div>
				<!--没有数据-->
				<div class="no-data flex-row" v-if="!lists.length">
					暂无数据
				</div>
			</div>
		</div>

<!--		<div class="tab-right flex-col" v-show="showRight">
			&lt;!&ndash; 出售顶部切换 &ndash;&gt;
			<div class="tab-father flex-row">
				<template v-for="(tab2,index) in tabsName2">
					<div class="tab-btn flex-col" @click="tabsSwitch2(tab2,index)" v-bind:class="{active2:tab2.isActive}">
						{{tab2.name}}
					</div>
				</template>
			</div>
			<div class="tab-card2" style="display: block;">
				&lt;!&ndash; 循环列表list &ndash;&gt;
				<div class="list flex-col" v-for="item in items" @click="goDetails(item)">
					<div class="list-top flex-row">
						<div class="list-top-left flex-row">
							<div class="avatar">
								<img :src="item.avatar" alt="">
							</div>
							<h4>{{item.nickname}}</h4>
						</div>
						<h4 class="h4-blue" v-if="item.status == 1&&item.uid == item.buyer_uid">待付款</h4>
						<h4 class="h4-blue" v-if="item.status == 2&&item.uid == item.buyer_uid">等待放行</h4>
						<h4 class="h4-blue" v-if="item.status == 1&&item.uid == item.seller_uid">等待付款</h4>
						<h4 class="h4-blue" v-if="item.status == 2&&item.uid == item.seller_uid">待放行</h4>
						<h4 class="h4-blue" v-if="item.status == 3">完成</h4>
						<h4 class="h4-gray" v-if="item.status == -1">撤销</h4>
						<h4 class="h4-red" v-if="item.status == 4">申诉中</h4>
					</div>
					<div class="list-bottom flex-col">
						<div class="list-bottom-top flex-row">
							<h4>金额&nbsp;{{item.total|numFilter}}CNY</h4>
							<h5>购买数量:&nbsp;{{item.num|numFilter}}</h5>
						</div>
						<div class="list-bottom-bottom flex-row">
							<div class="bottom-left flex-row">
								<img src="../../static/images/transaction_03.png" alt="" v-if="item.bank == 1">
								<img src="../../static/images/transaction_04.png" alt="" v-if="item.alipay == 1">
								<img src="../../static/images/transaction_05.png" alt="" v-if="item.wechat == 1">
							</div>
							<h5>购买单价:&nbsp;{{item.price|numFilter}}</h5>
						</div>
					</div>
				</div>
				&lt;!&ndash;没有数据&ndash;&gt;
				<div class="no-data flex-row" v-if="!items.length">
					暂无数据
				</div>
			</div>
			<div class="tab-card2">
				&lt;!&ndash; 循环列表list &ndash;&gt;
				<div class="list flex-col" v-for="item in items" @click="goDetails(item)">
					<div class="list-top flex-row">
						<div class="list-top-left flex-row">
							<div class="avatar">
								<img :src="item.avatar" alt="">
							</div>
							<h4>{{item.nickname}}</h4>
						</div>
						<h4 class="h4-blue" v-if="item.status == 1&&item.uid == item.buyer_uid">待付款</h4>
						<h4 class="h4-blue" v-if="item.status == 2&&item.uid == item.buyer_uid">等待放行</h4>
						<h4 class="h4-blue" v-if="item.status == 1&&item.uid == item.seller_uid">等待付款</h4>
						<h4 class="h4-blue" v-if="item.status == 2&&item.uid == item.seller_uid">待放行</h4>
						<h4 class="h4-blue" v-if="item.status == 3">完成</h4>
						<h4 class="h4-gray" v-if="item.status == -1">撤销</h4>
						<h4 class="h4-red" v-if="item.status == 4">申诉中</h4>
					</div>
					<div class="list-bottom flex-col">
						<div class="list-bottom-top flex-row">
							<h4>金额&nbsp;{{item.total|numFilter}}CNY</h4>
							<h5>购买数量:&nbsp;{{item.num|numFilter}}</h5>
						</div>
						<div class="list-bottom-bottom flex-row">
							<div class="bottom-left flex-row">
								<img src="../../static/images/transaction_03.png" alt="" v-if="item.bank == 1">
								<img src="../../static/images/transaction_04.png" alt="" v-if="item.alipay == 1">
								<img src="../../static/images/transaction_05.png" alt="" v-if="item.wechat == 1">
							</div>
							<h5>购买单价:&nbsp;{{item.price|numFilter}}</h5>
						</div>
					</div>
				</div>
				&lt;!&ndash;没有数据&ndash;&gt;
				<div class="no-data flex-row" v-if="!items.length">
					暂无数据
				</div>
			</div>
			<div class="tab-card2">
				&lt;!&ndash; 循环列表list &ndash;&gt;
				<div class="list flex-col" v-for="item in items" @click="goDetails(item)">
					<div class="list-top flex-row">
						<div class="list-top-left flex-row">
							<div class="avatar">
								<img :src="item.avatar" alt="">
							</div>
							<h4>{{item.nickname}}</h4>
						</div>
						<h4 class="h4-blue" v-if="item.status == 1&&item.uid == item.buyer_uid">待付款</h4>
						<h4 class="h4-blue" v-if="item.status == 2&&item.uid == item.buyer_uid">等待放行</h4>
						<h4 class="h4-blue" v-if="item.status == 1&&item.uid == item.seller_uid">等待付款</h4>
						<h4 class="h4-blue" v-if="item.status == 2&&item.uid == item.seller_uid">待放行</h4>
						<h4 class="h4-blue" v-if="item.status == 3">完成</h4>
						<h4 class="h4-gray" v-if="item.status == -1">撤销</h4>
						<h4 class="h4-red" v-if="item.status == 4">申诉中</h4>
					</div>
					<div class="list-bottom flex-col">
						<div class="list-bottom-top flex-row">
							<h4>金额&nbsp;{{item.total|numFilter}}CNY</h4>
							<h5>购买数量:&nbsp;{{item.num|numFilter}}</h5>
						</div>
						<div class="list-bottom-bottom flex-row">
							<div class="bottom-left flex-row">
								<img src="../../static/images/transaction_03.png" alt="" v-if="item.bank == 1">
								<img src="../../static/images/transaction_04.png" alt="" v-if="item.alipay == 1">
								<img src="../../static/images/transaction_05.png" alt="" v-if="item.wechat == 1">
							</div>
							<h5>购买单价:&nbsp;{{item.price|numFilter}}</h5>
						</div>
					</div>
				</div>
				&lt;!&ndash;没有数据&ndash;&gt;
				<div class="no-data flex-row" v-if="!items.length">
					暂无数据
				</div>
			</div>
			<div class="tab-card2">
				&lt;!&ndash; 循环列表list &ndash;&gt;
				<div class="list flex-col" v-for="item in items" @click="goDetails(item)">
					<div class="list-top flex-row">
						<div class="list-top-left flex-row">
							<div class="avatar">
								<img :src="item.avatar" alt="">
							</div>
							<h4>{{item.nickname}}</h4>
						</div>
						<h4 class="h4-blue" v-if="item.status == 1&&item.uid == item.buyer_uid">待付款</h4>
						<h4 class="h4-blue" v-if="item.status == 2&&item.uid == item.buyer_uid">等待放行</h4>
						<h4 class="h4-blue" v-if="item.status == 1&&item.uid == item.seller_uid">等待付款</h4>
						<h4 class="h4-blue" v-if="item.status == 2&&item.uid == item.seller_uid">待放行</h4>
						<h4 class="h4-blue" v-if="item.status == 3">完成</h4>
						<h4 class="h4-gray" v-if="item.status == -1">撤销</h4>
						<h4 class="h4-red" v-if="item.status == 4">申诉中</h4>
					</div>
					<div class="list-bottom flex-col">
						<div class="list-bottom-top flex-row">
							<h4>金额&nbsp;{{item.total|numFilter}}CNY</h4>
							<h5>购买数量:&nbsp;{{item.num|numFilter}}</h5>
						</div>
						<div class="list-bottom-bottom flex-row">
							<div class="bottom-left flex-row">
								<img src="../../static/images/transaction_03.png" alt="" v-if="item.bank == 1">
								<img src="../../static/images/transaction_04.png" alt="" v-if="item.alipay == 1">
								<img src="../../static/images/transaction_05.png" alt="" v-if="item.wechat == 1">
							</div>
							<h5>购买单价:&nbsp;{{item.price|numFilter}}</h5>
						</div>
					</div>
				</div>
				&lt;!&ndash;没有数据&ndash;&gt;
				<div class="no-data flex-row" v-if="!items.length">
					暂无数据
				</div>
			</div>
			<div class="tab-card2">
				&lt;!&ndash; 循环列表list &ndash;&gt;
				<div class="list flex-col" v-for="item in items" @click="goDetails(item)">
					<div class="list-top flex-row">
						<div class="list-top-left flex-row">
							<div class="avatar">
								<img :src="item.avatar" alt="">
							</div>
							<h4>{{item.nickname}}</h4>
						</div>
						<h4 class="h4-blue" v-if="item.status == 1&&item.uid == item.buyer_uid">待付款</h4>
						<h4 class="h4-blue" v-if="item.status == 2&&item.uid == item.buyer_uid">等待放行</h4>
						<h4 class="h4-blue" v-if="item.status == 1&&item.uid == item.seller_uid">等待付款</h4>
						<h4 class="h4-blue" v-if="item.status == 2&&item.uid == item.seller_uid">待放行</h4>
						<h4 class="h4-blue" v-if="item.status == 3">完成</h4>
						<h4 class="h4-gray" v-if="item.status == -1">撤销</h4>
						<h4 class="h4-red" v-if="item.status == 4">申诉中</h4>
					</div>
					<div class="list-bottom flex-col">
						<div class="list-bottom-top flex-row">
							<h4>金额&nbsp;{{item.total|numFilter}}CNY</h4>
							<h5>购买数量:&nbsp;{{item.num|numFilter}}</h5>
						</div>
						<div class="list-bottom-bottom flex-row">
							<div class="bottom-left flex-row">
								<img src="../../static/images/transaction_03.png" alt="" v-if="item.bank == 1">
								<img src="../../static/images/transaction_04.png" alt="" v-if="item.alipay == 1">
								<img src="../../static/images/transaction_05.png" alt="" v-if="item.wechat == 1">
							</div>
							<h5>购买单价:&nbsp;{{item.price|numFilter}}</h5>
						</div>
					</div>
				</div>
				&lt;!&ndash;没有数据&ndash;&gt;
				<div class="no-data flex-row" v-if="!items.length">
					暂无数据
				</div>
			</div>
		</div>-->
    </div>
	</div>
</template>

<script>
	export default{
        name: 'order',
        data(){
            return {
            	isTabLeft : true,
            	isTabRight : false,
            	showLeft : true,
            	showRight : false,
				tabsName: [
					{
						name: "全部",
						isActive: true,
						status : "1"
					},
					{
						name: "未付款",
						isActive: false,
						status : "2"
					},
					{
						name: "已付款",
						isActive: false,
						status : "3"
					},
					{
						name: "申诉中",
						isActive: false,
						status : "4"
					},
					{
						name: "已取消",
						isActive: false,
						status : "5"
					}
				],
				active: false,
				tabsName2:[
					{
						name: "全部",
						isActive: true,
						status : "1"
					},
					{
						name: "未付款",
						isActive: false,
						status : "2"
					},
					{
						name: "已付款",
						isActive: false,
						status : "3"
					},
					{
						name: "申诉中",
						isActive: false,
						status : "4"
					},
					{
						name: "已取消",
						isActive: false,
						status : "5"
					}
				],
				active2: false,
				lists : [],
				items : []
            }
        },
        // 创建之前
  		beforeCreate: function () {

  		},
  		//创建之后
  		created: function (){
  			this.getPayETH();
//			this.getSellETH();
  		},
  		//挂载之前
  		beforeMount: function (){

  		},
  		// 挂载之后
  		mounted: function(){
  			this.$nextTick(function(){

  			})
  		},
		filters: {
			/*小数点后面保留2位*/
		  	numFilter(num, len){
				var len = len || 2;
				var result = parseInt(num * Math.pow(10, len)) / Math.pow(10, len);
				return Number.isInteger(result) ? result.toFixed(len) : result;
			}
		},
  		//实例方法
  		methods: {
  			clickTabLeft (){
  				this.isTabLeft = true;
  				this.isTabRight = false;
  				this.showLeft = true;
  				this.showRight = false;
  			},
  			clickTabRight (){
  				this.isTabLeft = false;
  				this.isTabRight = true;
  				this.showLeft = false;
  				this.showRight = true
  			},
			tabsSwitch: function(tab,tabIndex) {
					let tabCardCollection = document.querySelectorAll(".tab-card"),
						len = tabCardCollection.length;
							for(var i = 0; i < len; i++) {
								tabCardCollection[i].style.display = "none";
							this.tabsName[i].isActive = false;
						}
					this.tabsName[tabIndex].isActive = true;
					tabCardCollection[tabIndex].style.display = "block";
					console.log(tab.status);
					this.axios.post('/index/suda_order_buy/order_list',{
						page : '1',
						status : tab.status
					})
					.then(({data}) => {
						if (data.status == 200) {
							console.log(data);
							this.lists = data.data;
						} else{
							this.layers(data.message);
						}
					})
			},
			tabsSwitch2: function(tab2,tabIndex2) {
					let tabCardCollection2 = document.querySelectorAll(".tab-card2"),
						len = tabCardCollection2.length;
							for(var i = 0; i < len; i++) {
								tabCardCollection2[i].style.display = "none";
							this.tabsName2[i].isActive = false;
						}
					this.tabsName2[tabIndex2].isActive = true;
					tabCardCollection2[tabIndex2].style.display = "block";
					console.log(tab2.status);
					this.axios.post('/index/suda_order_buy/order_list',{
						page : '1',
						type : '2',
						status : tab2.status
					})
					.then(({data}) => {
						if (data.status == 200) {
							console.log(data);
							this.items = data.data;
						} else{
							this.layers(data.message);
						}
					})

			},
			// 获取购买列表
			getPayETH (){
				this.axios.post('/index/suda_order_buy/order_list',{
					page : '1',
					status : '1'
				})
				.then(({data}) => {
					if (data.status == 200) {
						console.log(data);
						this.lists = data.data;
					} else{
						this.layers(data.message);
					}
				})
			},
			// 获取出售列表
		/*	getSellETH (){
				this.axios.post('/index/suda_order_buy/order_list',{
					page : '1',
					type : '2',
					status : '1'
				})
				.then(({data}) => {
					if (data.status == 200) {
						console.log(data);
						this.items = data.data;
					} else{
						this.layers(data.message);
					}
				})
			},*/
			goDetails (list){
				console.log(list.id);
				this.$router.push({
					path : '/orderPage',
					query : {
						id : list.id
					}
				})
			},
			goDetails (item){
				console.log(item.id);
				this.$router.push({
					path : '/orderPage',
					query : {
						id : item.id
					}
				})
			}
  		}
    }
</script>

<style scoped>
	.img-left{
		width: 0.18rem;
		height: 0.32rem;
		margin-left: 0.3rem;
	}
	.avatar{
		width: 0.6rem;
		height: 0.6rem;
		border-radius: 50%;
		margin: 0 0.16rem 0 0.3rem;
		background-image: url(../../static/images/userCenter_01.png);
		background-size: 100% 100%;
	}
	.avatar img{
		border-radius: 50%;
	}
	.order{
		min-height: 100vh;
		background-color: #e8eaee;
		justify-content: flex-start!important;
	}
	h3{
		font-size: 0.32rem;
	}
	h4{
		font-size: 0.3rem;
		color: #2b2f38;
	}
	h5{
		font-size: 0.28rem;
		color: #6b707b;
	}
	.top-module{
		width: 100%;
		height: 1.2rem;
		background-color: #393f4c;
		justify-content: space-between;
	}
	.top-tab{
		width: 3.5rem;
		height: 0.64rem;
		border-radius: 0.1rem;
    color: #ffffff;
		margin-left: 1rem;
		overflow: hidden;
	}
  .top-tab h3{
    font-size: .36rem;

  }
	.top-tab-list{
		width: 50%;
		height: 100%;
	}
	.top-tab-list h3{
		color: #8998b9;
	}
	.activeTab{
		background-color: #5e719a;
	}
	.activeTab h3{
		color: #ffffff;
	}
	.top-right{
		margin-right: 0.3rem;
	}
	.top-right img{
		width: 0.3rem;
		height: 0.3rem;
		margin-right: 0.2rem;
	}
	.top-right h3{
		color: #FFFFFF;
	}
	.tab-left,.tab-right{
		width: 100%;
		height: auto;
		margin-bottom: 1rem;
		background-color: #e8eaee;
	}
	.tab-card,.tab-card2{
		width: 100%;
		height: auto;
		display: none;
	}
	.tab-father{
		width: 100%;
		height: auto;
		justify-content: space-around;
		background-color: #393f4c;
	}
	.tab-btn{
		width: auto;
		height: 0.8rem;
		font-size: 0.32rem;
		color: #b7c6e8;
	}
	.active,.active2{
		color: #FFFFFF;
		border-bottom: 0.06rem solid #FFFFFF;
	}
	.list,.list-top,.list-bottom,.list-bottom-top,.list-bottom-bottom{
		width: 100%;
	}
	.list{
		margin-top: 0.16rem;
		background-color: #ffffff;
	}
	.list-top{
		height: auto;
		padding: 0.2rem 0;
		justify-content: space-between;
		border-bottom: 0.01rem solid #e9ebef;
	}
	.list-top-left p{
    padding-left: .3rem;
	}
  .list-top-left p span{
    font-size: .34rem;
    color: #40444e;
  }
	.list h5{
		margin-right: 0.3rem;
	}
	.list-bottom-top,.list-bottom-bottom{
		justify-content: space-between;
	}
	.list-bottom{
		padding: 0.3rem 0;
	}
	.list-bottom-top h4{
		margin-left: 0.3rem;
    color: #727783;
	}
	.list-bottom-bottom img{
		width: 0.46rem;
		height: 0.46rem;
		margin-right: 0.18rem;
	}
	.list-bottom-bottom img:first-child{
		margin-left: 0.3rem;
	}
	.list-bottom-top h4{
		font-weight: 600;
	}
	.h4-blue{
		font-weight: 600;
		color: #3f74e3;
		margin-right: 0.3rem;
	}
	.h4-gray{
		font-weight: 600;
		color: #535d72;
		margin-right: 0.3rem;
	}
	.h4-red{
		font-weight: 600;
		color: #e94949;
		margin-right: 0.3rem;
	}
	.no-data {
		font-size: 0.32rem;
		color: #585858;
		margin-top: 0.4rem;
	}
</style>
