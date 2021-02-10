import * as firebase from 'firebase';

class Firebase {
    static init(){
        firebase.initializeApp({
            apiKey: "AIzaSyB8XtzwWpN68bd9VoxhrdI28VWwr6QP66c",
            authDomain: "reactnative-login-f0121.firebaseapp.com",
            projectId: "reactnative-login-f0121",
            storageBucket: "reactnative-login-f0121.appspot.com",
        })
    }
}
module.exports = Firebase