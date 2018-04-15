import { connect } from 'react-redux'
import Hotel from './../components/Hotel'

const mapStateToProps = (state, ownProps) => {
  return {

  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {

  }
}

const hotelContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Hotel)

export default hotelContainer
