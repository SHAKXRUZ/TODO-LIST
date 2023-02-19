const http = require("http");
const { v4 } = require("uuid");
const url = require("url");
const { read_file, write_file } = require("./fs/fs_api");

const options = {
  "content-type": "application/json",
  "Access-Control-Allow-Origin": "*",
};

let app = http.createServer((req, res) => {
  data_id = req.url.split("/")[2];

  if (req.method === "GET") {
    if (req.url === "/data") {
      let data = read_file("data.json");
      res.writeHead(200, options);
      res.end(JSON.stringify(data));
    }
  }

  if (req.method === "POST") {
    if (req.url === "/create_data") {
      req.on("data", (chunk) => {
        let datas = JSON.parse(chunk);

        let data = read_file("data.json");

        data.push();

        data = [
          ...data,
          {
            id: v4(),
            ...datas,
          },
        ];
        write_file("data.json", data);
        res.writeHead(201, options);
        res.end(
          JSON.stringify({
            msg: "Created data!",
          })
        );
      });
    }
  }

  // if (req.method === "PUT") {
  //   if (req.url === `/update_course/${data_id}`) {
  //     req.on("data", (new_course) => {
  //       let newCourse = JSON.parse(new_course);
  //       let { text } = newCourse;

  //       let data = read_file("data.json");

  //       let foundedCourse = data.find((c) => c.id === data_id);

  //       if (!foundedCourse) {
  //         res.writeHead(404, options);
  //         return res.end(
  //           JSON.stringify({
  //             msg: "Course not found!",
  //           })
  //         );
  //       }

  //       data.forEach((course, idx) => {
  //         if (course.id === data_id) {
  //           course.text = text ? text : course.text;
  //         }
  //       });

  //       write_file("data.json", data);

  //       res.writeHead(200, options);
  //       res.end(
  //         JSON.stringify({
  //           msg: "Course Updated!",
  //         })
  //       );
  //     });
  //   }
  // }
});

app.listen(3000, () => {
  console.log("Server is running on the 3000");
});
