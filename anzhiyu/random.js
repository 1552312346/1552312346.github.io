var posts=["2024/05/01/hello-world/","2024/05/07/img/vue/CSS基础+CSS3 - Hexo_files/highlight-dark/","2024/05/07/img/vue/CSS基础+CSS3 - Hexo_files/main/","2024/05/07/img/vue/CSS基础+CSS3 - Hexo_files/highlight/","2024/05/01/CSS+CSS3/","2024/05/07/img/vue/CSS基础+CSS3 - Hexo/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };