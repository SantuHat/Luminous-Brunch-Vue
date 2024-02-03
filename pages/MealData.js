// Vue
const { createApp } = Vue;

const app = createApp({
  data(){
    return{
        meal:[
            {
                theme:'| 健 康 能 量 餐 |',
                descripton:'我們提供多樣化的健康餐選擇，精選含有30g以上的蛋白質的熱門餐點，適合運動後需要快速補充營養的你',
                meals:['鮭魚鮮蔬沙拉碗','義式牛肉寬管麵']
            
            }
        ]
    }
  },
  mounted(){
    console.log(Vue)
  },
  methods:{

  }

});
app.mount('#app');