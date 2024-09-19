var posts=["posts/5feda8e2.html","posts/9b8f8987.html"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };