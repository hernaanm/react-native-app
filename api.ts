class Api {
  url: string;
  accessToken: string;

  constructor() {
    this.url = 'http://localhost:3000/api/users/';
    this.accessToken = '';
  }

  getUsers = async () => {
    const res = await fetch(this.url);
    return await res.json();
  };

  loginUser = async (credentials: Object) => {
    const res = await fetch(`${this.url}auth/`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(credentials),
    });
    const jsonRes = await res.json();
    this.accessToken = jsonRes.accessToken;
    return jsonRes;
  };
}

export default new Api();
