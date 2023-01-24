// Realm - local database
// Atlas - Online database
// Atlas Device Sync - Sincronization
/*  import { realmContext } from './RealmContex';
import { useUser } from '@realm/react';

const {useRealm, useQuery} = realmContext;

const realm = useRealm();
const items = useQuery(Item).sorted('_id');
const user = useUser();

// In App.tsx, 
//<AppProvider id={appId}>
//<UserProvider fallback={WelcomeView}>

import {useApp} from '@realm/react';
import { useCallback } from 'react';
import { SignIn } from '@screens/authScreens/SignIn';

const app = useApp();

function onPressSignUp = useCallback(async () => {
    try {
        await app.emailPasswordAuth.registerUser({email, password});
        await SignIn();
    } catch (error) {
        
    }, [signIn, app, email, password]);
})

function onPresssignIn = useCallback(async () => {
    try {
        await signIn()
    } catch (error) {
        
    }
}, [signin]);

const signIn = useCallback(async () => {
    const creds = Realm.Credentials.emailPassword(email, password);
    await app.login(creds);
}, [app, email, password]);

// RealmContext.ts
import {createRealmContext} from '@realm/react';
import {Item} from './ItemSchema';
import { isSchema } from 'yup';

export const realmContext = createRealmContext({
    schema: {Item},
});

// In app.tsx

const App = () = {
    return (
        <>
        <RealmProvider
        sync={{
            flexible: true,
            onError: (error) => {
                console.log(error);
            }, 
        }}
        fallback={loadingIndicator}
        >
    )
}
 */