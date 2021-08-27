<script>
    import { firebaseConfig } from './Firebase'
    import { initializeApp } from 'firebase/app'
    import { getFirestore, collection, onSnapshot, getDocs, doc } from 'firebase/firestore'
    
    const firebase = initializeApp( firebaseConfig )

    const db = getFirestore()

    const ghCollection = collection( db, 'Github' )

    let githubData = {}

    getDocs( collection( db, 'Github' ) ).then( querySnapshot => {

        querySnapshot.forEach( async doc => {

            const getDataDoc = ( query, name ) => {
                let data = {}
                query.forEach( doc => {
                    const dataDoc = doc.data()
                    const newd = [];
                    newd[name] = dataDoc
                    data = { ...data, ...newd }
                })
                return data
            }

            const result = await Promise.all([
                await getDocs( collection( db, 'Github/' + doc.id + '/Projects' ) ).then( q => getDataDoc(q, 'projects' ) ), 
                await getDocs( collection( db, 'Github/' + doc.id + '/Commits' ) ).then( q => getDataDoc( q, 'commits' ) )
            ]).then( docData => {
                docData.map( doc => { 
                    githubData = { ...githubData, ...doc }
                })
            })
        })
    })

</script>

<div>
    <span>
        Total Commits :  { console.log( githubData ) }
    </span>
</div>