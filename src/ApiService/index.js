class ApiService {
  static _host = "https://admin.fulibu.uz";
  static _apiBase = this._host + "/api";
  static _headers = {
    Accept: "application/json",
    "Content-Type": "application/json",
  };

  static postData = async (url, token, form) => {
    let headers = this._headers;
    if (token) {
      headers = {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      };
    }
    return fetch(this._apiBase + url, {
      method: "POST",
      headers: headers,
      body: JSON.stringify(form),
    })
      .then((res) => {
        return res.json();
      })
      .then((value) => {
        return value;
      });
  };

  updateForm = async (url, token, form) => {
    let headers = this._headers;
    if (token) {
      headers = {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      };
    }
    return fetch(this._apiBase + url, {
      method: "PUT",
      headers,
      body: JSON.stringify(form),
    }).then((res) => {
      return res.json();
    });
  };

  static getResources = async (url, token = null) => {
    let headers = this._headers;

    if (token) {
      headers = {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      };
    }

    const res = await fetch(this._apiBase + url, { headers });

    return await res.json();
  };
}

export default ApiService;
