var posts=["2024/05/01/Ajax/","2024/05/01/Es6/","2024/05/01/Express/","2024/05/01/Es6最新/","2024/05/01/Git/","2024/05/01/HTNL-CSS/","2024/05/01/Node-js/","2024/05/01/Vue3/","2024/05/01/bk/","2024/05/01/jQuery/","2024/05/01/promise/","2024/05/01/JavaScript1/","2024/05/01/JavaScript最新/","2024/05/01/vue2项目-商城/","2024/05/01/vue2-vue3/","2024/05/01/CSS+CSS3/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };