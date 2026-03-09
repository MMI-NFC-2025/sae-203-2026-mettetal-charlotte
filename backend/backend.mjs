import PocketBase from 'pocketbase';
export const pb = new PocketBase('http://127.0.0.1:8090');


export async function allArtisteSorted() {
    const records = await pb.collection('Artiste').getFullList({ sort: 'date_presentation', });
    return records;
}


export async function allScenesSortedByName(){
    const records = await pb.collection('Scene').getFullList({ sort: 'nom_scene'});
    return records;
}

export async function AllArtisteSortedByName(){
    const records = await pb.collection('Artiste').getFullList({ sort: 'nom_artiste'});
    return records;
}

export async function ArtisteById(id) {
    const records = await pb.collection('Artiste').getOne(id);
    return records;
}

export async function SceneById(id) {
    const records = await pb.collection('Scene').getOne(id);
    return records;
}

export async function allArtisteBySceneIdDate(id) {
    const records = await pb.collection('Artiste').getFullList({ 
    filter: `Scene.id = '${id_scene}'`, 
    expand: 'Scene',
    sort: 'date_presentation'});
    return records;
}

export async function allArtisteBySceneNameDate(nom_scene) {
    const records = await pb.collection('Artiste').getFullList({ 
    filter: `scene.Nom = '${nom_scene}'`, 
    expand: 'Scene',
    sort: 'date_presentation' 
}); return records;
}

export async function updateArtiste(id, updatedArtiste) {
    const record = await pb.collection('Artiste').update(id, updatedArtiste);
    return record;
}