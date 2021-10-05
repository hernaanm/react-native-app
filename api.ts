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
    try {
      const res = await fetch(`${this.url}auth/`, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(credentials),
      });
      if (res.status === 200) {
        const jsonRes = await res.json();
        this.accessToken = jsonRes.accessToken;
        return jsonRes;
      }
    } catch (error) {
      return error;
    }
  };
}

export default new Api();
