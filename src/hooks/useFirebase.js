import firebaseInitialization from "../Firebase/firebase.init";
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword, sendEmailVerification, sendPasswordResetEmail, updateProfile } from "firebase/auth";
import { useState, useEffect } from 'react';

firebaseInitialization();


const useFirebase = () => {
    const [user, setUser] = useState({});
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState(false);

    const auth = getAuth();

    const signInWithGoogle = () => {
        const googleProvider = new GoogleAuthProvider();
        signInWithPopup(auth, googleProvider)
            .then(result => {
                setUser(result.user);
            })
            .catch(error => {
                setError(error.message);
            })
        setError('');
    }

    const handleNameField = (e) => {
        setName(e.target.value)
    }

    const handleEmailField = (e) => {
        setEmail(e.target.value)
    }

    const handlePasswordField = (e) => {
        setPassword(e.target.value)
    }
    const handleConfirmPasswordField = (e) => {
        setConfirmPassword(e.target.value)
    }

    const verifyEmail = () => {
        sendEmailVerification(auth.currentUser)
            .then(result => {

            });
    }

    const setUserName = () => {
        updateProfile(auth.currentUser, { displayName: name })
            .then(() => {

            })
            .catch(error => {
                setError(error.message);
            })
    }

    const handlePasswordReset = (e) => {
        e.preventDefault();
        sendPasswordResetEmail(auth, email)
            .then(() => {
                setSuccess(true);
            })
            .catch(error => {
                setError(error.message);
            })
    }

    const handleRegistration = (e) => {
        e.preventDefault();
        if (password === confirmPassword) {
            if (password.length < 6) {
                setError('Password must be atleast 6 character long.');
                setSuccess(false);
                return;
            }
            if (!/(?=.*[0-9])/.test(password)) {
                setError('Password must have atleast one number.');
                setSuccess(false);
                return;
            }
            if (!/(?=.*[!@#$%^&*])/.test(password)) {
                setError('Password must have atleast one special character.');
                setSuccess(false);
                return;
            }

            createUserWithEmailAndPassword(auth, email, password)
                .then(result => {
                    setUser(result.user);
                    verifyEmail();
                    setUserName();
                })
                .catch(error => {
                    setError(error.message);
                });
            setError('');
            setSuccess(true);
        }
        else {
            setError('Please confirm your password correctly.');
            setSuccess(false);
        }
    }

    const handleLogin = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                setUser(result.user);
                console.log(user)
            })
            .catch(error => {
                setError(error.message);
            })
        setError('');
    }

    const logOut = () => {
        signOut(auth)
            .then(() => {
                setUser({})
            })
    }

    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user)
            }
            else {
                setUser({})
            }
        });
        return unsubscribed;
    }, [])

    return {
        user,
        signInWithGoogle,
        logOut,
        handleNameField,
        handleEmailField,
        handlePasswordField,
        handleConfirmPasswordField,
        handleRegistration,
        handleLogin,
        handlePasswordReset,
        error,
        success
    }
}

export default useFirebase;