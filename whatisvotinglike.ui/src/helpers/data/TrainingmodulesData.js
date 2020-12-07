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

const getAllSlidesForSelectedTrainingModule = (selectedTrainingModuleId) => new Promise((resolve, reject) => {
  console.log(`${baseUrl}/slides/${selectedTrainingModuleId}`);

  axios.get(`${baseUrl}/slides/${selectedTrainingModuleId}`)
    .then((response) => {
      const slides = response.data;
      resolve(slides);
    })
    .catch((err) => reject(err));
});

export default { getAllTrainingModules, getAllSlidesForSelectedTrainingModule };
