import"../modulepreload-polyfill-3cfb730f.js";import{n as i}from"../navbar-8febd334.js";const{createApp:p}=Vue,s="https://vue3-course-api.hexschool.io/v2",e="luminous",a=p({data(){return{coupon:[],myCoupon:"",couponDel:"",temCoupons:{}}},components:{navbar:i},methods:{getCoupon(){const o=`${s}/api/${e}/admin/coupons`;axios.get(o).then(t=>{this.coupon=t.data.coupons,console.log(t)})},upCoupon(){let o=`${s}/api/${e}/admin/coupon`,t="post";this.isNew||(o=`${s}/api/${e}/admin/coupon/${this.temCoupons.id}`,t="put"),axios[t](o,{data:this.temCoupons}).then(n=>{this.getCoupon(),this.myCoupon.hide(),this.temProduct={}}).catch(n=>{alert(n.data.message)})},openMyCoupon(o,t){o==="new"?(this.temCoupons={},this.isNew=!0,this.myCoupon.show()):o==="edit"?(this.temCoupons={...t},this.isNew=!1,this.myCoupon.show()):o==="del"&&(this.temCoupons={...t},this.couponDel.show())}},mounted(){const o=document.cookie.replace(/(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/,"$1");axios.defaults.headers.common.Authorization=o,this.myCoupon=new bootstrap.Modal(this.$refs.modal),this.couponDel=new bootstrap.Modal(this.$refs.delProductModal),this.getCoupon()}});a.mount("#app");