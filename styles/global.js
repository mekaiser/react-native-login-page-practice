export const global_constants = {
  colors: {
    background: '#131133',
    placeholder_color: '#55657C',
  },
  border: {
    borderRadius: 1,
    borderColor: 'tomato',
  },
  typography: {
    fontSize: 15,
  },
};

export default {
  container: {
    padding: 15,
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#131133',
    position: 'relative',
  },
  background: {
    backgroundColor: '#131133',
  },
  typography: {
    title: {
      fontFamily: 'Poppins-SemiBold',
      fontSize: 30,
      color: 'white',
    },
    input: {},
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#3D84EA',
    height: 50,
    marginTop: 10,
    padding: 10,
    borderRadius: 8,
  },
  button_text: {
    color: 'white',
    fontFamily: 'Poppins-SemiBold',
    fontSize: 17,
  },
  input_box_container: {
    backgroundColor: '#1B3466',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 10,
    paddingLeft: 12,
    paddingRight: 12,
    paddingTop: 2,
    paddingBottom: 2,
    borderRadius: 8,
  },
  
  input_placeholder: {
    common: {
      fontFamily: 'Poppins-Medium',
      fontSize: 15,
    },
    default: {
      color: '#606F87'
    },
    active: {
      color: 'white'
    }
  },

  input_box: {
      fontSize: 15,
      flex: 1,
      borderWidth: 0,
      color: 'white',
  },

  input: {
    container: {},
    placeholder: {
      ...global_constants.typography.title,
    },
    mainInput: {},
  },

  activity_indicator: {
    container: {
      position: 'absolute',
      bottom: 100,
      left: "50%"
    }
  }
};
