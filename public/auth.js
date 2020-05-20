if (typeof firebase === 'undefined') throw new Error('hosting/init-error: Firebase SDK not detected. You must include it before /__/firebase/init.js');
firebase.initializeApp({
    apiKey: "AIzaSyAAilYSZ5Jq2HErSicL3x2AgfoOgF4qsTg",
    authDomain: "probashi-45495.firebaseapp.com",
    databaseURL: "https://probashi-45495.firebaseio.com",
    projectId: "probashi-45495",
    storageBucket: "probashi-45495.appspot.com",
    messagingSenderId: "882040996026",
    appId: "1:882040996026:web:af923e111869fd76f14283",
    measurementId: "G-V4C7N2HXMP"
});

function toJSON(value) {
    return JSON.stringify(value, undefined, 4)
}

document.addEventListener('DOMContentLoaded', function () {

    const res = document.getElementById('res')
    const logoutBtn = document.getElementById('logout')
    var ui = new firebaseui.auth.AuthUI(firebase.auth())
    ui.start('#firebaseui-auth-container', {
        callbacks: {
            signInSuccessWithAuthResult: function (authResult) {
                document.getElementById('res').innerHTML = toJSON(authResult.user)
                logoutBtn.style.display = 'block'
                return false
            }
        },

        signInOptions: [
            {
                provider: firebase.auth.PhoneAuthProvider.PROVIDER_ID,
                defaultCountry: 'BD'
            },
            firebase.auth.FacebookAuthProvider.PROVIDER_ID,
            firebase.auth.GoogleAuthProvider.PROVIDER_ID,
            firebase.auth.EmailAuthProvider.PROVIDER_ID,
        ]
    })

    logoutBtn.addEventListener('click', function () {
        if (confirm('Sure to logout?')) {
            firebase.auth().signOut()
            window.location.reload()
        }
    })
})