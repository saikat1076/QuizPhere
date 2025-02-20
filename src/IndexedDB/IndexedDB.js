const DB_NAME = "QuizSphereDB";
const STORE_NAME = "quizHistory";
const DB_VERSION = 1;


const openDB = () => {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open(DB_NAME, DB_VERSION);

    request.onupgradeneeded = (event) => {
      const db = event.target.result;
      if (!db.objectStoreNames.contains(STORE_NAME)) {
        db.createObjectStore(STORE_NAME, { keyPath: "id", autoIncrement: true });
      }
    };

    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject("Error there");
  });
};


export const saveQuizResult = async (score, totalQuestions) => {
  const db = await openDB();
  const tx = db.transaction(STORE_NAME, "readwrite");
  const store = tx.objectStore(STORE_NAME);
  store.add({
    timestamp: Date.now(),
    finalScore: score,
    totalQuestions: totalQuestions,
  });
};


export const getQuizHistory = async () => {
  const db = await openDB();
  if (!db.objectStoreNames.contains(STORE_NAME)) {
    console.error("Object store not found!");
    return [];
  }
  const tx = db.transaction(STORE_NAME, "readonly");
  const store = tx.objectStore(STORE_NAME);
  return new Promise((resolve) => {
    const request = store.getAll();
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => resolve([]);
  });
};


export const clearQuizHistory = async () => {
  const db = await openDB();
  const tx = db.transaction(STORE_NAME, "readwrite");
  const store = tx.objectStore(STORE_NAME);
  store.clear();
};
