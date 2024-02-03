

export default {
  template:`<nav class="navbar navbar-expand-lg navbar-light bg-dark ">
    <div class="mx-auto px-3 w-75 d-flex ">
      <a class="navbar-brand bg-white rounded-pill" href="#"><img src="/img/Logo-sm.png" alt=""></a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link active text-white" aria-current="page" href="product.html">產品</a>
          </li>
          <li class="nav-item">
            <a class="nav-link text-white" href="order.html">訂單</a>
          </li>
          <li class="nav-item">
            <a class="nav-link text-white" href="coupon.html">優惠券</a>
          </li>
          <li class="nav-item">
            <a class="nav-link text-white" href="#" @click.prevent="logout">登出</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>`,
  methods:{
    logout(){
      const api = 'https://vue3-course-api.hexschool.io/v2/logout';
        axios.post(api)
        .then((res) =>{
          console.log(res)
          if(res.data.message){
            window.location = 'login.html';
          }
            
        })
    }
  },
};

   

 