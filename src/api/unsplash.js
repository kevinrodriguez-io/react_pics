import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID c3725f22be079184f449bddaa100aa39b9bdafb9d4c410da64117ebfe1c2c1de',
  }
});
