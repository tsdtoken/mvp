import React from 'react'
import ProfileTable from '../ProfileTable'
import devCompany from '../../images/dev-com.png'
import dev1 from '../../images/dev-1.png'
import dev2 from '../../images/dev-2.png'
import styles from './DeveloperProfile.module.scss'

const DeveloperProfile = props => (
  <div className={styles.developerProfile}>
    <h4>Developer Profile</h4>
    {props.edit && <button className={styles.editButton}>Edit</button>}

    <div className="row mb-5">
      <div className={`col-md-2 ${styles.companyImageWrapper}`}>
        <img src={devCompany} alt="dev company" />
      </div>
      <div className="col-md-5">
        <p>
          Energy Matters sources only products that have been tested in
          Australia’s harsh conditions.
        </p>

        <p>
          With expertise in both grid connect and off grid power, Energy Matters
          is able to provide flexible clean energy solutions to fit almost all
          needs.
        </p>

        <p>
          Energy Matters is proud of its commitment to ongoing innovation and
          product development. Its SunLock solar mounting system, designed and
          manufactured locally, has been used to mount over 75MW of solar panels
          to roofs across the nation.
        </p>
      </div>
      <div className="col-md-5">
        <ProfileTable data={props.data} />
      </div>
    </div>

    <div className={`${styles.teamTitle} mb-2`}>Team</div>

    <div className="row mb-5">
      <div className="col-md-2 text-center">
        <img src={dev1} alt="dev" />
      </div>

      <div className="col-md-10">
        <div className={styles.dev}>
          <h4 className={styles.devName}>Amanda Smith</h4>
          Amanda became the company’s Managing Director in late 2015. Coming
          from an engineering and commerce background, Amanda has amassed more
          than 8 years of experience in solar and 15 years in new technology and
          start-ups.
          <br />
          With previous working experience at one of the world’s largest solar
          panel manufacturers, Amanda has led teams that have delivered some of
          the largest and most iconic solar projects in Australia.
        </div>
      </div>
    </div>

    <div className="row">
      <div className="col-md-2 text-center">
        <img src={dev2} alt="dev" />
      </div>

      <div className="col-md-10">
        <div className={styles.dev}>
          <h4 className={styles.devName}>Craig Stone</h4>
          Craig had worked in direct sales for more than 20 years before joining
          Energy Matters. Throughout his career, he has managed call centers and
          face-to-face sales teams in the UK and Australia. This has seen him
          work with leading brands across a wide range of industries; including
          finance, insurance, utilities, telecommunications and media.
        </div>
      </div>
    </div>
  </div>
)

export default DeveloperProfile
