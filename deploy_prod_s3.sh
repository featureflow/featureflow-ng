#!/usr/bin/env bash
#DEFAULT="default"
#PROFILE=${AWS_PROFILE:-$DEFAULT}
#BUCKET=site-staging
#DIR=./dist
#aws s3 sync $DIR s3://$BUCKET/

PACKAGE_VERSION=$(cat package.json \
  | grep version \
  | head -1 \
  | awk -F: '{ print $2 }' \
  | sed 's/[",]//g' \
  | tr -d '[[:space:]]')

aws s3 cp dist/featureflow-ng.js s3://cdn.featureflow.io/featureflow-ng.js
aws s3 cp dist/featureflow-ng.min.js s3://cdn.featureflow.io/featureflow-ng.min.js
aws s3 cp dist/featureflow-ng.js s3://cdn.featureflow.io/v$PACKAGE_VERSION/featureflow-ng.js
aws s3 cp dist/featureflow-ng.min.js s3://cdn.featureflow.io/v$PACKAGE_VERSION/featureflow-ng.min.js
aws configure set preview.cloudfront true
aws cloudfront create-invalidation --invalidation-batch file://invbatch.json --distribution-id E2AUGN9EALQ72O