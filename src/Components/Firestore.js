import firebase, { firestore } from 'firebase'

const config={
    
        apiKey: "AIzaSyAenT8ivIMWDu_4b_qtPVeRCxmmSjg23hU",
        authDomain: "react-52570.firebaseapp.com",
        databaseURL: "https://react-52570.firebaseio.com",
        projectId: "react-52570",
        storageBucket: "react-52570.appspot.com",
        messagingSenderId: "628413279868"
      };

      firebase.initializeApp(config);

      export default firestore