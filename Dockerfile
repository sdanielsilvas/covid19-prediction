# # Stage 0, "build-stage", based on Node.js, to build and compile the frontend
# FROM tiangolo/node-frontend:10 as build-stage
# WORKDIR /app
# COPY package.json /app/
# RUN npm install
# COPY ./ /app/
# ARG configuration=production
# # RUN npm run build -- --output-path=./dist/out --configuration $configuration
# RUN npm run build --prod --output-path=./dist/out
# # Stage 1, based on Nginx, to have only the compiled app, ready for production with Nginx
# FROM nginx:1.15
# COPY --from=build-stage /app/dist/out/ /usr/share/nginx/html
# # Copy the default nginx.conf provided by tiangolo/node-frontend
# COPY --from=build-stage /nginx.conf /etc/nginx/conf.d/default.conf

### STAGE 1: Build ###
FROM node:alpine AS builder

WORKDIR /app

COPY . .

RUN npm install
RUN npm run build --prod --output-hashing=all

FROM nginx:alpine

COPY --from=builder /app/dist/ /usr/share/nginx/html/
COPY /nginx.conf /etc/nginx/conf.d/default.conf
