import axios from 'axios';

import { baseUrl } from '../constants.json';

const getAllTrainingModules = () => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/trainingModules`)
    .then((response) => {
      const trainingModules = response.data;
      resolve(trainingModules);
    })
    .catch((err) => reject(err));
});

export default { getAllTrainingModules };
