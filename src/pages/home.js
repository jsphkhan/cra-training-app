import { useEffect, useState } from 'react';

//import heavy vendor libs
import _ from 'lodash';

import { Link } from 'react-router-dom';
import './home.css';

export default function HomePage() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    // make call
    async function fetchData() {
      try {
        const response = await fetch('https://reqres.in/api/users?per_page=12');
        const data = await response.json();
        const users = _.get(data, 'data', {});
        // console.log(users);
        setUsers([...users, ...users]); // duplicate data
      } catch (err) {
        console.log('Error when making call: ', err);
      }
    }
    fetchData();
  }, []);

  return (
    <>
      <div className='homecontainer'>
        <h1>Home Page (CSR)</h1>
        <Link to='/details'>Details</Link>
      </div>
      {/* <div className='hero'> */}
        <img className='hero' src='/images/mob-banner-bg.png' alt='hero' />
      {/* </div> */}
      <div className='homecontainer'>
        <ul className='listcontainer'>
          {users.map((user) => {
            const id = _.get(user, 'id');
            const name = `${_.get(user, 'first_name', '')} ${_.get(
              user,
              'last_name',
              ''
            )}`;
            const avatar = _.get(user, 'avatar', '');
            return (
              <li key={id}>
                <div className='img'>
                  <img src={avatar} width={80} height={80} alt='user' />
                </div>
                <div className='name'>
                  <span>{name}</span>
                  <p>
                    Websites often use third-party scripts to include different
                    types of functionality into their site, such as analytics,
                    ads, customer support widgets, and consent management.
                  </p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}
