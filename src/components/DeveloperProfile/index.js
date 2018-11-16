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
      <div className="col-md-5 pt-3">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
        pretium vehicula metus, vel dictum augue accumsan consequat. Maecenas
        feugiat in dui eget dictum. Donec vitae erat massa. Etiam ultricies
        volutpat magna, ut tristique augue auctor at. Nunc cursus leo eget nunc
        tristique hendrerit. Proin interdum maximus facilisis. Morbi nec velit
        nec enim feugiat ornare. Quisque vitae nulla pretium quam commodo
        euismod nec ut magna. Suspendisse egestas pharetra turpis id pulvinar.
        Sed volutpat faucibus eros sit amet cursus. Sed a ex vitae nisl maximus
        fringilla. In nec dapibus leo. Vivamus iaculis sollicitudin lorem, nec
        sollicitudin justo imperdiet vel. Praesent et justo quis sem consectetur
        gravida. Nullam tincidunt mauris pulvinar, tempor leo ut, faucibus dui.
        Aliquam a mauris quam.
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
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
          pretium vehicula metus, vel dictum augue accumsan consequat. Maecenas
          feugiat in dui eget dictum. Donec vitae erat massa. Etiam ultricies
          volutpat magna, ut tristique augue auctor at. Nunc cursus leo eget
          nunc tristique hendrerit. Proin interdum maximus facilisis. Morbi nec
          velit nec enim feugiat ornare. Quisque vitae nulla pretium quam
          commodo euismod nec ut magna. Suspendisse egestas pharetra turpis id
          pulvinar.
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
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
          pretium vehicula metus, vel dictum augue accumsan consequat. Maecenas
          feugiat in dui eget dictum. Donec vitae erat massa. Etiam ultricies
          volutpat magna, ut tristique augue auctor at. Nunc cursus leo eget
          nunc tristique hendrerit. Proin interdum maximus facilisis. Morbi nec
          velit nec enim feugiat ornare. Quisque vitae nulla pretium quam
          commodo euismod nec ut magna. Suspendisse egestas pharetra turpis id
          pulvinar.
        </div>
      </div>
    </div>
  </div>
)

export default DeveloperProfile
