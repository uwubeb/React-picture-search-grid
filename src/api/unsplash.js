import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID luXFCAEavr_ZvnjQcJiPLDLVAOfQppSC9s3Vojoi6Bs',
  },
});
