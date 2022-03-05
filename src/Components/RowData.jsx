import { FaDownload } from 'react-icons/fa';

function RowData({ upload }) {
  return (
    <tr className="odd:bg-gray-200 even:bg-white text-sm font-medium whitespace-nowrap ">
      <td className="py-3 px-6">{upload.Subject}</td>
      <td className="py-3 px-6">{upload.Branch}</td>
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

export default RowData;
