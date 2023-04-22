const AWS = require("aws-sdk");
require("dotenv").config();

const uploadToS3 = async (data, filenname) => {
  const BUCKET_NAME = "expensetrackingappbyritik";
  const IAM_USER_KEY = process.env.IAM_USER_KEY;
  const IAM_USER_SECRET = process.env.IAM_USER_SECRET;

  let S3Bucket = new AWS.S3({
    accessKeyId: IAM_USER_KEY,
    secretAccessKey: IAM_USER_SECRET,
  });
  // S3Bucket.createBucket(() => {
  var params = {
    Bucket: BUCKET_NAME,
    Key: filenname,
    Body: data,
    ACL: "public-read",
  };

  return new Promise((resolve, reject) => {
    S3Bucket.upload(params, (err, s3response) => {
      if (err) {
        console.log("something went wrong", err);
        reject(err);
      } else {
        resolve(s3response.Location);
      }
    });
  });
};

module.exports = { uploadToS3 };
