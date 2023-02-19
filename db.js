/**
 * Not  Real DB
 * A "fake" database for Node.js that stores data in local JSON files, for
 * testing and sample applications
 * 
 * Usage
 * Create a DataStore instance specifying in which folder to store the data,
 * then create a collections for each object type you want to store
 * 
 * We need to create a datastore that loads the data folder contents. In this 
 * case, we need collection variables, students and colleges. Whenever the 
 * application needs data, it makes use of these collection variables.
 */
const { DataStore } = require('notarealdb');
const store = new DataStore('./data');
module.exports = {
    students: store.collection('students'),
    colleges: store.collection('colleges')
};