import {
  query,
  getFirestore,
  collection,
  getDocs,
  orderBy,
} from "firebase/firestore/lite";
import { IoReturnUpForward } from "react-icons/io5";

import { firebaseApp } from "../../firebase";

const db = getFirestore(firebaseApp);

export const getZrcalo = async () => {
  const emptyList = [];
  const zrcaloQuery = query(
    collection(db, "radioShow/01zrcalo/showEntity"),
    orderBy("stamp", "desc")
  );
  const zrcaloSnapshot = await getDocs(zrcaloQuery);
  const zrcaloGetList = zrcaloSnapshot.docs.map((doc) => doc.data());
  emptyList.push(zrcaloGetList);

  return new Promise(emptyList);
};

//FORUM
const getForum = async () => {
  const forumQuery = query(
    collection(db, "radioShow/09forum/showEntity"),
    orderBy("stamp", "desc")
  );
  const forumSnapshot = await getDocs(forumQuery);
  const forumGetList = forumSnapshot.docs.map((doc) => doc.data());

  IoReturnUpForward({
    showTitle: "RTG Forum",
    showList: forumGetList,
  });
};

//Strunica
const getStrunica = async () => {
  const strunicaQuery = query(
    collection(db, "radioShow/02strunica/showEntity"),
    orderBy("stamp", "desc")
  );
  const strunicaSnapshot = await getDocs(strunicaQuery);
  const strunicaGetList = strunicaSnapshot.docs.map((doc) => doc.data());

  return {
    showTitle: "RTG Forum",
    showList: strunicaGetList,
  };
};
