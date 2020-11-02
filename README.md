# Movie Web

Movie Web là 1 trang web xem phim đơn giản mục đích chú trọng về code giao diện reactjs, data lấy từ api của https://api.themoviedb.org.

  - fetch data từ https://api.themoviedb.org
  - MongoDB Cloud
  - Font end ReactJS: LandingPage, MovieDetailPage (load more),...

![Movie Web](./MovieWeb.gif)

### Tech

Movie Web sử dụng 1 số open source projects và thư viện:

* [Visual Studio Code] - code editor
* [NodeJS] - viết server backend
* [Express] - node.js framework 
* [mongoose] - một công cụ mô hình hóa đối tượng MongoDB
* [ReactJS] - một thư viện giúp xây dựng user interface
* [jsonwebtoken] - an implementation of JSON Web Tokens.
* [cookie-parser] - enable signed cookie
* [body-parser] - Node.js body parsing middleware.

### Installation

Movie Web cần thiết cài [Node.js](https://nodejs.org/) để chạy.

Cài đặt dependencies and devDependencies và chạy server.

```sh
$ cd MovieWeb
$ npm install
$ npm run dev
```

To use this application, 

1. make dev.js file inside config folder 
2. put mongoDB info into dev.js file 
3. Type  " npm install " inside the root directory  ( Download Server Dependencies ) 
4. Type " npm install " inside the client directory ( Download Front-end Dependencies )


Đối với môi trường...

```sh
$ npm install --production
$ NODE_ENV=production node app
```

Xác minh việc triển khai bằng cách điều hướng đến địa chỉ máy chủ của bạn trong trình duyệt ưa thích của bạn:

```sh
127.0.0.1:3000
```

### Todos

 - Write MORE Tests
 - Add Night Mode

### Authors

Nguyễn Quý Chí
nguyenquychi96@gmail.com 
