import PocketBase from 'pocketbase';
export const pb = new PocketBase('http://127.0.0.1:8090');

export async function getImageUrl(record, recordImage) {
    return pb.files.getURL(record, recordImage);
}

export async function allArtiste(){
    try{
        let Artiste = await pb.collection('Artiste').getFullList();
        return Artiste;
    }catch (error){
        console.error("error allArtiste", error);
        return null;
    }
}

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

export async function allArtisteBySceneId(id) {
    const events = await pb.collection('Artiste').getFullList({
        filter: `scene.id = '${id}'`,
        sort: 'date_presentation',
        expand: 'scene'
    });
    return events;
}

export async function allArtisteBySceneName(nom_scene) {
    const events = await pb.collection('Artiste').getFullList({
        filter: `scene.nom_scene = "${nom_scene}"`,
        sort: 'date_presentation',
        expand: 'scene'
    });
    return events;
}

export async function updateArtiste(id, updatedArtiste) {
    const record = await pb.collection('Artiste').update(id, updatedArtiste);
    return record;
}