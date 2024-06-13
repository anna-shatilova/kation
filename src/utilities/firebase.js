import firebase from 'firebase/compat/app'; 
import 'firebase/compat/database'; 



        export const firebaseConfig = {
            apiKey: "firebase-adminsdk-hmv33@kation-315f9.iam.gserviceaccount.com",
            authDomain: "kation-315f9.firebaseapp.com",
            databaseURL: "https://kation-315f9-default-rtdb.europe-west1.firebasedatabase.app",
            projectId: "kation-315f9",
            storageBucket: "gs://kation-315f9.appspot.com",
            messagingSenderId: "107426460316499498464",
            privateKey: "-----BEGIN PRIVATE KEY-----\nMIIEugIBADANBgkqhkiG9w0BAQEFAASCBKQwggSgAgEAAoIBAQC2QpzWvR1TAw/q\nWA5ycD9P8YzJomzYafz2y/9muLbNz2kN7VzNu4pi2gfqI96SzH+UIzWt3F4brCDh\niWdiF98T38uoy3GnJq8UTZXLwpMuTAO88LEfgSQyofrzBGUsmRNuVz0aXh9fFBSz\nAaT8Yn7FQgdAggnAQZkwqHY8iX26ONnFaXG1+dWY7h9VbmadcdKLBuHl0YqprG0U\ntUBkVG0QG1VaXnIQ6jNItUCp3XdD9Q3wy232BNDW/+0nV+E5krnjx/aTHcm5AlYb\nQB+hI57c7GWYYNvLY5UXIQfUsmUtsLfGa/W6mY7DCihELL/AGyr8skjvOtLIzQU5\ny2uJ7Ae9AgMBAAECgf8yZTjUJ5sGa1JWsLlN603fcY9p6EieILBRjV+19TiWr9VK\nO2ntwiRKw0farMc5q3Z2tmozll/c2Tti2D/0qMmqfklR4u8KEgOgPhzR3w2KGwzt\njMSRlhF+gN2r5sIS7kCoCwl+wPV9+UZSOMbBS59UNNtexAPJpTU2dfCEqBIJWREq\nSCRMktTnVikWqgczgrg/CMXCJEgDGaVv98We89gCo11cz7e0RrhpzMSInjQSBaZd\nHfmNcK5CxKExrcZdn3fLhtNwqKZqcmtYTflQcgL0mNtmEnnqnLQ8hkNEu8Xz4dfQ\nQnib+ddGE/S5naGluBDr/PdDLQHrx1MF7eI5G+ECgYEA/1pafvtd6M1LJQsAyqL/\npc8h/nZD9w7Jwm0OPMNoP2VTIu/ijCQwURYiNVdvpyzQV+HyqCM2f4y4rQyN9mSQ\nV5hiaxpspMYq+fYTaIgCq5CKRjFiIAn5z1d51yVowjesNyTwZNmBqCyDeQy2DxSz\n2oSyEhNaI/QxYpVm/0PZeVECgYEAtrjYG0Bq4w++IMsw/2dRp0jLw2DhY4RSuT5c\nHixhlegSA2X45VoFEhPCskkGqKkOeT96z0jo20invk3a0iFTlTkTN+T8P82MyJ6N\nd6Mbo5OL396Y45QlI406cDTa7Csv3W/Fc2M441wuBfOF7wH3dnMnoKQVcDlabNo9\nfpShTK0CgYAvDEu+N7w+x4x/374el9e4iih+RPYS0CO2cfd8lJhhjd66gi5gmc5Z\nMlXNNDX7PFOKzbOy7QH+kEP6hmSlsDO0H/yKNU0tMuH6Oi+rQ9wSFkiT1Ed7Fbt0\nS27EiDz8A9v0MRclzbmI7eKva/sjXjIhIe/ZSr2CAF0VB+f5QlwQcQKBgD68vMau\nmYSY1SkhWxN2gBy16/CLhRfMSTL9bFeX2XHFGto72ve0ruUED+dzF2w1j5il6R7e\n48TW73Fx/d4EP1SPIkAgyVOG2f3QIrafNFA3yuD05v3M0euhBB2eqERKl8aqJ9t0\niAXYkpzMfoIP5M2wwDxx2kKMDrYtQMwDcFaJAoGAZXauWxdNA5Av3IEMZE2O4lGz\n/02wXBOAAn/KbH/beZsbTdI+YkYA5FHbknmw13YFXv/Y/7OdfqdFiG2C4NlxWQUy\nyUqSklJH/kteie64O0ugPU4YuNWhlvhAYsATUj1pLK+8Gl8MKzn/3c+Yq97NeFgI\nWV2aSmkb6ABWZZVIXT8=\n-----END PRIVATE KEY-----\n",
            clientEmail: "firebase-adminsdk-hmv33@kation-315f9.iam.gserviceaccount.com",
            authUri: "https://accounts.google.com/o/oauth2/auth",
            tokenUri: "https://oauth2.googleapis.com/token",
            authProviderCertUrl: "https://www.googleapis.com/oauth2/v1/certs",
            clientCertUrl: "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-hmv33%40kation-315f9.iam.gserviceaccount.com",
            universeDomain: "googleapis.com"
          };


          const firebaseApp = firebase.initializeApp(firebaseConfig);
          export const db = firebaseApp.database();
