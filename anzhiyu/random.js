var posts=["posts/9b8f8987.html","posts/602256ea.html","posts/fe7ff2b6.html","posts/5feda8e2.html"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };