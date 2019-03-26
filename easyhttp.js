// easy http version 2

class easyHTTP {
  // http get request
  async get(url) {
    const response = await fetch(url);
    const resData = await response.json();
    return resData;
  }


  // http post request
  async post(url, data) {

    const postData = await fetch(url, {
      method: "post",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify(data)
    });

    const response = await postData.json();

    return response;

  }

  // http put request

  async put(url, data) {


    const putData = await fetch(url, {
      method: "PUT",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify(data)
    });
    const response = await putData.json();
    return response;
  }

  // http delete request

  async delete(url) {

    const delet = await fetch(url, {
      method: "DELETE",
      headers: {
        "Content-type": "application/json"
      }
    });
    const response = await "Resource deleted...";
    return response;
  }

}