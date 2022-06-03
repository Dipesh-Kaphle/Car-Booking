import React, { useEffect } from "react"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import Home from "../../components/CarDetails"
import * as reducerToolsAction from "../../actions/reducerToolsAction"
import * as home from "../../services/home"

const CarPage = (props) => {
  const {
    actions: { reducerCleanRequest, bookCar, myBookCar, addwishList },
  } = props
  const AddWishLists = (id, callback) => {
    addwishList(id, callback)
  }

  const BookCarByparam = (formData, callback, isBook) => {
    bookCar(formData, callback, isBook)
  }
  const MyBookCars = () => {
    myBookCar()
  }
  useEffect(() => {
    return () => {
      reducerCleanRequest()
    }
  }, [reducerCleanRequest])

  return (
    <Home
      {...props}
      BookCarByparam={BookCarByparam}
      MyBookCar={MyBookCars}
      AddWishLists={AddWishLists}
    />
  )
}

/**
 * Map the state to props.
 */
const mapStateToProps = (state) => ({
  bookCarList: state.bookCarList.payload,
  bookCarListoading: state.bookCarList.loading,
})

/**
 * Map the actions to props.
 */
const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(
      Object.assign({}, reducerToolsAction, home),
      dispatch
    ),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CarPage)
