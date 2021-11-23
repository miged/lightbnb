const { Pool } = require('pg');
const [ _, __, cohort, maxResults ] = process.argv;

const pool = new Pool({
  user: 'labber',
  password: 'labber',
  host: 'localhost',
  database: 'bootcampx'
});

const query = `
  SELECT students.*, cohorts.name as cohort
  FROM students
  JOIN cohorts ON cohort_id = cohorts.id
  WHERE cohorts.name LIKE '%${cohort}%'
  LIMIT ${maxResults || 5};
`;

pool.query(query)
  .then(res => {
    res.rows.forEach(user => {
      console.log(`${user.name} has an id of ${user.id} and was in the ${user.cohort} cohort`);
    });
  })
  .catch(err => console.error('query error', err.stack));
