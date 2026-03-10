import { allArtisteSorted, allScenesSortedByName, AllArtisteSortedByName, ArtisteById, SceneById, allArtisteBySceneId, allArtisteBySceneName, updateArtiste } from './backend.mjs';

/* Retourne les artistes triés par ordre de date de présentation
try {
    const records = await allArtisteSorted();
    console.log(JSON.stringify(records, null, 2));
} catch (e) {
    console.error(e);
}
*/

/*Retourne les scènes par leur nom
try {
    const records = await allScenesSortedByName();
    console.log(JSON.stringify(records, null, 2));
} catch (e) {
    console.error(e);
}
*/

/* Retourne les artistes triés par leur nom
try {
    const records = await AllArtisteSortedByName();
    console.log(JSON.stringify(records, null, 2));
} catch (e) {
    console.error(e);
}
*/

/* Retourne un artiste avec son Id 
try{
    const records = await ArtisteById('tr6etdac2ryftp8');
    console.log(JSON.stringify(records, null, 2));
} catch (e) {
    console.error(e);
}
*/

/* Retourne uns scène par son ID 
try {
    const records = await SceneById('ne8sam9o09qpvm2');
    console.log(JSON.stringify(records, null, 2));
} catch (e) {
    console.error(e);
}
*/

/*
try {
    const records = await allArtisteBySceneId('lgmuvmngxqdlw34');
    console.table(records);
} catch (e) {
    console.error(e);
}
*/



try {
    const records = await allArtisteBySceneName("Secondaire");
    console.table(records);
} catch (e) {
    console.error(e);
}


/*
try{
    const data ={
        "nom_artiste": "test",
        "description": "Description du test"
    };
    const record = await updateArtiste('tr6etdac2ryftp8', data);
} catch (e) {
    console.error(e);
}
*/
