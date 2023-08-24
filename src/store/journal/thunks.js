
import { doc, collection, setDoc, deleteDoc } from 'firebase/firestore/lite';
import { FirebaseDB } from '../../firebase/config';
import { 
  addNewEmptyNote, 
  setActiveNote, 
  savingNewNote, 
  setNotes, 
  setSaving, 
  updateNotes, 
  setPhotosToActiveNote, 
  deleteNoteById
} from './journalSlice';
import { loadNotes } from '../../helpers/loadNotes';
import { fileUpload } from '../../helpers/fileUpload';

export const startNewNote = () => {

  return async(dispatch, getState) => {

    dispatch(savingNewNote());

    const { uid } = getState().auth;

    //uid
    
    const newNote = {
      title: '',
      body: '',
      date: new Date().getTime(),
    }

    const newDoc = doc( collection( FirebaseDB, `/${ uid }/journal/notes` ));
    await setDoc( newDoc, newNote );

    newNote.id = newDoc.id;

    //!dispatch
    dispatch(
      addNewEmptyNote(
        newNote
      )
    );
    dispatch(
      setActiveNote(
        newNote
      )
    );
    //dispatch newNote
    //dispatch activarNote

  }
  
};

export const startLoadingNotes = (/*uid = '' si queres nomas porque ya sabe*/) => {
  return async(dispatch, getState) => {

    const {uid} = getState().auth;

    if(!uid) throw new Error('El UID del usuario no existe');

    const notes = await loadNotes(uid);

    dispatch(setNotes(notes));
  } 
};

export const startSavingNote = () => {
  return async(dispatch, getState) => {

    dispatch(setSaving());
    
    const {uid} = getState().auth;
    const {active:note} = getState().journal;

    const noteToFirestore = { ...note };
    delete noteToFirestore.id;

    const docRef = doc( FirebaseDB, `${ uid }/journal/notes/${ note.id }` );  
    await setDoc( docRef, noteToFirestore, { merge: true } );

    dispatch( updateNotes( note ) );


  }
};

export const startUploadingFiles = ( files = [ ] ) => {

  return async( dispatch ) => {

    dispatch(setSaving());

    // await fileUpload( files[0] );

    const fileUploadPromises = [];

    for( const file of files) {
      fileUploadPromises.push( fileUpload( file ));
    }

    const photosUrls = await Promise.all( fileUploadPromises );
    console.log( photosUrls );

    dispatch( setPhotosToActiveNote( photosUrls ));

  }

}

export const startDeletingNote = () => {

  return async( dispatch, getState) => {

    const { uid } = getState().auth;
    const { active: note } = getState().journal;

    const docRef = doc(FirebaseDB, `${ uid }/journal/notes/${ note.id }`)
    await deleteDoc( docRef );

    dispatch( deleteNoteById(note.id) );
  
  }

}


