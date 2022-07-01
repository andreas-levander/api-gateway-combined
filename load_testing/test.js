import http from "k6/http";

//X159PTvEYv
//B6zR2mDwfj
export default function () {
  const url = "http://130.232.178.29:8080/v1/auth";
  const payload = JSON.stringify({
    username: "test-user",
    password: "B6zR2mDwfj",
  });

  const params = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  http.post(url, payload, params);
}
