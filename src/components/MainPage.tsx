import React, { useEffect } from "react";
import { RootState } from "../types/stateType";
import { connect } from 'react-redux';

const MainPage = ({

}: any) => {


  useEffect(() => {

  }, [])

  return (
    <div>

    </div>
  )
}


const mapStateToProps = (state: RootState) => ({
});

const mapDispatchToProps = ({
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainPage);
