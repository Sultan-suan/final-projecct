import React from 'react';
import s from './Registration.module.css'

const Registration = () => {
    return (
        <div className={s.wrapper}>
          <div>
              <h4>Sign in</h4>
          </div>
            <div>
                <input/>
                <input/>
            </div>
            <button className={s.button}> Sign in</button>

        </div>
    );
};

export default Registration;