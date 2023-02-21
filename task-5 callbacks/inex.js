const posts = [
  { title: "postone", body: "this is post one" },
  { title: "post two", body: "this is post two" },
];

// function getPosts() {
//   setTimeout(function () {
//     let output = "";
//     posts.forEach((posts, index) => {
//       output += `<li>${posts.title}</li>`;
//     });
//     document.body.innerHTML = output;
//   }, 1000);
// }

// // /* Earlier codes

// // // getPosts();

// // // function createPost(post) {
// // //   setTimeout(() => {
// // //     posts.push(post);
// // //   }, 2000);
// // // }

// // // createPost({ title: "post three", body: "this is post three" });

// // // console.log(posts);

// // */

// // //we will use callback then
// // function createPost(post) {
// //   return new Promise((res, rej) => {
// //     setTimeout(() => {
// //       posts.push(post);
// //       // const error = false;
// //       const error = true;
// //       if (!error) {
// //         res();
// //       } else {
// //         rej("ERROR: something went wrong");
// //       }
// //     }, 1000);
// //   });
// // }

// // // setTimeout(() => {
// // //   posts.push(post);
// // // }, 1000);

// // createPost({ title: "post three", body: "this is post three" })
// //   .then(getPosts)
// //   .catch((err) => console.log(err));

// // //solving the problem
// // function create4thPost(post4, callback) {
// //   setTimeout(() => {
// //     callback(post4, getPosts);
// //   }, 2000);
// // }

// // //
// // // create4thPost({ title: "postTitle", body: "postBody" }, createPost);

// //promise.all task solution

// function updateLastUserActivityTime() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       let newActivityTime = new Date().getTime();
//       resolve(newActivityTime);
//     }, 1000);
//   });
// }

// function createPost(post) {
//   return new Promise((res, rej) => {
//     setTimeout(() => {
//       posts.push(post);
//       updateLastUserActivityTime();
//       res(post);
//     }, 1000);
//   });
// }

// function deletePost() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (posts.length > 0) {
//         const poppedElement = posts.pop();
//         updateLastUserActivityTime().then((realTime) => {
//           resolve([poppedElement, realTime]);
//         });
//         // resolve([poppedElement, promiseTime]);
//       } else {
//         reject("ERROR: ARRAY IS EMPTY");
//       }
//     }, 1000);
//   });
// }

// createPost({ title: "post three", body: "this is post three" })
//   .then(getPosts)
//   .catch((err) => console.log(err));

// Promise.all([updateLastUserActivityTime, createPost]).then(
//   ([updateLastUserActivityTimeresolved, createPostresolved]) => {
//     updateLastUserActivityTimeresolved()
//       .then((newTime) => {
//         console.log(newTime, posts); //first timings and posts
//         deletePost().then(([el, newTimeafterDelete]) => {
//           console.log(newTimeafterDelete, posts); //timing and post after delete
//         });
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   }
// );

//async await task

//example using promise then

// console.log("person 1 : shows ticket");
// console.log("person 2 : shows ticket");

// const promisewifebringtics = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("ticket");
//   }, 3000);
// });

// const getPopcorn = promisewifebringtics.then((t) => {
//   console.log("wife :  i have the tics");
//   console.log("husband : we should go in");
//   console.log("no i am hungry");

//   return new Promise((resolve, reject) => resolve(`${t} popcorn`));
// });

// const getButter = getPopcorn.then((t) => {
//   console.log("husband: i got some popcorn");
//   console.log("we should go in");
//   console.log("wife : i need some butter");

//   return new Promise((resolve, reject) => {
//     resolve(`${t} butter`);
//   });
// });

// getButter.then((t) => {
//   console.log(t);
// });

// console.log("person 4 : shows ticket");
// console.log("person 5 : shows ticket");

//// promisewifebringtics.then((t) => {
// //   console.log(`person 3: shows ${t}`);
// // });

//same problem using async await

console.log("person 1 : shows ticket");
console.log("person 2 : shows ticket");

const premovie = async () => {
  const promisewifebringtics = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("ticket");
    }, 3000);
  });

  const getPopcorn = new Promise((resolve, reject) => {
    resolve("popcorn");
  });

  const getButter = new Promise((resolve, reject) => {
    resolve("butter");
  });

  const getColdrinks = new Promise((resolve, reject) => {
    resolve("coldDrinks");
  });

  const ticket = await promisewifebringtics;

  // console.log("wife :  i have the tics");
  // console.log("husband : we should go in");
  // console.log("no i am hungry");

  // const popcorn = await getPopcorn;
  // console.log("wife :  i have the popcorns");
  // console.log("husband : we should go in");
  // console.log("no i am hungry");

  // const butter = await getButter;
  // console.log("husband: i got some popcorn");
  // console.log("we should go in");
  // console.log("wife : i need some butter");

  // const coldDrinks = await getColdrinks;

  //promise.all use case here..... they are not interdependent
  //then we can use promise.all

  let [popcorn, butter, coldDrinks] = await Promise.all([
    getPopcorn,
    getButter,
    getColdrinks,
  ]);

  return `${ticket} ${popcorn} ${butter} ${coldDrinks}`;
};

premovie().then((m) => console.log(m));

//converting createpost into async wait

const createPost = async function createPost(post) {
  try {
    await new Promise((resolve, reject) => {
      setTimeout(() => {
        posts.push(post);
        const error = false;
        if (!error) {
          resolve();
        } else {
          reject("ERROR: something went wrong");
        }
      }, 1000);
    });
  } catch (err) {
    console.log(err);
  }
};

createPost({ title: "post three", body: "this is post three" });
console.log(posts);

//converting delete post into async/await

const deletePost = async function deletePost() {
  try {
    await new Promise((resolve, reject) => {
      setTimeout(() => {
        if (posts.length > 0) {
          const poppedElement = posts.pop();
          resolve(poppedElement);
        } else {
          reject("ERROR: ARRAY IS EMPTY");
        }
      }, 1000);
    });
  } catch (err) {
    console.log(err);
  }
};

deletePost();

console.log(posts);
