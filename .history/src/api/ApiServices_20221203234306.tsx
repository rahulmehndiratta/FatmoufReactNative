import {Alert} from 'react-native';

export const ApiServices = {
  baseURL: 'https://cyberveer.dothejob.in/api/',

  async get(endPoint: string) {
    return new Promise((resolver, reject) => {
      fetch(this.baseURL + endPoint, {method: 'GET'})
        .then((response: any) => {
          resolver(response.json());
        })
        .then(result => resolver(result))
        .catch(err => reject(err));
    });
  },

  async post(endPoint: string, formData: FormData) {
    console.log('formData:', formData);
    // var myHeaders = new Headers();
    // myHeaders.append("Authorization", await Utils._getToken())
    const requestOptions = {
      method: 'POST',
      body: formData,
      redirect: 'follow',
      // headers: myHeaders,
    };
    return new Promise((resolver, reject) => {
      fetch(this.baseURL + endPoint, requestOptions)
        .then((response: any) => {
          if (response.status === 500) {
            Alert.alert(response.status + '', 'something went wrong');
          }
          resolver(response.json());
        })
        .then(
          result => console.log('Result:', result),
          // resolver(result)
        )
        .catch(err => reject(err));
    });
  },
};
