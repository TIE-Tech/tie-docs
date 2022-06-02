deploy:

1. Execute npm install and then execute npm run docs:build to package the project into a dict

2. Build the Dockerfile

    ```shell
    FROM nginx
    COPY dist/ /usr/share/nginx/html/
    ````

3. Build the image, cd to the Dockerfile directory

    ```shell
    docker build -t takes an image name .
    ````

4. Run the container

    ```shell
    docker run --name take a container name -d -p host port: 80 previous image name
    ````