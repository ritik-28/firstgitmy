const posts = [
  { title: "postone", body: "this is post one" },
  { title: "post two", body: "this is post two" },
];

function getPosts() {
  setTimeout(function () {
    let output = "";
    posts.forEach((posts, index) => {
      output += `<li>${posts.title}</li>`;
    });
    document.body.innerHTML = output;
  }, 1000);
}

// /* Earlier codes

// // getPosts();

// // function createPost(post) {
// //   setTimeout(() => {
// //     posts.push(post);
// //   }, 2000);
// // }

// // createPost({ title: "post three", body: "this is post three" });

// // console.log(posts);

// */

// //we will use callback then
// function createPost(post) {
//   return new Promise((res, rej) => {
//     setTimeout(() => {
//       posts.push(post);
//       // const error = false;
//       const error = true;
//       if (!error) {
//         res();
//       } else {
//         rej("ERROR: something went wrong");
//       }
//     }, 1000);
//   });
// }

// // setTimeout(() => {
// //   posts.push(post);
// // }, 1000);

// createPost({ title: "post three", body: "this is post three" })
//   .then(getPosts)
//   .catch((err) => console.log(err));

// //solving the problem
// function create4thPost(post4, callback) {
//   setTimeout(() => {
//     callback(post4, getPosts);
//   }, 2000);
// }

// //
// // create4thPost({ title: "postTitle", body: "postBody" }, createPost);

//promise.all

function updateLastUserActivityTime() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let newActivityTime = new Date().getTime();
      resolve(newActivityTime);
    }, 1000);
  });
}

function createPost(post) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      posts.push(post);
      updateLastUserActivityTime();
      res(post);
    }, 1000);
  });
}

function deletePost() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (posts.length > 0) {
        const poppedElement = posts.pop();
        updateLastUserActivityTime().then((realTime) => {
          resolve([poppedElement, realTime]);
        });
        // resolve([poppedElement, promiseTime]);
      } else {
        reject("ERROR: ARRAY IS EMPTY");
      }
    }, 1000);
  });
}

createPost({ title: "post three", body: "this is post three" })
  .then(getPosts)
  .catch((err) => console.log(err));

Promise.all([updateLastUserActivityTime, createPost]).then(
  ([updateLastUserActivityTimeresolved, createPostresolved]) => {
    updateLastUserActivityTimeresolved()
      .then((newTime) => {
        console.log(newTime, posts); //first timings and posts
        deletePost().then(([el, newTimeafterDelete]) => {
          console.log(newTimeafterDelete, posts); //timing and post after delete
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }
);
