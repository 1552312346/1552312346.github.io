var posts=["2024/05/01/hello-world/","2024/05/01/CSS+CSS3/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };