import React from 'react'
import ProfileTable from '../ProfileTable/'
import map from '../../images/map-land.png'
import styles from './LandProfile.module.scss'

const LandProfile = props => (
  <div className={styles.landProfile}>
    <h4>Land Profile</h4>
    {props.edit && <button className={styles.editButton}>Edit</button>}

    <div className="row mb-3">
      <div className="col-md-7 pt-3">
        <div className={styles.landDescriptionTitle}>Description</div>
        <div>
          <p>
            We are pleased to offer for sale this exceptional property which
            represents a significant land holding in the heart of central NSW.
          </p>
          <p>
            The property is situated on the Newell Highway. There is a total
            land area of 1000 hectares.
          </p>
          <p>
            The zoning allows for solar and/or energy storage facilities close
            to grid connection that has capacity.
          </p>
          <p>
            The opportunities as we see it are purchased by a developer ready to
            proceed with a developement or a developer looking to land bank the
            site,{' '}
          </p>
        </div>
      </div>
      <div className="col-md-5">
        <ProfileTable data={props.data} showHideRow={props.showHideRow} />
      </div>
    </div>

    <img className={styles.mapLand} src={map} alt="map land" />
  </div>
)

export default LandProfile
