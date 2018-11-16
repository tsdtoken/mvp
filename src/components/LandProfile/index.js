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
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
          pretium vehicula metus, vel dictum augue accumsan consequat. Maecenas
          feugiat in dui eget dictum. Donec vitae erat massa. Etiam ultricies
          volutpat magna, ut tristique augue auctor at. Nunc cursus leo eget
          nunc tristique hendrerit. Proin interdum maximus facilisis. Morbi nec
          velit nec enim feugiat ornare. Quisque vitae nulla pretium quam
          commodo euismod nec ut magna. Suspendisse egestas pharetra turpis id
          pulvinar. Sed volutpat faucibus eros sit amet cursus. Sed a ex vitae
          nisl maximus fringilla. In nec dapibus leo. Vivamus iaculis
          sollicitudin lorem, nec sollicitudin justo imperdiet vel. Praesent et
          justo quis sem consectetur gravida. Nullam tincidunt mauris pulvinar,
          tempor leo ut, faucibus dui. Aliquam a mauris quam.
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
