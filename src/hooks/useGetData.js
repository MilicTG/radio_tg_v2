import React from "react";
import firebase from "firebase";

export const useGetData = () => {
  const [zrcaloShow, setZrcaloShow] = React.useState([]);
  const db = firebase.firestore();
  React.useEffect(() => {
    db.collection("radioShow/01zrcalo/showEntity")
      .get()
      .then((querySnapshot) => {
        let arr = [];
        querySnapshot.docs.map((doc) =>
          arr.push({ id: doc.id, value: doc.data() })
        );
        setZrcaloShow(arr);
      });
  }, [db]);
  return [zrcaloShow];
};

// const getZrcalo = async (db) => {
//   const zrcaloCol = collection(db, "radioShow/01zrcalo/showEntity");
//   const zrcloSnapshot = await getDocs(zrcaloCol)
//     .orderBy("stamp", "desc")
//     .get();
//   const zrcaloList = zrcloSnapshot.docs.map((doc) => doc.data());
//   setZrcaloShow({
//     showTitle: "U dnevnom zrcalu",
//     showList: zrcaloList,
//   });
//   console.log(zrcaloList);
// };
