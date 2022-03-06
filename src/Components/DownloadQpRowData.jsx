import { useState, useEffect } from 'react';
import { FaDownload } from 'react-icons/fa';
import { db } from '../utils/firebase-config';
import { getDoc, doc } from 'firebase/firestore';

function DownloadQpRowData({ upload, index }) {
  //   const [loading, setLoading] = useState(true);
  const [userName, setUserName] = useState(null);
  let slno = 1;

  useEffect(() => {
    const fetchSelectedUsers = async () => {
      const docRef = doc(db, 'users', upload.userRef);
      const docSnap = await getDoc(docRef);

      setUserName(
        docSnap._document.data.value.mapValue.fields.name.stringValue
      );

      //   setLoading(false);
    };

    fetchSelectedUsers();
  }, [upload.userRef]);

  return (
    <tr className="odd:bg-gray-200 even:bg-white text-sm font-medium whitespace-nowrap ">
      <td className="py-3 px-6">{index + 1}</td>
      <td className="py-3 px-6">{userName}</td>
      <td className="py-3 px-6">{upload.Type}</td>
      <td className="py-3 px-6">{upload.Year}</td>
      <td className="py-3 px-6 float-right">
        <FaDownload
          size={15}
          className="text-blue-600 cursor-pointer"
          onClick={() => window.open(upload.downloadUrl, '_blank')}
        />
      </td>
    </tr>
  );
}

export default DownloadQpRowData;
