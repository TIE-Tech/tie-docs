部署:

1. 执行npm install 然后执行 npm run docs:build 将项目打包成dict

2. 构建Dockerfile

   ```shell
   FROM nginx
   COPY dist/ /usr/share/nginx/html/
   ```

3. 构建镜像, cd到Dockerfile目录下

   ```shell
   docker build -t  取个镜像名称 .
   ```

4. 运行容器

   ```shell
   docker run --name 取个容器名 -d -p 宿主机端口:80 上一步镜像名称
   ```

   