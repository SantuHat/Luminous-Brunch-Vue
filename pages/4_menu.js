// vite 打包圖片
import tunasalad from "../assets/images/menuImg/tunasalad.jpg";
import { createApp } from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js';
// 資料結構
// title,
// price,
// origin_price,
// number,
// isFavorite,
// imageUrl,
// description,
// category
import axios from 'axios';

// axios.post("https://vue3-course-api.hexschool.io/v2/api/jenny031054/admin/product")

// if (window.location.href.includes('4-1_menu-salad.html') || window.location.href.includes('4_menu.html')) {
//   //選定元素
//   const menuContainer = document.querySelector('.menu-container');
//   const menuList = document.querySelector('#menuList');
//   console.log(menuContainer);
//   const Salad = document.querySelector('#Salad');
//   const Burger = document.querySelector('#Burger');
//   const Sandwich = document.querySelector('#Sandwich');
//   const Brunch = document.querySelector('#Brunch');
//   const Pasta = document.querySelector('#Pasta');
//   const Drink = document.querySelector('#Drink');
//   const Title = document.querySelector('#Title');
//   //獲取網址參數
//   const urlParams = new URLSearchParams(window.location.search);
//   let param1Value = urlParams.get('menu'); // value2
//   console.log(param1Value);
//   // 執行函示
//   // renderMenu(menuData[param1Value]);
//   // function renderMenu(data) {
//   //   let str = '';
//   //   data.forEach(function (item) {
//   //     str += `
//   //       <div class="col-lg-4 mb-6">
//   //           <div class="card-menu">
//   //               <div class="card-img">
//   //                 <a href="4-1-1_menu-detail.html">
//   //                   <img src="${item.imgUrl}" alt="" class="card-img">
//   //                   <div class="d-grid imgAddCart m-3">
//   //                     <button class="btn btn-primary " type="button">
//   //                       加入購物車
//   //                     </button>
//   //                   </div>
//   //                 </a>
//   //               </div>
//   //               <div class="menu-title font-NotoSerif d-flex justify-content-between">
//   //                   <span class="menu-name">${item.title}</span>
//   //                   <span class="menu-price">${item.price}$</span>
//   //               </div>
//   //           </div>
//   //       </div>
//   //       `;
//   //   });
//   //   menuContainer.innerHTML = str;
//   //   menuTitle.textContent = `| ${param1Value} |`;
//   // }

//   menuList.addEventListener('click', function (e) {
//     // 網址
//     // 獲取當前網頁 URL

//     // 使用 get() 方法獲取特定參數的值

//     console.log(param1Value);
//     e.preventDefault();
//     console.log(e.target.getAttribute('id'));
//     let menuId = e.target.getAttribute('id');
//     //防止點擊到空的地方還改變標題
//     //   if(menuId == "menuList"){
//     //       return
//     //   }else{

//     //   }
//     param1Value = menuId;
//     renderMenu(menuData[param1Value]);
//     menuTitle.textContent = `| ${menuId} |`;
//   });
// };

// Vue

const mealCard = {
  data(){
    return{
      hexUrl : 'https://ec-course-api.hexschool.io/v2',
      apiPath: 'luminous',
      apiData :{}
      
    }
  },
  mounted(){
    // 先登入
    // this.login()
    // // 後驗證
    // this.adminCheck()
    // 手動加入產品
    // this.postProducts()
    // axios.get(url)
    this.getProducts()
  },
  methods:{
    login(){
    // 先登入
      axios.post(`${this.hexUrl}/admin/signin`,{
      
      "username": "luminous@gmail.com",
      "password": "luminous"
      
      })
      .then((res)=>{
      console.log('登入的',res.data);
      const { expired, token } = res.data;
      document.cookie=`myToken=${token};expires=${new Date (expired)}`;
      
      })
      .catch((err)=>{
      console.log(err)
      });
    
    },
    // 後驗證
    adminCheck(){
      const myToken = document.cookie.replace(
        /(?:(?:^|.*;\s*)myToken\s*\=\s*([^;]*).*$)|^.*$/,
        "$1",
      );
      axios.defaults.headers.common['Authorization'] = myToken
      axios.post(`${this.hexUrl}/api/user/check`)
      .then((response)=>{
        console.log('驗證的',response.data);
      })
      .catch((err)=>{
        console.log(err)
      });
    },
    getProducts(){
      axios.get(`${this.hexUrl}/api/${this.apiPath}/products/all`)
        .then((Response)=>{
          this.apiData = Response.data.products;
          console.log(this.apiData)
        })
        .catch((err)=>{
          console.log(err)
        });
    },
    postProducts(){
      const url = `${this.hexUrl}/api/${this.apiPath}/admin/product`
      this.menuData.Drink.forEach((item)=>{
            
            let itttem = { data:  item }
            axios.post(url,itttem)
            .then((res)=>{
              console.log(res)
            })
            .catch((err)=>{
              console.log(err)
            })
          });
          //
      
      
    },
    //加入購物車的涵式
    addCart(id){
      console.log(id);
      const url = `${this.hexUrl}/api/${this.apiPath}/cart`;
      const postData = {
        "data": {
          "product_id": id,
          "qty": 1
        }
      };
      axios.post(url,postData)
      .then((res)=>{
        console.log(res)
      })
      .catch((err)=>{
        console.log(err)
      })
    }
  },
  
  template:`
  <div 
    v-for=" item in this.apiData " :key="item.id"
    class="col-lg-4 mb-6"
  >
            <div class="card-menu">
                <div class="card-img">
                  <a href="4-1-1_menu-detail.html">
                    <img :src="item.imageUrl" alt="" class="card-img">
                    <div class="d-grid imgAddCart m-3">
                      <button 
                        @click.prevent="addCart(item.id)"
                        class="btn btn-primary" 
                        type="button" 
                      >
                        加入購物車
                      </button>
                    </div>
                  </a>
                </div>
                <div class="menu-title font-NotoSerif d-flex justify-content-between">
                    <span class="menu-name">{{item.title}}</span>
                    <span class="menu-price">{{item.price}}$</span>
                </div>
            </div>
        </div>
  `
};
const addCartToast = {
  data(){
    return {
      addCartToast:null
    }
  },
  mounted(){
    this.addCartToast = new bootstrap.Toast(this.$refs.addCartToast)
    console.log(this.addCartToast);
    this.addCartToast.show()
  },
  methods:{
    show(){
      this.addCartToast.addEventListener('hidden.bs.toast', () => {
        console.log("hsoe",this.$refs.addCartToast)
      })
      
    }
  },
  template:
  /*html */
  `
  <div class="position-fixed top-0 end-0 p-3" style="z-index: 11">
        <div id="liveToast" class="toast " role="alert" aria-live="assertive" aria-atomic="true" ref="addCartToast">
          <div class="toast-header">
            <span class="material-symbols-outlined">
                shopping_cart
            </span>
            <strong class="d-flex align-item-center  me-auto fs-4">
                購物車
            </strong>
            <small>Now</small>
            <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
          </div>
          <div class="toast-body d-flex align-item-center justify-content-between">
            <img src="https://images.unsplash.com/photo-1627308595216-439c00ade0fe?q=80&w=1035&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"  class="rounded me-2 toast-img" alt="...">
            <div class="d-flex flex-column justify-content-center">
                <p class="fs-5">燻鮭魚酪梨開放三明治 </p>
                <p>80 $</p>
            </div>
            <button type="button" class="btn btn-primary" >
                <span class="material-symbols-outlined">
                    delete
                </span>
            </button>
          </div>
        </div>
</div>
  `
};
const app = createApp({
  components:{},
  data(){
    return{
      apiData:{},
      
    }
  },
  mounted(){
    
    
  },
  methods:{
    renderTitle(title){
      Object.keys(this.menuData);

    }
  }

})
app.component('mealCard', mealCard);
app.component('addCartToast', addCartToast);
app.mount('#app');


