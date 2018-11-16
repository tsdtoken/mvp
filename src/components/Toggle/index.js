import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons'
import styles from './Toggle.module.scss'

class Toggle extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      open: false
    }
  }

  toggleContent = () => {
    this.setState({
      open: !this.state.open
    })
  }

  getToggleClasses = () => {
    return (
      styles.toggle +
      ' ' +
      (this.state.open ? styles.toggleOpened : '') +
      ' ' +
      (this.props.subTitle ? styles.toggleHasSubtitle : '')
    )
  }

  render() {
    return (
      <div className={this.getToggleClasses()}>
        <div className={styles.toggleHeader} onClick={this.toggleContent}>
          <span>
            <span className={styles.toggleTitle}>{this.props.title}</span>
            {this.props.subTitle && (
              <React.Fragment>
                <br />
                {this.props.subTitle}
              </React.Fragment>
            )}
          </span>
          <span className={styles.toggleIcon}>
            {this.state.open ? (
              <FontAwesomeIcon icon={faMinus} />
            ) : (
              <FontAwesomeIcon icon={faPlus} />
            )}
          </span>
        </div>

        {this.state.open && (
          <React.Fragment>
            {this.props.nestedToggles ? (
              <React.Fragment>{this.props.children}</React.Fragment>
            ) : (
              <div className={styles.toggleContent}>{this.props.children}</div>
            )}
          </React.Fragment>
        )}
      </div>
    )
  }
}

export default Toggle
