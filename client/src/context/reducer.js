const reducer = (state, action) => {
    switch (action.type) {
      case 'ADD_CAB':
      const { name_cab, regNo, color, url_cab, price } = action.payload;
      const newCab = { name_cab, regNo, color, url_cab, price };
      const updatedCab = [...state.cab, newCab];
      localStorage.setItem('cab', JSON.stringify(updatedCab));
      return { ...state, cab: updatedCab };

      case 'ADD_DRIVER':
      const { name_driver, idNo, phNo, url_driver, email } = action.payload;
      const newDriver = { name_driver, idNo, phNo, url_driver, email };
      const updatedDriver = [...state.driver, newDriver];
      localStorage.setItem('driver', JSON.stringify(updatedDriver));
      return { ...state, driver: updatedDriver};


      default:
        throw new Error('No matched action!');
    }
  };

  export default reducer;