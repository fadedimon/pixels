import { createStore } from 'redux';

import { Store } from './_types';

import { reducers } from './reducers';
import { addImage } from './actions/addImage';

// Controllers
import { createCanvasController } from './controllers/Canvas';
import { createDragAndDropController } from './controllers/dragAndDrop';
import { createFileUploaderController } from './controllers/fileUploader';
import { createKeyboardController } from './controllers/keyboard';

// Elements
const elems = {
    canvas: document.querySelector<HTMLCanvasElement>('.js-canvas'),
    file: document.querySelector<HTMLInputElement>('.js-file'),
    dropArea: document.querySelector<HTMLUListElement>('.js-drop-area'),
};

const store: Store = createStore(reducers);

store.subscribe(() => {
    console.log('Store update: ', store.getState());
});

createCanvasController({ store, elem: elems.canvas });
createDragAndDropController({ store, addImage, dropAreaElem: elems.dropArea });
createFileUploaderController({ store, addImage, fileElem: elems.file });
createKeyboardController({ store });
