const schools = (schools = [], action) => {
  switch (action.type) {
    case 'FETCH_ALL':
      return action.payload;
    case 'CREATE':
      return [...schools, action.payload];
    case 'UPDATE':
      return schools.map((school) => (school._id === action.payload._id ? action.payload : school));
    default:
      return schools;
  }
}

export default schools;